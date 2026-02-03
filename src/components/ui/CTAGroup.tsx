'use client';

import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { colorShadows } from '@/design-tokens';
import { cn } from '@/libs/utils/cn';

export type CTAButtonConfig = {
  /** Button label */
  label: string;
  /** Link href */
  href: string;
  /** Optional icon */
  icon?: LucideIcon;
  /** Icon position */
  iconPosition?: 'left' | 'right';
};

export type CTAGroupProps = {
  /** Primary CTA button configuration */
  primary: CTAButtonConfig;
  /** Secondary CTA button configuration (optional) */
  secondary?: CTAButtonConfig;
  /** Alignment of the button group */
  align?: 'left' | 'center' | 'right';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Stack buttons vertically on mobile */
  stackOnMobile?: boolean;
  /** Additional className */
  className?: string;
};

const sizeStyles = {
  sm: {
    button: 'h-10 px-5 text-sm',
    icon: 'h-4 w-4',
  },
  md: {
    button: 'h-12 px-8 text-base',
    icon: 'h-5 w-5',
  },
  lg: {
    button: 'h-14 px-10 text-lg',
    icon: 'h-5 w-5',
  },
};

const alignStyles = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

/**
 * CTAGroup - Standardized CTA button group component
 *
 * Provides consistent styling for primary/secondary CTA button pairs.
 */
export function CTAGroup({
  primary,
  secondary,
  align = 'center',
  size = 'md',
  stackOnMobile = true,
  className,
}: CTAGroupProps) {
  const styles = sizeStyles[size];
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary?.icon;

  return (
    <div
      className={cn(
        'flex gap-4',
        stackOnMobile ? 'flex-col sm:flex-row' : 'flex-row',
        alignStyles[align],
        className,
      )}
    >
      {/* Primary CTA */}
      <Button
        asChild
        variant="primary"
        size={size}
        className={cn(
          styles.button,
          'font-semibold',
          colorShadows.primary,
          'hover:shadow-xl hover:shadow-primary-600/30',
          'bg-linear-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500',
        )}
      >
        <Link href={primary.href}>
          {PrimaryIcon && primary.iconPosition === 'left' && (
            <PrimaryIcon className={cn(styles.icon, 'mr-2')} aria-hidden="true" />
          )}
          {primary.label}
          {PrimaryIcon && primary.iconPosition !== 'left' && (
            <PrimaryIcon className={cn(styles.icon, 'ml-2')} aria-hidden="true" />
          )}
        </Link>
      </Button>

      {/* Secondary CTA */}
      {secondary && (
        <Button
          asChild
          variant="white"
          size={size}
          className={cn(
            styles.button,
            'font-medium',
            'bg-white text-slate-900 shadow-sm hover:bg-slate-50',
            'dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700',
          )}
        >
          <Link href={secondary.href}>
            {SecondaryIcon && secondary.iconPosition === 'left' && (
              <SecondaryIcon className={cn(styles.icon, 'mr-2')} aria-hidden="true" />
            )}
            {secondary.label}
            {SecondaryIcon && secondary.iconPosition !== 'left' && (
              <SecondaryIcon className={cn(styles.icon, 'ml-2')} aria-hidden="true" />
            )}
          </Link>
        </Button>
      )}
    </div>
  );
}

/**
 * FinalCTAGroup - Larger CTA group for final section
 */
export function FinalCTAGroup({
  primary,
  secondary,
  className,
}: Omit<CTAGroupProps, 'size' | 'align'>) {
  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary?.icon;

  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:justify-center',
        className,
      )}
    >
      {/* Primary CTA - Extra large */}
      <Button
        asChild
        variant="primary"
        className={cn(
          'h-16 w-full px-10 text-xl font-bold sm:w-auto',
          'bg-linear-to-r from-primary-600 to-indigo-600 text-white shadow-2xl shadow-primary-600/20',
          'hover:from-primary-500 hover:to-indigo-500',
        )}
      >
        <Link href={primary.href}>
          {PrimaryIcon && primary.iconPosition === 'left' && (
            <PrimaryIcon className="mr-2 h-6 w-6" aria-hidden="true" />
          )}
          {primary.label}
          {PrimaryIcon && primary.iconPosition !== 'left' && (
            <PrimaryIcon className="ml-2 h-6 w-6" aria-hidden="true" />
          )}
        </Link>
      </Button>

      {/* Secondary CTA */}
      {secondary && (
        <Button
          asChild
          variant="outline-white"
          className={cn(
            'h-16 w-full px-10 text-xl font-semibold sm:w-auto',
            'border-slate-300 text-slate-700 hover:bg-slate-50',
            'dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800',
          )}
        >
          <Link href={secondary.href}>
            {SecondaryIcon && secondary.iconPosition === 'left' && (
              <SecondaryIcon className="mr-2 h-6 w-6" aria-hidden="true" />
            )}
            {secondary.label}
            {SecondaryIcon && secondary.iconPosition !== 'left' && (
              <SecondaryIcon className="ml-2 h-6 w-6" aria-hidden="true" />
            )}
          </Link>
        </Button>
      )}
    </div>
  );
}

export default CTAGroup;
