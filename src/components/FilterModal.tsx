import React, { useState } from 'react';
import { X, Filter, Play, Clock, BookOpen, Building2 } from 'lucide-react';
import { ExamConfig } from '../types';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartExam: (config: ExamConfig) => void;
  availableSubjects: string[];
  availableBoards: string[];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onStartExam,
  availableSubjects,
  availableBoards,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('todas');
  const [selectedBoard, setSelectedBoard] = useState<string>('todas');
  const [selectedFormat, setSelectedFormat] = useState<string>('todas');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [timeLimit, setTimeLimit] = useState<number>(10); // minutos

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const config: ExamConfig = {
      id: `config-${Date.now()}`,
      title: `Simulado - ${selectedSubject === 'todas' ? 'Todas Matérias' : selectedSubject}`,
      disciplina: selectedSubject,
      banca: selectedBoard,
      formato: selectedFormat as any,
      totalQuestions: questionCount,
      timeLimitMinutes: timeLimit > 0 ? timeLimit : undefined
    };
    onStartExam(config);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#131b2e] border border-slate-800 rounded-t-3xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600/20 p-2 rounded-xl border border-indigo-500/30 text-indigo-400">
              <Filter className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Configurar Simulado</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Disciplina */}
          <div>
            <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Disciplina</span>
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="todas">Todas as Disciplinas</option>
              {availableSubjects.map(subj => (
                <option key={subj} value={subj}>{subj}</option>
              ))}
            </select>
          </div>

          {/* Banca */}
          <div>
            <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5 mb-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Banca Examinadora</span>
            </label>
            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="todas">Todas as Bancas (FGV, FCC, QUADRIX, VUNESP, etc.)</option>
              {availableBoards.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Formato de Questão */}
          <div>
            <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5 mb-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-400" />
              <span>Formato de Questão</span>
            </label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
            >
              <option value="todas">Todos os Formatos</option>
              <option value="certo_errado">Certo / Errado (C/E)</option>
              <option value="multipla_escolha">Múltipla Escolha (4 ou 5 Opções)</option>
            </select>
          </div>

          {/* Quantidade de Questões */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">
              Quantidade de Questões
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[5, 10, 20].map(count => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    questionCount === count
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {count} questões
                </button>
              ))}
            </div>
          </div>

          {/* Tempo Limite */}
          <div>
            <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5 mb-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tempo Limite (minutos)</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map(mins => (
                <button
                  type="button"
                  key={mins}
                  onClick={() => setTimeLimit(mins)}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    timeLimit === mins
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          {/* Botão de Iniciar Simulado */}
          <button
            type="submit"
            className="w-full mt-4 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Iniciar Simulado Agora</span>
          </button>
        </form>
      </div>
    </div>
  );
};
