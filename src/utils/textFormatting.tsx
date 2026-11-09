import React from 'react';

/**
 * Renderiza texto inline com suporte seguro e determinístico a:
 * - Sublinhados: <u>texto</u>
 * - Negrito: **texto**
 * - Itálico: *texto*
 * - Lacunas de edital: ________________ (3 ou mais underscores)
 * 
 * Totalmente imune a XSS pois não utiliza dangerouslySetInnerHTML.
 */
export function renderFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  // Tokeniza marcações conhecidas preservando a ordem
  const tokenRegex = /(<u>[\s\S]*?<\/u>|\*\*[\s\S]*?\*\*|\*[^\s\*][\s\S]*?\*|_{3,})/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Sublinhado <u>...</u>
    if (part.startsWith('<u>') && part.endsWith('</u>')) {
      const inner = part.slice(3, -4);
      return (
        <u
          key={idx}
          className="underline decoration-indigo-400 font-semibold decoration-2 underline-offset-4"
        >
          {inner}
        </u>
      );
    }

    // Negrito **...**
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} className="font-bold text-white">
          {inner}
        </strong>
      );
    }

    // Itálico *...*
    if (part.startsWith('*') && part.endsWith('*')) {
      const inner = part.slice(1, -1);
      return (
        <em key={idx} className="italic text-slate-200">
          {inner}
        </em>
      );
    }

    // Lacuna de concurso (3 ou mais _)
    if (/^_{3,}$/.test(part)) {
      return (
        <span
          key={idx}
          className="lacuna-blank inline-block px-2.5 py-0.5 mx-1 border-b-2 border-indigo-400 font-mono text-xs bg-slate-800/60 rounded text-indigo-300 shadow-inner align-baseline"
          title="Lacuna a ser preenchida"
        >
          ______
        </span>
      );
    }

    // Texto puro (seguro)
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

/**
 * Renderiza blocos de conteúdo de questões:
 * - Parágrafos com quebras de linha preservadas
 * - Citações / Textos de apoio em bloco (> [Texto])
 * - Tabelas Markdown GFM (| col1 | col2 |)
 * - Imagens locais e externas com lazy loading
 */
export function renderMarkdownContent(content: string): React.ReactNode {
  if (!content) return null;

  const blocks = content.split(/\n\n+/);

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // 1. Imagem Markdown Isolada: ![alt](url)
    const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      return (
        <div key={idx} className="my-3 flex justify-center">
          <img
            src={imgMatch[2]}
            alt={imgMatch[1] || 'Imagem da questão'}
            className="max-w-full rounded-xl border border-slate-700/80 shadow-lg bg-slate-900 object-contain"
            loading="lazy"
          />
        </div>
      );
    }

    // 2. Citação em Bloco (> [Texto 1] ou citações longas)
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed
        .split('\n')
        .map((line) => line.replace(/^>\s?/, ''))
        .join('\n')
        .trim();

      return (
        <blockquote
          key={idx}
          className="my-3 p-3.5 bg-slate-950/70 border-l-4 border-indigo-500 rounded-r-xl text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-inner"
        >
          {renderFormattedText(quoteText)}
        </blockquote>
      );
    }

    // 3. Tabela Markdown GFM: | col1 | col2 |
    if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
      const rows = trimmed.split('\n').filter((r) => r.trim().startsWith('|'));
      if (rows.length >= 2) {
        const headerCols = rows[0]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());
        const bodyRows = rows
          .slice(2)
          .map((r) =>
            r
              .split('|')
              .slice(1, -1)
              .map((c) => c.trim())
          );

        return (
          <div
            key={idx}
            className="overflow-x-auto my-3 rounded-xl border border-slate-800 bg-slate-950/60 shadow-inner"
          >
            <table className="w-full text-xs text-left text-slate-200">
              <thead className="bg-slate-900 border-b border-slate-800 text-indigo-300 font-bold">
                <tr>
                  {headerCols.map((col, cIdx) => (
                    <th
                      key={cIdx}
                      className="px-3 py-2 border-r border-slate-800/80 last:border-r-0"
                    >
                      {renderFormattedText(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="px-3 py-2 border-r border-slate-800/40 last:border-r-0 font-mono text-[11px] sm:text-xs"
                      >
                        {renderFormattedText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // 4. Parágrafo com possíveis imagens inline
    if (trimmed.includes('![') && trimmed.includes('](')) {
      const parts = trimmed.split(/(!\[.*?\]\(.*?\))/g);
      return (
        <div
          key={idx}
          className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 my-2"
        >
          {parts.map((part, pIdx) => {
            const m = part.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (m) {
              return (
                <div key={pIdx} className="my-2 flex justify-center">
                  <img
                    src={m[2]}
                    alt={m[1] || 'Recurso da questão'}
                    className="max-w-full rounded-xl border border-slate-700/80 shadow-md bg-slate-900 object-contain"
                    loading="lazy"
                  />
                </div>
              );
            }
            return (
              <p
                key={pIdx}
                className="text-slate-100 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal"
              >
                {renderFormattedText(part.trim())}
              </p>
            );
          })}
        </div>
      );
    }

    // 5. Parágrafo de texto normal com formatação inline
    return (
      <div
        key={idx}
        className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 my-2"
      >
        <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
          {renderFormattedText(trimmed)}
        </p>
      </div>
    );
  });
}
