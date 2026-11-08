import { useState } from 'react';
import { useQuestionBank } from './hooks/useQuestionBank';
import { Navbar } from './components/Navbar';
import { PracticePage } from './pages/PracticePage';
import { ExamPage } from './pages/ExamPage';
import { NotebookPage } from './pages/NotebookPage';
import { StatsPage } from './pages/StatsPage';
import { ImportModal } from './components/ImportModal';

export function App() {
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'notebook' | 'stats' | 'import'>('practice');

  const {
    questions,
    errorNotebook,
    errorNotebookQuestions,
    savedQuestionIds,
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
  } = useQuestionBank();

  // Export full JSON backup
  const handleExportBackup = () => {
    const backupObj = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      questions,
      savedQuestionIds,
      stats
    };

    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `concurseiro_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        errorNotebookCount={errorNotebookQuestions.length}
      />

      {/* Main Content Area (Max width 430px tailored for mobile viewports) */}
      <main className="flex-1 max-w-md w-full mx-auto p-4 pb-12">
        {activeTab === 'practice' && (
          <PracticePage
            questions={questions}
            onRecordAttempt={recordAttempt}
            onToggleSave={toggleSaveQuestion}
            savedQuestionIds={savedQuestionIds}
          />
        )}

        {activeTab === 'exam' && (
          <ExamPage
            questions={questions}
            currentExam={currentExam}
            onStartExam={startExam}
            onSubmitAnswer={submitExamAnswer}
            onFinishExam={finishExam}
            onToggleSave={toggleSaveQuestion}
            savedQuestionIds={savedQuestionIds}
          />
        )}

        {activeTab === 'notebook' && (
          <NotebookPage
            questions={questions}
            errorNotebook={errorNotebook}
            savedQuestionIds={savedQuestionIds}
            onRecordAttempt={recordAttempt}
            onToggleSave={toggleSaveQuestion}
          />
        )}

        {activeTab === 'stats' && (
          <StatsPage
            stats={stats}
            errorCount={errorNotebookQuestions.length}
          />
        )}

        {activeTab === 'import' && (
          <ImportModal
            onImport={importQuestions}
            onImportExamDocument={importExamDocument}
            onExport={handleExportBackup}
            onClearAll={clearAllQuestions}
            onResetFactory={resetToFactoryDefaults}
            onLoadPreloadedExam={loadPreloadedExam}
            onLoadAllPreloadedExams={loadAllPreloadedExams}
            totalQuestions={questions.length}
          />
        )}
      </main>
    </div>
  );
}

export default App;
