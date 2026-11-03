import React from 'react';
import { UserStats } from '../types';
import { MetricCard } from '../components/MetricCard';
import { Target, CheckCircle2, Clock, AlertCircle, Award, BarChart2 } from 'lucide-react';

interface StatsPageProps {
  stats: UserStats;
  errorCount: number;
}

export const StatsPage: React.FC<StatsPageProps> = ({ stats, errorCount }) => {
  const subjects = Object.entries(stats.accuracyBySubject);
  const boards = Object.entries(stats.accuracyByBoard);

  return (
    <div className="space-y-5 max-w-md mx-auto">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          title="Taxa de Acerto Geral"
          value={`${stats.accuracyRate}%`}
          subtitle={`${stats.totalCorrect} de ${stats.totalAnswered} questões`}
          icon={<Target className="w-5 h-5" />}
          color="emerald"
        />

        <MetricCard
          title="Questões Resolvidas"
          value={stats.totalAnswered}
          subtitle="Histórico total de treinos"
          icon={<CheckCircle2 className="w-5 h-5" />}
          color="indigo"
        />

        <MetricCard
          title="Tempo Médio / Questão"
          value={`${stats.averageTimeSeconds}s`}
          subtitle="Ritmo de resolução"
          icon={<Clock className="w-5 h-5" />}
          color="amber"
        />

        <MetricCard
          title="Caderno de Erros"
          value={errorCount}
          subtitle="Questões pendentes"
          icon={<AlertCircle className="w-5 h-5" />}
          color="rose"
        />
      </div>

      {/* Minimalist Subject Performance Table (Alinhado via /grill-me) */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-slate-800">
          <BarChart2 className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">Desempenho por Disciplina</h3>
        </div>

        {subjects.length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">
            Responda questões no Modo Treino ou Simulado para gerar métricas por matéria.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="py-2 px-1 font-semibold">Disciplina</th>
                  <th className="py-2 px-1 font-semibold text-center">Q.</th>
                  <th className="py-2 px-1 font-semibold text-center">Acertos</th>
                  <th className="py-2 px-1 font-semibold text-right">% Taxa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {subjects.map(([subject, data]) => (
                  <tr key={subject} className="hover:bg-slate-900/40">
                    <td className="py-2.5 px-1 font-medium text-slate-200 truncate max-w-[140px]">
                      {subject}
                    </td>
                    <td className="py-2.5 px-1 text-slate-400 text-center">{data.total}</td>
                    <td className="py-2.5 px-1 text-emerald-400 text-center font-semibold">{data.correct}</td>
                    <td className="py-2.5 px-1 text-right font-bold">
                      <span className={
                        data.accuracy >= 70 ? 'text-emerald-400' : data.accuracy >= 50 ? 'text-amber-400' : 'text-rose-400'
                      }>
                        {data.accuracy}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Performance by Exam Board */}
      <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-slate-800">
          <Award className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white">Desempenho por Banca</h3>
        </div>

        {boards.length === 0 ? (
          <p className="text-xs text-slate-500 py-4 text-center">
            Sem histórico suficiente por banca.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {boards.map(([board, data]) => (
              <div key={board} className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
                <span className="text-xs font-bold text-indigo-300 block">{board}</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xs text-slate-400">{data.correct}/{data.total} acertos</span>
                  <span className="text-sm font-bold text-emerald-400">{data.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
