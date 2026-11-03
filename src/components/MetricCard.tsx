import React, { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  color?: 'indigo' | 'emerald' | 'amber' | 'rose';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color = 'indigo'
}) => {
  const getColorStyles = () => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400';
      case 'amber':
        return 'bg-amber-950/40 border-amber-500/30 text-amber-400';
      case 'rose':
        return 'bg-rose-950/40 border-rose-500/30 text-rose-400';
      case 'indigo':
      default:
        return 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400';
    }
  };

  return (
    <div className="bg-[#131b2e] border border-slate-800 rounded-2xl p-4 shadow-xl flex items-center space-x-3.5">
      <div className={`p-3 rounded-xl border ${getColorStyles()}`}>
        {icon}
      </div>
      <div>
        <span className="text-xs font-medium text-slate-400 block">{title}</span>
        <div className="text-xl font-bold text-white tracking-tight leading-tight mt-0.5">
          {value}
        </div>
        {subtitle && (
          <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
