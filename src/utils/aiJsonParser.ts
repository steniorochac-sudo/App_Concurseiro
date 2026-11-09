import {
  ExamDocumentV2,
  ExamQuestionV2,
  ExamMetadataV2,
  QuestionType,
  GabaritoStatus,
  HomologationStatus,
  validateExamHomologation,
  ExamValidationReport,
} from '../types/examSchemaV2';

export interface ParseResult {
  success: boolean;
  data?: ExamDocumentV2;
  error?: string;
  statusHomologacao?: HomologationStatus;
  validationReport?: ExamValidationReport;
}

/**
 * Extrai o conteúdo JSON de uma resposta textual fornecida por IA
 * (remove blocos ```json ... ``` ou localiza o primeiro e último delimitador JSON).
 */
export function extractJsonFromAiResponse(rawText: string): string {
  if (!rawText) return '';

  const trimmed = rawText.trim();

  // 1. Tenta extrair de bloco de código com tag ```json
  const jsonBlockMatch = trimmed.match(/```json\s*([\s\S]*?)\s*```/i);
  if (jsonBlockMatch && jsonBlockMatch[1]) {
    return jsonBlockMatch[1].trim();
  }

  // 2. Tenta extrair de qualquer bloco de código ```
  const genericBlockMatch = trimmed.match(/```\s*([\s\S]*?)\s*```/);
  if (genericBlockMatch && genericBlockMatch[1]) {
    return genericBlockMatch[1].trim();
  }

  // 3. Se não houver blocos de código, procura pelo primeiro '{' ou '[' e pelo último '}' ou ']'
  const firstBrace = trimmed.indexOf('{');
  const firstBracket = trimmed.indexOf('[');

  let startIndex = -1;
  let isObject = true;

  if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
    startIndex = firstBrace;
    isObject = true;
  } else if (firstBracket !== -1) {
    startIndex = firstBracket;
    isObject = false;
  }

  if (startIndex !== -1) {
    const lastIndex = isObject ? trimmed.lastIndexOf('}') : trimmed.lastIndexOf(']');
    if (lastIndex !== -1 && lastIndex > startIndex) {
      return trimmed.substring(startIndex, lastIndex + 1).trim();
    }
  }

  return trimmed;
}

/**
 * Remove vírgulas sobressalentes (trailing commas) e caracteres invisíveis
 * que quebram o parser padrão JSON.parse.
 */
export function sanitizeJsonText(jsonText: string): string {
  if (!jsonText) return '';

  return jsonText
    // Remove BOM
    .replace(/^\uFEFF/, '')
    // Remove vírgulas extras antes de fechar chaves } ou colchetes ]
    .replace(/,\s*([\}\]])/g, '$1');
}

/**
 * Normaliza a entrada bruta da IA em um objeto ExamDocumentV2 de rascunho.
 * Separa a flexibilidade de entrada da homologação estrita (P0.1).
 */
export function normalizeAiExamInput(rawInput: string): ParseResult {
  if (!rawInput || !rawInput.trim()) {
    return {
      success: false,
      error: 'Nenhum conteúdo informado para importação.',
      statusHomologacao: 'rascunho',
    };
  }

  const extracted = extractJsonFromAiResponse(rawInput);
  const sanitized = sanitizeJsonText(extracted);

  let parsed: any;
  try {
    parsed = JSON.parse(sanitized);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: `Sintaxe JSON inválida gerada pela IA: ${msg}. Verifique se o texto não foi cortado no meio da geração.`,
      statusHomologacao: 'rascunho',
    };
  }

  // Normalização do documento
  let rawExam = parsed.exam || parsed.prova || {};
  let rawQuestoes: any[] = [];

  if (Array.isArray(parsed)) {
    rawQuestoes = parsed;
  } else if (Array.isArray(parsed.questoes)) {
    rawQuestoes = parsed.questoes;
  } else if (Array.isArray(parsed.questions)) {
    rawQuestoes = parsed.questions;
  } else {
    return {
      success: false,
      error: 'O JSON não contém uma lista válida de questões (campo "questoes" ou array de questões).',
      statusHomologacao: 'rascunho',
    };
  }

  if (rawQuestoes.length === 0) {
    return {
      success: false,
      error: 'O documento não contém nenhuma questão.',
      statusHomologacao: 'rascunho',
    };
  }

  // Metadados da prova com fallbacks seguros para estudo (Rascunho)
  const examId = rawExam.id || `prova_ia_${Date.now()}`;
  const examBanca = rawExam.banca || 'Banca Não Informada';
  const examAno = Number(rawExam.ano) || new Date().getFullYear();
  const examOrgao = rawExam.orgao || 'Órgão Não Informado';
  const examCargo = rawExam.cargo || 'Cargo Não Informado';
  const examTitulo = rawExam.titulo || `${examOrgao} - ${examCargo} (${examBanca} ${examAno})`;

  // Por padrão de segurança (P0.1), provas geradas ou coladas via IA iniciam como RASCUNHO (não homologadas)
  const examMetadata: ExamMetadataV2 = {
    id: examId,
    titulo: examTitulo,
    orgao: examOrgao,
    banca: examBanca,
    cargo: examCargo,
    ano: examAno,
    caderno: rawExam.caderno || 'Caderno Geral',
    edital: rawExam.edital,
    turno: rawExam.turno,
    formatoQuestoes: rawExam.formatoQuestoes || 'multipla_escolha_5',
    totalQuestoes: rawQuestoes.length,
    totalAnuladas: 0,
    homologado: false,
    statusHomologacao: 'rascunho',
    auditTrail: rawExam.auditTrail || {
      arquivoProvaPdf: rawExam.arquivoProvaPdf || `${examId}.pdf`,
      arquivoGabaritoPdf: rawExam.arquivoGabaritoPdf || `gabarito_${examId}.pdf`,
      secaoGabarito: rawExam.secaoGabarito || examCargo,
      paginaGabarito: rawExam.paginaGabarito || 1,
      tipoGabarito: rawExam.tipoGabarito || 'definitivo',
      responsavelAuditoria: 'IA Importador BYOD (Rascunho)',
    },
  };

  // Normalização e validação das questões
  const validatedQuestoes: ExamQuestionV2[] = [];

  for (let idx = 0; idx < rawQuestoes.length; idx++) {
    const rawQ = rawQuestoes[idx];
    const numOriginal = Number(rawQ.numeroOriginal ?? rawQ.numero ?? rawQ.numero_questao ?? idx + 1);

    if (isNaN(numOriginal) || numOriginal < 1) {
      return {
        success: false,
        error: `A questão na posição ${idx + 1} possui um número original inválido.`,
        statusHomologacao: 'rascunho',
      };
    }

    const enunciado = String(rawQ.enunciado ?? rawQ.statement ?? rawQ.questionText ?? '').trim();
    if (!enunciado) {
      return {
        success: false,
        error: `A questão número ${numOriginal} está com o enunciado vazio ou ausente.`,
        statusHomologacao: 'rascunho',
      };
    }

    const rawGabarito = rawQ.gabaritoOficial ?? rawQ.gabarito ?? rawQ.answer ?? '';
    const gabaritoOficial = String(rawGabarito).trim().toUpperCase();

    if (!gabaritoOficial) {
      return {
        success: false,
        error: `A questão número ${numOriginal} está sem o gabarito oficial definido. Verifique o gabarito da prova.`,
        statusHomologacao: 'rascunho',
      };
    }

    // Normalização das alternativas
    let rawAlts = rawQ.alternativas ?? rawQ.options ?? [];
    let alternativas: { id: string; text: string }[] = [];

    if (Array.isArray(rawAlts)) {
      alternativas = rawAlts.map((alt: any, aIdx: number) => {
        if (typeof alt === 'string') {
          const match = alt.match(/^([A-Ea-eCcEe])\s*[\)\.\-]\s*(.*)$/);
          if (match) {
            return { id: match[1].toUpperCase(), text: match[2].trim() };
          }
          const defaultLetter = String.fromCharCode(65 + aIdx);
          return { id: defaultLetter, text: alt.trim() };
        }
        return {
          id: String(alt.id || alt.letter || String.fromCharCode(65 + aIdx)).toUpperCase(),
          text: String(alt.text || alt.texto || '').trim(),
        };
      });
    }

    // Identificação do tipo de questão
    let tipo: QuestionType = rawQ.tipo || 'multipla_escolha';
    if (
      alternativas.length === 2 &&
      alternativas.some((a) => a.id === 'C' || a.id === 'E')
    ) {
      tipo = 'certo_errado';
    } else if (gabaritoOficial === 'C' || gabaritoOficial === 'E') {
      if (alternativas.length === 0 || alternativas.length === 2) {
        tipo = 'certo_errado';
        if (alternativas.length === 0) {
          alternativas = [
            { id: 'C', text: 'Certo' },
            { id: 'E', text: 'Errado' },
          ];
        }
      }
    }

    const qStatus: GabaritoStatus =
      gabaritoOficial === 'X' || rawQ.gabaritoStatus === 'anulado'
        ? 'anulado'
        : (rawQ.gabaritoStatus as GabaritoStatus) || 'valido';

    const questionV2: ExamQuestionV2 = {
      id: rawQ.id || `${examId}-q${String(numOriginal).padStart(2, '0')}`,
      numeroOriginal: numOriginal,
      tipo,
      enunciado,
      alternativas,
      gabaritoOficial,
      gabaritoStatus: qStatus,
      gabaritoDefinitivo: rawQ.gabaritoDefinitivo,
      textoCompartilhado: rawQ.textoCompartilhado,
      imagens: rawQ.imagens,
      metadados: {
        disciplina: rawQ.disciplina || rawQ.metadados?.disciplina || 'Conhecimentos Gerais',
        assunto: rawQ.assunto || rawQ.metadados?.assunto,
        subtopicos: rawQ.subtopicos || rawQ.metadados?.subtopicos,
        dificuldade: rawQ.dificuldade || rawQ.metadados?.dificuldade,
        paginaOrigem: Number(rawQ.paginaOrigem ?? rawQ.metadados?.paginaOrigem ?? 1),
        paginaFim: rawQ.paginaFim ? Number(rawQ.paginaFim) : undefined,
      },
      explicacao: rawQ.explicacao,
      baseLegal: rawQ.baseLegal,
    };

    validatedQuestoes.push(questionV2);
  }

  // Ordena por numeroOriginal
  validatedQuestoes.sort((a, b) => a.numeroOriginal - b.numeroOriginal);

  examMetadata.totalQuestoes = validatedQuestoes.length;
  examMetadata.totalAnuladas = validatedQuestoes.filter((q) => q.gabaritoStatus === 'anulado').length;

  const doc: ExamDocumentV2 = {
    schemaVersion: '2.0',
    exam: examMetadata,
    questoes: validatedQuestoes,
  };

  return {
    success: true,
    data: doc,
    statusHomologacao: 'rascunho',
  };
}

/**
 * Função principal para parser e validação de importação de provas (BYOD).
 */
export function parseAndValidateExamJson(rawInput: string): ParseResult {
  return normalizeAiExamInput(rawInput);
}

/**
 * Avalia um ExamDocumentV2 contra os critérios estritos de homologação documental (P0.1).
 */
export function evaluateExamForHomologation(
  doc: ExamDocumentV2,
  options?: { checkImageFiles?: (imgPath: string) => boolean }
): ExamValidationReport {
  return validateExamHomologation(doc, {
    requireHomologatedStatus: true,
    checkImageFiles: options?.checkImageFiles,
  });
}

/**
 * Mescla novas questões a uma prova já existente.
 * Se uma questão com o mesmo numeroOriginal já existir, ela é atualizada.
 * Se não existir, é adicionada.
 */
export function mergeQuestionsIntoExam(
  baseExam: ExamDocumentV2,
  newQuestions: ExamQuestionV2[]
): ExamDocumentV2 {
  const questionsMap = new Map<number, ExamQuestionV2>();

  // Adiciona as questões existentes
  for (const q of baseExam.questoes) {
    questionsMap.set(q.numeroOriginal, q);
  }

  // Sobrescreve ou acrescenta as novas questões
  for (const newQ of newQuestions) {
    questionsMap.set(newQ.numeroOriginal, newQ);
  }

  const mergedList = Array.from(questionsMap.values()).sort(
    (a, b) => a.numeroOriginal - b.numeroOriginal
  );

  return {
    ...baseExam,
    exam: {
      ...baseExam.exam,
      totalQuestoes: mergedList.length,
      totalAnuladas: mergedList.filter((q) => q.gabaritoStatus === 'anulado').length,
    },
    questoes: mergedList,
  };
}
