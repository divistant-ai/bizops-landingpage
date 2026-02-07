import * as React from 'react';
import { cn } from '@/libs/utils/cn';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  className,
  ref,
  ...props
}: TextareaProps & { ref?: React.Ref<HTMLTextAreaElement> }) => {
  return (
    <textarea
      className={cn(
        'focus-visible:ring-primary-500 dark:focus-visible:ring-primary-500 flex min-h-[80px] w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white transition-all duration-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:ring-offset-slate-950 dark:placeholder:text-slate-400',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

Textarea.displayName = 'Textarea';

export { Textarea };
