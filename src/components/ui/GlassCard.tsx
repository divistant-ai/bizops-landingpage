'use client';

import type { ReactNode } from 'react';
import { glass } from '@/design-tokens';
import { cn } from '@/libs/utils/cn';

export type GlassCardProps = {
  /** Glass variant */
  variant?: 'light' | 'medium' | 'strong' | 'subtle' | 'dark' | 'primary' | 'accent' | 'danger' | 'success';
  /** Border radius size */
  rounded?: 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  /** Additional padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Enable hover effect */
  hover?: boolean;
  /** Additional className */
  className?: string;
  /** Children content */
  children: ReactNode;
  /** onClick handler */
  onClick?: () => void;
};

const roundedStyles = {
  'lg': 'rounded-lg',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  'full': 'rounded-full',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10 md:p-12',
};

const hoverStyles = 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg';

/**
 * GlassCard - Glassmorphism card component
 *
 * Features frosted glass effect with blur, transparency, and subtle borders.
 * Supports light and dark mode with various color variants.
 */
export function GlassCard({
  variant = 'light',
  rounded = '2xl',
  padding = 'md',
  hover = false,
  className,
  children,
  onClick,
}: GlassCardProps) {
  const glassStyle = glass[variant] || glass.light;

  return (
    <div
      className={cn(
        glassStyle,
        roundedStyles[rounded],
        paddingStyles[padding],
        hover && hoverStyles,
        onClick && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick
        ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }
        : undefined}
    >
      {children}
    </div>
  );
}

/**
 * GlassPanel - Full-width glass panel for section backgrounds
 */
export function GlassPanel({
  variant = 'subtle',
  className,
  children,
}: {
  variant?: 'light' | 'medium' | 'subtle' | 'dark';
  className?: string;
  children: ReactNode;
}) {
  const glassStyle = glass[variant] || glass.subtle;

  return (
    <div className={cn(glassStyle, 'rounded-3xl', className)}>
      {children}
    </div>
  );
}

/**
 * GlassOverlay - Overlay with glass effect
 */
export function GlassOverlay({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-white/60 backdrop-blur-xl dark:bg-slate-900/60',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default GlassCard;
