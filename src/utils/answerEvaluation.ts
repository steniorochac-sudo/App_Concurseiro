import { Question } from '../types';

export type QuestionAnswerStatus =
  | 'correta'
  | 'incorreta'
  | 'anulada'
  | 'pendente';

export type DidacticOutcome = 'acerto' | 'erro' | 'anulada' | 'pendente';

export interface QuestionEvaluationResult {
  status: QuestionAnswerStatus;
  
  // 1. Avaliação Didática do Estudante (Isolamento de Anuladas)
  didacticOutcome: DidacticOutcome;
  isDidacticHit: boolean; // true APENAS se o estudante acertou questão válida
  countsForDidacticMetrics: boolean; // false para questões anuladas (não distorce aproveitamento)
  scoreWeightDidactic: number; // 1 = acerto real de conteúdo, 0 = erro ou anulada
  
  // 2. Pontuação de Concurso / Simulado (Regra da Banca)
  officialExamCredit: number; // 1 = ponto atribuído pela banca (inclusive em anuladas), 0 = sem ponto
  scoreWeight: number; // Peso didático (0 para anulada, 1 para acerto válido, 0 para erro)
  
  // 3. Flags e Gabaritos
  isCorrect: boolean; // Retrocompatibilidade de UI (não penaliza visualmente questão anulada)
  isAnnulled: boolean;
  isRectified: boolean;
  isPreliminary: boolean;
  isPending: boolean;
  effectiveAnswer: string;
  originalAnswer?: string;
  
  // 4. Caderno de Erros e Feedback
  shouldAddToErrorNotebook: boolean; // false para anuladas e acertos, true APENAS para erros reais
  feedbackTitle: string;
  feedbackMessage: string;
}

/**
 * Retorna o gabarito oficial efetivo da questão (P0.3).
 * Fonte única de verdade para toda a interface (QuestionCard, ExamPage, ExplanationModal)
 * e para o motor de avaliação de respostas:
 * - Se a questão foi anulada (status 'anulado' ou gabarito 'X'), retorna 'X'.
 * - Se a questão foi retificada/alterada ou possui gabaritoDefinitivo, este tem precedência absoluta sobre o gabarito preliminar.
 * - Caso contrário, retorna o gabarito regular.
 */
export function getEffectiveGabarito(
  question: Pick<Question, 'gabarito' | 'gabaritoDefinitivo' | 'gabaritoStatus'>
): string {
  if (!question) return '';
  const rawGabarito = (question.gabarito || '').trim().toUpperCase();
  const statusGabarito = (question.gabaritoStatus || '').toLowerCase();

  if (rawGabarito === 'X' || statusGabarito === 'anulado') {
    return 'X';
  }

  const def = (question.gabaritoDefinitivo || '').trim().toUpperCase();
  if (def) {
    return def;
  }

  return rawGabarito;
}

/**
 * Mecanismo único e centralizado de avaliação de respostas do estudante (P0.2/P0.3).
 * Trata de forma determinística questões válidas, anuladas, retificadas, preliminares e pendentes.
 * 
 * Reconciliação Rigorosa:
 * - Questões anuladas recebem officialExamCredit: 1 (ponto de concurso concedido pela banca),
 *   mas scoreWeight: 0 e countsForDidacticMetrics: false (não poluem a taxa de acerto didático do aluno).
 * - Questões retificadas utilizam gabaritoDefinitivo com precedência sobre o gabarito preliminar.
 */
export function evaluateQuestionAnswer(
  question: Question,
  selectedOption: string
): QuestionEvaluationResult {
  const normSelected = (selectedOption || '').trim().toUpperCase();
  const rawGabarito = (question.gabarito || '').trim().toUpperCase();
  const statusGabarito = (question.gabaritoStatus || 'valido').toLowerCase();

  const isAnnulled = rawGabarito === 'X' || statusGabarito === 'anulado';
  const isRectified = statusGabarito === 'alterado' || statusGabarito === 'retificado';
  const isPreliminary = statusGabarito === 'preliminar';
  const isPending = statusGabarito === 'pendente' || (rawGabarito === '' && !question.gabaritoDefinitivo);

  // 1. Tratamento Especial de Questões Anuladas
  // Excluídas do Caderno de Erros e isoladas da taxa de acerto didático do estudante.
  if (isAnnulled) {
    return {
      status: 'anulada',
      didacticOutcome: 'anulada',
      isDidacticHit: false, // Didaticamente não houve acerto de conteúdo válido
      countsForDidacticMetrics: false, // Isola das métricas de desempenho didático
      scoreWeightDidactic: 0, // Peso didático zero
      officialExamCredit: 1, // Crédito concedido pela banca no concurso oficial
      scoreWeight: 0, // Reconciliado com especificação didática (peso 0 para anulação)
      isCorrect: true, // Não penaliza na visualização de resultados
      isAnnulled: true,
      isRectified: false,
      isPreliminary: false,
      isPending: false,
      effectiveAnswer: 'X',
      originalAnswer: rawGabarito !== 'X' ? rawGabarito : undefined,
      feedbackTitle: '⚠️ Questão Anulada pela Banca (Gabarito X)',
      feedbackMessage:
        'Esta questão foi oficialmente anulada pela banca examinadora. A banca atribui a pontuação do concurso a todos os candidatos. A questão é isolada do cálculo de aproveitamento didático e excluída do Caderno de Erros.',
      shouldAddToErrorNotebook: false,
    };
  }

  // 2. Tratamento de Questão com Gabarito Pendente de Divulgação
  if (isPending) {
    return {
      status: 'pendente',
      didacticOutcome: 'pendente',
      isDidacticHit: false,
      countsForDidacticMetrics: false,
      scoreWeightDidactic: 0,
      officialExamCredit: 0,
      scoreWeight: 0,
      isCorrect: false,
      isAnnulled: false,
      isRectified: false,
      isPreliminary: false,
      isPending: true,
      effectiveAnswer: '',
      feedbackTitle: '⏳ Gabarito Pendente de Divulgação',
      feedbackMessage: 'O gabarito desta questão ainda não foi divulgado pela banca ou aguarda conferência.',
      shouldAddToErrorNotebook: false,
    };
  }

  // 3. Determinação da Resposta Efetiva (P0.3 - Fonte única via getEffectiveGabarito)
  const effectiveAnswer = getEffectiveGabarito(question);
  const isMatch = normSelected.length > 0 && normSelected === effectiveAnswer;

  let feedbackMessage = '';
  if (isRectified) {
    feedbackMessage = `⚠️ Gabarito oficial retificado pós-recurso para a alternativa (${effectiveAnswer}).`;
    if (question.gabarito && question.gabaritoDefinitivo && question.gabarito.toUpperCase() !== question.gabaritoDefinitivo.toUpperCase()) {
      feedbackMessage += ` (Gabarito preliminar anterior era: ${question.gabarito.toUpperCase()}).`;
    }
  } else if (isPreliminary) {
    feedbackMessage = `ℹ️ Gabarito oficial preliminar divulgado pela banca (${effectiveAnswer}).`;
  } else {
    feedbackMessage = `Gabarito oficial homologado: Alternativa (${effectiveAnswer}).`;
  }

  // 4. Resposta Correta (Acerto Didático e Crédito de Concurso)
  if (isMatch) {
    return {
      status: 'correta',
      didacticOutcome: 'acerto',
      isDidacticHit: true,
      countsForDidacticMetrics: true,
      scoreWeightDidactic: 1,
      officialExamCredit: 1,
      scoreWeight: 1,
      isCorrect: true,
      isAnnulled: false,
      isRectified,
      isPreliminary,
      isPending: false,
      effectiveAnswer,
      originalAnswer: rawGabarito,
      feedbackTitle: 'Parabéns, resposta correta!',
      feedbackMessage,
      shouldAddToErrorNotebook: false,
    };
  }

  // 5. Resposta Incorreta (Erro Didático)
  return {
    status: 'incorreta',
    didacticOutcome: 'erro',
    isDidacticHit: false,
    countsForDidacticMetrics: true,
    scoreWeightDidactic: 0,
    officialExamCredit: 0,
    scoreWeight: 0,
    isCorrect: false,
    isAnnulled: false,
    isRectified,
    isPreliminary,
    isPending: false,
    effectiveAnswer,
    originalAnswer: rawGabarito,
    feedbackTitle: 'Resposta Incorreta',
    feedbackMessage: `${feedbackMessage} Você assinalou (${normSelected || '-'}).`,
    shouldAddToErrorNotebook: true,
  };
}
