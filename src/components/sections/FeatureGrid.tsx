'use client';

import type { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type Feature = {
  title: string;
  desc: string; // or description
  description?: string; // alternate key
  icon?: React.ReactNode | LucideIcon;
};

type FeatureGridProps = {
  features: Feature[];
  highlightFirstItem?: boolean;
  badge?: string;
  title?: string;
  subtitle?: string;
  layout?: 'grid' | 'bento';
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  // highlightFirstItem = true,
  badge,
  title,
  subtitle,
  layout = 'grid', // New prop: 'grid' | 'bento'
}) => {
  const t = useTranslations('GenericLandingPage');

  if (!features || features.length === 0) {
    return null;
  }

  // Helper function to render icon
  const renderIcon = (icon: React.ReactNode | LucideIcon | undefined, className: string) => {
    if (!icon) {
      return <CheckCircle2 className={`h-6 w-6 ${className}`} />;
    }

    // If it's a valid React Element (e.g. <Icon />), render it
    if (React.isValidElement(icon)) {
      return <span className={className}>{icon}</span>;
    }

    // Checking for component (Function or ForwardRef object)
    if (typeof icon === 'function' || (typeof icon === 'object' && 'render' in icon)) {
      const IconComponent = icon as LucideIcon;
      return <IconComponent className={`h-6 w-6 ${className}`} />;
    }

    // If string, check if it's an icon name (no spaces, PascalCase-ish) or URL
    if (typeof icon === 'string') {
      // Simple heuristic: if it looks like an icon name, use DynamicIcon
      // URL usually has / or .
      if (!icon.includes('/') && !icon.includes('.')) {
        return <DynamicIcon name={icon} className={className} />;
      }
      return <img src={icon} alt="" className={className} />;
    }

    // Fallback for other node types
    return <span className={className}>{icon}</span>;
  };

  return (
    <Section
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <Container size="7xl" className="relative z-10">
        <SectionHeader
          badge={badge}
          title={title || t('bizops_solutions')}
          description={subtitle || t('features_description')}
          className="mb-16"
        />

        <FadeInStagger faster>
          {/* Dynamic Grid Layout Calculation */}
          {(() => {
            const count = features.length;
            let gridClass = 'grid gap-6 md:gap-8';

            // Layout Logic matches count for perfect balance
            if (layout === 'bento') {
              // Bento layout usually implies 3 cols on LG, first item usually spans
              gridClass += ' sm:grid-cols-2 lg:grid-cols-3';
            } else {
              // Standard Grid Logic
              if (count === 1) {
                gridClass += ' max-w-2xl mx-auto';
              } else if (count === 2) {
                gridClass += ' sm:grid-cols-2 max-w-4xl mx-auto';
              } else if (count === 4) {
                gridClass += ' sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto';
              } // 2x2 Balanced
              else {
                gridClass += ' sm:grid-cols-2 lg:grid-cols-3';
              } // Default 3-col
            }

            return (
              <div className={gridClass}>
                {features.map((f, idx) => {
                  // Standardized premium card design (Bento style)
                  const iconClassName = 'text-blue-600 dark:text-blue-400';

                  // Bento Spanning Logic
                  const isLarge = layout === 'bento' && idx === 0;

                  return (
                    <FadeIn
                      key={idx}
                      className={isLarge ? 'sm:col-span-2 lg:col-span-2' : ''}
                    >
                      <div className={`group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 ${isLarge ? 'md:p-10' : ''}`}>
                        <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 transition-colors group-hover:bg-blue-100 dark:bg-blue-900/20 dark:group-hover:bg-blue-900/30">
                          {renderIcon(f.icon, iconClassName)}
                        </div>

                        <h3 className={`mb-4 font-bold tracking-tight text-slate-900 dark:text-white ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                          {f.title || f.desc}
                        </h3>

                        <p className={`leading-relaxed text-slate-500 dark:text-slate-400 ${isLarge ? 'text-lg' : 'text-base'}`}>
                          {f.desc || f.description}
                        </p>

                        {/* Hover Gradient Overlay */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10" />
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            );
          })()}
        </FadeInStagger>
      </Container>
    </Section>
  );
};
