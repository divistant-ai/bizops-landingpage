'use client';

import React from 'react';
import { Container, Section } from '@/components/layout';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type Metric = {
  value: string;
  label: string;
};

type MetricsSectionProps = {
  metrics: Metric[];
  blended?: boolean;
};

export const MetricsSection: React.FC<MetricsSectionProps> = ({ metrics, blended = false }) => {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  // Determine grid columns based on number of metrics (max 4)
  const gridCols = metrics.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';

  return (
    <Section
      className={`relative overflow-hidden ${blended ? 'z-20 -mt-12 bg-transparent md:-mt-16 lg:-mt-20' : 'bg-white dark:bg-slate-950'}`}
      noPadding
      containerClassName={blended ? 'pt-0 pb-20 md:pb-24' : sectionPaddingHybrid.default}
    >
      {/* Background Decor - Hide if blended */}
      {!blended && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          <div className="absolute top-0 left-1/2 h-[500px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>
      )}

      <Container size="7xl" className="relative z-10">
        <FadeInStagger faster>
          {/* Unified Glass Bar Container */}
          <div className={`rounded-3xl border border-slate-200 bg-white/50 shadow-xl shadow-slate-200/50 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none ${blended ? 'mx-auto max-w-6xl p-6 md:p-10' : 'border-slate-200 bg-white p-8 shadow-none md:p-12 dark:bg-slate-900'}`}>
            <div className={`grid grid-cols-1 gap-8 ${gridCols} md:divide-x md:divide-slate-200/50 dark:md:divide-white/10`}>
              {metrics.map((metric, idx) => {
                const gradients = [
                  'from-blue-600 to-indigo-600',
                  'from-emerald-500 to-teal-500',
                  'from-purple-600 to-pink-600',
                  'from-amber-500 to-orange-600',
                ];
                const gradient = gradients[idx % gradients.length];

                return (
                  <FadeIn key={idx}>
                    <div className="group relative flex flex-col items-center justify-center text-center transition-all duration-500 md:px-4">
                      <div
                        className={`mb-3 bg-linear-to-br bg-clip-text text-4xl font-black tracking-tighter text-transparent md:text-5xl ${gradient} transition-transform duration-500 group-hover:scale-110`}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300">
                        {metric.label}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
