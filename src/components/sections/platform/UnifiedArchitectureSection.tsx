'use client';

import { motion } from 'framer-motion';
import { Database, Layers, Lock, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
// import React from 'react';
import { Container, Section } from '@/components/layout';

export const UnifiedArchitectureSection = () => {
  const t = useTranslations('Platform');

  const features = [
    {
      icon: Database,
      title: t('architecture_feature_1'),
      desc: 'No data redundancy.',
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Zap,
      title: t('architecture_feature_2'),
      desc: 'Real-time updates.',
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
    },
    {
      icon: Lock,
      title: t('architecture_feature_3'),
      desc: 'Bank-grade security.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    },
  ];

  return (
    <Section className="overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700 uppercase dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              <Layers className="h-3 w-3" />
              <span>Unified Architecture</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl dark:text-white">
              {t('architecture_title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t('architecture_desc')}
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                    {/* <p className="text-sm text-slate-500 dark:text-slate-500">{feature.desc}</p> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual - Abstract Architecture */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Central Core */}
            <div className="relative z-10 mx-auto flex aspect-square w-48 items-center justify-center rounded-full bg-white shadow-2xl ring-1 ring-slate-200 lg:w-64 dark:bg-slate-900 dark:ring-slate-800">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <Database className="h-8 w-8" />
                </div>
                <div className="font-bold text-slate-900 dark:text-white">Unified Kernel</div>
                <div className="text-xs text-slate-500">Single Database</div>
              </div>
            </div>

            {/* Orbiting Modules */}
            {['HR', 'Finance', 'Sales', 'Ops'].map((label, i) => {
              { /* const rotation = [0, 90, 180, 270]; */ }
              return (
                <motion.div
                  key={label}
                  className="absolute top-1/2 left-1/2 z-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: -i * 10,
                  }}
                  style={{ width: '100%', height: '100%', x: '-50%', y: '-50%' }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -mt-8 -ml-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white font-bold text-slate-700 shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    style={{ transform: `translateY(-140px)` }} // Orbit radius
                  >
                    {label}
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Connecting Lines (Visual) */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300 dark:border-slate-700"></div>
            <div className="absolute top-1/2 left-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100 dark:border-slate-800"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
