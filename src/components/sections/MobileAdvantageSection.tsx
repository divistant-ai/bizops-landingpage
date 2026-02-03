'use client';

import { Smartphone } from 'lucide-react';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { sectionPaddingHybrid } from '@/design-tokens';

type MobileAdvantage = {
  title: string;
  desc: string;
};

type MobileAdvantageSectionProps = {
  mobileAdvantage: MobileAdvantage;
};

export const MobileAdvantageSection: React.FC<MobileAdvantageSectionProps> = ({ mobileAdvantage }) => {
  if (!mobileAdvantage) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
      <Container size="5xl" className="relative z-10 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
          <Smartphone className="h-8 w-8" />
        </div>
        <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          {mobileAdvantage.title}
        </h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
          {mobileAdvantage.desc}
        </p>
      </Container>
    </Section>
  );
};
