'use client';

import type { LucideIcon } from 'lucide-react';
import { clay } from '@/design-tokens';
import { cn } from '@/libs/utils/cn';

export type ClayIconProps = {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Color variant */
  color?: 'primary' | 'danger' | 'success' | 'warning' | 'neutral';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional className */
  className?: string;
  /** Animation on hover */
  animated?: boolean;
};

const sizeStyles = {
  sm: {
    container: 'h-10 w-10',
    icon: 'h-5 w-5',
  },
  md: {
    container: 'h-12 w-12',
    icon: 'h-6 w-6',
  },
  lg: {
    container: 'h-14 w-14',
    icon: 'h-7 w-7',
  },
  xl: {
    container: 'h-16 w-16',
    icon: 'h-8 w-8',
  },
};

// Using direct Tailwind classes instead of design tokens for better reliability
// Using ! prefix for higher specificity
const colorStyles = {
  primary: '!bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30',
  danger: '!bg-red-600 rounded-xl shadow-lg shadow-red-500/30',
  success: '!bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/30',
  warning: '!bg-amber-500 rounded-xl shadow-lg shadow-amber-500/30',
  neutral: '!bg-slate-500 rounded-xl shadow-lg shadow-slate-500/30',
};

/**
 * ClayIcon - Softened to "Soft Icon"
 *
 * Features subtle gradient background with cleaner look.
 * Removed heavy 3D rotation and strong shadows.
 */
export function ClayIcon({
  icon: Icon,
  color = 'primary',
  size = 'md',
  className,
  animated = true,
}: ClayIconProps) {
  const sizes = sizeStyles[size];
  const colorStyle = colorStyles[color];

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizes.container,
        colorStyle,
        animated && 'transition-all duration-300 hover:scale-105',
        className,
      )}
    >
      <Icon
        className={cn(sizes.icon, 'text-white')}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * ClayIconNeutral - Neutral soft icon with subtle styling
 */
export function ClayIconNeutral({
  icon: Icon,
  size = 'md',
  className,
}: Omit<ClayIconProps, 'color' | 'animated'>) {
  const sizes = sizeStyles[size];

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizes.container,
        clay.icon,
        'transition-all duration-300 hover:scale-105',
        className,
      )}
    >
      <Icon
        className={cn(sizes.icon, 'text-slate-600 dark:text-slate-300')}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * ClayBadge - Badge with soft effect
 */
export function ClayBadge({
  children,
  color = 'primary',
  className,
}: {
  children: React.ReactNode;
  color?: 'primary' | 'danger' | 'success' | 'warning';
  className?: string;
}) {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-700 border border-primary-200/50',
    danger: 'bg-red-50 text-red-700 border border-red-200/50',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/50',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold',
        colorClasses[color],
        className,
      )}
    >
      {children}
    </span>
  );
}

export default ClayIcon;
