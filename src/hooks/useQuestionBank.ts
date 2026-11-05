import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Question, 
  UserAttempt, 
  ExamConfig, 
  ExamSession, 
  UserStats 
} from '../types';
import { INITIAL_QUESTIONS } from '../data/mockQuestions';
import { ALL_IMPORTED_QUESTIONS, PRELOADED_EXAMS } from '../data/allExamsCatalog';

const STORAGE_KEY = 'concurseiro_user_state';

export function useQuestionBank() {
  // Questões customizadas que o usuário importou manualmente por arquivo
  const [customQuestions, setCustomQuestions] = useState<Question[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_custom_questions`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Estado do progresso do usuário (tentativas, erros, simulados, favoritos)
  const [userState, setUserState] = useState<{
    attempts: UserAttempt[];
    errorNotebook: Record<string, { questionId: string; errorCount: number; consecutiveCorrectCount: number; lastAttemptTimestamp: number }>;
    savedQuestionIds: string[];
    exams: ExamSession[];
  }>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          attempts: parsed.attempts || [],
          errorNotebook: parsed.errorNotebook || {},
          savedQuestionIds: parsed.savedQuestionIds || [],
          exams: parsed.exams || [],
        };
      }
    } catch (e) {
      console.error('Erro ao carregar dados do LocalStorage:', e);
    }
    return {
      attempts: [],
      errorNotebook: {},
      savedQuestionIds: [],
      exams: [],
    };
  });

  const [currentExam, setCurrentExam] = useState<ExamSession | null>(null);

  // Sincronização em Tempo Real (Live Hot Reload):
  // As questões do catálogo (ALL_IMPORTED_QUESTIONS) são SEMPRE lidas em tempo real.
  // Qualquer alteração nos arquivos reflete instantaneamente no browser/celular sem travar em cache antigo!
  const questions = useMemo<Question[]>(() => {
    const baseList = ALL_IMPORTED_QUESTIONS.length > 0 ? ALL_IMPORTED_QUESTIONS : INITIAL_QUESTIONS;
    const customMap = new Map(customQuestions.map(q => [q.id, q]));
    
    // Mescla as questões base com as customizadas (customizadas têm precedência de ID)
    const merged = baseList.map(q => customMap.get(q.id) || q);
    
    // Adiciona questões customizadas que não existiam no catálogo base
    const baseIds = new Set(baseList.map(q => q.id));
    const extraCustom = customQuestions.filter(q => !baseIds.has(q.id));
    
    return [...extraCustom, ...merged];
  }, [customQuestions]);

  // Persiste progresso do usuário
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.error('Erro ao salvar progresso:', e);
    }
  }, [userState]);

  // Persiste questões customizadas
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_custom_questions`, JSON.stringify(customQuestions));
    } catch (e) {
      console.error('Erro ao salvar questões customizadas:', e);
    }
  }, [customQuestions]);

  // Registrar tentativa de resposta
  const recordAttempt = useCallback((
    questionId: string, 
    selectedOption: string, 
    timeSpentSeconds: number = 5,
    mode: 'practice' | 'exam' | 'notebook' = 'practice',
    examId?: string
  ): UserAttempt | null => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return null;

    const isCorrect = selectedOption.toUpperCase() === question.gabarito.toUpperCase();
    const newAttempt: UserAttempt = {
      id: `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      questionId,
      selectedOption,
      isCorrect,
      timestamp: Date.now(),
      timeSpentSeconds,
      mode,
      examId
    };

    setUserState(prev => {
      const updatedNotebook = { ...prev.errorNotebook };

      if (!isCorrect) {
        const currentItem = updatedNotebook[questionId] || {
          questionId,
          errorCount: 0,
          consecutiveCorrectCount: 0,
          lastAttemptTimestamp: Date.now()
        };

        updatedNotebook[questionId] = {
          ...currentItem,
          errorCount: currentItem.errorCount + 1,
          consecutiveCorrectCount: 0,
          lastAttemptTimestamp: Date.now()
        };
      } else {
        if (updatedNotebook[questionId]) {
          const newConsecutive = updatedNotebook[questionId].consecutiveCorrectCount + 1;
          if (newConsecutive >= 2) {
            delete updatedNotebook[questionId];
          } else {
            updatedNotebook[questionId] = {
              ...updatedNotebook[questionId],
              consecutiveCorrectCount: newConsecutive,
              lastAttemptTimestamp: Date.now()
            };
          }
        }
      }

      return {
        ...prev,
        attempts: [newAttempt, ...prev.attempts],
        errorNotebook: updatedNotebook
      };
    });

    return newAttempt;
  }, [questions]);

  // Alternar favoritos
  const toggleSaveQuestion = useCallback((questionId: string) => {
    setUserState(prev => {
      const exists = prev.savedQuestionIds.includes(questionId);
      const updatedSaved = exists
        ? prev.savedQuestionIds.filter(id => id !== questionId)
        : [...prev.savedQuestionIds, questionId];

      return {
        ...prev,
        savedQuestionIds: updatedSaved
      };
    });
  }, []);

  // Importar novas questões via arquivo
  const importQuestions = useCallback((newQuestions: Question[]): { added: number; total: number } => {
    let addedCount = 0;
    const existingIds = new Set(questions.map(q => q.id));
    const validNew = newQuestions.filter(q => {
      if (!q.id || !q.enunciado || !q.alternativas || !q.gabarito) return false;
      if (existingIds.has(q.id)) return false;
      return true;
    });

    addedCount = validNew.length;
    if (addedCount > 0) {
      setCustomQuestions(prev => [...validNew, ...prev]);
    }

    return { added: addedCount, total: questions.length + addedCount };
  }, [questions]);

  // Carregar prova pré-carregada
  const loadPreloadedExam = useCallback((examId: string): number => {
    const exam = PRELOADED_EXAMS.find(e => e.id === examId);
    if (!exam) return 0;
    const res = importQuestions(exam.questions);
    return res.added;
  }, [importQuestions]);

  // Carregar todas as provas pré-carregadas
  const loadAllPreloadedExams = useCallback((): number => {
    const existingIds = new Set(questions.map(q => q.id));
    const validNew = ALL_IMPORTED_QUESTIONS.filter(q => !existingIds.has(q.id));
    if (validNew.length > 0) {
      setCustomQuestions(prev => [...validNew, ...prev]);
    }
    return validNew.length;
  }, [questions]);

  // Limpar questões customizadas e progresso
  const clearAllQuestions = useCallback(() => {
    setCustomQuestions([]);
    setUserState(prev => ({
      ...prev,
      errorNotebook: {},
      savedQuestionIds: []
    }));
  }, []);

  // Restaurar padrão de fábrica
  const resetToFactoryDefaults = useCallback(() => {
    setCustomQuestions([]);
    setUserState({
      attempts: [],
      errorNotebook: {},
      savedQuestionIds: [],
      exams: [],
    });
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}_custom_questions`);
  }, []);

  // Iniciar Simulado
  const startExam = useCallback((config: ExamConfig): ExamSession => {
    let pool = [...questions];

    if (config.disciplina && config.disciplina !== 'todas') {
      pool = pool.filter(q => q.disciplina.toLowerCase() === config.disciplina?.toLowerCase());
    }

    if (config.banca && config.banca !== 'todas') {
      pool = pool.filter(q => q.banca.toLowerCase() === config.banca?.toLowerCase());
    }

    if (config.formato && config.formato !== 'todas') {
      if (config.formato === 'certo_errado') {
        pool = pool.filter(q => q.tipo === 'certo_errado' || (q.alternativas.length === 2 && ['C', 'E'].includes(q.alternativas[0]?.id)));
      } else if (config.formato === 'multipla_escolha') {
        pool = pool.filter(q => q.tipo !== 'certo_errado' && q.alternativas.length > 2);
      }
    }

    if (config.examId && config.examId !== 'todos') {
      pool = pool.filter(q => q.examId === config.examId);
    }

    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(config.totalQuestions, pool.length));

    const newSession: ExamSession = {
      id: `exam-${Date.now()}`,
      config,
      questionIds: selected.map(q => q.id),
      answers: {},
      startTime: Date.now(),
      status: 'in_progress'
    };

    setCurrentExam(newSession);
    return newSession;
  }, [questions]);

  // Responder questão no Simulado
  const submitExamAnswer = useCallback((questionId: string, selectedOption: string, timeSpentSeconds: number) => {
    if (!currentExam) return;

    setCurrentExam(prev => {
      if (!prev) return null;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: { selectedOption, timeSpentSeconds }
        }
      };
    });
  }, [currentExam]);

  // Finalizar Simulado
  const finishExam = useCallback((): ExamSession | null => {
    if (!currentExam) return null;

    const endTime = Date.now();
    const completedSession: ExamSession = {
      ...currentExam,
      endTime,
      status: 'completed'
    };

    Object.entries(completedSession.answers).forEach(([qId, ans]) => {
      recordAttempt(qId, ans.selectedOption, ans.timeSpentSeconds, 'exam', completedSession.id);
    });

    setUserState(prev => ({
      ...prev,
      exams: [completedSession, ...prev.exams]
    }));

    setCurrentExam(null);
    return completedSession;
  }, [currentExam, recordAttempt]);

  // Estatísticas consolidadas
  const stats = useMemo<UserStats>(() => {
    const attempts = userState.attempts;
    const totalAnswered = attempts.length;
    const totalCorrect = attempts.filter(a => a.isCorrect).length;
    const accuracyRate = totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : 0;
    
    const totalTime = attempts.reduce((acc, curr) => acc + (curr.timeSpentSeconds || 0), 0);
    const averageTimeSeconds = totalAnswered > 0 ? Math.round(totalTime / totalAnswered) : 0;

    const accuracyBySubject: Record<string, { total: number; correct: number; accuracy: number }> = {};
    const accuracyByBoard: Record<string, { total: number; correct: number; accuracy: number }> = {};

    attempts.forEach(att => {
      const q = questions.find(item => item.id === att.questionId);
      if (!q) return;

      if (!accuracyBySubject[q.disciplina]) {
        accuracyBySubject[q.disciplina] = { total: 0, correct: 0, accuracy: 0 };
      }
      accuracyBySubject[q.disciplina].total += 1;
      if (att.isCorrect) accuracyBySubject[q.disciplina].correct += 1;
      accuracyBySubject[q.disciplina].accuracy = Math.round(
        (accuracyBySubject[q.disciplina].correct / accuracyBySubject[q.disciplina].total) * 100
      );

      if (!accuracyByBoard[q.banca]) {
        accuracyByBoard[q.banca] = { total: 0, correct: 0, accuracy: 0 };
      }
      accuracyByBoard[q.banca].total += 1;
      if (att.isCorrect) accuracyByBoard[q.banca].correct += 1;
      accuracyByBoard[q.banca].accuracy = Math.round(
        (accuracyByBoard[q.banca].correct / accuracyByBoard[q.banca].total) * 100
      );
    });

    return {
      totalAnswered,
      totalCorrect,
      accuracyRate: Math.round(accuracyRate * 10) / 10,
      averageTimeSeconds,
      accuracyBySubject,
      accuracyByBoard
    };
  }, [userState.attempts, questions]);

  // Questões no Caderno de Erros
  const errorNotebookQuestions = useMemo(() => {
    const errorIds = Object.keys(userState.errorNotebook);
    return questions.filter(q => errorIds.includes(q.id));
  }, [userState.errorNotebook, questions]);

  // Favoritas
  const savedQuestions = useMemo(() => {
    return questions.filter(q => userState.savedQuestionIds.includes(q.id));
  }, [userState.savedQuestionIds, questions]);

  return {
    questions,
    attempts: userState.attempts,
    errorNotebook: userState.errorNotebook,
    errorNotebookQuestions,
    savedQuestionIds: userState.savedQuestionIds,
    savedQuestions,
    exams: userState.exams,
    currentExam,
    stats,
    recordAttempt,
    toggleSaveQuestion,
    importQuestions,
    loadPreloadedExam,
    loadAllPreloadedExams,
    clearAllQuestions,
    resetToFactoryDefaults,
    startExam,
    submitExamAnswer,
    finishExam
  };
}
