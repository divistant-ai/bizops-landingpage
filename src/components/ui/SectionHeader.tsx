'use client';

import { Badge } from '@/components/ui';
import { modularTypography, sectionHeaderSpacing } from '@/design-tokens';
import { cn } from '@/libs/utils/cn';

export interface SectionHeaderProps {
  /** Optional badge text displayed above the title */
  badge?: string;
  /** Badge variant */
  badgeVariant?: 'primary' | 'neutral' | 'dark';
  /** Main title text */
  title: string;
  /** Highlighted portion of the title (rendered with gradient) */
  titleHighlight?: string;
  /** Description text below the title */
  description?: string;
  /** Text alignment */
  align?: 'left' | 'center';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'display';
  /** Additional className for the container */
  className?: string;
  /** Additional className for the title */
  titleClassName?: string;
  /** Additional className for the description */
  descriptionClassName?: string;
}

// Using modular typography scale (1.125x ratio) - More Compact
const sizeStyles = {
  sm: {
    title: modularTypography.h3,
    description: 'text-[0.89rem] md:text-[1rem] text-slate-600 dark:text-slate-400 leading-relaxed',
    container: 'mb-6 md:mb-8',
  },
  md: {
    title: modularTypography.h2,
    description: 'text-[1rem] md:text-[1.125rem] text-slate-600 dark:text-slate-400 leading-relaxed',
    container: 'mb-8 md:mb-10',
  },
  lg: {
    title: modularTypography.h1,
    description: 'text-[1rem] md:text-[1.125rem] lg:text-[1.266rem] text-slate-600 dark:text-slate-400 leading-relaxed',
    container: 'mb-10 md:mb-12',
  },
  display: {
    title: modularTypography.display,
    description: 'text-[1.125rem] md:text-[1.266rem] text-slate-600 dark:text-slate-400 leading-relaxed',
    container: 'mb-8 md:mb-10',
  },
};

/**
 * SectionHeader - Reusable section header component
 *
 * Provides consistent styling for section headers across the application.
 * Supports optional badge, highlighted title text, and description.
 */
export function SectionHeader({
  badge,
  badgeVariant = 'primary',
  title,
  titleHighlight,
  description,
  align = 'center',
  size = 'md',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const styles = sizeStyles[size];
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidthClass = align === 'center' ? 'max-w-3xl' : '';

  return (
    <div className={cn(styles.container, alignClass, maxWidthClass, className)}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          styles.title,
          'text-slate-900 dark:text-white',
          titleClassName,
        )}
      >
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-blue-600 dark:text-blue-400">
              {titleHighlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className={cn(styles.description, sectionHeaderSpacing.titleGap, descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
