'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type Challenge = {
  title?: string;
  desc?: string;
  subtitle?: string;
  icon?: any;
  pain?: string;
  context?: string;
  gain?: string;
  gainDesc?: string;
};

type ChallengesSectionProps = {
  challenges: Challenge[];
};

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({ challenges }) => {
  const t = useTranslations('GenericLandingPage');

  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-500/5 blur-3xl dark:bg-red-500/10" />
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />
      </div>

      <Container size="7xl" className="relative z-10">
        <SectionHeader
          title={t('why_old_way_fails')}
          description={t('challenges_description')}
          className="mb-12"
        />

        <FadeInStagger faster>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {challenges.map((c, idx) => (
              <FadeIn key={idx}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 dark:text-slate-800">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="relative z-10">
                    {/* Industry Style Challenge */}
                    {c.title && (
                      <>
                        {c.icon && (
                          <div className="mb-6 inline-flex rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                            {/* Render icon if it's a component or node */}
                            {typeof c.icon === 'function'
                              ? React.createElement(c.icon, {
                                  className: 'h-8 w-8 text-slate-600 dark:text-slate-400',
                                })
                              : c.icon}
                          </div>
                        )}
                        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                          {c.title}
                        </h3>
                        {c.subtitle && (
                          <span className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            {c.subtitle}
                          </span>
                        )}
                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                          {c.desc}
                        </p>
                      </>
                    )}

                    {/* Role Style Challenge (Pain vs Gain) */}
                    {c.pain && (
                      <>
                        <div className="mb-6">
                          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold tracking-wider text-red-600 uppercase dark:bg-red-500/20 dark:text-red-400">
                            {t('pain_point')}
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                            {c.pain}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {c.context}
                          </p>
                        </div>
                        <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
                          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:bg-emerald-500/20 dark:text-emerald-400">
                            {t('the_bizops_way')}
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                            {c.gain}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {c.gainDesc}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
