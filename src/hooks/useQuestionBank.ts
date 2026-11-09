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
import { ExamDocumentV2 } from '../types/examSchemaV2';
import { examDocV2ToQuestions } from '../data/examsRegistry';
import { evaluateQuestionAnswer } from '../utils/answerEvaluation';

const STORAGE_KEY = 'concurseiro_user_state';
const CURRENT_STORAGE_VERSION = '2.0';

export const BACKUP_PROGRESS_PREFIX = 'concurseiro_backup_progress_';
export const BACKUP_PROGRESS_LATEST = 'concurseiro_backup_progress_latest';
export const BACKUP_PROGRESS_REGISTRY = 'concurseiro_progress_backups_registry';

export const BACKUP_CUSTOM_PREFIX = 'concurseiro_backup_custom_questions_';
export const BACKUP_CUSTOM_LATEST = 'concurseiro_backup_custom_questions_latest';
export const BACKUP_CUSTOM_REGISTRY = 'concurseiro_custom_questions_backups_registry';

export interface ProgressBackupSnapshot {
  backupType: 'user_progress_backup';
  backupId: string;
  timestamp: number;
  createdAt: string;
  version: string;
  sourceVersion: string;
  reason: string;
  data: {
    attempts: UserAttempt[];
    errorNotebook: Record<string, any>;
    savedQuestionIds: string[];
    exams: ExamSession[];
  };
}

export interface CustomQuestionsBackupSnapshot {
  backupType: 'custom_questions_backup';
  backupId: string;
  timestamp: number;
  createdAt: string;
  reason: string;
  stats: {
    totalQuestionsBefore: number;
    staleQuestionsRemovedCount: number;
    activeQuestionsRemainingCount: number;
  };
  staleQuestionsRemoved: Question[];
  activeQuestionsRemaining: Question[];
  fullOriginalQuestions: Question[];
}

let backupSequence = 0;

export function generateUniqueBackupKey(prefix: string, timestamp = Date.now()): string {
  backupSequence = (backupSequence + 1) % 1000000;
  const seqStr = String(backupSequence).padStart(6, '0');
  const entropy = Math.random().toString(36).substring(2, 8);
  return `${prefix}${timestamp}_${seqStr}_${entropy}`;
}

export function saveProgressBackup(data: any, sourceVersion: string, reason: string): string {
  const timestamp = Date.now();
  const key = generateUniqueBackupKey(BACKUP_PROGRESS_PREFIX, timestamp);
  const backupId = `progress-${key.replace(BACKUP_PROGRESS_PREFIX, '')}`;
  const snapshot: ProgressBackupSnapshot = {
    backupType: 'user_progress_backup',
    backupId,
    timestamp,
    createdAt: new Date(timestamp).toISOString(),
    version: CURRENT_STORAGE_VERSION,
    sourceVersion,
    reason,
    data,
  };

  // Persiste snapshot e atualiza ponteiros; lança erro se storage falhar para aborto seguro
  localStorage.setItem(key, JSON.stringify(snapshot));
  localStorage.setItem(BACKUP_PROGRESS_LATEST, key);

  const registryRaw = localStorage.getItem(BACKUP_PROGRESS_REGISTRY);
  const registry: string[] = registryRaw ? JSON.parse(registryRaw) : [];
  if (!registry.includes(key)) {
    registry.push(key);
    localStorage.setItem(BACKUP_PROGRESS_REGISTRY, JSON.stringify(registry));
  }

  return key;
}

export function saveCustomQuestionsBackup(
  originalList: Question[],
  staleItems: Question[],
  filteredItems: Question[],
  reason: string
): string {
  const timestamp = Date.now();
  const key = generateUniqueBackupKey(BACKUP_CUSTOM_PREFIX, timestamp);
  const backupId = `custom-q-${key.replace(BACKUP_CUSTOM_PREFIX, '')}`;
  const snapshot: CustomQuestionsBackupSnapshot = {
    backupType: 'custom_questions_backup',
    backupId,
    timestamp,
    createdAt: new Date(timestamp).toISOString(),
    reason,
    stats: {
      totalQuestionsBefore: originalList.length,
      staleQuestionsRemovedCount: staleItems.length,
      activeQuestionsRemainingCount: filteredItems.length,
    },
    staleQuestionsRemoved: staleItems,
    activeQuestionsRemaining: filteredItems,
    fullOriginalQuestions: originalList,
  };

  // Persiste snapshot e atualiza ponteiros; lança erro se storage falhar para aborto seguro
  localStorage.setItem(key, JSON.stringify(snapshot));
  localStorage.setItem(BACKUP_CUSTOM_LATEST, key);
  localStorage.setItem(`${STORAGE_KEY}_custom_questions_backup`, JSON.stringify(staleItems));

  const registryRaw = localStorage.getItem(BACKUP_CUSTOM_REGISTRY);
  const registry: string[] = registryRaw ? JSON.parse(registryRaw) : [];
  if (!registry.includes(key)) {
    registry.push(key);
    localStorage.setItem(BACKUP_CUSTOM_REGISTRY, JSON.stringify(registry));
  }

  return key;
}

export function useQuestionBank() {
  // Questões customizadas que o usuário importou manualmente por arquivo ou IA
  const [customQuestions, setCustomQuestions] = useState<Question[]>(() => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY}_custom_questions`);
      if (!stored) return [];
      const parsed: Question[] = JSON.parse(stored);
      // Remove cópias obsoletas de questões oficiais do catálogo com BACKUP RECUPERÁVEL (P1)
      const officialIds = new Set(ALL_IMPORTED_QUESTIONS.map(q => q.id));
      const filtered = parsed.filter(q => !officialIds.has(q.id));
      if (filtered.length !== parsed.length) {
        const staleItems = parsed.filter(q => officialIds.has(q.id));
        try {
          saveCustomQuestionsBackup(
            parsed,
            staleItems,
            filtered,
            'Limpeza e isolamento de cópias locais obsoletas de questões oficiais do acervo'
          );
          localStorage.setItem(`${STORAGE_KEY}_custom_questions`, JSON.stringify(filtered));
          return filtered;
        } catch (backupErr) {
          console.error(
            'Gravação obrigatória do backup de questões customizadas falhou. Abortando limpeza para preservar dados intactos.',
            backupErr
          );
          // Falha segura (Correção B): NÃO substitui nem poda dados ativos se o backup não for persistido com sucesso
          return parsed;
        }
      }
      return filtered;
    } catch {
      return [];
    }
  });

  // Estado do progresso do usuário (tentativas, erros, simulados, favoritos)
  const [userState, setUserState] = useState<{
    version: string;
    attempts: UserAttempt[];
    errorNotebook: Record<string, { questionId: string; errorCount: number; consecutiveCorrectCount: number; lastAttemptTimestamp: number }>;
    savedQuestionIds: string[];
    exams: ExamSession[];
  }>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const version = parsed.version || '1.0';

        // Mapa de reconciliação histórica com o acervo oficial (P1 / P0.2)
        const allKnownQuestions = new Map<string, Question>();
        ALL_IMPORTED_QUESTIONS.forEach(q => allKnownQuestions.set(q.id, q));
        INITIAL_QUESTIONS.forEach(q => {
          if (!allKnownQuestions.has(q.id)) allKnownQuestions.set(q.id, q);
        });

        // Migração controlada e reconciliação histórica de tentativas com auditoria estrita
        let attempts: UserAttempt[] = parsed.attempts || [];
        attempts = attempts.map(att => {
          const targetQ = allKnownQuestions.get(att.questionId);
          if (targetQ) {
            const evalResult = evaluateQuestionAnswer(targetQ, att.selectedOption);
            const needsReconciliation =
              att.isAnnulled !== evalResult.isAnnulled ||
              att.isCorrect !== evalResult.isCorrect ||
              att.scoreWeight !== evalResult.scoreWeight ||
              att.officialExamCredit !== evalResult.officialExamCredit;

            if (needsReconciliation) {
              return {
                ...att,
                isCorrect: evalResult.isCorrect,
                isAnnulled: evalResult.isAnnulled,
                scoreWeight: evalResult.scoreWeight,
                officialExamCredit: evalResult.officialExamCredit,
                countsForDidacticMetrics: evalResult.countsForDidacticMetrics,
                // Preservação estrita do registro original antes da reconciliação (Pendência 2)
                originalAttempt: att.originalAttempt || {
                  isCorrect: att.isCorrect,
                  isAnnulled: att.isAnnulled,
                  scoreWeight: att.scoreWeight,
                  officialExamCredit: att.officialExamCredit,
                  countsForDidacticMetrics: att.countsForDidacticMetrics,
                },
                reconciliationAuditTrail: {
                  reconciledAt: Date.now(),
                  reason: evalResult.isAnnulled
                    ? 'Reconciliação automática: questão oficialmente anulada no gabarito definitivo.'
                    : 'Reconciliação automática: gabarito oficial retificado pós-recurso.',
                  previousValues: {
                    isCorrect: att.isCorrect,
                    isAnnulled: att.isAnnulled,
                    scoreWeight: att.scoreWeight,
                    officialExamCredit: att.officialExamCredit,
                    countsForDidacticMetrics: att.countsForDidacticMetrics,
                  },
                },
              };
            }
            return att;
          }
          if (att.isAnnulled) {
            return {
              ...att,
              scoreWeight: 0,
              officialExamCredit: 1,
              countsForDidacticMetrics: false,
            };
          }
          return {
            ...att,
            scoreWeight: att.scoreWeight ?? (att.isCorrect ? 1 : 0),
            officialExamCredit: att.officialExamCredit ?? (att.isCorrect ? 1 : 0),
            countsForDidacticMetrics: att.countsForDidacticMetrics ?? true,
          };
        });

        const migratedState = {
          version: CURRENT_STORAGE_VERSION,
          attempts,
          errorNotebook: parsed.errorNotebook || {},
          savedQuestionIds: parsed.savedQuestionIds || [],
          exams: parsed.exams || [],
        };

        if (version !== CURRENT_STORAGE_VERSION) {
          try {
            saveProgressBackup(
              parsed,
              version,
              `Migração controlada de versão legada (${version} -> ${CURRENT_STORAGE_VERSION})`
            );
            localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedState));
          } catch (backupErr) {
            console.error(
              'Gravação obrigatória do backup de progresso falhou. Abortando migração para preservar dados intactos.',
              backupErr
            );
            // Falha segura (Correção B): se o backup obrigatório falhar, preserva estado do usuário intacto sem sobrescrever
            return {
              version: parsed.version || '1.0',
              attempts: parsed.attempts || [],
              errorNotebook: parsed.errorNotebook || {},
              savedQuestionIds: parsed.savedQuestionIds || [],
              exams: parsed.exams || [],
            };
          }
        }

        return migratedState;
      }
    } catch (e) {
      console.error('Erro ao carregar dados do LocalStorage:', e);
    }
    return {
      version: CURRENT_STORAGE_VERSION,
      attempts: [],
      errorNotebook: {},
      savedQuestionIds: [],
      exams: [],
    };
  });

  const [currentExam, setCurrentExam] = useState<ExamSession | null>(null);

  // Sincronização e Precedência do Catálogo Oficial (P1.1):
  // O catálogo oficial (ALL_IMPORTED_QUESTIONS) é SEMPRE a fonte de verdade para questões oficiais.
  // Questões customizadas em cache local NUNCA mascaram correções ou gabaritos retificados do catálogo!
  const questions = useMemo<Question[]>(() => {
    const baseList = ALL_IMPORTED_QUESTIONS.length > 0 ? ALL_IMPORTED_QUESTIONS : INITIAL_QUESTIONS;
    const baseIds = new Set(baseList.map(q => q.id));
    
    // Filtra apenas questões genuinamente customizadas do usuário (que não pertencem ao catálogo oficial)
    const genuineCustom = customQuestions.filter(q => !baseIds.has(q.id));
    
    return [...genuineCustom, ...baseList];
  }, [customQuestions]);

  // Persiste progresso do usuário
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...userState, version: CURRENT_STORAGE_VERSION }));
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

  // Registrar tentativa de resposta com Mecanismo Único de Avaliação (P0.2)
  const recordAttempt = useCallback((
    questionId: string, 
    selectedOption: string, 
    timeSpentSeconds: number = 5,
    mode: 'practice' | 'exam' | 'notebook' = 'practice',
    examId?: string
  ): UserAttempt | null => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return null;

    const evalResult = evaluateQuestionAnswer(question, selectedOption);

    const newAttempt: UserAttempt = {
      id: `att-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      questionId,
      selectedOption,
      isCorrect: evalResult.isCorrect,
      isAnnulled: evalResult.isAnnulled,
      scoreWeight: evalResult.scoreWeight,
      officialExamCredit: evalResult.officialExamCredit,
      countsForDidacticMetrics: evalResult.countsForDidacticMetrics,
      timestamp: Date.now(),
      timeSpentSeconds,
      mode,
      examId
    };

    setUserState(prev => {
      const updatedNotebook = { ...prev.errorNotebook };

      // Questões anuladas NUNCA devem ser adicionadas ao Caderno de Erros (P0.2)
      if (evalResult.shouldAddToErrorNotebook) {
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
      } else if (evalResult.isCorrect && !evalResult.isAnnulled) {
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

  // Importar novas questões via arquivo com Importação Incremental Pura (P1.2)
  const importQuestions = useCallback((newQuestions: Question[]): { added: number; total: number } => {
    const existingIds = new Set(questions.map(q => q.id));
    const validNew = newQuestions.filter(q => {
      if (!q.id || !q.enunciado || !q.alternativas || !q.gabarito) return false;
      return !existingIds.has(q.id);
    });

    const addedCount = validNew.length;
    if (addedCount > 0) {
      setCustomQuestions(prev => [...validNew, ...prev]);
    }

    return { added: addedCount, total: questions.length + addedCount };
  }, [questions]);

  // Importar prova estruturada no padrão ExamDocumentV2 (P1.2)
  const importExamDocument = useCallback((doc: ExamDocumentV2): { added: number; updated: number; total: number } => {
    const newQuestions = examDocV2ToQuestions(doc);
    const existingMap = new Map<string, Question>();
    for (const q of customQuestions) {
      existingMap.set(q.id, q);
    }

    let addedCount = 0;
    let updatedCount = 0;

    for (const newQ of newQuestions) {
      if (existingMap.has(newQ.id)) {
        updatedCount++;
      } else {
        addedCount++;
      }
      existingMap.set(newQ.id, newQ);
    }

    const nextList = Array.from(existingMap.values());
    setCustomQuestions(nextList);

    return {
      added: addedCount,
      updated: updatedCount,
      total: questions.length + addedCount,
    };
  }, [customQuestions, questions.length]);

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
      version: CURRENT_STORAGE_VERSION,
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

  // Estatísticas consolidadas com isolamento de questões anuladas (P0.2)
  const stats = useMemo<UserStats>(() => {
    const attempts = userState.attempts;
    const totalAnswered = attempts.length;
    const totalAnnulled = attempts.filter(a => a.isAnnulled).length;
    const totalCorrect = attempts.filter(a => a.isCorrect && !a.isAnnulled).length;
    
    // A taxa de acerto é calculada sobre as questões válidas para não distorcer o rendimento
    const validCount = totalAnswered - totalAnnulled;
    const accuracyRate = validCount > 0 ? (totalCorrect / validCount) * 100 : (totalAnswered > 0 ? 100 : 0);
    
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
      if (!att.isAnnulled) {
        accuracyBySubject[q.disciplina].total += 1;
        if (att.isCorrect) accuracyBySubject[q.disciplina].correct += 1;
        accuracyBySubject[q.disciplina].accuracy = Math.round(
          (accuracyBySubject[q.disciplina].correct / accuracyBySubject[q.disciplina].total) * 100
        );
      }

      if (!accuracyByBoard[q.banca]) {
        accuracyByBoard[q.banca] = { total: 0, correct: 0, accuracy: 0 };
      }
      if (!att.isAnnulled) {
        accuracyByBoard[q.banca].total += 1;
        if (att.isCorrect) accuracyByBoard[q.banca].correct += 1;
        accuracyByBoard[q.banca].accuracy = Math.round(
          (accuracyByBoard[q.banca].correct / accuracyByBoard[q.banca].total) * 100
        );
      }
    });

    return {
      totalAnswered,
      totalCorrect,
      totalAnnulled,
      totalValidAnswered: validCount,
      totalOfficialCredits: attempts.reduce((acc, curr) => acc + (curr.officialExamCredit ?? (curr.isCorrect ? 1 : 0)), 0),
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

  // Restauração de Backups Recuperáveis (Pendência 2 / Correção B)
  const restoreProgressFromBackup = useCallback((backupKeyOrId?: string): boolean => {
    try {
      let key = backupKeyOrId;
      if (!key) {
        key = localStorage.getItem(BACKUP_PROGRESS_LATEST) || undefined;
      }
      if (!key) {
        const registryRaw = localStorage.getItem(BACKUP_PROGRESS_REGISTRY);
        if (registryRaw) {
          const registry: string[] = JSON.parse(registryRaw);
          if (registry.length > 0) key = registry[registry.length - 1];
        }
      }
      if (!key) {
        // Fallback para chave legada apenas leitura (sem sobrescrita)
        key = 'concurseiro_user_state_backup_pre_v2';
      }

      let raw = localStorage.getItem(key);
      // Se não encontrou diretamente pela chave, busca pelo backupId no registry
      if (!raw && backupKeyOrId) {
        const registryRaw = localStorage.getItem(BACKUP_PROGRESS_REGISTRY);
        if (registryRaw) {
          const registry: string[] = JSON.parse(registryRaw);
          for (const candidateKey of registry) {
            const item = localStorage.getItem(candidateKey);
            if (item) {
              try {
                const parsedItem = JSON.parse(item);
                if (parsedItem.backupId === backupKeyOrId) {
                  raw = item;
                  key = candidateKey;
                  break;
                }
              } catch {}
            }
          }
        }
      }

      if (!raw) return false;
      const parsed = JSON.parse(raw);

      // Suporta snapshot estruturado v2 OU payload legado bruto
      const dataPayload = parsed.backupType === 'user_progress_backup' ? parsed.data : parsed;
      if (!dataPayload) return false;

      const restored = {
        version: CURRENT_STORAGE_VERSION,
        attempts: dataPayload.attempts || [],
        errorNotebook: dataPayload.errorNotebook || {},
        savedQuestionIds: dataPayload.savedQuestionIds || [],
        exams: dataPayload.exams || [],
      };
      setUserState(restored);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
      return true;
    } catch (e) {
      console.error('Erro ao restaurar backup de progresso:', e);
      return false;
    }
  }, []);

  const restoreCustomQuestionsFromBackup = useCallback((backupKeyOrId?: string): boolean => {
    try {
      let key = backupKeyOrId;
      if (!key) {
        key = localStorage.getItem(BACKUP_CUSTOM_LATEST) || undefined;
      }
      if (!key) {
        const registryRaw = localStorage.getItem(BACKUP_CUSTOM_REGISTRY);
        if (registryRaw) {
          const registry: string[] = JSON.parse(registryRaw);
          if (registry.length > 0) key = registry[registry.length - 1];
        }
      }
      if (!key) {
        key = `${STORAGE_KEY}_custom_questions_backup`;
      }

      let raw = localStorage.getItem(key);
      if (!raw && backupKeyOrId) {
        const registryRaw = localStorage.getItem(BACKUP_CUSTOM_REGISTRY);
        if (registryRaw) {
          const registry: string[] = JSON.parse(registryRaw);
          for (const candidateKey of registry) {
            const item = localStorage.getItem(candidateKey);
            if (item) {
              try {
                const parsedItem = JSON.parse(item);
                if (parsedItem.backupId === backupKeyOrId) {
                  raw = item;
                  key = candidateKey;
                  break;
                }
              } catch {}
            }
          }
        }
      }

      if (!raw) return false;
      const parsed = JSON.parse(raw);

      let questionsToRestore: Question[] | null = null;
      if (parsed.backupType === 'custom_questions_backup' && parsed.fullOriginalQuestions) {
        questionsToRestore = parsed.fullOriginalQuestions;
      } else if (Array.isArray(parsed)) {
        questionsToRestore = parsed;
      }

      if (!questionsToRestore) return false;

      setCustomQuestions(questionsToRestore);
      localStorage.setItem(`${STORAGE_KEY}_custom_questions`, JSON.stringify(questionsToRestore));
      return true;
    } catch (e) {
      console.error('Erro ao restaurar backup de questões customizadas:', e);
      return false;
    }
  }, []);

  const listAvailableBackups = useCallback(() => {
    const progressRaw = localStorage.getItem(BACKUP_PROGRESS_REGISTRY);
    const customRaw = localStorage.getItem(BACKUP_CUSTOM_REGISTRY);
    return {
      progress: progressRaw ? (JSON.parse(progressRaw) as string[]) : [],
      customQuestions: customRaw ? (JSON.parse(customRaw) as string[]) : [],
    };
  }, []);

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
    importExamDocument,
    loadPreloadedExam,
    loadAllPreloadedExams,
    clearAllQuestions,
    resetToFactoryDefaults,
    startExam,
    submitExamAnswer,
    finishExam,
    restoreProgressFromBackup,
    restoreCustomQuestionsFromBackup,
    listAvailableBackups,
  };
}
