import React, { useState, useEffect } from 'react';
import { Question, ExamConfig, ExamSession } from '../types';
import { QuestionCard } from '../components/QuestionCard';
import { FilterModal } from '../components/FilterModal';
import { ExplanationModal } from '../components/ExplanationModal';
import { FileText, Clock, Play, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

interface ExamPageProps {
  questions: Question[];
  currentExam: ExamSession | null;
  onStartExam: (config: ExamConfig) => ExamSession;
  onSubmitAnswer: (questionId: string, selectedOption: string, timeSpentSeconds: number) => void;
  onFinishExam: () => ExamSession | null;
  onToggleSave: (questionId: string) => void;
  savedQuestionIds: string[];
}

export const ExamPage: React.FC<ExamPageProps> = ({
  questions,
  currentExam,
  onStartExam,
  onSubmitAnswer,
  onFinishExam,
  onToggleSave,
  savedQuestionIds,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0); // em segundos
  const [completedReport, setCompletedReport] = useState<ExamSession | null>(null);
  const [reviewQuestion, setReviewQuestion] = useState<Question | null>(null);

  // Set up timer for active exam
  useEffect(() => {
    if (!currentExam || currentExam.status !== 'in_progress') return;

    const limitMins = currentExam.config.timeLimitMinutes || 15;
    const initialSeconds = limitMins * 60;
    const elapsedSeconds = Math.floor((Date.now() - currentExam.startTime) / 1000);
    const remaining = Math.max(0, initialSeconds - elapsedSeconds);

    setTimeLeft(remaining);

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // REGRA ALINHADA VIA /GRILL-ME: Quando o cronômetro zera, finaliza e submete automaticamente!
          const finished = onFinishExam();
          if (finished) setCompletedReport(finished);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentExam, onFinishExam]);

  // Questions in active exam
  const examQuestions = React.useMemo(() => {
    if (!currentExam) return [];
    return currentExam.questionIds
      .map(id => questions.find(q => q.id === id))
      .filter((q): q is Question => q !== undefined);
  }, [currentExam, questions]);

  const currentQuestion = examQuestions[currentIndex];

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const availableSubjects = React.useMemo(() => {
    return Array.from(new Set(questions.map(q => q.disciplina)));
  }, [questions]);

  const availableBoards = React.useMemo(() => {
    return Array.from(new Set(questions.map(q => q.banca)));
  }, [questions]);

  // Handle Answer in Exam (No immediate color feedback)
  const handleAnswerOption = (selectedOption: string) => {
    if (!currentQuestion) return;
    onSubmitAnswer(currentQuestion.id, selectedOption, 15);
  };

  const handleFinishSession = () => {
    if (confirm('Tem certeza que deseja finalizar o simulado e gerar o relatório?')) {
      const finished = onFinishExam();
      if (finished) setCompletedReport(finished);
    }
  };

  // 1. REPORT TELA FINAL DO SIMULADO
  if (completedReport) {
    const totalQ = completedReport.questionIds.length;
    
    let correctCount = 0;
    completedReport.questionIds.forEach(qId => {
      const q = questions.find(item => item.id === qId);
      const userAns = completedReport.answers[qId]?.selectedOption;
      if (q && userAns && userAns.toUpperCase() === q.gabarito.toUpperCase()) {
        correctCount += 1;
      }
    });

    const accuracy = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;
    const totalTimeSec = Math.floor(((completedReport.endTime || Date.now()) - completedReport.startTime) / 1000);

    return (
      <div className="space-y-5 max-w-md mx-auto animate-fadeIn">
        {/* Banner do Resultado */}
        <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-6 text-center shadow-xl">
          <div className="inline-flex bg-indigo-600/20 p-3 rounded-full border border-indigo-500/30 text-indigo-400 mb-3">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Simulado Finalizado!</h2>
          <p className="text-xs text-slate-400 mt-1">{completedReport.config.title}</p>

          <div className="mt-5 grid grid-cols-3 gap-2 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Nota Final</span>
              <span className="text-xl font-bold text-emerald-400">{accuracy}%</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Acertos</span>
              <span className="text-xl font-bold text-white">{correctCount}/{totalQ}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block font-medium">Tempo Total</span>
              <span className="text-xl font-bold text-indigo-400">{formatTime(totalTimeSec)}</span>
            </div>
          </div>
        </div>

        {/* Revisão Questão por Questão */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Revisão Detalhada</h3>
          {completedReport.questionIds.map((qId, idx) => {
            const q = questions.find(item => item.id === qId);
            if (!q) return null;

            const userAns = completedReport.answers[qId]?.selectedOption;
            const isCorrect = userAns && userAns.toUpperCase() === q.gabarito.toUpperCase();

            return (
              <div key={qId} className="bg-[#131b2e] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-slate-400 w-6">#{idx + 1}</span>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block truncate max-w-[200px]">
                      {q.disciplina} • {q.banca}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Sua resposta: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{userAns || 'Em branco'}</strong> | Gabarito: <strong className="text-emerald-400">{q.gabarito}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                  <button
                    onClick={() => setReviewQuestion(q)}
                    className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium rounded-lg hover:text-white"
                  >
                    Ver
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setCompletedReport(null)}
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Novo Simulado</span>
        </button>

        <ExplanationModal
          question={reviewQuestion}
          isOpen={reviewQuestion !== null}
          onClose={() => setReviewQuestion(null)}
        />
      </div>
    );
  }

  // 2. TELA DE INÍCIO DO SIMULADO (Se nenhum ativo)
  if (!currentExam) {
    return (
      <div className="space-y-4 max-w-md mx-auto">
        <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-6 text-center shadow-xl">
          <div className="inline-flex bg-indigo-600/20 p-4 rounded-2xl border border-indigo-500/30 text-indigo-400 mb-3">
            <FileText className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-white">Modo Simulado de Prova</h2>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            Testes com cronômetro regressivo, navegação por grade e relatório de nota ao final.
          </p>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="w-full mt-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Configurar e Iniciar Simulado</span>
          </button>
        </div>

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onStartExam={onStartExam}
          availableSubjects={availableSubjects}
          availableBoards={availableBoards}
        />
      </div>
    );
  }

  // 3. TELA DO SIMULADO EM ANDAMENTO
  const currentAnswer = currentExam.answers[currentQuestion?.id || '']?.selectedOption;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Timer Bar & Controls */}
      <div className="bg-[#131b2e] border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-2">
          <Clock className={`w-4 h-4 ${timeLeft < 180 ? 'text-rose-400 animate-pulse' : 'text-indigo-400'}`} />
          <span className={`text-base font-bold tracking-tight font-mono ${timeLeft < 180 ? 'text-rose-400' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <button
          onClick={handleFinishSession}
          className="px-3.5 py-1.5 bg-rose-950/80 hover:bg-rose-900 border border-rose-600/60 text-rose-200 font-semibold text-xs rounded-xl shadow-md transition-all"
        >
          Finalizar Simulado
        </button>
      </div>

      {/* Grade de Navegação Simples (Alinhada via /grill-me: Respondidas = Verde, Em Branco = Cinza) */}
      <div className="bg-[#131b2e] border border-slate-800 p-3 rounded-2xl">
        <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center justify-between px-1">
          <span>Grade de Navegação</span>
          <span>{Object.keys(currentExam.answers).length}/{examQuestions.length} respondidas</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {examQuestions.map((q, idx) => {
            const isAnswered = currentExam.answers[q.id] !== undefined;
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                  isCurrent
                    ? 'ring-2 ring-indigo-500 border-indigo-400 font-extrabold scale-105'
                    : ''
                } ${
                  isAnswered
                    ? 'bg-emerald-600 border-emerald-500 text-white' // Verde para respondida
                    : 'bg-slate-900 border-slate-800 text-slate-400' // Cinza para em branco
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card (Sem feedback imediato de cores durante a prova) */}
      {currentQuestion && (
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswerOption}
          onNext={() => {
            if (currentIndex < examQuestions.length - 1) {
              setCurrentIndex(prev => prev + 1);
            }
          }}
          onToggleSave={onToggleSave}
          isSaved={savedQuestionIds.includes(currentQuestion.id)}
          onOpenExplanation={() => {}} // Não exibe explicação durante o simulado
          showInstantFeedback={false}
          userSelectedOption={currentAnswer}
          isAnswered={currentAnswer !== undefined}
        />
      )}
    </div>
  );
};
