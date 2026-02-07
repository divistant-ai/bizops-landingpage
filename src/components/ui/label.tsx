'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { cn } from '@/libs/utils/cn';

const Label = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  ref?: React.RefObject<React.ElementRef<typeof LabelPrimitive.Root> | null>;
}) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm leading-none font-medium text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-slate-300',
      className,
    )}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
