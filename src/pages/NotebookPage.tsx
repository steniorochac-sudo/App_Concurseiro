import React, { useState, useMemo } from 'react';
import { Question, ErrorNotebookItem } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { ExplanationModal } from '../components/ExplanationModal';
import { Star, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface NotebookPageProps {
  questions: Question[];
  errorNotebook: Record<string, ErrorNotebookItem>;
  savedQuestionIds: string[];
  onRecordAttempt: (questionId: string, selectedOption: string, timeSpentSeconds: number, mode: 'practice' | 'exam' | 'notebook') => void;
  onToggleSave: (questionId: string) => void;
}

export const NotebookPage: React.FC<NotebookPageProps> = ({
  questions,
  errorNotebook,
  savedQuestionIds,
  onRecordAttempt,
  onToggleSave,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'errors' | 'saved'>('errors');
  const [selectedSubject, setSelectedSubject] = useState<string>('todas');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [explanationQuestion, setExplanationQuestion] = useState<Question | null>(null);

  // Error Questions list
  const errorQuestions = useMemo(() => {
    const errorIds = Object.keys(errorNotebook);
    return questions.filter(q => errorIds.includes(q.id));
  }, [questions, errorNotebook]);

  // Saved Questions list
  const savedQuestions = useMemo(() => {
    return questions.filter(q => savedQuestionIds.includes(q.id));
  }, [questions, savedQuestionIds]);

  const activePool = activeSubTab === 'errors' ? errorQuestions : savedQuestions;

  // Available subjects in current pool
  const subjects = useMemo(() => {
    const set = new Set(activePool.map(q => q.disciplina));
    return Array.from(set);
  }, [activePool]);

  // Filtered pool by subject
  const filteredPool = useMemo(() => {
    if (selectedSubject === 'todas') return activePool;
    return activePool.filter(q => q.disciplina === selectedSubject);
  }, [activePool, selectedSubject]);

  const currentQuestion = filteredPool[currentIndex] || filteredPool[0];
  const currentErrorItem = currentQuestion ? errorNotebook[currentQuestion.id] : null;

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < filteredPool.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* SubTab Selector (Caderno de Erros vs Favoritas) */}
      <div className="flex items-center bg-[#131b2e] p-1.5 rounded-2xl border border-slate-800 shadow-md">
        <button
          onClick={() => {
            setActiveSubTab('errors');
            setCurrentIndex(0);
            setSelectedSubject('todas');
          }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
            activeSubTab === 'errors'
              ? 'bg-rose-950/80 border border-rose-600/60 text-rose-200 shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>Caderno de Erros ({errorQuestions.length})</span>
        </button>

        <button
          onClick={() => {
            setActiveSubTab('saved');
            setCurrentIndex(0);
            setSelectedSubject('todas');
          }}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
            activeSubTab === 'saved'
              ? 'bg-amber-950/80 border border-amber-600/60 text-amber-200 shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Favoritas ({savedQuestions.length})</span>
        </button>
      </div>

      {/* Regra dos 2 Acertos Consecutivos (Aviso Informativo) */}
      {activeSubTab === 'errors' && currentErrorItem && (
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-2xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs text-slate-300">
              Meta de Superação: <strong className="text-white">2 acertos seguidos</strong>
            </span>
          </div>

          <div className="flex items-center space-x-1 bg-indigo-950 border border-indigo-700/60 px-2.5 py-0.5 rounded-full text-xs font-bold text-indigo-300">
            <span>{currentErrorItem.consecutiveCorrectCount}/2 acertos</span>
          </div>
        </div>
      )}

      {/* Subject Filter Chips */}
      {subjects.length > 0 && (
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedSubject('todas')}
            className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap border ${
              selectedSubject === 'todas'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            Todas ({activePool.length})
          </button>
          {subjects.map(subj => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap border ${
                selectedSubject === subj
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredPool.length === 0 ? (
        <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-8 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-base font-bold text-white">
            {activeSubTab === 'errors' ? 'Nenhuma questão pendente no caderno!' : 'Nenhuma questão favoritada.'}
          </h3>
          <p className="text-xs text-slate-400">
            {activeSubTab === 'errors'
              ? 'Você superou todas as questões ou ainda não errou nenhuma.'
              : 'Clique no ícone de estrela nas questões para salvá-las aqui.'}
          </p>
        </div>
      ) : (
        /* Question Card */
        currentQuestion && (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={(selectedOption) => {
              onRecordAttempt(currentQuestion.id, selectedOption, 8, 'notebook');
            }}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
            hasPrev={currentIndex > 0}
            onToggleSave={onToggleSave}
            isSaved={savedQuestionIds.includes(currentQuestion.id)}
            onOpenExplanation={() => setExplanationQuestion(currentQuestion)}
            showInstantFeedback={true}
          />
        )
      )}

      <ExplanationModal
        question={explanationQuestion}
        isOpen={explanationQuestion !== null}
        onClose={() => setExplanationQuestion(null)}
      />
    </div>
  );
};
