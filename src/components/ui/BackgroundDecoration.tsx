'use client';

import { cn } from '@/libs/utils/cn';

export interface BackgroundDecorationProps {
  /** Type of decoration */
  variant: 'blur' | 'gradient' | 'noise' | 'grid';
  /** Color scheme */
  color?: 'primary' | 'success' | 'accent' | 'mixed';
  /** Position of the decoration */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  /** Size of the blur element */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Opacity level */
  opacity?: 'low' | 'medium' | 'high';
  /** Enable animation */
  animated?: boolean;
  /** Additional className */
  className?: string;
}

const colorStyles = {
  primary: {
    blur: 'bg-primary-500/15 dark:bg-primary-500/8',
    gradient: 'from-primary-500/10 to-transparent',
  },
  success: {
    blur: 'bg-emerald-500/15 dark:bg-emerald-500/8',
    gradient: 'from-emerald-500/10 to-transparent',
  },
  accent: {
    blur: 'bg-amber-500/15 dark:bg-amber-500/8',
    gradient: 'from-amber-500/10 to-transparent',
  },
  mixed: {
    blur: 'bg-indigo-500/15 dark:bg-indigo-500/8',
    gradient: 'from-primary-500/10 via-indigo-500/10 to-transparent',
  },
};

const positionStyles = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

const sizeStyles = {
  sm: 'h-48 w-48 blur-[80px]',
  md: 'h-64 w-64 blur-[100px]',
  lg: 'h-96 w-96 blur-[120px]',
  xl: 'h-[500px] w-[500px] blur-[150px]',
};

const opacityStyles = {
  low: 'opacity-30',
  medium: 'opacity-50',
  high: 'opacity-70',
};

/**
 * BackgroundDecoration - Reusable background decoration component
 *
 * Provides consistent blur effects, gradients, noise overlays, and grid patterns
 * for section backgrounds.
 */
export function BackgroundDecoration({
  variant,
  color = 'primary',
  position = 'top-right',
  size = 'lg',
  opacity = 'medium',
  animated = false,
  className,
}: BackgroundDecorationProps) {
  const colors = colorStyles[color];

  if (variant === 'noise') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 mix-blend-overlay dark:opacity-10',
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'grid') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-[0.03]',
          className,
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'gradient') {
    return (
      <div
        className={cn(
          'pointer-events-none absolute rounded-full bg-gradient-radial',
          colors.gradient,
          positionStyles[position],
          sizeStyles[size],
          opacityStyles[opacity],
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  // Default: blur
  return (
    <div
      className={cn(
        'pointer-events-none absolute rounded-full',
        colors.blur,
        positionStyles[position],
        sizeStyles[size],
        animated && 'animate-pulse-slow',
        className,
      )}
      aria-hidden="true"
    />
  );
}

/**
 * BackgroundDecorationGroup - Predefined decoration groups for common patterns
 */
export function HeroBackground({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden="true">
      <BackgroundDecoration variant="noise" />
      <div className="absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <BackgroundDecoration
          variant="blur"
          color="primary"
          position="top-left"
          size="lg"
          animated
          className="top-[10%] left-[10%]"
        />
        <BackgroundDecoration
          variant="blur"
          color="primary"
          position="bottom-right"
          size="md"
          animated
          className="right-[10%] bottom-[20%]"
        />
        <BackgroundDecoration
          variant="blur"
          color="mixed"
          position="center"
          size="md"
          animated
          className="top-[40%] left-[60%]"
        />
      </div>
    </div>
  );
}

export function SectionBackground({
  variant = 'blur',
  className,
}: {
  variant?: 'blur' | 'minimal';
  className?: string;
}) {
  if (variant === 'minimal') {
    return (
      <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden="true">
        <BackgroundDecoration
          variant="blur"
          color="primary"
          position="top-right"
          size="xl"
          opacity="low"
        />
      </div>
    );
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden="true">
      <BackgroundDecoration
        variant="blur"
        color="primary"
        position="top-right"
        size="xl"
      />
      <BackgroundDecoration
        variant="blur"
        color="mixed"
        position="bottom-left"
        size="lg"
      />
    </div>
  );
}

export default BackgroundDecoration;
