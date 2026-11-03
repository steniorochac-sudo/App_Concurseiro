import React from 'react';
import { 
  Zap, 
  FileText, 
  BookMarked, 
  BarChart3, 
  Upload, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { UserStats } from '../types';

interface NavbarProps {
  activeTab: 'practice' | 'exam' | 'notebook' | 'stats' | 'import';
  setActiveTab: (tab: 'practice' | 'exam' | 'notebook' | 'stats' | 'import') => void;
  stats: UserStats;
  errorNotebookCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  stats,
  errorNotebookCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#131b2e]/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-md mx-auto px-4 py-3">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-md shadow-indigo-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-base text-white tracking-tight leading-tight">
                App Concurseiro
              </h1>
              <p className="text-[11px] text-indigo-400 font-medium">
                PWA • Estudo por Questões
              </p>
            </div>
          </div>

          {/* Header Quick Stats Badge */}
          <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400">
              {stats.accuracyRate}%
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-medium text-slate-300">
              {stats.totalAnswered} q
            </span>
          </div>
        </div>

        {/* Mobile Navigation Tabs (Scrollable horizontally if needed, touch friendly) */}
        <nav className="flex items-center justify-between bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('practice')}
            className={`flex flex-1 flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'practice'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Zap className="w-4 h-4 mb-1" />
            <span>Treino</span>
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`flex flex-1 flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'exam'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-4 h-4 mb-1" />
            <span>Simulado</span>
          </button>

          <button
            onClick={() => setActiveTab('notebook')}
            className={`relative flex flex-1 flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'notebook'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookMarked className="w-4 h-4 mb-1" />
            <span>Caderno</span>
            {errorNotebookCount > 0 && (
              <span className="absolute -top-1 right-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full border border-slate-900">
                {errorNotebookCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`flex flex-1 flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'stats'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BarChart3 className="w-4 h-4 mb-1" />
            <span>Métricas</span>
          </button>

          <button
            onClick={() => setActiveTab('import')}
            className={`flex flex-1 flex-col items-center py-2 px-1 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'import'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Upload className="w-4 h-4 mb-1" />
            <span>Importar</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
