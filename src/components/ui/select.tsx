import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={twMerge(
            'flex h-10 w-full appearance-none items-center justify-between rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-emerald-500 [&>span]:line-clamp-1',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute top-3 right-3 h-4 w-4 opacity-50" />
      </div>
    );
  },
);
Select.displayName = 'Select';

export { Select };
