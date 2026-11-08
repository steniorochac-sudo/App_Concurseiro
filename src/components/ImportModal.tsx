import React, { useState } from 'react';
import { 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  Trash2, 
  Sparkles, 
  BookOpen, 
  RotateCcw,
  Copy,
  Check,
  FileCode,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Question } from '../types';
import { ExamDocumentV2 } from '../types/examSchemaV2';
import { PRELOADED_EXAMS } from '../data/allExamsCatalog';
import { parseAndValidateExamJson } from '../utils/aiJsonParser';
import { getMasterAiPrompt } from '../utils/aiPromptTemplate';

interface ImportModalProps {
  onImport: (questions: Question[]) => { added: number; total: number };
  onImportExamDocument?: (doc: ExamDocumentV2) => { added: number; updated: number; total: number };
  onExport: () => void;
  onClearAll: () => void;
  onResetFactory: () => void;
  onLoadPreloadedExam: (examId: string) => number;
  onLoadAllPreloadedExams: () => number;
  totalQuestions: number;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  onImport,
  onImportExamDocument,
  onExport,
  onClearAll,
  onResetFactory,
  onLoadPreloadedExam,
  onLoadAllPreloadedExams,
  totalQuestions,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'ai' | 'file' | 'catalog'>('ai');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [pastedAiText, setPastedAiText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showPromptPreview, setShowPromptPreview] = useState<boolean>(false);
  const [filterQuery, setFilterQuery] = useState<string>('');

  const masterPrompt = getMasterAiPrompt();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(masterPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Não foi possível copiar automaticamente. Selecione e copie o prompt manualmente.',
      });
    }
  };

  const handleProcessAiJson = () => {
    if (!pastedAiText.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Por favor, cole a resposta da IA no campo de texto antes de validar.',
      });
      return;
    }

    const result = parseAndValidateExamJson(pastedAiText);

    if (!result.success || !result.data) {
      setStatusMessage({
        type: 'error',
        text: result.error || 'Erro ao interpretar o JSON gerado pela IA.',
      });
      return;
    }

    const doc = result.data;
    if (onImportExamDocument) {
      const res = onImportExamDocument(doc);
      setStatusMessage({
        type: 'success',
        text: `Sucesso! Prova importada com ${res.added} nova(s) questão(ões)${res.updated > 0 ? ` e ${res.updated} atualizada(s)` : ''}. Total no app: ${res.total} questões.`,
      });
      setPastedAiText('');
    } else {
      // Fallback para onImport com questões simples
      const simpleQuestions: Question[] = doc.questoes.map((q) => ({
        id: q.id,
        banca: doc.exam.banca,
        ano: doc.exam.ano,
        orgao: doc.exam.orgao,
        cargo: doc.exam.cargo,
        disciplina: q.metadados.disciplina || 'Conhecimentos Gerais',
        assunto: q.metadados.assunto || 'Geral',
        enunciado: q.enunciado,
        alternativas: q.alternativas,
        gabarito: q.gabaritoOficial,
        explicacao: q.explicacao || `Gabarito oficial: ${q.gabaritoOficial}`,
        tipo: q.tipo,
        numeroOriginal: q.numeroOriginal,
      }));
      const res = onImport(simpleQuestions);
      setStatusMessage({
        type: 'success',
        text: `Sucesso! Prova importada com ${res.added} nova(s) questão(ões). Total: ${res.total}.`,
      });
      setPastedAiText('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        
        // Tenta processar como ExamDocumentV2 primeiro
        const result = parseAndValidateExamJson(content);
        if (result.success && result.data && onImportExamDocument) {
          const res = onImportExamDocument(result.data);
          setStatusMessage({
            type: 'success',
            text: `Sucesso! Arquivo processado: ${res.added} nova(s) questão(ões) importada(s). Total: ${res.total}.`,
          });
          return;
        }

        // Fallback para arrays simples de questões
        const parsed = JSON.parse(content);
        let questionsToImport: Question[] = [];
        if (Array.isArray(parsed)) {
          questionsToImport = parsed;
        } else if (parsed.questions && Array.isArray(parsed.questions)) {
          questionsToImport = parsed.questions;
        } else {
          throw new Error('Formato JSON não reconhecido.');
        }

        const res = onImport(questionsToImport);
        setStatusMessage({
          type: 'success',
          text: `Sucesso! ${res.added} nova(s) questão(ões) importada(s). Total: ${res.total}.`,
        });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Erro ao processar o arquivo JSON.';
        setStatusMessage({
          type: 'error',
          text: `Falha na importação: ${msg}`,
        });
      }
    };
    reader.readAsText(file);
  };

  const handleLoadDemo = () => {
    const added = onLoadPreloadedExam('balneario_camboriu_2022_agente_fiscal_tributario');
    setStatusMessage({
      type: 'success',
      text: `Prova demonstrativa carregada com sucesso! (${added > 0 ? `${added} novas questões adicionadas` : 'questões já disponíveis no app'})`,
    });
  };

  const filteredCatalog = PRELOADED_EXAMS.filter(
    (e) =>
      e.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      e.banca.toLowerCase().includes(filterQuery.toLowerCase()) ||
      e.orgao.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="space-y-5 animate-fadeIn">
      {/* Header do Módulo */}
      <div className="text-center py-2">
        <h2 className="text-xl font-extrabold text-white flex items-center justify-center space-x-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span>Central de Provas & IA</span>
        </h2>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          Crie provas personalizadas com inteligência artificial, importe arquivos JSON ou gerencie seu acervo de estudos.
        </p>
      </div>

      {/* Sub-Navegação (Abas) */}
      <div className="flex bg-slate-900/90 p-1 rounded-2xl border border-slate-800 text-xs font-semibold">
        <button
          type="button"
          onClick={() => { setActiveSubTab('ai'); setStatusMessage(null); }}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
            activeSubTab === 'ai'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Criar com IA</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveSubTab('file'); setStatusMessage(null); }}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
            activeSubTab === 'file'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Arquivo .json</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveSubTab('catalog'); setStatusMessage(null); }}
          className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1.5 ${
            activeSubTab === 'catalog'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Acervo & Backup</span>
        </button>
      </div>

      {/* Mensagens de Feedback */}
      {statusMessage && (
        <div
          className={`p-3.5 rounded-xl border flex items-start space-x-2.5 text-xs animate-fadeIn ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
              : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          )}
          <span className="leading-relaxed">{statusMessage.text}</span>
        </div>
      )}

      {/* ABA 1: GERADOR COM IA (PROMPT MESTRE + COLAR JSON) */}
      {activeSubTab === 'ai' && (
        <div className="space-y-4">
          {/* Card Passo a Passo */}
          <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 space-y-3.5 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px]">1</span>
              <span>Como estruturar qualquer prova com IA</span>
            </h3>

            <ol className="text-xs text-slate-300 space-y-2 pl-2">
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Baixe o <strong>PDF da prova</strong> e o <strong>PDF do gabarito oficial</strong> no site da banca examinadora.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Clique no botão abaixo para copiar o <strong>Prompt Mestre</strong> configurado para o App_Concurseiro.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Abra sua IA de preferência (<strong>ChatGPT, Claude ou Gemini</strong>), anexe os 2 PDFs e cole o prompt.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Copie a resposta da IA e cole no campo abaixo.</span>
              </li>
            </ol>

            {/* Botão Copiar Prompt Mestre */}
            <button
              type="button"
              onClick={handleCopyPrompt}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md active:scale-[0.98] ${
                isCopied
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
              }`}
            >
              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Copiado com Sucesso!' : 'Copiar Prompt Mestre para a IA'}</span>
            </button>

            {/* Prévia do Prompt (Colapsável) */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowPromptPreview(!showPromptPreview)}
                className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center space-x-1"
              >
                <span>{showPromptPreview ? 'Ocultar texto do prompt' : 'Visualizar texto do prompt'}</span>
                {showPromptPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showPromptPreview && (
                <pre className="mt-2 p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-[11px] text-slate-300 whitespace-pre-wrap font-mono max-h-48 overflow-y-auto">
                  {masterPrompt}
                </pre>
              )}
            </div>
          </div>

          {/* Área para Colar a Resposta da IA */}
          <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px]">2</span>
              <span>Cole a resposta gerada pela IA</span>
            </h3>

            <p className="text-[11px] text-slate-400">
              Cole o texto completo retornado pela IA. Nosso sistema remove automaticamente introduções e marcações de código.
            </p>

            <textarea
              value={pastedAiText}
              onChange={(e) => setPastedAiText(e.target.value)}
              placeholder="Cole aqui a resposta da IA contendo o código JSON..."
              rows={7}
              className="w-full p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-600 font-mono focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />

            <button
              type="button"
              onClick={handleProcessAiJson}
              disabled={!pastedAiText.trim()}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg ${
                pastedAiText.trim()
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 active:scale-[0.98]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Validar e Carregar Simulado</span>
            </button>
          </div>

          {/* Degustação Rápida */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-3.5 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Primeira vez por aqui?</span>
              <span className="text-[11px] text-slate-400">Experimente o app com uma prova real pronta.</span>
            </div>
            <button
              type="button"
              onClick={handleLoadDemo}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold rounded-xl border border-slate-700 transition-colors shrink-0"
            >
              Carregar Prova Demonstrativa
            </button>
          </div>
        </div>
      )}

      {/* ABA 2: UPLOAD DE ARQUIVO .JSON */}
      {activeSubTab === 'file' && (
        <div className="space-y-4">
          <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-5 space-y-4 text-center shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto text-indigo-400">
              <Upload className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">Carregar Arquivo JSON</h3>
              <p className="text-xs text-slate-400 mt-1">
                Selecione um arquivo <code>.json</code> salvo no seu dispositivo ou recebido de colegas concurseiros.
              </p>
            </div>

            <label className="block w-full cursor-pointer">
              <span className="sr-only">Escolher arquivo JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="block w-full text-xs text-slate-400 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
              />
            </label>
          </div>
        </div>
      )}

      {/* ABA 3: ACERVO PRÉ-CARREGADO & BACKUP */}
      {activeSubTab === 'catalog' && (
        <div className="space-y-4">
          {/* Card de Backup / Compartilhamento */}
          <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Exportar & Compartilhar com Amigos</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exporte todo o seu banco de questões e estatísticas em um arquivo JSON. Você pode enviar este arquivo no WhatsApp para amigos importarem em seus próprios aparelhos.
            </p>
            <button
              type="button"
              onClick={onExport}
              className="w-full py-2.5 px-3 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Banco Completo (.json)</span>
            </button>
          </div>

          {/* Acervo Pré-carregado no Sistema */}
          <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Provas Oficiais Disponíveis</span>
              </h3>
              <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-lg">
                {totalQuestions} questões ativas
              </span>
            </div>

            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filtrar por banca, órgão ou cargo..."
              className="w-full p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
            />

            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {filteredCatalog.map((exam) => (
                <div
                  key={exam.id}
                  className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between text-xs hover:border-slate-700 transition-colors"
                >
                  <div className="pr-2">
                    <span className="font-semibold text-slate-200 block truncate max-w-[200px]">
                      {exam.title}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {exam.banca} • {exam.ano} • {exam.totalQuestions} questões
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onLoadPreloadedExam(exam.id)}
                    className="py-1.5 px-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 rounded-lg text-[11px] font-medium border border-slate-700 transition-colors shrink-0"
                  >
                    Adicionar
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onLoadAllPreloadedExams}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              Carregar Todas as Provas do Catálogo
            </button>
          </div>

          {/* Zona de Perigo / Limpeza */}
          <div className="pt-2 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={onClearAll}
              className="flex-1 py-2 px-3 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-medium rounded-xl transition-colors flex items-center justify-center space-x-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar Meus Dados</span>
            </button>
            <button
              type="button"
              onClick={onResetFactory}
              className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium rounded-xl transition-colors flex items-center justify-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Fábrica</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
