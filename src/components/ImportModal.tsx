import React, { useState } from 'react';
import { 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Trash2, 
  Sparkles,
  BookOpen,
  RotateCcw
} from 'lucide-react';
import { Question } from '../types';
import { PRELOADED_EXAMS } from '../data/allExamsCatalog';

interface ImportModalProps {
  onImport: (questions: Question[]) => { added: number; total: number };
  onExport: () => void;
  onClearAll: () => void;
  onResetFactory: () => void;
  onLoadPreloadedExam: (examId: string) => number;
  onLoadAllPreloadedExams: () => number;
  totalQuestions: number;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  onImport,
  onExport,
  onClearAll,
  onResetFactory,
  onLoadPreloadedExam,
  onLoadAllPreloadedExams,
  totalQuestions,
}) => {
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [filterQuery, setFilterQuery] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        
        let questionsToImport: Question[] = [];
        if (Array.isArray(parsed)) {
          questionsToImport = parsed;
        } else if (parsed.questions && Array.isArray(parsed.questions)) {
          questionsToImport = parsed.questions;
        } else {
          throw new Error('Formato JSON inválido. Esperava-se uma lista de questões.');
        }

        const result = onImport(questionsToImport);
        if (result.added > 0) {
          setStatusMessage({
            type: 'success',
            text: `Sucesso! ${result.added} nova(s) questão(ões) importada(s). Total agora: ${result.total}.`
          });
        } else {
          setStatusMessage({
            type: 'error',
            text: 'Nenhuma questão nova foi importada (questões duplicadas ou com campos ausentes).'
          });
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erro ao processar o arquivo JSON.';
        setStatusMessage({
          type: 'error',
          text: `Erro na importação: ${msg}`
        });
      }
    };
    reader.readAsText(file);
  };

  const handleLoadAll = () => {
    const added = onLoadAllPreloadedExams();
    setStatusMessage({
      type: 'success',
      text: `Carregadas todas as ${PRELOADED_EXAMS.length} provas reais! (${added > 0 ? added + ' novas questões' : 'banco já atualizado com ' + totalQuestions + ' questões'})`
    });
  };

  const handleLoadSingleExam = (examId: string, title: string) => {
    const added = onLoadPreloadedExam(examId);
    setStatusMessage({
      type: 'success',
      text: `Prova "${title}" adicionada com sucesso! (${added} novas questões)`
    });
  };

  const filteredCatalog = PRELOADED_EXAMS.filter(e => 
    e.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    e.banca.toLowerCase().includes(filterQuery.toLowerCase()) ||
    e.orgao.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="space-y-5 max-w-md mx-auto animate-fadeIn">
      {/* Top Banner Status */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="bg-indigo-600/20 p-2 rounded-xl border border-indigo-500/30 text-indigo-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Banco de Questões</h2>
            <p className="text-xs text-slate-400">
              {totalQuestions} questões carregadas no app
            </p>
          </div>
        </div>

        {/* 1-Click Load All Button */}
        <button
          onClick={handleLoadAll}
          className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center space-x-1.5 transition-all active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span>Carregar Tudo</span>
        </button>
      </div>

      {/* Feedback Alert */}
      {statusMessage && (
        <div
          className={`p-3.5 rounded-xl text-xs font-medium flex items-center space-x-2 border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200'
              : 'bg-rose-950/80 border-rose-500/50 text-rose-200'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Catálogo de Provas Reais Pré-Carregadas (1-Clique no Celular) */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-white">Catálogo de Provas Reais</h3>
            <p className="text-[11px] text-slate-400">Toque para carregar no celular sem precisar subir arquivos</p>
          </div>
          <span className="text-[11px] font-semibold bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800 text-slate-300">
            {filteredCatalog.length} provas
          </span>
        </div>

        <input
          type="text"
          placeholder="Buscar prova por cargo, órgão ou banca..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />

        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {filteredCatalog.map((exam) => (
            <div
              key={exam.id}
              className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between hover:bg-slate-900 transition-all"
            >
              <div className="truncate mr-2">
                <span className="text-xs font-semibold text-slate-200 block truncate">
                  {exam.title}
                </span>
                <span className="text-[10px] text-slate-400 block">
                  {exam.banca} • {exam.ano} • <strong className="text-indigo-400">{exam.totalQuestions} questões</strong>
                </span>
              </div>

              <button
                onClick={() => handleLoadSingleExam(exam.id, exam.title)}
                className="px-2.5 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/40 hover:border-indigo-500 text-indigo-300 hover:text-white text-[11px] font-bold rounded-lg transition-all shrink-0"
              >
                + Carregar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Manual de JSON (Caso você gere novos arquivos no futuro) */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl">
        <h3 className="text-xs font-bold text-white mb-1">Importar Novo Arquivo JSON</h3>
        <p className="text-[11px] text-slate-400 mb-3">Suba novos simulados gerados no computador</p>

        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl cursor-pointer bg-slate-900/60 hover:bg-slate-900 transition-all text-center">
          <Upload className="w-6 h-6 text-indigo-400 mb-1" />
          <span className="text-xs font-semibold text-white">Selecionar arquivo .json</span>
          <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      {/* Backup & Gerenciamento de Dados */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
        <h3 className="text-xs font-bold text-white">Backup e Limpeza do Banco</h3>

        <div className="grid grid-cols-2 gap-2">
          {/* Exportar Backup */}
          <button
            onClick={onExport}
            className="py-2.5 px-3 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/60 text-emerald-200 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Backup</span>
          </button>

          {/* Restaurar Padrão */}
          <button
            onClick={() => {
              if (confirm('Deseja restaurar as provas pré-carregadas de fábrica?')) {
                onResetFactory();
                setStatusMessage({ type: 'success', text: 'Banco restaurado para o padrão de fábrica!' });
              }
            }}
            className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>
        </div>

        {/* Botão de Limpar/Zerar o Banco */}
        <button
          onClick={() => {
            if (confirm('ATENÇÃO: Tem certeza que deseja LIMPAR TODO o banco de questões e zerar o app?')) {
              onClearAll();
              setStatusMessage({ type: 'success', text: 'Banco de questões limpo com sucesso!' });
            }
          }}
          className="w-full py-2.5 bg-rose-950/60 hover:bg-rose-950 border border-rose-700/60 text-rose-300 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all"
        >
          <Trash2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Limpar Todo o Banco de Questões (Zerar)</span>
        </button>
      </div>
    </div>
  );
};
