/**
 * Utilitários para busca inteligente de resolução e explicações de questões no Google
 */

export interface QuestionSearchParams {
  banca?: string;
  ano?: number | string;
  orgao?: string;
  cargo?: string;
  disciplina?: string;
  enunciado: string;
}

/**
 * Limpa o enunciado da questão para formar termos de pesquisa limpos:
 * - Remove tags de imagem markdown: ![alt](url)
 * - Remove tabelas markdown
 * - Normaliza espaços e quebras de linha
 */
export function cleanQuestionTextForSearch(text: string): string {
  if (!text) return '';

  return text
    // Remove imagens markdown: ![...](...)
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // Remove tabelas markdown completas (| col | col | e linhas separadoras)
    .replace(/\|[^\n]+\|/g, '')
    // Normaliza quebras de linha e tabs para espaços
    .replace(/[\r\n\t]+/g, ' ')
    // Remove espaços duplicados
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Extrai um trecho representativo (10-15 palavras ou ~120 caracteres)
 * para busca exata entre aspas no Google sem cortar palavras ao meio.
 */
export function extractSearchSnippet(
  text: string,
  maxWords: number = 12,
  maxChars: number = 120
): string {
  const cleaned = cleanQuestionTextForSearch(text);
  if (!cleaned) return '';

  // Remove aspas existentes para não colidir com as aspas da busca do Google
  const withoutQuotes = cleaned.replace(/["“”«»]/g, '');

  const words = withoutQuotes.split(' ').filter(Boolean);
  if (words.length <= maxWords && withoutQuotes.length <= maxChars) {
    return withoutQuotes;
  }

  // Pega até maxWords palavras respeitando o limite de caracteres
  const selectedWords: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (selectedWords.length >= maxWords) break;
    if (currentLength + word.length + 1 > maxChars && selectedWords.length > 0) break;
    selectedWords.push(word);
    currentLength += word.length + 1;
  }

  return selectedWords.join(' ');
}

/**
 * Monta a string de busca definitiva para o Google:
 * [BANCA] [ANO] [ÓRGÃO] "[TRECHO DO ENUNCIADO ENTRE ASPAS]"
 * 
 * Exemplo:
 * FGV 2022 DPE-RO "Com relação ao regime contábil adotado pelas entidades"
 */
export function buildQuestionSearchQuery(params: QuestionSearchParams): string {
  const metadataParts = [params.banca, params.ano, params.orgao]
    .filter(Boolean)
    .map((item) => String(item).trim())
    .filter(Boolean);

  const snippet = extractSearchSnippet(params.enunciado);

  const prefix = metadataParts.join(' ');
  const quotedSnippet = snippet ? `"${snippet}"` : '';

  if (prefix && quotedSnippet) {
    return `${prefix} ${quotedSnippet}`;
  }

  return quotedSnippet || prefix || 'concurso público questão';
}

/**
 * Constrói a URL completa do Google Search
 */
export function buildQuestionSearchUrl(params: QuestionSearchParams): string {
  const query = buildQuestionSearchQuery(params);
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

/**
 * Abre a busca da questão em uma nova aba com segurança (noopener, noreferrer)
 */
export function openQuestionSearchInGoogle(params: QuestionSearchParams): void {
  const url = buildQuestionSearchUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}
