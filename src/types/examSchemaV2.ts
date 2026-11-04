/**
 * ExamSchema v2.0 - Contrato Mínimo, Versionado e Extensível
 * para o Acervo de Provas e Questões do App_Concurseiro.
 * 
 * Projetado para preservar integralmente os cadernos de prova oficiais,
 * garantindo fidelidade documental, rastreabilidade estrita e compatibilidade
 * com múltiplos formatos de bancas brasileiras (A-E, A-D, C/E).
 */

export type QuestionType = 'multipla_escolha' | 'certo_errado';

export type GabaritoStatus = 'valido' | 'anulado' | 'alterado' | 'pendente';

export type GabaritoTipoOficial = 'preliminar' | 'definitivo' | 'retificado';

export interface AlternativeV2 {
  id: string; // "A", "B", "C", "D", "E" ou "C", "E"
  text: string;
}

export interface SharedTextV2 {
  id: string;
  title?: string;
  content: string; // Preserva texto original, quebras de linha e marcação inline (ex: <u>, <b>)
}

export interface QuestionMetadataV2 {
  disciplina: string; // Ex: "Língua Portuguesa", "Direito Tributário"
  assunto?: string;
  subtopicos?: string[];
  dificuldade?: 'fácil' | 'médio' | 'difícil';
  paginaOrigem: number; // Página do PDF da prova onde a questão inicia
  paginaFim?: number; // Para questões que cruzam páginas
  imagens?: string[]; // Caminho para imagens relativas em public/assets/exams/<exam_id>/
  tabelas?: string[]; // Tabelas em formato markdown ou representação fiel
  temSublinhado?: boolean;
  temLacunas?: boolean;
}

export interface ExamQuestionV2 {
  id: string; // Ex: "fepese-2023-bc-aft-q01", "quadrix-2024-crcsp-ac-q120"
  numeroOriginal: number; // Numeração original da questão no caderno oficial (1..120)
  tipo: QuestionType;
  enunciado: string; // Enunciado integral sem resumos ou embelezamentos
  alternativas: AlternativeV2[];
  gabaritoOficial: string; // "A" | "B" | "C" | "D" | "E" | "C" | "E" | "X"
  gabaritoStatus: GabaritoStatus;
  gabaritoDefinitivo?: string; // Se retificado ou alterado pós-recurso
  textoCompartilhado?: SharedTextV2;
  metadados: QuestionMetadataV2;
  explicacao?: string; // Comentário didático opcional (separado do texto original)
  baseLegal?: string;
}

export interface ExamAuditTrail {
  arquivoProvaPdf: string;
  arquivoGabaritoPdf: string;
  secaoGabarito: string; // Cargo/código exato no gabarito oficial
  paginaGabarito: number; // Página exata do gabarito oficial
  tipoGabarito: GabaritoTipoOficial;
  hashSha256Prova?: string;
  hashSha256Gabarito?: string;
  responsavelAuditoria: string;
  dataHomologacao?: string;
}

export interface ExamMetadataV2 {
  id: string; // Ex: "balneario_camboriu_2022_agente_fiscal_tributario"
  titulo: string;
  orgao: string;
  banca: string;
  cargo: string;
  codigoCargo?: string;
  ano: number;
  edital?: string;
  caderno: string; // Ex: "6M02", "Tipo 1 - Branca", "Caderno Geral"
  turno?: 'manhã' | 'tarde' | 'integral';
  dataAplicacao?: string;
  formatoQuestoes: 'multipla_escolha_4' | 'multipla_escolha_5' | 'certo_errado' | 'misto';
  totalQuestoes: number;
  totalAnuladas: number;
  homologado: boolean;
  auditTrail: ExamAuditTrail;
}

export interface ExamDocumentV2 {
  schemaVersion: '2.0';
  exam: ExamMetadataV2;
  questoes: ExamQuestionV2[];
}

/**
 * Função de validação estrutural estrita para um ExamDocumentV2.
 * Lança exceções ou retorna lista de inconsistências encontradas.
 */
export function validateExamDocumentV2(doc: ExamDocumentV2): string[] {
  const errors: string[] = [];

  if (doc.schemaVersion !== '2.0') {
    errors.push(`schemaVersion inválida: esperado '2.0', recebido '${doc.schemaVersion}'`);
  }

  if (!doc.exam) {
    errors.push('Campo exam (metadados do exame) é obrigatório.');
    return errors;
  }

  const { exam, questoes } = doc;

  if (!exam.id) errors.push('exam.id é obrigatório.');
  if (!exam.orgao) errors.push('exam.orgao é obrigatório.');
  if (!exam.banca) errors.push('exam.banca é obrigatório.');
  if (!exam.cargo) errors.push('exam.cargo é obrigatório.');
  if (!exam.ano || exam.ano < 1990) errors.push(`exam.ano inválido: ${exam.ano}`);
  if (!exam.auditTrail) errors.push('exam.auditTrail é obrigatório para rastreabilidade.');

  if (!Array.isArray(questoes) || questoes.length === 0) {
    errors.push('questoes deve ser um array não-vazio.');
    return errors;
  }

  if (questoes.length !== exam.totalQuestoes) {
    errors.push(`Discrepância no total de questões: declarado ${exam.totalQuestoes}, presentes no array ${questoes.length}`);
  }

  const seenIds = new Set<string>();
  const seenNumbers = new Set<number>();
  let anuladasCount = 0;

  for (const q of questoes) {
    if (!q.id) {
      errors.push(`Questão sem id definido.`);
    } else if (seenIds.has(q.id)) {
      errors.push(`ID duplicado de questão: ${q.id}`);
    } else {
      seenIds.add(q.id);
    }

    if (q.numeroOriginal === undefined || q.numeroOriginal <= 0) {
      errors.push(`Questão ${q.id} com numeroOriginal inválido.`);
    } else if (seenNumbers.has(q.numeroOriginal)) {
      errors.push(`Número de questão duplicado: ${q.numeroOriginal}`);
    } else {
      seenNumbers.add(q.numeroOriginal);
    }

    if (!q.enunciado || q.enunciado.trim().length === 0) {
      errors.push(`Questão ${q.numeroOriginal} com enunciado vazio.`);
    }

    if (q.tipo === 'multipla_escolha') {
      if (!Array.isArray(q.alternativas) || (q.alternativas.length !== 4 && q.alternativas.length !== 5)) {
        errors.push(`Questão ${q.numeroOriginal} de múltipla escolha deve ter 4 ou 5 alternativas.`);
      }
    } else if (q.tipo === 'certo_errado') {
      if (!Array.isArray(q.alternativas) || q.alternativas.length !== 2) {
        errors.push(`Questão ${q.numeroOriginal} de certo/errado deve conter exatamente 2 alternativas (C e E).`);
      }
    } else {
      errors.push(`Questão ${q.numeroOriginal} com tipo desconhecido: ${q.tipo}`);
    }

    const validAnswers = ['A', 'B', 'C', 'D', 'E', 'X'];
    if (!validAnswers.includes(q.gabaritoOficial.toUpperCase())) {
      errors.push(`Questão ${q.numeroOriginal} com gabarito oficial inválido: '${q.gabaritoOficial}'`);
    }

    if (q.gabaritoOficial.toUpperCase() === 'X' || q.gabaritoStatus === 'anulado') {
      anuladasCount++;
      if (q.gabaritoStatus !== 'anulado') {
        errors.push(`Questão ${q.numeroOriginal} com gabarito 'X' deve ter status 'anulado'.`);
      }
    }

    if (!q.metadados || !q.metadados.disciplina) {
      errors.push(`Questão ${q.numeroOriginal} sem disciplina informada.`);
    }
    if (!q.metadados || q.metadados.paginaOrigem === undefined || q.metadados.paginaOrigem <= 0) {
      errors.push(`Questão ${q.numeroOriginal} sem paginaOrigem válida.`);
    }
  }

  if (anuladasCount !== exam.totalAnuladas) {
    errors.push(`Discrepância nas questões anuladas: declared ${exam.totalAnuladas}, encontradas ${anuladasCount}`);
  }

  return errors;
}
