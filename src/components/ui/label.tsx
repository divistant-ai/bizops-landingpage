'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Label = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root> | null> }) => (
  <LabelPrimitive.Root
    ref={ref}
    className={twMerge(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300',
      className,
    )}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
