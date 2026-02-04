'use client';

import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Tooltip } from './Tooltip';

type SelectableCardProps = {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  tooltip?: string;
};

export function SelectableCard({
  selected,
  onClick,
  title,
  description,
  icon: Icon,
  badge,
  tooltip,
}: SelectableCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96, y: 0 }}
      onClick={onClick}
      className={`group relative flex h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 active:scale-95 ${selected ? 'border-2 border-slate-900 bg-slate-100 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]' : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500 dark:hover:bg-slate-800'}`}
    >
      {selected && (
        <div className="absolute top-2 right-2 text-slate-800 dark:text-white">
          <CheckCircle2 className="h-4 w-4" />
        </div>
      )}
      {badge && (
        <div className="absolute top-2 left-2 rounded border border-amber-500/20 bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400">
          {badge}
        </div>
      )}
      {tooltip && (
        <div className="absolute top-2 right-2">
          <Tooltip text={tooltip} />
        </div>
      )}
      {Icon && (
        <Icon
          className={`h-6 w-6 transition-all duration-200 ${selected ? 'scale-110 text-slate-900 dark:text-white' : 'text-slate-600 group-hover:scale-105 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white'}`}
        />
      )}
      <div>
        <h4
          className={`mb-0.5 text-sm font-bold transition-colors ${selected ? 'text-slate-900 dark:text-white' : 'text-slate-800 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white'}`}
        >
          {title}
        </h4>
        {description && (
          <p className="mx-auto max-w-[120px] text-[10px] leading-tight text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default SelectableCard;
