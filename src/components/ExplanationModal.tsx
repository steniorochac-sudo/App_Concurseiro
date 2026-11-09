import React from 'react';
import { Question } from '../types';
import { X, CheckCircle2, Scale, BookOpen, AlertTriangle, Tag, Sparkles, Search } from 'lucide-react';
import { openQuestionSearchInGoogle } from '../utils/searchExplanation';
import { getEffectiveGabarito } from '../utils/answerEvaluation';

interface ExplanationModalProps {
  question: Question | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  question,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Bottom Sheet for Mobile / Modal for Desktop */}
      <div className="w-full max-w-lg bg-[#131b2e] border border-slate-800 rounded-t-3xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="bg-emerald-500/20 p-2 rounded-xl border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Gabarito Comentado</h3>
              {(() => {
                const eff = getEffectiveGabarito(question);
                const isAnnulled = eff === 'X' || question.gabaritoStatus === 'anulado';
                const isRectified = question.gabaritoStatus === 'retificado' || question.gabaritoStatus === 'alterado';

                if (isAnnulled) {
                  return (
                    <p className="text-xs text-amber-400 font-bold">
                      Resposta Oficial: ANULADA (Gabarito X)
                    </p>
                  );
                }
                if (isRectified) {
                  return (
                    <p className="text-xs text-emerald-400 font-medium">
                      Resposta Oficial: Alternativa ({eff}){' '}
                      <span className="text-amber-400 font-bold">[Retificado pós-recurso]</span>
                      {question.gabarito && question.gabarito.toUpperCase() !== eff.toUpperCase() && (
                        <span className="text-slate-400 ml-1">(Preliminar: {question.gabarito})</span>
                      )}
                    </p>
                  );
                }
                return (
                  <p className="text-xs text-emerald-400 font-medium">
                    Resposta Oficial: Alternativa ({eff})
                  </p>
                );
              })()}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Alerta de Jurisprudência / Questão Polêmica (Se houver) */}
        {question.alertaProfessor && (
          <div className="mb-4 bg-amber-950/40 border border-amber-500/50 p-3.5 rounded-xl flex items-start space-x-2.5 text-xs text-amber-200 shadow-inner">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-amber-300">ALERTA DO PROFESSOR (JURISPRUDÊNCIA / RECURSO)</span>
              <p className="leading-relaxed">{question.alertaProfessor}</p>
            </div>
          </div>
        )}

        {/* Subtópicos do Edital */}
        {question.subtopicos && question.subtopicos.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {question.subtopicos.map((sub, sIdx) => (
              <span key={sIdx} className="bg-slate-900 border border-slate-800 text-indigo-300 text-xs px-2.5 py-1 rounded-lg flex items-center space-x-1 font-medium">
                <Tag className="w-3 h-3 text-indigo-400" />
                <span>{sub}</span>
              </span>
            ))}
          </div>
        )}

        {/* Resolução Comentada & Análise de Pegadinhas */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>EXPLICAÇÃO DIDÁTICA & PEGADINHAS DA BANCA</span>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-inner">
              {question.explicacao}
            </div>
          </div>

          {/* Base Legal / Doutrinária */}
          {question.baseLegal && (
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-2">
                <Scale className="w-4 h-4" />
                <span>FUNDAMENTAÇÃO LEGAL / DOUTRINÁRIA</span>
              </div>
              <div className="bg-amber-950/20 border border-amber-500/30 p-3.5 rounded-xl text-amber-200 text-xs sm:text-sm font-medium leading-normal">
                {question.baseLegal}
              </div>
            </div>
          )}

          {/* Fonte Confiável para Pesquisa */}
          {question.fontePesquisa && (
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 mb-2">
                <BookOpen className="w-4 h-4" />
                <span>FONTE RECOMENDADA PARA PESQUISA</span>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-mono leading-normal">
                {question.fontePesquisa}
              </div>
            </div>
          )}
        </div>

        {/* Botão Buscar no Google */}
        <button
          type="button"
          onClick={() => openQuestionSearchInGoogle(question)}
          className="w-full mt-4 py-3 px-4 bg-slate-900 hover:bg-slate-800 border border-indigo-500/30 text-indigo-300 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md active:scale-[0.98]"
        >
          <Search className="w-4 h-4 text-indigo-400" />
          <span>Buscar resolução e debates no Google</span>
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98]"
        >
          Entendi, voltar às questões
        </button>
      </div>
    </div>
  );
};
