'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';

type Methodology = {
  title: string;
  desc: string;
};

type MethodologySectionProps = {
  methodology: Methodology[];
};

export const MethodologySection: React.FC<MethodologySectionProps> = ({ methodology }) => {
  const t = useTranslations('GenericLandingPage');

  if (!methodology || methodology.length === 0) {
    return null;
  }

  return (
    <Section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container size="7xl">
        <div className="mb-20 text-center">
          <FadeIn>
            <span className="mb-2 block text-sm font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Our Process
            </span>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('our_methodology')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('structured_approach')}
            </p>
          </FadeIn>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting Line Background (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-200 md:block dark:bg-slate-800" />

          {methodology.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative z-10 h-full">
                {/* Step Circle Indicator */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 dark:border-slate-950 dark:bg-slate-900">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{i + 1}</span>
                </div>

                {/* Content Card */}
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50">
                  <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {m.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
