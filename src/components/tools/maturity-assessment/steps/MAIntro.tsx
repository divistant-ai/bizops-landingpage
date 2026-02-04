'use client';

import type { CategoryKey } from '../context/types';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Cpu, Crosshair, FileText, Heart, Info, LayoutDashboard, Lightbulb, Settings, ShieldCheck, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { MethodologyReference } from '../components/MethodologyReference';
import { useMaturityAssessment } from '../context/MaturityAssessmentContext';

const categoryIcons: Record<CategoryKey, React.ReactElement> = {
  strategy: <Lightbulb className="size-5" />,
  customer: <Heart className="size-5" />,
  operations: <Settings className="size-5" />,
  technology: <Cpu className="size-5" />,
  people: <Users className="size-5" />,
};

const categoryLabels: Record<CategoryKey, string> = {
  strategy: 'Strategy & Leadership',
  customer: 'Customer Experience',
  operations: 'Operations & Process',
  technology: 'Technology & Data',
  people: 'People & Culture',
};

export const MAIntro: React.FC = () => {
  const t = useTranslations('MaturityAssessment');
  const { handleStartIntro } = useMaturityAssessment();
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 size-full overflow-hidden">
        <div className="bg-primary-900/20 absolute -top-[10%] -left-[10%] size-[60%] rounded-full blur-[80px] md:size-[40%] md:blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] size-[60%] rounded-full bg-indigo-900/20 blur-[80px] md:size-[40%] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-4 pt-20 pb-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-primary-400 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800 px-4 py-1.5 text-sm font-medium backdrop-blur-md dark:bg-slate-900/50">
            <LayoutDashboard className="size-4 text-white dark:text-slate-50" />
            <span className="text-white dark:text-slate-50">{t('intro.badge')}</span>
          </div>

          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-slate-800 lg:text-6xl dark:text-white">
            {t('intro.title_1')}
            {' '}
            <br />
            {t('intro.title_2')}
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
            {t('intro.description')}
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, key: 'time' },
              { icon: Crosshair, key: 'dimensions' },
              { icon: FileText, key: 'report' },
              { icon: ShieldCheck, key: 'security' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="text-primary-400 flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-600 dark:text-white">{t(`intro.benefits.${item.key}_text` as any)}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-50">{t(`intro.benefits.${item.key}_desc` as any)}</div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleStartIntro}
            size="lg"
            className="group w-fit bg-slate-50 px-8 text-lg font-bold text-slate-900 shadow-lg hover:bg-slate-100 sm:px-10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            <span className="text-slate-600 dark:text-white">{t('intro.cta_start')}</span>
            {' '}
            <ArrowRight className="ml-2 size-5" />
          </Button>

          <button
            onClick={() => setShowMethodology(!showMethodology)}
            className="hover:text-primary-400 mx-auto mt-6 flex items-center gap-2 text-sm text-slate-500 transition-colors lg:mx-0"
          >
            <Info className="size-4" />
            {' '}
            {t('intro.cta_methodology')}
          </button>
        </motion.div>

        {/* Visual Element Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {showMethodology
            ? (
                <div className="custom-scrollbar relative z-10 h-full max-h-[600px] overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Framework Reference</h3>
                    <button
                      onClick={() => setShowMethodology(false)}
                      className="text-slate-500 hover:text-white"
                    >
                      Tutup
                    </button>
                  </div>
                  <MethodologyReference />
                </div>
              )
            : (
                <div className="relative z-10 rounded-3xl border border-white/10 bg-slate-600 p-8 shadow-2xl backdrop-blur-xl dark:bg-slate-900/80">
                  <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                    <h3 className="text-xl font-bold text-white">{t('intro.preview.title')}</h3>
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full bg-red-500/50" />
                      <div className="size-3 rounded-full bg-yellow-500/50" />
                      <div className="size-3 rounded-full bg-green-500/50" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(categoryLabels).map(([key, label], idx) => (
                      <div
                        key={key}
                        className="group hover:border-primary-500/30 flex items-center gap-4 rounded-xl border border-white/5 bg-slate-200 p-4 transition-all dark:bg-slate-800"
                      >
                        <div
                          className={`rounded-lg bg-slate-950 p-3 shadow-inner ${
                            idx === 0
                              ? 'text-amber-400'
                              : idx === 1
                                ? 'text-red-400'
                                : idx === 2
                                  ? 'text-blue-400'
                                  : idx === 3
                                    ? 'text-purple-400'
                                    : 'text-green-400'
                          }`}
                        >
                          {categoryIcons[key as CategoryKey]}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800 dark:text-slate-200">
                            {label}
                          </div>
                          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                            <div className="group-hover:bg-primary-500 h-full w-2/3 bg-slate-800 opacity-30 transition-all duration-500 group-hover:opacity-100 dark:bg-slate-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

          {/* Decorative elements */}
          <div className="bg-primary-500/30 absolute -top-10 -right-10 size-32 rounded-full blur-[60px]" />
          <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-indigo-500/30 blur-[60px]" />
        </motion.div>
      </div>

      {/* Mobile Methodology Modal */}
      {showMethodology && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-sm lg:hidden">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6">
            <button
              onClick={() => setShowMethodology(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              Tutup
            </button>
            <MethodologyReference />
          </div>
        </div>
      )}
    </div>
  );
};
