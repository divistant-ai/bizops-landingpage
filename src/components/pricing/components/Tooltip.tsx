'use client';

import { HelpCircle } from 'lucide-react';

type TooltipProps = {
  text: string;
};

export function Tooltip({ text }: TooltipProps) {
  return (
    <div className="group relative z-50 ml-1 inline-flex items-center">
      <HelpCircle className="hover:text-primary-600 dark:hover:text-primary-400 h-3 w-3 cursor-help text-slate-500" />
      <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-48 -translate-x-1/2 rounded-lg border border-slate-300 bg-white p-2 text-[10px] text-slate-700 shadow-xl group-hover:block dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-slate-800" />
      </div>
    </div>
  );
}

export default Tooltip;
