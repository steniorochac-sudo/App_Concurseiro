import { Question } from '../types';

export type QuestionAnswerStatus =
  | 'correta'
  | 'incorreta'
  | 'anulada'
  | 'pendente';

export interface QuestionEvaluationResult {
  status: QuestionAnswerStatus;
  isCorrect: boolean;
  isAnnulled: boolean;
  isRectified: boolean;
  isPreliminary: boolean;
  effectiveAnswer: string;
  feedbackTitle: string;
  feedbackMessage: string;
  scoreWeight: number; // 1 = ponto concedido, 0 = sem ponto
  shouldAddToErrorNotebook: boolean;
}

/**
 * Mecanismo único e centralizado de avaliação de respostas do estudante (P0.2).
 * Trata de forma determinística questões válidas, anuladas, retificadas e preliminares.
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
  const isPreliminary = statusGabarito === 'preliminar' || statusGabarito === 'pendente';

  // 1. Tratamento Especial de Questões Anuladas
  // NUNCA devem ser classificadas como erro comum do estudante nem ir para o Caderno de Erros.
  if (isAnnulled) {
    return {
      status: 'anulada',
      isCorrect: true, // Didaticamente atribuído ponto
      isAnnulled: true,
      isRectified: false,
      isPreliminary,
      effectiveAnswer: 'X',
      feedbackTitle: '⚠️ Questão Anulada pela Banca (Gabarito X)',
      feedbackMessage:
        'Esta questão foi oficialmente anulada pela banca examinadora. A pontuação é computada didacticamante a seu favor e a questão não conta como erro no seu caderno.',
      scoreWeight: 1,
      shouldAddToErrorNotebook: false,
    };
  }

  // 2. Determinação da Resposta Efetiva (Gabarito Oficial ou Definitivo)
  const effectiveAnswer = rawGabarito;
  const isMatch = normSelected.length > 0 && normSelected === effectiveAnswer;

  let feedbackMessage = '';
  if (isRectified) {
    feedbackMessage = `⚠️ Atenção: Gabarito oficial retificado pós-recurso para a alternativa (${effectiveAnswer}).`;
  } else if (isPreliminary) {
    feedbackMessage = `ℹ️ Gabarito oficial preliminar divulgado pela banca (${effectiveAnswer}).`;
  } else {
    feedbackMessage = `Gabarito oficial homologado: Alternativa (${effectiveAnswer}).`;
  }

  if (isMatch) {
    return {
      status: 'correta',
      isCorrect: true,
      isAnnulled: false,
      isRectified,
      isPreliminary,
      effectiveAnswer,
      feedbackTitle: 'Parabéns, resposta correta!',
      feedbackMessage,
      scoreWeight: 1,
      shouldAddToErrorNotebook: false,
    };
  }

  // Resposta Incorreta em questão válida
  return {
    status: 'incorreta',
    isCorrect: false,
    isAnnulled: false,
    isRectified,
    isPreliminary,
    effectiveAnswer,
    feedbackTitle: 'Resposta Incorreta',
    feedbackMessage: `${feedbackMessage} Você assinalou (${normSelected || '-'}).`,
    scoreWeight: 0,
    shouldAddToErrorNotebook: true,
  };
}
