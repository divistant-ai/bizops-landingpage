import * as React from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
};

const Input = ({ className, type, icon, ref, ...props }: InputProps & { ref?: React.Ref<HTMLInputElement> }) => {
  return (
    <div className="relative w-full">
      {React.isValidElement(icon) && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-slate-400">
          {React.cloneElement(icon as React.ReactElement<any>, {
            className: twMerge('h-5 w-5', (icon.props as any).className),
          })}
        </div>
      )}
      <input
        type={type}
        className={twMerge(
          'flex h-11 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-primary-500',
          icon && 'pl-10',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
};
 
Input.displayName = 'Input';

export { Input };
