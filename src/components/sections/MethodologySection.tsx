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
      <Container size="6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            {t('our_methodology')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('structured_approach')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {methodology.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative">
              <div className="relative z-10 h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800">
                <div className="absolute top-4 right-4 z-0 text-4xl font-black text-neutral-100">
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {m.desc}
                  </p>
                </div>
              </div>
              {/* Connector Line (Desktop) */}
              {i < methodology.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-0 hidden h-0.5 w-8 -translate-y-1/2 transform bg-neutral-300 md:block"></div>
              )}
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
