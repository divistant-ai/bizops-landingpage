'use client';

import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';

type DashboardPreviewProps = {
  insight: string;
  features: string[];
};

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ insight, features }) => {
  const t = useTranslations('GenericLandingPage');

  if (!insight) {
    return null;
  }

  return (
    <Section className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

      <Container size="6xl">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">{insight}</h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
              {t('get_total_visibility')}
            </p>

            {/* Features List */}
            {features && (
              <div className="grid gap-4">
                {features.map((feat, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                      <div className="bg-primary-600 shadow-primary-500/30 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white shadow-lg">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 dark:text-white" />
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{feat}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>

          {/* Right Visual Preview */}
          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-slate-100 to-slate-200 shadow-2xl transition-transform duration-500 hover:scale-[1.02] dark:border-slate-600 dark:from-slate-700 dark:to-slate-800">
                {/* Hover Overlay */}
                <div className="bg-primary-500/5 group-hover:bg-primary-500/10 absolute inset-0 transition-colors" />

                {/* Center Text */}
                <div className="relative z-10 font-mono text-sm text-slate-500 dark:text-slate-400">
                  Dashboard Visual Preview
                </div>

                {/* Mock UI Elements */}
                <div className="absolute top-4 right-4 left-4 h-8 rounded border border-slate-300 bg-slate-200/80 dark:border-slate-600 dark:bg-slate-700/80" />
                <div className="absolute top-16 bottom-4 left-4 w-1/3 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
                <div className="absolute top-16 right-4 h-32 w-1/2 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
                <div className="absolute right-4 bottom-4 h-20 w-1/2 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
};
