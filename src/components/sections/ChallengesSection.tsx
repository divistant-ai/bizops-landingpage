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
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Cautionary Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/10 blur-[80px]" />
      </div>

      <Container size="5xl" className="relative z-10">
        <SectionHeader
          title="Mengapa Cara Lama Tidak Cukup?"
          description={t('challenges_description')}
          align="center"
          className="mb-16"
        />

        <FadeInStagger faster>
          <div className={`grid gap-8 ${
            challenges.length % 3 === 0 ? 'md:grid-cols-3'
              : challenges.length % 2 === 0 ? 'md:grid-cols-2 lg:grid-cols-4'
                : 'md:grid-cols-3'
          }`}
          >
            {challenges.map((c: any, idx) => (
              <FadeIn key={idx}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-rose-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10 dark:border-rose-900/30 dark:bg-slate-900">
                  {/* Warning Strip Gradient */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-rose-500 via-orange-500 to-rose-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] bg-size-[16px_16px] opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

                  {/* Icon Area */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition-colors group-hover:bg-rose-600 group-hover:text-white group-hover:ring-rose-600 dark:bg-rose-900/20 dark:text-rose-400 dark:ring-rose-900/40 dark:group-hover:bg-rose-600 dark:group-hover:text-white">
                      {React.isValidElement(c.icon)
                        ? React.cloneElement(c.icon as React.ReactElement<{ className?: string }>, { className: 'h-6 w-6' })
                        : c.icon && React.createElement(c.icon, { className: 'h-6 w-6' })}
                    </div>
                    <span className="font-mono text-5xl font-bold text-slate-100 transition-colors group-hover:text-rose-50 dark:text-slate-800 dark:group-hover:text-rose-900/20">
                      0
                      {idx + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {c.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
