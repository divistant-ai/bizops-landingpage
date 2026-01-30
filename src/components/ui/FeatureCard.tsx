'use client';

import type { LucideIcon } from 'lucide-react';
import { cardHover, cardStyles, focusStyles } from '@/design-tokens';
import { cn } from '@/libs/utils/cn';
import { SpotlightCard } from './LazyComponents';

export type FeatureCardProps = {
  /** Lucide icon component */
  icon: LucideIcon;
  /** Card title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Card description */
  description: string;
  /** Color variant for the icon */
  color?: 'primary' | 'danger' | 'success' | 'warning' | 'neutral';
  /** Use spotlight effect */
  spotlight?: boolean;
  /** Spotlight color (only used when spotlight=true) */
  spotlightColor?: string;
  /** Additional className */
  className?: string;
  /** Make card interactive (shows hover state) */
  interactive?: boolean;
  /** onClick handler */
  onClick?: () => void;
};

const colorStyles = {
  primary: {
    icon: 'text-primary-600 dark:text-primary-400',
    bg: 'bg-primary-50 dark:bg-primary-950',
    spotlightColor: 'rgba(37, 99, 235, 0.08)',
  },
  danger: {
    icon: 'text-red-500 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950',
    spotlightColor: 'rgba(239, 68, 68, 0.08)',
  },
  success: {
    icon: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950',
    spotlightColor: 'rgba(16, 185, 129, 0.08)',
  },
  warning: {
    icon: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950',
    spotlightColor: 'rgba(245, 158, 11, 0.08)',
  },
  neutral: {
    icon: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-100 dark:bg-slate-800',
    spotlightColor: 'rgba(100, 116, 139, 0.08)',
  },
};

/**
 * FeatureCard - Standardized feature card component
 *
 * Used for displaying features, problems, UVP items, etc.
 * Supports spotlight effect, different color variants, and optional interactivity.
 */
export function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
  color = 'primary',
  spotlight = true,
  spotlightColor,
  className,
  interactive = false,
  onClick,
}: FeatureCardProps) {
  const colors = colorStyles[color];
  const hoverClass = interactive ? cardHover.lift : '';
  const focusClass = interactive ? focusStyles.default : '';

  const cardContent = (
    <div
      className={cn(
        'flex h-full flex-col p-6 md:p-8',
        interactive && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive && onClick
        ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }
        : undefined}
    >
      {/* Icon */}
      <div
        className={cn(
          'mb-5 flex h-12 w-12 items-center justify-center rounded-xl',
          colors.bg,
        )}
      >
        <Icon className={cn('h-6 w-6', colors.icon)} aria-hidden="true" />
      </div>

      {/* Title & Subtitle */}
      <div className="mb-3">
        {subtitle && (
          <p className="mb-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        )}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );

  if (spotlight) {
    return (
      <SpotlightCard
        className={cn(
          'h-full rounded-2xl',
          hoverClass,
          focusClass,
        )}
        spotlightColor={spotlightColor || colors.spotlightColor}
      >
        {cardContent}
      </SpotlightCard>
    );
  }

  return (
    <div
      className={cn(
        cardStyles.default,
        hoverClass,
        focusClass,
        'h-full',
      )}
    >
      {cardContent}
    </div>
  );
}

export default FeatureCard;
