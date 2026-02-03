'use client';

import { ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type RelatedModule = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: any;
  href: string;
};

type RelatedModulesSectionProps = {
  title: string;
  subtitle: React.ReactNode;
  badge?: string;
  modules: RelatedModule[];
  learnMoreText?: string;
};

export const RelatedModulesSection: React.FC<RelatedModulesSectionProps> = ({
  title,
  subtitle,
  badge,
  modules,
  learnMoreText = 'Learn more',
}) => {
  if (!modules || modules.length === 0) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-white dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container size="7xl" className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {badge && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold tracking-wider text-indigo-700 uppercase dark:bg-indigo-900/30 dark:text-indigo-400">
              {badge}
            </div>
          )}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            {subtitle} {title}
          </h2>
        </div>

        <FadeInStagger>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, idx) => {
              const ModuleIcon = module.icon || HelpCircle;
              const cardColors = [
                {
                  bg: 'from-blue-500 to-blue-600',
                  light: 'bg-blue-50 dark:bg-blue-900/20',
                  text: 'text-blue-600 dark:text-blue-400',
                },
                {
                  bg: 'from-emerald-500 to-emerald-600',
                  light: 'bg-emerald-50 dark:bg-emerald-900/20',
                  text: 'text-emerald-600 dark:text-emerald-400',
                },
                {
                  bg: 'from-purple-500 to-purple-600',
                  light: 'bg-purple-50 dark:bg-purple-900/20',
                  text: 'text-purple-600 dark:text-purple-400',
                },
              ];
              const color = cardColors[idx % cardColors.length]!;

              return (
                <FadeIn key={module.id} className="h-full">
                  <Link href={module.href} className="group block h-full">
                    <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                      <div
                        className={`absolute top-0 right-0 left-0 h-1 bg-linear-to-r ${color.bg}`}
                      />
                      <div className={`mb-4 inline-flex rounded-xl p-3 ${color.light}`}>
                        <ModuleIcon className={`h-6 w-6 ${color.text}`} />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {module.title}
                      </h3>
                      {module.subtitle && (
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {module.subtitle}
                        </p>
                      )}
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {learnMoreText}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
