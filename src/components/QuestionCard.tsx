import React, { useState } from 'react';
import { Question } from '../types';
import { 
  Star, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Scissors,
  Send,
  AlertTriangle,
  Tag,
  Check,
  X,
  Search
} from 'lucide-react';
import { openQuestionSearchInGoogle } from '../utils/searchExplanation';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  onToggleSave: (questionId: string) => void;
  isSaved: boolean;
  onOpenExplanation: () => void;
  showInstantFeedback?: boolean; // true no modo Treino, false no modo Simulado
  userSelectedOption?: string; // Se já foi respondida
  isAnswered?: boolean;
}

/**
 * Utilitário para renderizar markdown simples: parágrafos, tabelas GFM e imagens
 */
function renderMarkdownContent(content: string) {
  const blocks = content.split(/\n\n+/);

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // 1. Imagem Markdown Isolada: ![alt](url)
    const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      return (
        <div key={idx} className="my-3 flex justify-center">
          <img 
            src={imgMatch[2]} 
            alt={imgMatch[1] || 'Imagem da questão'} 
            className="max-w-full rounded-xl border border-slate-700/80 shadow-lg bg-slate-900"
            loading="lazy"
          />
        </div>
      );
    }

    // 2. Tabela Markdown GFM: | col1 | col2 |
    if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
      const rows = trimmed.split('\n').filter(r => r.trim().startsWith('|'));
      if (rows.length >= 2) {
        const headerCols = rows[0].split('|').slice(1, -1).map(c => c.trim());
        const bodyRows = rows.slice(2).map(r => r.split('|').slice(1, -1).map(c => c.trim()));

        return (
          <div key={idx} className="overflow-x-auto my-3 rounded-xl border border-slate-800 bg-slate-950/60 shadow-inner">
            <table className="w-full text-xs text-left text-slate-200">
              <thead className="bg-slate-900 border-b border-slate-800 text-indigo-300 font-bold">
                <tr>
                  {headerCols.map((col, cIdx) => (
                    <th key={cIdx} className="px-3 py-2 border-r border-slate-800/80 last:border-r-0">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 border-r border-slate-800/40 last:border-r-0 font-mono text-[11px] sm:text-xs">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    // 3. Parágrafo com possíveis imagens inline
    if (trimmed.includes('![') && trimmed.includes('](')) {
      const parts = trimmed.split(/(!\[.*?\]\(.*?\))/g);
      return (
        <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 my-2">
          {parts.map((part, pIdx) => {
            const m = part.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (m) {
              return (
                <div key={pIdx} className="my-2 flex justify-center">
                  <img 
                    src={m[2]} 
                    alt={m[1] || 'Recurso da questão'} 
                    className="max-w-full rounded-xl border border-slate-700/80 shadow-md bg-slate-900"
                    loading="lazy"
                  />
                </div>
              );
            }
            return (
              <p key={pIdx} className="text-slate-100 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {part.trim()}
              </p>
            );
          })}
        </div>
      );
    }

    // 4. Parágrafo de texto normal
    return (
      <div key={idx} className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 my-2">
        <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
          {trimmed}
        </p>
      </div>
    );
  });
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onNext,
  onPrev,
  hasPrev = false,
  onToggleSave,
  isSaved,
  onOpenExplanation,
  showInstantFeedback = true,
  userSelectedOption,
  isAnswered = false,
}) => {
  const [tentativeSelection, setTentativeSelection] = useState<string | null>(userSelectedOption || null);
  const [isSubmittedLocally, setIsSubmittedLocally] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<string>>(new Set());
  const [isSupportTextOpen, setIsSupportTextOpen] = useState<boolean>(true);

  const hasSubmitted = isAnswered || isSubmittedLocally || (userSelectedOption !== undefined && userSelectedOption !== null);

  // Detecta se a questão é do formato Certo / Errado
  const isCertoErrado = 
    question.tipo === 'certo_errado' || 
    (question.alternativas.length === 2 && 
      (['C', 'E'].includes(question.alternativas[0]?.id) || 
       question.alternativas[0]?.text?.toUpperCase() === 'CERTO'));

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted) return;
    if (eliminatedOptions.has(optionId)) {
      setEliminatedOptions(prev => {
        const next = new Set(prev);
        next.delete(optionId);
        return next;
      });
    }
    setTentativeSelection(optionId);
  };

  const handleConfirmAnswer = () => {
    if (!tentativeSelection || hasSubmitted) return;
    
    setIsSubmittedLocally(true);

    const isCorrect = tentativeSelection.toUpperCase() === question.gabarito.toUpperCase();
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(isCorrect ? 40 : [30, 50, 30]);
    }

    onAnswer(tentativeSelection);
  };

  const toggleEliminate = (e: React.MouseEvent, optionId: string) => {
    e.stopPropagation();
    if (hasSubmitted) return;
    setEliminatedOptions(prev => {
      const next = new Set(prev);
      if (next.has(optionId)) {
        next.delete(optionId);
      } else {
        next.add(optionId);
        if (tentativeSelection === optionId) {
          setTentativeSelection(null);
        }
      }
      return next;
    });
  };

  const getOptionStyle = (optionId: string) => {
    const isEliminated = eliminatedOptions.has(optionId);
    const isSelected = tentativeSelection === optionId;

    if (!hasSubmitted || !showInstantFeedback) {
      if (isSelected) {
        return 'bg-indigo-900/50 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/40';
      }
      if (isEliminated) {
        return 'bg-slate-950/30 border-slate-900 text-slate-500 opacity-40 line-through';
      }
      return 'bg-slate-900/70 border-slate-800 text-slate-200 hover:bg-slate-800/80 active:bg-slate-800';
    }

    const isCorrectOption = optionId.toUpperCase() === question.gabarito.toUpperCase();
    const isUserChoice = tentativeSelection?.toUpperCase() === optionId.toUpperCase();

    if (isCorrectOption) {
      return 'bg-emerald-950/80 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40 font-medium';
    }

    if (isUserChoice && !isCorrectOption) {
      return 'bg-rose-950/80 border-rose-500 text-rose-100 ring-2 ring-rose-500/40 font-medium';
    }

    return 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-50';
  };

  const getCertoErradoStyle = (targetId: 'C' | 'E') => {
    const isSelected = tentativeSelection?.toUpperCase() === targetId;

    if (!hasSubmitted || !showInstantFeedback) {
      if (isSelected) {
        return targetId === 'C'
          ? 'bg-emerald-900/50 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/50'
          : 'bg-rose-900/50 border-rose-500 text-white shadow-lg shadow-rose-500/20 ring-2 ring-rose-500/50';
      }
      return 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-850 active:scale-[0.98]';
    }

    const isCorrectTarget = targetId === question.gabarito.toUpperCase();
    const isUserChoice = tentativeSelection?.toUpperCase() === targetId;

    if (isCorrectTarget) {
      return 'bg-emerald-950/90 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500 font-bold';
    }
    if (isUserChoice && !isCorrectTarget) {
      return 'bg-rose-950/90 border-rose-500 text-rose-100 ring-2 ring-rose-500 font-bold';
    }
    return 'bg-slate-950/50 border-slate-900 text-slate-600 opacity-40';
  };

  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl transition-all">
      {/* Question Header & Badges */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-semibold px-2.5 py-0.5 rounded-md text-xs">
            {question.banca}
          </span>
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md text-xs font-medium">
            {question.ano}
          </span>
          <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md text-xs font-medium truncate max-w-[140px]">
            {question.orgao}
          </span>
          {isCertoErrado ? (
            <span className="bg-purple-950 text-purple-300 border border-purple-800/50 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">
              C / E
            </span>
          ) : (
            <span className="bg-blue-950 text-blue-300 border border-blue-800/50 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">
              {question.alternativas.length} Opções
            </span>
          )}
          {question.dificuldade && (
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
              question.dificuldade === 'fácil' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50' :
              question.dificuldade === 'médio' ? 'bg-amber-950 text-amber-300 border border-amber-800/50' :
              'bg-rose-950 text-rose-300 border border-rose-800/50'
            }`}>
              {question.dificuldade}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => onToggleSave(question.id)}
          className={`p-2 rounded-xl border transition-all ${
            isSaved 
              ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' 
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-400'
          }`}
          title={isSaved ? "Remover dos favoritos" : "Favoritar questão"}
        >
          <Star className={`w-4 h-4 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
        </button>
      </div>

      {/* Subject & Subtopics */}
      <div className="mb-3 text-xs font-medium text-slate-400 flex flex-wrap items-center gap-1.5">
        <div className="flex items-center space-x-1">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="text-slate-300 font-semibold">{question.disciplina}</span>
        </div>
        <span>•</span>
        <span className="text-slate-400 truncate">{question.assunto}</span>
        
        {/* Subtopicos Badges */}
        {question.subtopicos && question.subtopicos.length > 0 && (
          <div className="w-full flex flex-wrap gap-1 mt-1">
            {question.subtopicos.map((sub, sIdx) => (
              <span key={sIdx} className="bg-slate-900 border border-slate-800 text-indigo-300/80 text-[10px] px-2 py-0.5 rounded-full flex items-center space-x-1">
                <Tag className="w-2.5 h-2.5" />
                <span>{sub}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Alerta de Questão Polêmica (Se houver) */}
      {question.alertaProfessor && (
        <div className="mb-4 bg-amber-950/30 border border-amber-500/40 p-2.5 rounded-xl flex items-start space-x-2 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span className="leading-snug">{question.alertaProfessor}</span>
        </div>
      )}

      {/* Texto Compartilhado Retrátil (Accordion v2.0) */}
      {question.textoCompartilhado && (
        <div className="mb-4 bg-slate-900/90 border border-slate-700/80 rounded-xl overflow-hidden shadow-inner">
          <button
            type="button"
            onClick={() => setIsSupportTextOpen(prev => !prev)}
            className="w-full bg-slate-900 px-3.5 py-2.5 flex items-center justify-between border-b border-slate-800 text-left hover:bg-slate-850 transition-colors"
          >
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="truncate">{question.textoCompartilhado.title || 'TEXTO DE APOIO'}</span>
              <span className="text-[10px] text-slate-400 font-normal shrink-0">
                ({isSupportTextOpen ? 'Toque para recolher' : 'Toque para ler'})
              </span>
            </div>
            {isSupportTextOpen ? (
              <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
            )}
          </button>
          {isSupportTextOpen && (
            <div className="p-3.5 bg-slate-900/40 text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line border-t border-slate-800/40 max-h-80 overflow-y-auto">
              {question.textoCompartilhado.content}
            </div>
          )}
        </div>
      )}

      {/* Enunciado da Questão com Suporte a Markdown, Tabelas e Imagens */}
      <div className="mb-5">
        {renderMarkdownContent(question.enunciado)}
      </div>

      {/* Alternativas — Layout Condicional Inteligente (Dual Layout) */}
      {isCertoErrado ? (
        /* DUAL LAYOUT: Certo / Errado (Dois Botões Horizontais Grandes) */
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Botão CERTO */}
          <button
            type="button"
            onClick={() => handleSelectOption('C')}
            disabled={hasSubmitted}
            className={`min-h-[58px] p-3 rounded-2xl border flex items-center justify-center space-x-2 text-sm sm:text-base font-bold transition-all shadow-md ${getCertoErradoStyle(
              'C'
            )}`}
          >
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>CERTO</span>
            {hasSubmitted && showInstantFeedback && question.gabarito.toUpperCase() === 'C' && (
              <CheckCircle className="w-5 h-5 text-emerald-400 ml-1 shrink-0" />
            )}
            {hasSubmitted && showInstantFeedback && tentativeSelection?.toUpperCase() === 'C' && question.gabarito.toUpperCase() !== 'C' && (
              <XCircle className="w-5 h-5 text-rose-400 ml-1 shrink-0" />
            )}
          </button>

          {/* Botão ERRADO */}
          <button
            type="button"
            onClick={() => handleSelectOption('E')}
            disabled={hasSubmitted}
            className={`min-h-[58px] p-3 rounded-2xl border flex items-center justify-center space-x-2 text-sm sm:text-base font-bold transition-all shadow-md ${getCertoErradoStyle(
              'E'
            )}`}
          >
            <X className="w-5 h-5 text-rose-400 shrink-0" />
            <span>ERRADO</span>
            {hasSubmitted && showInstantFeedback && question.gabarito.toUpperCase() === 'E' && (
              <CheckCircle className="w-5 h-5 text-emerald-400 ml-1 shrink-0" />
            )}
            {hasSubmitted && showInstantFeedback && tentativeSelection?.toUpperCase() === 'E' && question.gabarito.toUpperCase() !== 'E' && (
              <XCircle className="w-5 h-5 text-rose-400 ml-1 shrink-0" />
            )}
          </button>
        </div>
      ) : (
        /* DUAL LAYOUT: Múltipla Escolha (Lista Vertical 4 ou 5 Opções com Riscador) */
        <div className="space-y-2.5 mb-5">
          {question.alternativas.map((opt) => {
            const isCorrect = opt.id.toUpperCase() === question.gabarito.toUpperCase();
            const isUserChoice = tentativeSelection?.toUpperCase() === opt.id.toUpperCase();
            const isEliminated = eliminatedOptions.has(opt.id);

            const optImgMatch = opt.text.match(/^!\[(.*?)\]\((.*?)\)$/);

            return (
              <div key={opt.id} className="relative group">
                <button
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={hasSubmitted}
                  className={`w-full min-h-[48px] p-3 pr-11 rounded-xl border text-left flex items-start space-x-3 transition-all ${getOptionStyle(
                    opt.id
                  )}`}
                >
                  {/* Option Letter Badge */}
                  <span className={`flex shrink-0 items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${
                    hasSubmitted && showInstantFeedback && isCorrect
                      ? 'bg-emerald-500 text-slate-950'
                      : hasSubmitted && showInstantFeedback && isUserChoice && !isCorrect
                      ? 'bg-rose-500 text-white'
                      : tentativeSelection === opt.id
                      ? 'bg-indigo-500 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {opt.id}
                  </span>

                  {/* Option Content (Texto ou Imagem) */}
                  <div className="text-xs sm:text-sm pt-0.5 leading-snug flex-1">
                    {optImgMatch ? (
                      <img 
                        src={optImgMatch[2]} 
                        alt={optImgMatch[1] || `Alternativa ${opt.id}`} 
                        className="max-h-12 object-contain rounded bg-slate-950 p-1 border border-slate-800"
                        loading="lazy"
                      />
                    ) : (
                      <span>{opt.text}</span>
                    )}
                  </div>

                  {/* Status Icon Feedback */}
                  {hasSubmitted && showInstantFeedback && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 self-center" />
                  )}
                  {hasSubmitted && showInstantFeedback && isUserChoice && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 self-center" />
                  )}
                </button>

                {/* Botão Riscador / Eliminar Alternativa (Antes de submeter) */}
                {!hasSubmitted && (
                  <button
                    type="button"
                    onClick={(e) => toggleEliminate(e, opt.id)}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
                      isEliminated
                        ? 'bg-rose-950 text-rose-400 border border-rose-800/60'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/80'
                    }`}
                    title={isEliminated ? "Restaurar alternativa" : "Riscar / Eliminar alternativa"}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Zona do Polegar: Barra de Ações e Confirmação */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* Botão Anterior */}
        {hasPrev && onPrev && (
          <button
            onClick={onPrev}
            className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition-all active:scale-[0.98]"
          >
            ← Anterior
          </button>
        )}

        {/* Botão Principal: "Responder" (Antes de submeter) ou "Ver Explicação" (Após responder) */}
        {!hasSubmitted ? (
          <button
            onClick={handleConfirmAnswer}
            disabled={!tentativeSelection}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-lg ${
              tentativeSelection
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 active:scale-[0.98]'
                : 'bg-slate-800/60 border border-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Responder Questão</span>
          </button>
        ) : (
          <div className="flex-1 flex items-center space-x-2 animate-fadeIn">
            {/* Botão Buscar Explicação (Google) */}
            <button
              type="button"
              onClick={() => {
                openQuestionSearchInGoogle(question);
                onOpenExplanation?.();
              }}
              className="flex-1 py-2.5 px-3 bg-indigo-600/20 border border-indigo-500/40 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all active:scale-[0.98]"
              title="Pesquisar comentários e resolução desta questão no Google"
            >
              <Search className="w-4 h-4 text-indigo-400" />
              <span>Buscar Explicação</span>
            </button>

            {/* Botão Próxima Questão */}
            {onNext && (
              <button
                onClick={onNext}
                className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1 transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
              >
                <span>Próxima</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
