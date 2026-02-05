'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, XCircle, ZapOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { modularTypography, sectionPaddingHybrid } from '@/design-tokens';
import { cn } from '@/libs/utils';

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

  // Fallback icons if none provided
  const fallbackIcons = [AlertTriangle, TrendingDown, XCircle, ZapOff];

  return (
    <Section
      className="relative overflow-hidden bg-slate-50 transition-colors duration-700 dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background Elements - Subdued Warning Tones */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-500/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f43f5e0a_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e0a_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[24px_24px]" />
      </div>

      <Container size="6xl" className="relative z-10">
        <SectionHeader
          title="Mengapa Cara Lama Tidak Cukup?"
          description={t('challenges_description')}
          align="center"
          className="mb-16 md:mb-24"
        />

        <FadeInStagger faster>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c: any, idx) => {
              const Icon = c.icon || fallbackIcons[idx % fallbackIcons.length];

              return (
                <FadeIn key={idx} className="h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    className={cn(
                      'group relative h-full overflow-hidden rounded-3xl border border-rose-100/50 p-8 transition-all duration-500',
                      'bg-white/40 shadow-lg backdrop-blur-sm dark:bg-slate-900/40 dark:border-rose-900/20',
                      'hover:border-rose-300 hover:shadow-2xl hover:shadow-rose-500/10 dark:hover:border-rose-700/50',
                    )}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Header: Icon & Counter */}
                    <div className="relative mb-6 flex items-start justify-between">
                      <div className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300',
                        'bg-white text-rose-500 shadow-sm ring-1 ring-rose-100',
                        'dark:bg-slate-800 dark:text-rose-400 dark:ring-rose-900/30',
                        'group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-500/30 group-hover:ring-0',
                      )}
                      >
                        {React.isValidElement(Icon)
                          ? React.cloneElement(Icon as React.ReactElement<{ className?: string }>, { className: 'h-6 w-6' })
                          : <Icon className="h-6 w-6" />}
                      </div>
                      <span className="bg-linear-to-br from-slate-200 to-slate-100 bg-clip-text font-mono text-4xl font-bold text-transparent transition-all duration-500 group-hover:from-rose-100 group-hover:to-white/20 dark:from-slate-800 dark:to-slate-900">
                        0
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-3">
                      <h3 className={cn(modularTypography.h3, 'text-slate-900 dark:text-slate-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300')}>
                        {c.title}
                      </h3>

                      <p className={cn(modularTypography.body, 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300')}>
                        {c.desc}
                      </p>
                    </div>

                    {/* "Hidden Cost" Indicator - Only visible on hover */}
                    <div className="absolute right-8 bottom-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-500 uppercase">
                        <AlertTriangle className="h-3 w-3" />
                        <span>High Risk</span>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
