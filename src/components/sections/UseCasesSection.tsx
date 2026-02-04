'use client';

import type { LucideIcon } from 'lucide-react';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

export type UseCase = {
  title: string;
  desc: string;
  result?: string;
  icon?: LucideIcon;
  tags?: string[];
};

type UseCasesSectionProps = {
  useCases: UseCase[];
  badge?: string;
  title?: string;
  subtitle?: string;
};

export function UseCasesSection({
  useCases,
  badge = 'Use Cases',
  title = 'Real-World Applications',
  subtitle = 'See how businesses like yours use this feature.',
}: UseCasesSectionProps) {
  if (!useCases || useCases.length === 0) { return null; }

  // Helper function to render icon
  const renderIcon = (icon: any, className: string) => {
    if (!icon) { return null; }
    if (React.isValidElement(icon)) { return <span className={className}>{icon}</span>; }
    if (typeof icon === 'function' || (typeof icon === 'object' && icon.render)) {
      const IconComponent = icon;
      return <IconComponent className={className} />;
    }
    return <span className={className}>{icon}</span>;
  };

  return (
    <Section
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/50"
      containerClassName={sectionPaddingHybrid.default}
    >
      <Container size="7xl" className="relative z-10">
        <SectionHeader
          badge={badge}
          title={title}
          description={subtitle}
          className="mb-16"
        />

        <FadeInStagger faster>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, idx) => {
              // const iconClassName = 'text-indigo-600 dark:text-indigo-400';

              return (
                <FadeIn key={idx} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-900">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-indigo-50 p-4 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-900/20 dark:group-hover:bg-indigo-900/30">
                        {renderIcon(uc.icon, 'h-6 w-6 text-indigo-600 dark:text-indigo-400')}
                      </div>
                      {uc.tags && uc.tags.length > 0 && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                          {uc.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                      {uc.title}
                    </h3>

                    <p className="mb-6 grow text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {uc.desc}
                    </p>

                    {uc.result && (
                      <div className="mt-auto border-t border-slate-100 pt-6 dark:border-slate-800">
                        <div className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                          Result
                        </div>
                        <div className="flex items-center gap-2 font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="text-lg">📈</span>
                          {uc.result}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
}
