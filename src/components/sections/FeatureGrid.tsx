'use client';

import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type Feature = {
  title: string;
  desc: string; // or description
  description?: string; // alternate key
  icon?: React.ReactNode;
};

type FeatureGridProps = {
  features: Feature[];
  highlightFirstItem?: boolean;
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  highlightFirstItem = true,
}) => {
  const t = useTranslations('GenericLandingPage');

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <Container size="7xl" className="relative z-10">
        <SectionHeader
          title={t('bizops_solutions')}
          description={t('features_description')}
          className="mb-12"
        />

        <FadeInStagger faster>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => {
              const isFirst = highlightFirstItem && idx === 0;
              return (
                <FadeIn key={idx} className={isFirst ? 'sm:col-span-2 lg:col-span-1' : ''}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isFirst
                        ? 'border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50 dark:border-blue-800 dark:from-blue-950/50 dark:to-indigo-950/50'
                        : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`absolute top-0 right-0 left-0 h-1 bg-linear-to-r ${
                        isFirst
                          ? 'from-blue-500 to-indigo-500'
                          : 'from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600'
                      }`}
                    />
                    <div className="p-6">
                      <div
                        className={`mb-4 inline-flex rounded-xl p-3 ${
                          isFirst
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : 'bg-slate-100 dark:bg-slate-800'
                        }`}
                      >
                        {f.icon
                          ? (
                              <span
                                className={
                                  isFirst
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-slate-600 dark:text-slate-400'
                                }
                              >
                                {f.icon}
                              </span>
                            )
                          : (
                              <CheckCircle2
                                className={`h-6 w-6 ${isFirst ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
                              />
                            )}
                      </div>
                      <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                        {f.title || f.desc}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {f.desc || f.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
