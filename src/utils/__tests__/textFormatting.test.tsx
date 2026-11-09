import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { renderFormattedText, renderMarkdownContent } from '../textFormatting';

describe('textFormatting (P0.3)', () => {
  it('deve renderizar tags <u> sublinhadas com estilo acessível e seguro', () => {
    const raw = 'O vocábulo <u>mesmo</u> e outro <u>mesmo</u> no texto.';
    const { container } = render(<div>{renderFormattedText(raw)}</div>);

    const underlines = container.querySelectorAll('u');
    expect(underlines.length).toBe(2);
    expect(underlines[0].textContent).toBe('mesmo');
    expect(underlines[1].textContent).toBe('mesmo');
  });

  it('deve renderizar negrito (**texto**) e itálico (*texto*)', () => {
    const raw = 'Texto com **negrito importante** e *itálico sutil*.';
    const { container } = render(<div>{renderFormattedText(raw)}</div>);

    const bold = container.querySelector('strong');
    expect(bold).toBeInTheDocument();
    expect(bold?.textContent).toBe('negrito importante');

    const italic = container.querySelector('em');
    expect(italic).toBeInTheDocument();
    expect(italic?.textContent).toBe('itálico sutil');
  });

  it('deve renderizar lacunas (____) estilizadas com destaque visual', () => {
    const raw = 'Com ________________ elegantes e extremamente inteligentes.';
    const { container } = render(<div>{renderFormattedText(raw)}</div>);

    const blank = container.querySelector('.lacuna-blank');
    expect(blank).toBeInTheDocument();
  });

  it('deve renderizar citações em bloco (> [Texto 1])', () => {
    const raw = '> [Texto 1]\n> Os gatos possuem personalidade enigmática.';
    const { container } = render(<div>{renderMarkdownContent(raw)}</div>);

    const blockquote = container.querySelector('blockquote');
    expect(blockquote).toBeInTheDocument();
    expect(blockquote?.textContent).toContain('Os gatos possuem');
  });

  it('deve renderizar tabelas Markdown GFM completas com cabeçalho e corpo', () => {
    const raw = '| Conta | Saldo |\n|---|---|\n| Caixa | 100 |\n| Banco | 500 |';
    const { container } = render(<div>{renderMarkdownContent(raw)}</div>);

    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.textContent).toContain('Conta');
    expect(table?.textContent).toContain('Caixa');
    expect(table?.textContent).toContain('500');
  });

  it('deve renderizar imagens com lazy loading e caminho preservado', () => {
    const raw = 'Veja o diagrama:\n![Gráfico Q17](/assets/exams/q17_grafico.png)';
    const { container } = render(<div>{renderMarkdownContent(raw)}</div>);

    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute('src')).toBe('/assets/exams/q17_grafico.png');
    expect(img?.getAttribute('loading')).toBe('lazy');
  });

  it('NUNCA deve executar scripts arbitrários (<script>alert(1)</script>)', () => {
    const malicious = 'Pergunta normal <script>window.pwned=true</script> fim.';
    const { container } = render(<div>{renderFormattedText(malicious)}</div>);

    const scripts = container.querySelectorAll('script');
    expect(scripts.length).toBe(0);
    expect((window as any).pwned).toBeUndefined();
  });
});
