'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';

type Benefit = {
  title: string;
  desc: string;
};

type BenefitsSectionProps = {
  benefits: Benefit[];
};

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  const t = useTranslations('GenericLandingPage');

  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container size="6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            {t('value_added')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t('why_choose')}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="bg-primary-50/50 border-primary-100 rounded-3xl border p-8">
              <h3 className="text-primary-900 mb-3 text-xl font-bold">{b.title}</h3>
              <p className="text-primary-800/80 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
