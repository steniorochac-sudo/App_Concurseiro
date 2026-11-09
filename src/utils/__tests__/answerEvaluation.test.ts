import { describe, it, expect } from 'vitest';
import { evaluateQuestionAnswer, getEffectiveGabarito } from '../answerEvaluation';
import { Question } from '../../types';

describe('answerEvaluation (P0.2)', () => {
  const baseQuestion: Question = {
    id: 'test-q01',
    banca: 'FGV',
    ano: 2024,
    orgao: 'TJ',
    cargo: 'Analista',
    disciplina: 'Direito Constitucional',
    assunto: 'Direitos Fundamentais',
    enunciado: 'Sobre os direitos e garantias fundamentais...',
    alternativas: [
      { id: 'A', text: 'Opção A' },
      { id: 'B', text: 'Opção B' },
      { id: 'C', text: 'Opção C' },
      { id: 'D', text: 'Opção D' },
      { id: 'E', text: 'Opção E' },
    ],
    gabarito: 'A',
    explicacao: 'Gabarito letra A.',
    tipo: 'multipla_escolha',
  };

  it('deve avaliar resposta correta em questão válida', () => {
    const res = evaluateQuestionAnswer(baseQuestion, 'A');
    expect(res.status).toBe('correta');
    expect(res.isCorrect).toBe(true);
    expect(res.isAnnulled).toBe(false);
    expect(res.shouldAddToErrorNotebook).toBe(false);
    expect(res.scoreWeight).toBe(1);
  });

  it('deve avaliar resposta incorreta em questão válida e sinalizar inclusão no caderno de erros', () => {
    const res = evaluateQuestionAnswer(baseQuestion, 'B');
    expect(res.status).toBe('incorreta');
    expect(res.isCorrect).toBe(false);
    expect(res.isAnnulled).toBe(false);
    expect(res.shouldAddToErrorNotebook).toBe(true);
    expect(res.scoreWeight).toBe(0);
  });

  it('NUNCA deve classificar questão anulada (gabarito X ou status anulado) como erro comum nem enviar ao caderno de erros', () => {
    const annulledQ: Question = {
      ...baseQuestion,
      gabarito: 'X',
      gabaritoStatus: 'anulado',
    };

    // Usuário marcou qualquer opção em questão anulada
    const res = evaluateQuestionAnswer(annulledQ, 'B');
    expect(res.status).toBe('anulada');
    expect(res.isAnnulled).toBe(true);
    expect(res.shouldAddToErrorNotebook).toBe(false); // CRÍTICO: Não vai para o caderno de erros
    expect(res.scoreWeight).toBe(0); // Didaticamente peso zero (não contamina acertos do aluno)
    expect(res.scoreWeightDidactic).toBe(0);
    expect(res.officialExamCredit).toBe(1); // Crédito concedido pela banca em concurso
    expect(res.countsForDidacticMetrics).toBe(false); // Isola taxa de acerto do estudante
    expect(res.isDidacticHit).toBe(false);
    expect(res.feedbackTitle).toContain('Questão Anulada pela Banca');
  });

  it('deve priorizar gabaritoDefinitivo pós-recurso quando question.gabaritoDefinitivo estiver preenchido', () => {
    const rectifiedQ: Question = {
      ...baseQuestion,
      gabarito: 'A', // Preliminar original era A
      gabaritoDefinitivo: 'D', // Retificado para D pós-recurso
      gabaritoStatus: 'retificado',
    };

    // Aluno marcou o gabarito definitivo D
    const resCorrect = evaluateQuestionAnswer(rectifiedQ, 'D');
    expect(resCorrect.status).toBe('correta');
    expect(resCorrect.isRectified).toBe(true);
    expect(resCorrect.effectiveAnswer).toBe('D');
    expect(resCorrect.isDidacticHit).toBe(true);
    expect(resCorrect.scoreWeightDidactic).toBe(1);
    expect(resCorrect.officialExamCredit).toBe(1);
    expect(resCorrect.feedbackMessage).toContain('retificado');

    // Aluno marcou a opção antiga A (que foi alterada)
    const resOldAnswer = evaluateQuestionAnswer(rectifiedQ, 'A');
    expect(resOldAnswer.status).toBe('incorreta');
    expect(resOldAnswer.isDidacticHit).toBe(false);
    expect(resOldAnswer.scoreWeightDidactic).toBe(0);
    expect(resOldAnswer.shouldAddToErrorNotebook).toBe(true);
  });

  it('deve identificar gabarito retificado pós-recurso e avaliar contra o gabarito definitivo', () => {
    const rectifiedQ: Question = {
      ...baseQuestion,
      gabarito: 'B', // Retificado para B
      gabaritoStatus: 'alterado',
    };

    const resCorrect = evaluateQuestionAnswer(rectifiedQ, 'B');
    expect(resCorrect.status).toBe('correta');
    expect(resCorrect.isRectified).toBe(true);
    expect(resCorrect.feedbackMessage).toContain('retificado');

    const resWrong = evaluateQuestionAnswer(rectifiedQ, 'A');
    expect(resWrong.status).toBe('incorreta');
    expect(resWrong.isRectified).toBe(true);
    expect(resWrong.shouldAddToErrorNotebook).toBe(true);
  });

  it('deve avaliar questões com gabarito pendente de divulgação sem penalizar o aluno', () => {
    const pendingQ: Question = {
      ...baseQuestion,
      gabarito: '',
      gabaritoStatus: 'pendente',
    };

    const res = evaluateQuestionAnswer(pendingQ, 'C');
    expect(res.status).toBe('pendente');
    expect(res.isPending).toBe(true);
    expect(res.countsForDidacticMetrics).toBe(false);
    expect(res.shouldAddToErrorNotebook).toBe(false);
  });

  it('deve sinalizar questão com gabarito preliminar ou pendente de conferência', () => {
    const preliminaryQ: Question = {
      ...baseQuestion,
      gabaritoStatus: 'preliminar',
    };

    const res = evaluateQuestionAnswer(preliminaryQ, 'A');
    expect(res.isPreliminary).toBe(true);
    expect(res.feedbackMessage).toContain('preliminar');
  });

  it('deve avaliar questões de certo/errado com normalização maiúscula', () => {
    const ceQ: Question = {
      ...baseQuestion,
      tipo: 'certo_errado',
      gabarito: 'C',
      alternativas: [
        { id: 'C', text: 'Certo' },
        { id: 'E', text: 'Errado' },
      ],
    };

    const res = evaluateQuestionAnswer(ceQ, 'c');
    expect(res.status).toBe('correta');
    expect(res.isCorrect).toBe(true);
  });

  describe('getEffectiveGabarito (P0.3 Fonte Única de Verdade)', () => {
    it('deve retornar gabaritoDefinitivo quando a questão for retificada (ex: preliminar A e definitivo D)', () => {
      const q: Partial<Question> = {
        gabarito: 'A',
        gabaritoDefinitivo: 'D',
        gabaritoStatus: 'retificado',
      };
      expect(getEffectiveGabarito(q as Question)).toBe('D');
    });

    it('deve retornar X quando a questão for anulada via gabaritoStatus: anulado', () => {
      const q: Partial<Question> = {
        gabarito: 'C',
        gabaritoStatus: 'anulado',
      };
      expect(getEffectiveGabarito(q as Question)).toBe('X');
    });

    it('deve retornar X quando gabarito original for X', () => {
      const q: Partial<Question> = {
        gabarito: 'X',
        gabaritoStatus: 'valido',
      };
      expect(getEffectiveGabarito(q as Question)).toBe('X');
    });

    it('deve retornar o gabarito padrão quando não houver retificação nem anulação', () => {
      const q: Partial<Question> = {
        gabarito: 'B',
        gabaritoStatus: 'valido',
      };
      expect(getEffectiveGabarito(q as Question)).toBe('B');
    });

    it('deve retornar string vazia para questão com gabarito ausente/pendente', () => {
      const q: Partial<Question> = {
        gabarito: '',
        gabaritoStatus: 'pendente',
      };
      expect(getEffectiveGabarito(q as Question)).toBe('');
    });
  });
});
