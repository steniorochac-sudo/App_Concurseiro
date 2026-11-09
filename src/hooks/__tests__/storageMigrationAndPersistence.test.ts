import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuestionBank } from '../useQuestionBank';
import { Question } from '../../types';
import { ALL_IMPORTED_QUESTIONS } from '../../data/allExamsCatalog';

describe('Storage Migration, Persistence & Regression Gate (P1.1, P1.2, P1.3)', () => {
  const STORAGE_KEY = 'concurseiro_user_state';
  const CUSTOM_KEY = `${STORAGE_KEY}_custom_questions`;

  beforeEach(() => {
    localStorage.clear();
  });

  it('1. Deve preservar progresso antigo, favoritos e caderno de erros ao migrar de schema legado (versão 1.0 ou sem versão)', () => {
    // Simula estado legado no localStorage sem campo version (v1.0 implícita)
    const legacyState = {
      attempts: [
        {
          id: 'att-legacy-1',
          questionId: 'q-custom-01',
          selectedOption: 'A',
          isCorrect: true,
          timestamp: 1690000000000,
          timeSpentSeconds: 12,
          mode: 'practice',
        },
        {
          id: 'att-legacy-2',
          questionId: 'q-custom-02',
          selectedOption: 'B',
          isCorrect: true,
          isAnnulled: true, // Questão anulada legada
          timestamp: 1690000005000,
          timeSpentSeconds: 15,
          mode: 'practice',
        },
      ],
      errorNotebook: {
        'q-custom-03': {
          questionId: 'q-custom-03',
          errorCount: 3,
          consecutiveCorrectCount: 1,
          lastAttemptTimestamp: 1690000010000,
        },
      },
      savedQuestionIds: ['q-custom-01', 'q-custom-03'],
      exams: [],
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(legacyState));

    const { result } = renderHook(() => useQuestionBank());

    // Verifica que tentativas foram migradas e preservadas
    expect(result.current.attempts).toHaveLength(2);
    expect(result.current.attempts[0].id).toBe('att-legacy-1');
    // Tentativa anulada foi normalizada na migração (scoreWeight 0, countsForDidacticMetrics false)
    expect(result.current.attempts[1].scoreWeight).toBe(0);
    expect(result.current.attempts[1].countsForDidacticMetrics).toBe(false);

    // Caderno de erros preservado
    expect(result.current.errorNotebook['q-custom-03']).toBeDefined();
    expect(result.current.errorNotebook['q-custom-03'].errorCount).toBe(3);

    // Favoritos preservados
    expect(result.current.savedQuestionIds).toEqual(['q-custom-01', 'q-custom-03']);

    // Verifica que o storage foi carimbado com CURRENT_STORAGE_VERSION = '2.0'
    const storedAfter = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    expect(storedAfter.version).toBe('2.0');
  });

  it('2. Deve aplicar a correção do catálogo oficial quando o localStorage contiver cópia obsoleta com mesmo ID', () => {
    // Pega o ID de uma questão oficial conhecida do catálogo
    const officialQ = ALL_IMPORTED_QUESTIONS[0];
    expect(officialQ).toBeDefined();

    // Simula cópia local corrompida/antiga salva com o mesmo ID
    const staleCustom: Question[] = [
      {
        ...officialQ,
        enunciado: 'ENUNCIADO OBSOLETO QUE DEVE SER SOBRESCRITO PELA VERSÃO OFICIAL AUDITADA',
        gabarito: 'Z', // Gabarito incorreto antigo
      },
      {
        id: 'genuine-user-q999',
        banca: 'Banca Própria',
        ano: 2025,
        orgao: 'Meu Estudo',
        disciplina: 'Direito Civil',
        assunto: 'Contratos',
        enunciado: 'Questão criada manualmente pelo usuário.',
        alternativas: [
          { id: 'A', text: 'Opção A' },
          { id: 'B', text: 'Opção B' },
        ],
        gabarito: 'A',
        explicacao: 'Explicação do usuário.',
        tipo: 'certo_errado',
      },
    ];

    localStorage.setItem(CUSTOM_KEY, JSON.stringify(staleCustom));

    const { result } = renderHook(() => useQuestionBank());

    // A questão no catálogo ativo DEVE ser a oficial corrigida, NUNCA a versão obsoleta
    const activeQ = result.current.questions.find((q) => q.id === officialQ.id);
    expect(activeQ).toBeDefined();
    expect(activeQ?.enunciado).toBe(officialQ.enunciado);
    expect(activeQ?.gabarito).toBe(officialQ.gabarito);

    // A questão genuína do usuário DEVE ser preservada
    const userQ = result.current.questions.find((q) => q.id === 'genuine-user-q999');
    expect(userQ).toBeDefined();
    expect(userQ?.enunciado).toBe('Questão criada manualmente pelo usuário.');
  });

  it('3. Deve garantir importação incremental idempotente (sem duplicação nem perda silenciosa de dados)', () => {
    const { result } = renderHook(() => useQuestionBank());

    const newCustomQuestions: Question[] = [
      {
        id: 'imported-inc-01',
        banca: 'VUNESP',
        ano: 2024,
        orgao: 'TJ-SP',
        disciplina: 'Direito Penal',
        assunto: 'Crimes contra a Administração',
        enunciado: 'Sobre o crime de peculato...',
        alternativas: [
          { id: 'A', text: 'Opção A' },
          { id: 'B', text: 'Opção B' },
        ],
        gabarito: 'A',
        explicacao: 'Gabarito A.',
      },
    ];

    // Primeira importação
    let importRes: { added: number; total: number };
    act(() => {
      importRes = result.current.importQuestions(newCustomQuestions);
    });
    expect(importRes!.added).toBe(1);

    // Segunda importação IDÊNTICA (idempotência)
    act(() => {
      importRes = result.current.importQuestions(newCustomQuestions);
    });
    // Deve reportar 0 adicionadas e não duplicar no array de questões
    expect(importRes!.added).toBe(0);

    const occurrences = result.current.questions.filter((q) => q.id === 'imported-inc-01');
    expect(occurrences).toHaveLength(1);
  });

  it('4. Deve calcular taxa de acerto didático sem contaminação por questões anuladas', () => {
    const { result } = renderHook(() => useQuestionBank());

    const officialQ = ALL_IMPORTED_QUESTIONS[0]; // Questão válida
    const annulledQ: Question = {
      id: 'mock-annulled-q-stats',
      banca: 'FEPESE',
      ano: 2023,
      orgao: 'PMBC',
      disciplina: 'Direito Tributário',
      assunto: 'Taxas',
      enunciado: 'Questão que veio a ser anulada.',
      alternativas: [
        { id: 'A', text: 'A' },
        { id: 'B', text: 'B' },
      ],
      gabarito: 'X',
      gabaritoStatus: 'anulado',
      explicacao: 'Anulada.',
    };

    act(() => {
      result.current.importQuestions([annulledQ]);
    });

    // 1 resposta correta em questão válida
    act(() => {
      result.current.recordAttempt(officialQ.id, officialQ.gabarito, 10, 'practice');
    });

    // 1 resposta em questão anulada
    act(() => {
      result.current.recordAttempt('mock-annulled-q-stats', 'A', 5, 'practice');
    });

    const stats = result.current.stats;
    expect(stats.totalAnswered).toBe(2);
    expect(stats.totalAnnulled).toBe(1);
    expect(stats.totalCorrect).toBe(1);
    // Taxa de acerto didática estrita: 1 acerto sobre 1 questão válida respondida = 100%
    expect(stats.accuracyRate).toBe(100);
    // Pontos oficiais da banca: 1 acerto + 1 crédito por questão anulada = 2 pontos
    expect(stats.totalOfficialCredits).toBe(2);
  });
});
