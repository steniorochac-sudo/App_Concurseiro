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
  });

  it('deve limpar as anotações do caderno de erros e favoritos', () => {
    const { result } = renderHook(() => useQuestionBank());
    const firstQ = result.current.questions[0];

    act(() => {
      result.current.recordAttempt(firstQ.id, 'Z', 10, 'practice');
      result.current.toggleSaveQuestion(firstQ.id);
    });
    expect(result.current.errorNotebookQuestions.length).toBe(1);
    expect(result.current.savedQuestions.length).toBe(1);

    act(() => {
      result.current.clearAllQuestions();
    });

    expect(result.current.errorNotebookQuestions.length).toBe(0);
    expect(result.current.savedQuestions.length).toBe(0);
  });

  it('deve importar novas questões JSON customizadas', () => {
    const { result } = renderHook(() => useQuestionBank());
    const initialTotal = result.current.questions.length;

    const newQuestion: Question = {
      id: "q-custom-unique-999",
      banca: "TEST",
      ano: 2024,
      orgao: "Órgão Teste",
      disciplina: "Direito Administrativo",
      assunto: "Atos",
      enunciado: "Enunciado de teste para importação",
      alternativas: [
        { id: "A", text: "Opção A" },
        { id: "B", text: "Opção B" }
      ],
      gabarito: "A",
      explicacao: "Resolução de teste"
    };

    act(() => {
      result.current.importQuestions([newQuestion]);
    });

    expect(result.current.questions.length).toBe(initialTotal + 1);
    expect(result.current.questions[0].id).toBe("q-custom-unique-999");
  });
});
