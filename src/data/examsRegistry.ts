import { Question } from '../types';
import { ExamDocumentV2 } from '../types/examSchemaV2';

import analistaContabilData from './imported/analista_contabil.json';
import analistaContabilTipo1Data from './imported/analista_contabil_tipo_1.json';
import analistaContabil2Data from './imported/analista_contabil2.json';
import analistaContabil3Data from './imported/analista_contabil3.json';
import provaAuditorData from './imported/prova_objetiva_auditor.json';
import fiscalMaisData from './imported/fiscal_municipal_tributario.json';
import agenteFiscalTributario1Data from './imported/agente_fiscal_tributario_1.json';

export interface PreloadedExam {
  id: string;
  filename: string;
  title: string;
  banca: string;
  ano: number;
  orgao: string;
  formatoQuestoes: 'certo_errado' | 'multipla_escolha_4' | 'multipla_escolha_5' | 'multipla_escolha' | 'misto';
  totalQuestions: number;
  questions: Question[];
}

export function examDocV2ToQuestions(doc: ExamDocumentV2): Question[] {
  return doc.questoes.map((q) => ({
    id: q.id,
    banca: doc.exam.banca,
    ano: doc.exam.ano,
    orgao: doc.exam.orgao,
    cargo: doc.exam.cargo,
    disciplina: q.metadados.disciplina || 'Conhecimentos Gerais',
    assunto: q.metadados.assunto || q.metadados.disciplina || 'Geral',
    enunciado: q.enunciado,
    alternativas: q.alternativas.map((a) => ({ id: a.id, text: a.text })),
    gabarito: q.gabaritoOficial,
    explicacao:
      q.explicacao ||
      `🎯 Gabarito Oficial: ${q.gabaritoOficial}.\nQuestão ${q.numeroOriginal} da prova oficial ${doc.exam.titulo}. Resposta homologada pela banca ${doc.exam.banca}.`,
    baseLegal: q.baseLegal,
    tipo: q.tipo,
    textoCompartilhado: q.textoCompartilhado,
    imagens: q.imagens,
    examId: doc.exam.id,
    examTitulo: doc.exam.titulo,
    numeroOriginal: q.numeroOriginal,
    gabaritoStatus: q.gabaritoStatus,
  }));
}

const doc1 = analistaContabilData as unknown as ExamDocumentV2;
const doc2 = analistaContabilTipo1Data as unknown as ExamDocumentV2;
const doc3 = analistaContabil2Data as unknown as ExamDocumentV2;
const doc4 = analistaContabil3Data as unknown as ExamDocumentV2;
const doc5 = provaAuditorData as unknown as ExamDocumentV2;
const doc6 = fiscalMaisData as unknown as ExamDocumentV2;

// FEPESE 2023 legacy array adaptation
const fepeseQuestions: Question[] = (agenteFiscalTributario1Data as unknown as Question[]).map((q, idx) => ({
  ...q,
  tipo: 'multipla_escolha' as const,
  examId: 'fepese-2023-bc-agente-fiscal-tributario',
  examTitulo: 'Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)',
  numeroOriginal: idx + 1,
}));

export const AUDITED_EXAMS: ExamDocumentV2[] = [doc1, doc2, doc3, doc4, doc5, doc6];

export const PRELOADED_EXAMS: PreloadedExam[] = [
  {
    id: doc1.exam.id,
    filename: doc1.exam.auditTrail.arquivoProvaPdf,
    title: doc1.exam.titulo,
    banca: doc1.exam.banca,
    ano: doc1.exam.ano,
    orgao: doc1.exam.orgao,
    formatoQuestoes: doc1.exam.formatoQuestoes,
    totalQuestions: doc1.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc1),
  },
  {
    id: doc2.exam.id,
    filename: doc2.exam.auditTrail.arquivoProvaPdf,
    title: doc2.exam.titulo,
    banca: doc2.exam.banca,
    ano: doc2.exam.ano,
    orgao: doc2.exam.orgao,
    formatoQuestoes: doc2.exam.formatoQuestoes,
    totalQuestions: doc2.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc2),
  },
  {
    id: doc3.exam.id,
    filename: doc3.exam.auditTrail.arquivoProvaPdf,
    title: doc3.exam.titulo,
    banca: doc3.exam.banca,
    ano: doc3.exam.ano,
    orgao: doc3.exam.orgao,
    formatoQuestoes: doc3.exam.formatoQuestoes,
    totalQuestions: doc3.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc3),
  },
  {
    id: doc4.exam.id,
    filename: doc4.exam.auditTrail.arquivoProvaPdf,
    title: doc4.exam.titulo,
    banca: doc4.exam.banca,
    ano: doc4.exam.ano,
    orgao: doc4.exam.orgao,
    formatoQuestoes: doc4.exam.formatoQuestoes,
    totalQuestions: doc4.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc4),
  },
  {
    id: doc5.exam.id,
    filename: doc5.exam.auditTrail.arquivoProvaPdf,
    title: doc5.exam.titulo,
    banca: doc5.exam.banca,
    ano: doc5.exam.ano,
    orgao: doc5.exam.orgao,
    formatoQuestoes: doc5.exam.formatoQuestoes,
    totalQuestions: doc5.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc5),
  },
  {
    id: doc6.exam.id,
    filename: doc6.exam.auditTrail.arquivoProvaPdf,
    title: doc6.exam.titulo,
    banca: doc6.exam.banca,
    ano: doc6.exam.ano,
    orgao: doc6.exam.orgao,
    formatoQuestoes: doc6.exam.formatoQuestoes,
    totalQuestions: doc6.exam.totalQuestoes,
    questions: examDocV2ToQuestions(doc6),
  },
  {
    id: 'fepese-2023-bc-agente-fiscal-tributario',
    filename: 'agente_fiscal_tributario_1.pdf',
    title: 'Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)',
    banca: 'FEPESE',
    ano: 2023,
    orgao: 'Prefeitura de Balneário Camboriú',
    formatoQuestoes: 'multipla_escolha_5',
    totalQuestions: fepeseQuestions.length,
    questions: fepeseQuestions,
  },
];

export const ALL_IMPORTED_QUESTIONS: Question[] = PRELOADED_EXAMS.flatMap((e) => e.questions);
