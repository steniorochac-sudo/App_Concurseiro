import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuestionBank } from '../useQuestionBank';
import { Question } from '../../types';

describe('useQuestionBank Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve inicializar com o banco de questões padrão e estatísticas zeradas', () => {
    const { result } = renderHook(() => useQuestionBank());
    expect(result.current.questions.length).toBeGreaterThan(0);
    expect(result.current.attempts.length).toBe(0);
    expect(result.current.stats.totalAnswered).toBe(0);
    expect(result.current.stats.accuracyRate).toBe(0);
  });

  it('deve registrar uma tentativa correta e atualizar a taxa de acerto para 100%', () => {
    const { result } = renderHook(() => useQuestionBank());
    const firstQ = result.current.questions[0];

    act(() => {
      result.current.recordAttempt(firstQ.id, firstQ.gabarito, 10, 'practice');
    });

    expect(result.current.attempts.length).toBe(1);
    expect(result.current.attempts[0].isCorrect).toBe(true);
    expect(result.current.stats.totalAnswered).toBe(1);
    expect(result.current.stats.totalCorrect).toBe(1);
    expect(result.current.stats.accuracyRate).toBe(100);
  });

  it('deve adicionar a questão ao Caderno de Erros se a resposta for incorreta', () => {
    const { result } = renderHook(() => useQuestionBank());
    const firstQ = result.current.questions[0];
    const wrongOption = firstQ.gabarito === 'A' ? 'B' : 'A';

    act(() => {
      result.current.recordAttempt(firstQ.id, wrongOption, 10, 'practice');
    });

    expect(result.current.errorNotebook[firstQ.id]).toBeDefined();
    expect(result.current.errorNotebook[firstQ.id].errorCount).toBe(1);
    expect(result.current.errorNotebookQuestions.map(q => q.id)).toContain(firstQ.id);
  });

  it('EXIGÊNCIA /GRILL-ME: questão só deve sair do Caderno de Erros após 2 acertos consecutivos', () => {
    const { result } = renderHook(() => useQuestionBank());
    const firstQ = result.current.questions[0];
    const wrongOption = firstQ.gabarito === 'A' ? 'B' : 'A';

    act(() => {
      result.current.recordAttempt(firstQ.id, wrongOption, 10, 'practice');
    });
    expect(result.current.errorNotebook[firstQ.id]).toBeDefined();
    expect(result.current.errorNotebook[firstQ.id].consecutiveCorrectCount).toBe(0);

    act(() => {
      result.current.recordAttempt(firstQ.id, firstQ.gabarito, 10, 'notebook');
    });
    expect(result.current.errorNotebook[firstQ.id]).toBeDefined();
    expect(result.current.errorNotebook[firstQ.id].consecutiveCorrectCount).toBe(1);

    act(() => {
      result.current.recordAttempt(firstQ.id, firstQ.gabarito, 10, 'notebook');
    });
    expect(result.current.errorNotebook[firstQ.id]).toBeUndefined();
    expect(result.current.errorNotebookQuestions.map(q => q.id)).not.toContain(firstQ.id);
  });

  it('deve alternar status de favorita da questão', () => {
    const { result } = renderHook(() => useQuestionBank());
    const firstQ = result.current.questions[0];

    expect(result.current.savedQuestionIds).not.toContain(firstQ.id);

    act(() => {
      result.current.toggleSaveQuestion(firstQ.id);
    });
    expect(result.current.savedQuestionIds).toContain(firstQ.id);

    act(() => {
      result.current.toggleSaveQuestion(firstQ.id);
    });
    expect(result.current.savedQuestionIds).not.toContain(firstQ.id);
  });

  it('deve iniciar um simulado respeitando o filtro de Certo/Errado', () => {
    const { result } = renderHook(() => useQuestionBank());

    let session: any;
    act(() => {
      session = result.current.startExam({
        id: 'cfg-ce',
        title: 'Simulado C/E',
        formato: 'certo_errado',
        totalQuestions: 10,
      });
    });

    expect(session).toBeDefined();
    expect(session.questionIds.length).toBe(10);
    const selectedQuestions = session.questionIds.map((id: string) =>
      result.current.questions.find((q) => q.id === id)
    );
    expect(
      selectedQuestions.every(
        (q: Question) =>
          q.tipo === 'certo_errado' ||
          (q.alternativas.length === 2 && ['C', 'E'].includes(q.alternativas[0]?.id))
      )
    ).toBe(true);
  });

  it('deve iniciar um simulado respeitando o filtro de Múltipla Escolha', () => {
    const { result } = renderHook(() => useQuestionBank());

    let session: any;
    act(() => {
      session = result.current.startExam({
        id: 'cfg-me',
        title: 'Simulado M/E',
        formato: 'multipla_escolha',
        totalQuestions: 10,
      });
    });

    expect(session).toBeDefined();
    expect(session.questionIds.length).toBe(10);
    const selectedQuestions = session.questionIds.map((id: string) =>
      result.current.questions.find((q) => q.id === id)
    );
    expect(
      selectedQuestions.every(
        (q: Question) =>
          q.tipo !== 'certo_errado' && q.alternativas.length >= 4
      )
    ).toBe(true);
  });

  it('deve filtrar simulado por examId específico', () => {
    const { result } = renderHook(() => useQuestionBank());

    let session: any;
    act(() => {
      session = result.current.startExam({
        id: 'cfg-exam',
        title: 'Simulado VUNESP',
        examId: 'vunesp-2014-pmrp-auditor-fiscal-tributario',
        totalQuestions: 5,
      });
    });

    expect(session).toBeDefined();
    expect(session.questionIds.length).toBe(5);
    const selectedQuestions = session.questionIds.map((id: string) =>
      result.current.questions.find((q) => q.id === id)
    );
    expect(
      selectedQuestions.every(
        (q: Question) => q.examId === 'vunesp-2014-pmrp-auditor-fiscal-tributario'
      )
    ).toBe(true);
  });

  // Novos testes P0.2 / P1.1 / P1.2
  it('P0.2: NUNCA deve adicionar questão anulada (gabarito X ou status anulado) ao Caderno de Erros', () => {
    const { result } = renderHook(() => useQuestionBank());
    
    // Importa uma questão anulada
    const annulledQ: Question = {
      id: 'custom-annulled-q1',
      banca: 'CEBRASPE',
      ano: 2024,
      orgao: 'INSS',
      disciplina: 'Seguridade Social',
      assunto: 'Benefícios',
      enunciado: 'Questão anulada pela banca organizadora.',
      alternativas: [
        { id: 'C', text: 'Certo' },
        { id: 'E', text: 'Errado' },
      ],
      gabarito: 'X',
      gabaritoStatus: 'anulado',
      explicacao: 'Anulada',
      tipo: 'certo_errado',
    };

    act(() => {
      result.current.importQuestions([annulledQ]);
    });

    // Usuário responde 'C'
    act(() => {
      result.current.recordAttempt('custom-annulled-q1', 'C', 5, 'practice');
    });

    expect(result.current.attempts.length).toBe(1);
    expect(result.current.attempts[0].isAnnulled).toBe(true);
    // CRÍTICO: Não foi inserida no caderno de erros!
    expect(result.current.errorNotebook['custom-annulled-q1']).toBeUndefined();
    expect(result.current.errorNotebookQuestions.length).toBe(0);
    // Estatísticas identificam questão anulada
    expect(result.current.stats.totalAnnulled).toBe(1);
  });

  it('P1.1: Catálogo oficial deve ter precedência estrita sobre cópias desatualizadas em localStorage', () => {
    // Simula que no localStorage havia uma cópia antiga de questão oficial com enunciado errado
    const firstOfficial = renderHook(() => useQuestionBank()).result.current.questions[0];
    const staleLocalCopy: Question = {
      ...firstOfficial,
      enunciado: 'ENUNCIADO ANTIGO E DESATUALIZADO DO CACHE LOCAL',
    };
    localStorage.setItem(
      'concurseiro_user_state_custom_questions',
      JSON.stringify([staleLocalCopy])
    );

    const { result } = renderHook(() => useQuestionBank());
    const currentQ = result.current.questions.find((q) => q.id === firstOfficial.id);
    
    // O catálogo oficial prevalece sobre a cópia defasada
    expect(currentQ?.enunciado).toBe(firstOfficial.enunciado);
    expect(currentQ?.enunciado).not.toBe('ENUNCIADO ANTIGO E DESATUALIZADO DO CACHE LOCAL');
  });

  it('P1.2: Importação incremental de ExamDocumentV2 deve atualizar contagens de added e updated de forma pura', () => {
    const { result } = renderHook(() => useQuestionBank());
    const docDraft = {
      schemaVersion: '2.0' as const,
      exam: {
        id: 'exam-incremental-test',
        titulo: 'Exame de Teste Incremental',
        orgao: 'TJ',
        banca: 'VUNESP',
        cargo: 'Escrevente',
        ano: 2024,
        caderno: 'Tipo 1',
        formatoQuestoes: 'multipla_escolha_5' as const,
        totalQuestoes: 1,
        totalAnuladas: 0,
        homologado: false,
        auditTrail: {
          arquivoProvaPdf: 'p.pdf',
          arquivoGabaritoPdf: 'g.pdf',
          secaoGabarito: 'Geral',
          paginaGabarito: 1,
          tipoGabarito: 'definitivo' as const,
          responsavelAuditoria: 'Tester',
        },
      },
      questoes: [
        {
          id: 'incremental-q01',
          numeroOriginal: 1,
          tipo: 'multipla_escolha' as const,
          enunciado: 'Questão 1 lote 1',
          alternativas: [
            { id: 'A', text: '1' },
            { id: 'B', text: '2' },
            { id: 'C', text: '3' },
            { id: 'D', text: '4' },
            { id: 'E', text: '5' },
          ],
          gabaritoOficial: 'A',
          gabaritoStatus: 'valido' as const,
          metadados: { disciplina: 'Português', paginaOrigem: 1 },
        },
      ],
    };

    let importRes: any;
    act(() => {
      importRes = result.current.importExamDocument(docDraft);
    });

    expect(importRes.added).toBe(1);
    expect(importRes.updated).toBe(0);

    // Reimporta com atualização de enunciado
    const docDraftUpdated = {
      ...docDraft,
      questoes: [
        {
          ...docDraft.questoes[0],
          enunciado: 'Questão 1 lote 1 atualizada',
        },
      ],
    };

    act(() => {
      importRes = result.current.importExamDocument(docDraftUpdated);
    });

    expect(importRes.added).toBe(0);
    expect(importRes.updated).toBe(1);
    const updatedQ = result.current.questions.find((q) => q.id === 'incremental-q01');
    expect(updatedQ?.enunciado).toBe('Questão 1 lote 1 atualizada');
  });
});
