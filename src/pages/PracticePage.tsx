import React, { useState, useMemo } from 'react';
import { Question } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { ExplanationModal } from '../components/ExplanationModal';
import { Zap, Shuffle, ListOrdered, RotateCw } from 'lucide-react';

interface PracticePageProps {
  questions: Question[];
  onRecordAttempt: (questionId: string, selectedOption: string, timeSpentSeconds: number, mode: 'practice' | 'exam' | 'notebook') => void;
  onToggleSave: (questionId: string) => void;
  savedQuestionIds: string[];
}

export const PracticePage: React.FC<PracticePageProps> = ({
  questions,
  onRecordAttempt,
  onToggleSave,
  savedQuestionIds,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('todas');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRandomMode, setIsRandomMode] = useState<boolean>(true); // Padrão: Modo Aleatório ativado!
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [explanationQuestion, setExplanationQuestion] = useState<Question | null>(null);

  // Available subjects
  const subjects = useMemo(() => {
    const set = new Set(questions.map(q => q.disciplina));
    return Array.from(set);
  }, [questions]);

  // Filtered & Shuffled Questions list
  const filteredQuestions = useMemo(() => {
    let list = selectedSubject === 'todas' 
      ? [...questions] 
      : questions.filter(q => q.disciplina === selectedSubject);

    if (isRandomMode) {
      // Embaralha aleatoriamente misturando provas, bancas e anos
      return [...list].sort(() => 0.5 - Math.random());
    }

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, selectedSubject, isRandomMode, shuffleSeed]);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Volta ao início se completar o lote
    }
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentIndex(0);
  };

  const handleReshuffle = () => {
    setShuffleSeed(prev => prev + 1);
    setCurrentIndex(0);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-[#131b2e] rounded-2xl border border-slate-800">
        <p className="text-slate-400 text-sm">Nenhuma questão encontrada no banco de dados.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Mode Header & Shuffle Bar */}
      <div className="flex items-center justify-between bg-[#131b2e] p-3.5 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600/20 p-2 rounded-xl text-indigo-400 border border-indigo-500/30">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-tight">Treino Rápido</h2>
            <p className="text-[11px] text-slate-400">
              {isRandomMode ? 'Modo Aleatório (Mix de Provas)' : 'Modo Sequencial (Por Prova)'}
            </p>
          </div>
        </div>

        {/* Action Controls: Shuffle Toggle & Re-shuffle */}
        <div className="flex items-center space-x-1.5">
          {/* Re-shuffle button */}
          {isRandomMode && (
            <button
              onClick={handleReshuffle}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-indigo-300 rounded-xl transition-all"
              title="Embaralhar questões novamente"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          )}

          {/* Toggle Random / Sequential */}
          <button
            onClick={() => {
              setIsRandomMode(prev => !prev);
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-1 transition-all ${
              isRandomMode
                ? 'bg-indigo-600/30 border-indigo-500/50 text-indigo-200'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
            title={isRandomMode ? "Alternar para ordem sequencial" : "Alternar para ordem aleatória"}
          >
            {isRandomMode ? (
              <>
                <Shuffle className="w-3.5 h-3.5 text-indigo-400" />
                <span>Mix</span>
              </>
            ) : (
              <>
                <ListOrdered className="w-3.5 h-3.5 text-slate-400" />
                <span>Ordem</span>
              </>
            )}
          </button>

          {/* Counter Badge */}
          <div className="flex items-center space-x-1 bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300">
            <span>Questão {currentIndex + 1}</span>
            <span className="text-slate-600">/</span>
            <span>{filteredQuestions.length}</span>
          </div>
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => handleSubjectChange('todas')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
            selectedSubject === 'todas'
              ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          Todas Matérias
        </button>
        {subjects.map(subj => (
          <button
            key={subj}
            onClick={() => handleSubjectChange(subj)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedSubject === subj
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={(selectedOption) => {
            onRecordAttempt(currentQuestion.id, selectedOption, 6, 'practice');
          }}
          onNext={handleNextQuestion}
          onPrev={handlePrevQuestion}
          hasPrev={currentIndex > 0}
          onToggleSave={onToggleSave}
          isSaved={savedQuestionIds.includes(currentQuestion.id)}
          onOpenExplanation={() => setExplanationQuestion(currentQuestion)}
          showInstantFeedback={true}
        />
      )}

      {/* Explanation Modal */}
      <ExplanationModal
        question={explanationQuestion}
        isOpen={explanationQuestion !== null}
        onClose={() => setExplanationQuestion(null)}
      />
    </div>
  );
};
