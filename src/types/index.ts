export interface Option {
  id: string; // "A", "B", "C", "D", "E"
  text: string;
}

export interface Question {
  id: string;
  banca: string; // Ex: FGV, FCC, AOCP, CEBRASPE, QUADRIX, VUNESP
  ano: number;
  orgao: string; // Ex: SEFAZ, Prefeitura, TJ, DPE
  cargo?: string; // Ex: Auditor Fiscal Tributário, Analista de TI
  disciplina: string; // Ex: Direito Constitucional, Português, Direito Tributário
  assunto: string; // Ex: Controle de Constitucionalidade, Crase
  enunciado: string;
  alternativas: Option[];
  gabarito: string; // "A" | "B" | "C" | "D" | "E" | "C" | "E"
  explicacao: string; // Explicação detalhada da questão (com dissecador de pegadinhas)
  baseLegal?: string; // Fundamentação jurídica/doutrinária
  fontePesquisa?: string; // Fonte recomendada para pesquisa (ex: CF/88, STF Súmula Vinculante)
  alertaProfessor?: string; // Alerta de jurisprudência recente, divergência ou risco de anulação
  subtopicos?: string[]; // Hierarquia de subtópicos do edital
  dificuldade?: 'fácil' | 'médio' | 'difícil';
  tipo?: 'multipla_escolha' | 'certo_errado';
  textoCompartilhado?: {
    id: string;
    title?: string;
    content: string;
  };
  imagens?: string[];
  examId?: string;
  examTitulo?: string;
  numeroOriginal?: number;
  gabaritoStatus?: string;
}

export interface UserAttempt {
  id: string;
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timestamp: number;
  timeSpentSeconds: number;
  mode: 'practice' | 'exam' | 'notebook';
  examId?: string;
}

export interface ErrorNotebookItem {
  questionId: string;
  errorCount: number;
  consecutiveCorrectCount: number; // Requisito: precisa atingir 2 para sair do caderno!
  lastAttemptTimestamp: number;
}

export interface ExamConfig {
  id: string;
  title: string;
  disciplina?: string;
  banca?: string;
  formato?: 'todas' | 'certo_errado' | 'multipla_escolha';
  examId?: string;
  totalQuestions: number;
  timeLimitMinutes?: number;
}

export interface ExamSession {
  id: string;
  config: ExamConfig;
  questionIds: string[];
  answers: Record<string, { selectedOption: string; timeSpentSeconds: number }>;
  startTime: number;
  endTime?: number;
  status: 'in_progress' | 'completed';
}

export interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  accuracyRate: number; // Porcentagem de acerto (0 a 100)
  averageTimeSeconds: number;
  accuracyBySubject: Record<string, { total: number; correct: number; accuracy: number }>;
  accuracyByBoard: Record<string, { total: number; correct: number; accuracy: number }>;
}

export interface UserStorageData {
  questions: Question[];
  attempts: UserAttempt[];
  errorNotebook: Record<string, ErrorNotebookItem>;
  savedQuestionIds: string[];
  exams: ExamSession[];
}

export interface FilterOptions {
  disciplina?: string;
  banca?: string;
  ano?: number;
  onlySaved?: boolean;
  onlyErrors?: boolean;
}
