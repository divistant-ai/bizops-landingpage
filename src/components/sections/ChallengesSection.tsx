'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { Typography } from '@/components/ui';
import { cn } from '@/libs/utils';

type Challenge = {
  title?: string;
  subtitle?: string;
  desc?: string;
  icon?: any;
  stat?: string;
};

type ChallengesSectionProps = {
  challenges: Challenge[];
};

const CARD_CONFIGS = [
  {
    gradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
    border: 'border-rose-200 dark:border-rose-800/50',
    iconBg: 'bg-rose-500',
    iconColor: 'text-white',
    accent: 'text-rose-600 dark:text-rose-400',
    badge: 'bg-rose-500',
    glow: 'group-hover:shadow-rose-500/20',
  },
  {
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    border: 'border-amber-200 dark:border-amber-800/50',
    iconBg: 'bg-amber-500',
    iconColor: 'text-white',
    accent: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-500',
    glow: 'group-hover:shadow-amber-500/20',
  },
  {
    gradient: 'from-slate-500/10 via-slate-500/5 to-transparent',
    border: 'border-slate-200 dark:border-slate-700/50',
    iconBg: 'bg-slate-600',
    iconColor: 'text-white',
    accent: 'text-slate-600 dark:text-slate-400',
    badge: 'bg-slate-500',
    glow: 'group-hover:shadow-slate-500/20',
  },
  {
    gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    border: 'border-purple-200 dark:border-purple-800/50',
    iconBg: 'bg-purple-500',
    iconColor: 'text-white',
    accent: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-500',
    glow: 'group-hover:shadow-purple-500/20',
  },
];

export const ChallengesSection: React.FC<ChallengesSectionProps> = ({ challenges }) => {
  const t = useTranslations('Homepage');

  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <Section
      id="problems"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50 transition-colors duration-700 dark:bg-slate-950"
      noPadding
      containerClassName="px-4 py-8 sm:py-10 lg:py-12"
    >
      {/* Subtle Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-rose-500/5 to-transparent blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/5 to-transparent blur-3xl" />
      </div>

      <Container size="7xl" className="relative z-10">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-rose-800/30 dark:bg-slate-900/80"
          >
            <AlertTriangle className="h-4 w-4 text-rose-500" />
            <span className="text-xs font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400">
              {t('problems_badge')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h2" as="h2" color="default" className="mb-3">
              <span className="text-rose-600 dark:text-rose-400">4 Silent Killers</span>
              <br className="hidden sm:block" />
              <span className="text-lg sm:text-xl lg:text-2xl">{t('problems_title')}</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="body" color="muted" className="mx-auto max-w-2xl">
              {t('problems_desc')}
            </Typography>
          </motion.div>
        </div>

        {/* 4 Cards Grid - Larger Cards with Full Text */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.slice(0, 4).map((challenge, index) => {
            const config = CARD_CONFIGS[index] || CARD_CONFIGS[0]!;
            const Icon = challenge?.icon || AlertTriangle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900',
                    config.border,
                    config.glow,
                  )}
                >
                  {/* Gradient Background */}
                  <div
                    className={cn('absolute inset-0 bg-gradient-to-br opacity-50', config.gradient)}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-1 flex-col">
                    {/* Header with Icon and Number */}
                    <div className="mb-5 flex items-start justify-between">
                      <div
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-xl shadow-lg',
                          config.iconBg,
                        )}
                      >
                        <Icon className={cn('h-6 w-6', config.iconColor)} />
                      </div>
                      <div className="flex items-center gap-2">
                        {challenge?.stat && (
                          <span className="hidden rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow-sm sm:inline-block dark:bg-slate-800 dark:text-slate-300">
                            {challenge.stat}
                          </span>
                        )}
                        <span className="font-mono text-3xl font-bold text-slate-200 dark:text-slate-700">
                          0
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="mb-4">
                      <h3 className="mb-1.5 text-lg leading-tight font-bold text-slate-900 sm:text-xl dark:text-white">
                        {challenge?.title}
                      </h3>
                      <p className={cn('text-sm font-semibold', config.accent)}>
                        {challenge?.subtitle}
                      </p>
                    </div>

                    {/* Description - Full Text Display */}
                    <div className="mb-5 flex-1">
                      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {challenge?.desc}
                      </p>
                    </div>

                    {/* Footer with Badge */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700/50">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          High Impact
                        </span>
                      </div>
                      <div
                        className={cn(
                          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-sm',
                          config.badge,
                        )}
                      >
                        HIGH RISK
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center sm:mt-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800/50">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              7 dari 10 perusahaan
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              mengalami minimal 2 dari 4 masalah ini
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
