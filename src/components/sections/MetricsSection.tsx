'use client';

import { Container, Section } from '@/components/layout';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';
import React from 'react';

type Metric = {
  value: string;
  label: string;
};

type MetricsSectionProps = {
  metrics: Metric[];
};

export const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics }) => {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <Container size="7xl" className="relative z-10">
        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {metrics.map((metric, idx) => {
              const colorVariants = [
                'from-blue-500 to-blue-600',
                'from-emerald-500 to-emerald-600',
                'from-purple-500 to-purple-600',
              ];
              const colorBg = colorVariants[idx % colorVariants.length];

              return (
                <FadeIn key={idx}>
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <div
                      className={`absolute top-0 right-0 left-0 h-1 bg-linear-to-r ${colorBg}`}
                    />
                    <div
                      className={`mb-2 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl ${colorBg}`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
                      {metric.label}
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
