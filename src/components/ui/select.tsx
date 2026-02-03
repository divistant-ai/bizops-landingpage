import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  icon?: React.ReactNode;
};

const Select = ({ className, children, icon, ref, ...props }: SelectProps & { ref?: React.Ref<HTMLSelectElement> }) => {
  return (
    <div className="relative w-full">
      {React.isValidElement(icon) && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400">
          {React.cloneElement(icon as React.ReactElement<any>, {
            className: twMerge('h-5 w-5', (icon.props as any).className),
          })}
        </div>
      )}
      <select
        className={twMerge(
          'flex h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-500',
          icon && 'pl-10',
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
};
Select.displayName = 'Select';

export { Select };
