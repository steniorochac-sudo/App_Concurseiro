export interface MasterPromptOptions {
  cargo?: string;
  banca?: string;
  ano?: number | string;
  orgao?: string;
  intervaloQuestoes?: string; // Ex: "questões de 1 a 35"
  formato?: 'multipla_escolha' | 'certo_errado' | 'misto';
}

/**
 * Retorna o Prompt Mestre otimizado para o usuário colar em qualquer IA
 * (ChatGPT, Claude, Gemini) juntamente com os PDFs da prova e gabarito.
 */
export function getMasterAiPrompt(options?: MasterPromptOptions): string {
  const cargoInfo = options?.cargo ? ` para o cargo de ${options.cargo}` : '';
  const bancaInfo = options?.banca ? ` da banca ${options.banca}` : '';
  const anoInfo = options?.ano ? ` do ano ${options.ano}` : '';
  const intervaloInfo = options?.intervaloQuestoes
    ? `\n> ATENÇÃO: Processe especificamente as **${options.intervaloQuestoes}** nesta etapa.`
    : '';

  const isCertoErrado = options?.formato === 'certo_errado';

  const formatInstruction = isCertoErrado
    ? 'Para itens do tipo certo/errado (estilo CEBRASPE/QUADRIX), as alternativas devem ser C (Certo) e E (Errado), e o gabaritoOficial deve ser "C" ou "E".'
    : 'Para itens de múltipla escolha (A, B, C, D, E), transcreva todas as opções textuais com suas respectivas letras.';

  return `Você é um especialista em transcrição e estruturação de cadernos de provas de concursos públicos.
Sua missão é transcrever com 100% de fidelidade documental as questões do PDF da prova anexado${cargoInfo}${bancaInfo}${anoInfo}, associando cada item à sua resposta no PDF do gabarito oficial anexado, gerando EXCLUSIVAMENTE um arquivo JSON válido no padrão exigido abaixo.${intervaloInfo}

### REGRAS OBRIGATÓRIAS DE TRANSCRIÇÃO:
1. FIDELIDADE ABSOLUTA: Transcreva integralmente o enunciado e as alternativas. Não resuma, não parafraseie, não omita palavras nem invente enunciados.
2. GABARITO OFICIAL VINCULADO: Localize no gabarito oficial a resposta exata para o cargo, caderno e versão desta prova. Se uma questão for anulada pela banca, marque "gabaritoOficial": "X" e "gabaritoStatus": "anulado".
3. TIPO DE QUESTÃO: ${formatInstruction}
4. ELEMENTOS VISUAIS E TABELAS: Se houver tabelas no enunciado, formate-as em Markdown GFM (| col1 | col2 |).
5. NÃO GERE COMENTÁRIOS LONGOS: Não gere explicações ou análises longas para economizar saída de tokens e garantir que todas as questões caibam sem serem cortadas pela metade.
6. SAÍDA RESTRITA A JSON: Responda APENAS com o bloco de código \`\`\`json. Não inclua conversas, introduções ou saudações antes ou depois do bloco.

### EXEMPLO DO JSON ESPERADO:
\`\`\`json
{
  "versao": "2.0",
  "prova": {
    "titulo": "${options?.orgao || 'Órgão'} - ${options?.cargo || 'Cargo'} (${options?.banca || 'Banca'} ${options?.ano || '2024'})",
    "banca": "${options?.banca || 'FGV'}",
    "ano": ${options?.ano || 2024},
    "orgao": "${options?.orgao || 'Órgão'}",
    "cargo": "${options?.cargo || 'Cargo'}",
    "caderno": "Tipo 1"
  },
  "questoes": [
    {
      "numeroOriginal": 1,
      "disciplina": "Língua Portuguesa",
      "tipo": "${isCertoErrado ? 'certo_errado' : 'multipla_escolha'}",
      "enunciado": "Transcreva o enunciado completo aqui...",
      "alternativas": ${
        isCertoErrado
          ? `[
        { "id": "C", "text": "Certo" },
        { "id": "E", "text": "Errado" }
      ]`
          : `[
        { "id": "A", "text": "Texto da alternativa A" },
        { "id": "B", "text": "Texto da alternativa B" },
        { "id": "C", "text": "Texto da alternativa C" },
        { "id": "D", "text": "Texto da alternativa D" },
        { "id": "E", "text": "Texto da alternativa E" }
      ]`
      },
      "gabaritoOficial": "${isCertoErrado ? 'C' : 'B'}",
      "gabaritoStatus": "valido"
    }
  ]
}
\`\`\`
`.trim();
}
