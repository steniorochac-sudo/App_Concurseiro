import { Question } from '../types';
import { ExamDocumentV2 } from '../types/examSchemaV2';
import { resolveEffectiveExamStatus } from './documentaryStatusRegistry';

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
  statusHomologacao: 'rascunho' | 'validacao_pendente' | 'homologado';
  homologado: boolean;
  documentaryStatus: string;
  faseDocumentalPendente: boolean;
  questions: Question[];
}

export function examDocV2ToQuestions(doc: ExamDocumentV2): Question[] {
  // Correção A (5ª Auditoria): Status documental efetivo provém da fonte única de evidências
  const effective = resolveEffectiveExamStatus(doc.exam.id, doc.exam);
  const isDraft = effective.statusHomologacao === 'rascunho';

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
    gabaritoDefinitivo: q.gabaritoDefinitivo,
    gabaritoStatus: q.gabaritoStatus,
    statusHomologacao: effective.statusHomologacao,
    homologado: effective.isHomologated,
    isDraft,
    fonteDocumental: effective.fonteDocumental,
    explicacao:
      q.explicacao ||
      `🎯 Gabarito Oficial: ${q.gabaritoDefinitivo || q.gabaritoOficial}.\nQuestão ${q.numeroOriginal} da prova ${doc.exam.titulo}.`,
    baseLegal: q.baseLegal,
    tipo: q.tipo,
    textoCompartilhado: q.textoCompartilhado,
    imagens: q.imagens,
    examId: doc.exam.id,
    examTitulo: doc.exam.titulo,
    numeroOriginal: q.numeroOriginal,
  }));
}

const doc1 = analistaContabilData as unknown as ExamDocumentV2;
const doc2 = analistaContabilTipo1Data as unknown as ExamDocumentV2;
const doc3 = analistaContabil2Data as unknown as ExamDocumentV2;
const doc4 = analistaContabil3Data as unknown as ExamDocumentV2;
const doc5 = provaAuditorData as unknown as ExamDocumentV2;
const doc6 = fiscalMaisData as unknown as ExamDocumentV2;

// FEPESE 2023 legacy array adaptation (Correção A: sem fixação estática de homologado: true)
const fepeseExamId = 'fepese-2023-bc-agente-fiscal-tributario';
const fepeseStatus = resolveEffectiveExamStatus(fepeseExamId);

const fepeseQuestions: Question[] = (agenteFiscalTributario1Data as unknown as Question[]).map((q, idx) => ({
  ...q,
  tipo: 'multipla_escolha' as const,
  examId: fepeseExamId,
  examTitulo: 'Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)',
  numeroOriginal: idx + 1,
  statusHomologacao: fepeseStatus.statusHomologacao,
  homologado: fepeseStatus.isHomologated,
  isDraft: fepeseStatus.statusHomologacao === 'rascunho',
  fonteDocumental: fepeseStatus.fonteDocumental,
}));

export const AUDITED_EXAMS: ExamDocumentV2[] = [doc1, doc2, doc3, doc4, doc5, doc6];

function createPreloadedExam(doc: ExamDocumentV2): PreloadedExam {
  const effective = resolveEffectiveExamStatus(doc.exam.id, doc.exam);
  return {
    id: doc.exam.id,
    filename: doc.exam.auditTrail.arquivoProvaPdf,
    title: doc.exam.titulo,
    banca: doc.exam.banca,
    ano: doc.exam.ano,
    orgao: doc.exam.orgao,
    formatoQuestoes: doc.exam.formatoQuestoes,
    totalQuestions: doc.exam.totalQuestoes,
    statusHomologacao: effective.statusHomologacao,
    homologado: effective.isHomologated,
    documentaryStatus: effective.documentaryStatus,
    faseDocumentalPendente: effective.faseDocumentalPendente,
    questions: examDocV2ToQuestions(doc),
  };
}

export const PRELOADED_EXAMS: PreloadedExam[] = [
  createPreloadedExam(doc1),
  createPreloadedExam(doc2),
  createPreloadedExam(doc3),
  createPreloadedExam(doc4),
  createPreloadedExam(doc5),
  createPreloadedExam(doc6),
  {
    id: fepeseExamId,
    filename: 'agente_fiscal_tributario 1.pdf',
    title: 'Concurso Público Balneário Camboriú - Agente Fiscal Tributário (FEPESE 2023)',
    banca: 'FEPESE',
    ano: 2023,
    orgao: 'Prefeitura de Balneário Camboriú',
    formatoQuestoes: 'multipla_escolha_5',
    totalQuestions: fepeseQuestions.length,
    statusHomologacao: fepeseStatus.statusHomologacao,
    homologado: fepeseStatus.isHomologated,
    documentaryStatus: fepeseStatus.documentaryStatus,
    faseDocumentalPendente: fepeseStatus.faseDocumentalPendente,
    questions: fepeseQuestions,
  },
];

export const ALL_IMPORTED_QUESTIONS: Question[] = PRELOADED_EXAMS.flatMap((e) => e.questions);
