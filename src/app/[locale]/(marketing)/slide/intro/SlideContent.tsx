'use client';

import type { SlideData } from '@/components/presentation/SlideDeck';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Code,
  Factory,
  Globe,
  Layers,
  Puzzle,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import SlideDeck from '@/components/presentation/SlideDeck';
import { Badge, Button, Stack } from '@/components/ui';

// --- ANIMATION HELPERS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

const AnimatedSlide = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className={`relative z-10 flex h-full w-full flex-col items-center justify-center ${className}`}
  >
    {children}
  </motion.div>
);

const MotionItem = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

// --- COMPONENTS ---
const SlideBg = ({ variant = 'default' }: { variant?: 'default' | 'blue' | 'dark' }) => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    {variant === 'default' && (
      <>
        <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-900/10"></div>
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-900/10"></div>
      </>
    )}
    {variant === 'blue' && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-slate-100 to-slate-100 dark:from-blue-950 dark:via-slate-950 dark:to-slate-950"></div>
    )}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
  </div>
);

const Card = ({ title, icon: Icon, desc, color = 'blue', children }: any) => (
  <div
    className={`hover:border- h-full rounded-3xl border border-slate-200 bg-slate-100 p-8 px-10 py-5${color}-500/30 group backdrop-blur-sm transition-all duration-300 hover:bg-slate-200 dark:border-white/5 dark:bg-slate-900/50 dark:hover:bg-slate-800/50`}
  >
    <div className="mb-6 flex items-start justify-between">
      <div
        className={`bg- rounded-2xl p-3${color}-500/10 text-${color}-600 dark:text- transition-transform duration-300 group-hover:scale-110${color}-400`}
      >
        {Icon && <Icon className="h-8 w-8" />}
      </div>
    </div>
    <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
    <p className="leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
    {children}
  </div>
);

// --- MAIN CONTENT ---
export default function SlideContent() {
  const t = useTranslations('Intro');

  const slides: SlideData[] = [
    // 1. COVER
    {
      id: 'intro',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <MotionItem className="mb-10">
              <div className="animate-pulse-slow flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:bg-white">
                <div className="h-12 w-12 rotate-45 rounded-xl bg-white dark:bg-slate-950"></div>
              </div>
            </MotionItem>
            <MotionItem>
              <Badge
                variant="outline-white"
                className="mb-8 border-blue-500/30 bg-blue-500/10 px-6 py-2 text-base text-blue-600 backdrop-blur-md dark:text-blue-300"
              >
                <span className="text-slate-800 dark:text-white">{t('intro_badge')}</span>
              </Badge>
            </MotionItem>
            <MotionItem className="max-w-5xl text-center">
              <h1 className="mb-8 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-7xl dark:text-white">
                <span className="text-slate-800 dark:text-white">{t('intro_title')}</span>
              </h1>
            </MotionItem>
            <MotionItem>
              <p className="max-w-3xl text-center text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-400">
                <span className="text-slate-800 dark:text-white">{t('intro_desc')}</span>
              </p>
            </MotionItem>
          </AnimatedSlide>
        </>
      ),
    },

    // 2. CONTEXT
    {
      id: 'context',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide className="!block flex h-full items-center">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
              <div>
                <MotionItem>
                  <h2 className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
                    <span className="text-slate-800 dark:text-white">{t('context_title')}</span>
                  </h2>
                </MotionItem>
                <MotionItem>
                  <p className="mb-10 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white">{t('context_desc')}</span>
                  </p>
                </MotionItem>
                <div className="space-y-6">
                  {[
                    { text: t('context_item_1'), icon: Globe, color: 'red' },
                    { text: t('context_item_2'), icon: Zap, color: 'amber' },
                    { text: t('context_item_3'), icon: Shield, color: 'blue' },
                  ].map((item, i) => (
                    <MotionItem key={i}>
                      <div className="flex items-center gap-6 rounded-2xl border border-slate-200 bg-slate-100 p-5 transition-colors hover:border-slate-300 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10">
                        <div
                          className={`bg- rounded-xl p-3${item.color}-500/20 text-${item.color}-600 dark:text-${item.color}-400`}
                        >
                          <item.icon className="h-6 w-6" />
                        </div>
                        <span className="text-lg font-medium text-slate-900 dark:text-slate-200">
                          <span className="text-slate-800 dark:text-white">{item.text}</span>
                        </span>
                      </div>
                    </MotionItem>
                  ))}
                </div>
              </div>
              <MotionItem className="group relative flex h-[500px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-300 bg-gradient-to-br from-slate-100 to-slate-200 p-1 dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative z-10 text-center">
                  <TrendingUp className="mx-auto mb-6 h-32 w-32 text-blue-500 drop-shadow-lg" />
                  <p className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
                    <span className="text-slate-800 dark:text-white">
                      {t('context_item_right')}
                    </span>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white">
                      {t('context_item_right_desc')}
                    </span>
                  </p>
                </div>
              </MotionItem>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 3. PROBLEM
    {
      id: 'problem',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-7xl px-4">
              <MotionItem className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('problem_title')}</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  <span className="text-slate-800 dark:text-white">{t('problem_desc')}</span>
                </p>
              </MotionItem>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <MotionItem>
                  <div className="group h-full rounded-[2.5rem] border border-red-500/20 bg-red-50 p-10 text-left transition-all duration-500 hover:bg-red-100 dark:bg-red-950/10 dark:hover:bg-red-950/20">
                    <div className="mb-8 w-fit rounded-2xl bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                      <Layers className="h-10 w-10" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('problem_item_1_title')}
                      </span>
                    </h3>
                    <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">
                        {t('problem_item_1_desc')}
                      </span>
                    </p>
                    <ul className="space-y-4 text-lg text-red-900 dark:text-red-200/80">
                      <li className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-sm text-red-600 dark:text-red-500">
                          ✕
                        </span>{' '}
                        <span className="text-slate-800 dark:text-white">{t('problem_1')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-sm text-red-600 dark:text-red-500">
                          ✕
                        </span>{' '}
                        <span className="text-slate-800 dark:text-white">{t('problem_2')}</span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>

                <MotionItem>
                  <div className="group h-full rounded-[2.5rem] border border-amber-500/20 bg-amber-50 p-10 text-left transition-all duration-500 hover:bg-amber-100 dark:bg-amber-950/10 dark:hover:bg-amber-950/20">
                    <div className="mb-8 w-fit rounded-2xl bg-amber-500/10 p-4 text-amber-600 dark:text-amber-400">
                      <Shield className="h-10 w-10" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('problem_item_2_title')}
                      </span>
                    </h3>
                    <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">
                        {t('problem_item_2_desc')}
                      </span>
                    </p>
                    <ul className="space-y-4 text-lg text-amber-900 dark:text-amber-200/80">
                      <li className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-sm text-amber-600 dark:text-amber-500">
                          ✕
                        </span>{' '}
                        <span className="text-slate-800 dark:text-white">{t('problem_3')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-sm text-amber-600 dark:text-amber-500">
                          ✕
                        </span>{' '}
                        <span className="text-slate-800 dark:text-white">{t('problem_4')}</span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 4. SOLUTION (PHILOSOPHY)
    {
      id: 'philosophy',
      content: (
        <>
          <SlideBg variant="blue" />
          <AnimatedSlide>
            <div className="w-full max-w-5xl px-4 text-center">
              <MotionItem>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100 px-5 py-2 text-blue-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
                  <Puzzle className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  <span className="text-slate-800 dark:text-white">THE PHILOSOPHY</span>
                </div>
              </MotionItem>
              <MotionItem>
                <h2 className="mb-10 text-5xl font-bold text-slate-900 md:text-7xl dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('philosophy_title')}</span>
                </h2>
              </MotionItem>
              <MotionItem>
                <p className="mx-auto mb-16 max-w-4xl text-2xl leading-relaxed font-light text-blue-900 dark:text-blue-100">
                  <span className="text-slate-800 dark:text-white">{t('philosophy_desc')}</span>
                </p>
              </MotionItem>

              <div className="grid grid-cols-3 gap-8">
                {[
                  { title: t('philosophy_1'), desc: t('philosophy_1_desc'), color: 'blue' },
                  { title: t('philosophy_2'), desc: t('philosophy_2_desc'), color: 'green' },
                  { title: t('philosophy_3'), desc: t('philosophy_3_desc'), color: 'purple' },
                ].map((item, i) => (
                  <MotionItem key={i}>
                    <div className="h-full rounded-3xl border border-slate-200 bg-slate-100 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                        <span className="text-slate-800 dark:text-white">{item.title}</span>
                      </h3>
                      <p className="text-blue-800 dark:text-blue-100/70">
                        <span className="text-slate-800 dark:text-white">{item.desc}</span>
                      </p>
                    </div>
                  </MotionItem>
                ))}
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 5. SWEET SPOT (COMPARISON)
    {
      id: 'sweet-spot',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-7xl px-4">
              <MotionItem className="mb-16 text-center">
                <h2 className="mb-6 text-5xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('spot_title')}</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  <span className="text-slate-800 dark:text-white">{t('spot_desc')}</span>
                </p>
              </MotionItem>

              <div className="grid grid-cols-3 items-center gap-8">
                <MotionItem>
                  <div className="scale-95 rounded-[2rem] border border-slate-300 bg-slate-200 p-10 opacity-50 grayscale dark:border-slate-800 dark:bg-slate-900/50">
                    <h3 className="mb-4 text-2xl font-bold text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">{t('spot_1_title')}</span>
                    </h3>
                    <p className="text-slate-500">
                      <span className="text-slate-800 dark:text-white">{t('spot_1_desc')}</span>
                    </p>
                  </div>
                </MotionItem>

                <MotionItem className="z-10">
                  <div className="relative scale-110 transform overflow-hidden rounded-[2.5rem] border border-blue-500/50 bg-gradient-to-b from-blue-100 to-slate-100 p-12 shadow-[0_0_80px_rgba(37,99,235,0.3)] dark:from-blue-900 dark:to-slate-900">
                    <div className="absolute top-7 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-2 text-sm font-bold tracking-wider text-white uppercase shadow-lg">
                      <span className="text-white dark:text-slate-600">The Winner</span>
                    </div>
                    <h3 className="mt-7 mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">{t('spot_2_title')}</span>
                    </h3>
                    <ul className="space-y-4 text-lg text-blue-900 dark:text-blue-100">
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('spot_2_point_1')}
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('spot_2_point_2')}
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">Mobile Native</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('spot_2_point_3')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>

                <MotionItem>
                  <div className="scale-95 rounded-[2rem] border border-slate-300 bg-slate-200 p-10 opacity-50 grayscale dark:border-slate-800 dark:bg-slate-900/50">
                    <h3 className="mb-4 text-2xl font-bold text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">{t('spot_3')}</span>
                    </h3>
                    <p className="text-slate-500">
                      <span className="text-slate-800 dark:text-white">{t('spot_3_desc')}</span>
                    </p>
                  </div>
                </MotionItem>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 6. PLATFORM MAP
    {
      id: 'platform',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-7xl px-4">
              <MotionItem className="mb-16 text-center">
                <h2 className="mb-6 text-5xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('platform_title')}</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  <span className="text-slate-800 dark:text-white">{t('platform_desc')}</span>
                </p>
              </MotionItem>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <MotionItem>
                  <Card
                    title={t('platform_module_1_title')}
                    icon={Users}
                    desc={t('platform_module_1_desc')}
                    color="pink"
                  />
                </MotionItem>
                <MotionItem>
                  <Card
                    title={t('platform_module_2_title')}
                    icon={Wallet}
                    desc={t('platform_module_2_desc')}
                    color="emerald"
                  />
                </MotionItem>
                <MotionItem>
                  <Card
                    title={t('platform_module_3_title')}
                    icon={Zap}
                    desc={t('platform_module_3_desc')}
                    color="blue"
                  />
                </MotionItem>
                <MotionItem>
                  <Card
                    title={t('platform_module_4_title')}
                    icon={Briefcase}
                    desc={t('platform_module_4_desc')}
                    color="amber"
                  />
                </MotionItem>
                <MotionItem>
                  <Card
                    title={t('platform_module_5_title')}
                    icon={Layers}
                    desc={t('platform_module_5_desc')}
                    color="indigo"
                  />
                </MotionItem>
                <MotionItem>
                  <Card
                    title={t('platform_module_6_title')}
                    icon={Factory}
                    desc={t('platform_module_6_desc')}
                    color="purple"
                  />
                </MotionItem>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 7. DEEP DIVE: HR
    {
      id: 'module-hr',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide className="!block flex h-full items-center">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
              <div>
                <MotionItem>
                  <Badge className="mb-6 border-pink-500/20 bg-pink-500/10 text-pink-600 dark:text-pink-400">
                    <span className="text-slate-800 dark:text-white">Human Capital Management</span>
                  </Badge>
                  <h2 className="mb-8 text-5xl font-bold text-slate-900 dark:text-white">
                    <span className="text-slate-800 dark:text-white">{t('hr_title')}</span>
                  </h2>
                </MotionItem>
                <MotionItem>
                  <p className="mb-10 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white">{t('hr_desc')}</span>
                  </p>
                </MotionItem>
                <div className="space-y-4">
                  {[t('hr_feature_1'), t('hr_feature_2'), t('hr_feature_3'), t('hr_feature_4')].map(
                    (feat, i) => (
                      <MotionItem key={i}>
                        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                          <CheckCircle2 className="h-6 w-6 text-pink-600 dark:text-pink-500" />
                          <span className="text-lg text-slate-900 dark:text-slate-200">
                            <span className="text-slate-800 dark:text-white">{feat}</span>
                          </span>
                        </div>
                      </MotionItem>
                    ),
                  )}
                </div>
              </div>
              <MotionItem className="relative flex h-[500px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900">
                {/* Placeholder UI */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50">
                  <div className="absolute top-4 right-4 left-4 h-8 rounded-lg bg-slate-300 dark:bg-slate-700"></div>
                  <div className="absolute top-16 left-4 h-32 w-1/3 rounded-lg bg-slate-300 dark:bg-slate-700/50"></div>
                  <div className="absolute top-16 right-4 h-32 w-1/2 rounded-lg bg-slate-300 dark:bg-slate-700/50"></div>
                  <div className="absolute right-4 bottom-4 left-4 h-40 rounded-lg bg-slate-300 dark:bg-slate-700/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-24 w-24 text-pink-500/20" />
                  </div>
                </div>
              </MotionItem>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 8. DEEP DIVE: FINANCE
    {
      id: 'module-finance',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide className="!block flex h-full items-center">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
              <MotionItem className="relative order-2 flex h-[500px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 p-8 md:order-1 dark:border-slate-800 dark:bg-slate-900">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50">
                  <BarChart3 className="h-24 w-24 text-emerald-500/20" />
                </div>
              </MotionItem>
              <div className="order-1 md:order-2">
                <MotionItem>
                  <Badge className="mb-6 border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <span className="text-slate-800 dark:text-white">Finance & Accounting</span>
                  </Badge>
                  <h2 className="mb-8 text-5xl font-bold text-slate-900 dark:text-white">
                    <span className="text-slate-800 dark:text-white">{t('finance_title')}</span>
                  </h2>
                </MotionItem>
                <MotionItem>
                  <p className="mb-10 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white">{t('finance_desc')}</span>
                  </p>
                </MotionItem>
                <div className="space-y-4">
                  {[
                    t('finance_feature_1'),
                    t('finance_feature_2'),
                    t('finance_feature_3'),
                    t('finance_feature_4'),
                  ].map((feat, i) => (
                    <MotionItem key={i}>
                      <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                        <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                        <span className="text-lg text-slate-900 dark:text-slate-200">
                          <span className="text-slate-800 dark:text-white">{feat}</span>
                        </span>
                      </div>
                    </MotionItem>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 9. INTEGRATION
    {
      id: 'integration',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-7xl px-4">
              <MotionItem className="mb-16 text-center">
                <h2 className="mb-6 text-5xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('integration_title')}</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  <span className="text-slate-800 dark:text-white">{t('integration_desc')}</span>
                </p>
              </MotionItem>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  'Bank BCA',
                  'Bank Mandiri',
                  'DJP Online (Pajak)',
                  'Tokopedia',
                  'Shopee',
                  'WooCommerce',
                  'Fingerprint',
                  'WhatsApp',
                ].map((item, i) => (
                  <MotionItem key={i}>
                    <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6 text-center transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        <span className="text-slate-800 dark:text-white">{item}</span>
                      </div>
                    </div>
                  </MotionItem>
                ))}
              </div>

              <MotionItem className="mx-auto mt-16 max-w-3xl rounded-3xl border border-slate-200 bg-slate-100 p-8 text-center dark:border-slate-800 dark:bg-slate-900/80">
                <Code className="mx-auto mb-4 h-10 w-10 text-blue-500" />
                <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">
                    {t('integration_api_title')}
                  </span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <span className="text-slate-800 dark:text-white">
                    {t('integration_api_desc')}
                  </span>
                </p>
              </MotionItem>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 10. SOCIAL PROOF
    {
      id: 'trust',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-6xl px-4 text-center">
              <MotionItem>
                <h2 className="mb-12 text-5xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('trust_title')}</span>
                </h2>
              </MotionItem>

              <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
                <MotionItem>
                  <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 p-10 text-left dark:border-white/10 dark:bg-white/5">
                    <p className="mb-8 text-xl leading-relaxed text-slate-700 italic dark:text-slate-300">
                      <span className="text-slate-800 dark:text-white">"{t('trust_quote_1')}"</span>
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                        <span className="text-white dark:text-slate-600">B</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          <span className="text-slate-800 dark:text-white">
                            {t('trust_name_1')}
                          </span>
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          <span className="text-slate-800 dark:text-white">
                            {t('trust_company_1')}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionItem>
                <MotionItem>
                  <div className="rounded-[2.5rem] border border-slate-200 bg-slate-100 p-10 text-left dark:border-white/10 dark:bg-white/5">
                    <p className="mb-8 text-xl leading-relaxed text-slate-700 italic dark:text-slate-300">
                      <span className="text-slate-800 dark:text-white">"{t('trust_quote_2')}"</span>
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                        <span className="text-white dark:text-slate-600">S</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          <span className="text-slate-800 dark:text-white">
                            {t('trust_name_2')}
                          </span>
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          <span className="text-slate-800 dark:text-white">
                            {t('trust_company_2')}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionItem>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 11. PRICING
    {
      id: 'pricing',
      content: (
        <>
          <SlideBg />
          <AnimatedSlide>
            <div className="w-full max-w-6xl px-4 text-center">
              <MotionItem>
                <h2 className="mb-16 text-5xl font-bold text-slate-900 dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('pricing_title')}</span>
                </h2>
              </MotionItem>

              <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-3">
                <MotionItem>
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 text-left dark:border-slate-800 dark:bg-slate-900/50">
                    <h3 className="mb-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_starter_name')}
                      </span>
                    </h3>
                    <p className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_starter_price')}
                      </span>
                      <span className="text-lg font-normal text-slate-500">
                        {t('pricing_starter_price_suffix')}
                      </span>
                    </p>
                    <p className="mb-8 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_starter_desc')}
                      </span>
                    </p>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_starter_feature_1')}
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_starter_feature_2')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>

                <MotionItem>
                  <div className="relative z-10 scale-105 transform rounded-[2.5rem] border-2 border-blue-500 bg-slate-100 p-10 text-left shadow-2xl shadow-blue-500/20 dark:bg-slate-900 dark:shadow-blue-900/50">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-bold tracking-wider text-white">
                      <span className="text-white dark:text-slate-600">{t('pricing_popular')}</span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_business_name')}
                      </span>
                    </h3>
                    <p className="mb-2 text-5xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_business_price')}
                      </span>
                      <span className="text-lg font-normal text-slate-500">
                        {t('pricing_starter_price_suffix')}
                      </span>
                    </p>
                    <p className="mb-8 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_business_desc')}
                      </span>
                    </p>
                    <ul className="space-y-4 text-lg text-slate-900 dark:text-white">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="font-bold">
                          <span className="text-slate-800 dark:text-white">
                            {t('pricing_business_feature_1')}
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_business_feature_2')}
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_business_feature_3')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>

                <MotionItem>
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 text-left dark:border-slate-800 dark:bg-slate-900/50">
                    <h3 className="mb-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_enterprise_name')}
                      </span>
                    </h3>
                    <p className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_enterprise_price')}
                      </span>
                    </p>
                    <p className="mb-8 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-slate-800 dark:text-white">
                        {t('pricing_enterprise_desc')}
                      </span>
                    </p>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_enterprise_feature_1')}
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-500" />{' '}
                        <span className="text-slate-800 dark:text-white">
                          {t('pricing_enterprise_feature_2')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </MotionItem>
              </div>
            </div>
          </AnimatedSlide>
        </>
      ),
    },

    // 12. CTA
    {
      id: 'cta',
      content: (
        <>
          <SlideBg variant="blue" />
          <AnimatedSlide>
            <div className="max-w-5xl px-4 text-center">
              <MotionItem>
                <h2 className="mb-12 text-6xl leading-tight font-black tracking-tighter text-slate-900 md:text-8xl dark:text-white">
                  <span className="text-slate-800 dark:text-white">{t('cta_title_1')}</span> <br />
                  <span className="text-slate-800 dark:text-white">{t('cta_title_2')}</span>
                </h2>
              </MotionItem>
              <MotionItem>
                <p className="mb-16 text-2xl font-light text-blue-900 dark:text-blue-100">
                  <span className="text-slate-800 dark:text-white">{t('cta_desc')}</span>
                </p>
              </MotionItem>
              <MotionItem>
                <Stack direction="horizontal" gap={8} className="justify-center">
                  <Link href="/demo">
                    <Button
                      size="lg"
                      className="h-20 rounded-full border-none bg-white px-16 text-2xl font-bold text-blue-700 shadow-xl hover:bg-blue-50 dark:bg-slate-600"
                    >
                      <span className="text-blue-700 dark:text-white">{t('cta_button')}</span>
                    </Button>
                  </Link>
                </Stack>
              </MotionItem>

              <MotionItem className="mt-24 w-full border-t border-slate-300 pt-12 dark:border-white/10">
                <div className="grid grid-cols-3 gap-12 text-lg text-slate-600 dark:text-slate-300">
                  <div>
                    <p className="mb-2 text-sm font-bold tracking-wider text-slate-900 uppercase opacity-70 dark:text-white">
                      <span className="text-slate-800 dark:text-white">{t('cta_email_label')}</span>
                    </p>
                    <span className="text-slate-800 dark:text-white">hello@bizops.id</span>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold tracking-wider text-slate-900 uppercase opacity-70 dark:text-white">
                      <span className="text-slate-800 dark:text-white">{t('cta_phone_label')}</span>
                    </p>
                    <span className="text-slate-800 dark:text-white">+62 21 3970 2834</span>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-bold tracking-wider text-slate-900 uppercase opacity-70 dark:text-white">
                      <span className="text-slate-800 dark:text-white">
                        {t('cta_website_label')}
                      </span>
                    </p>
                    <span className="text-slate-800 dark:text-white">bizops.id</span>
                  </div>
                </div>
              </MotionItem>
            </div>
          </AnimatedSlide>
        </>
      ),
    },
  ];

  return <SlideDeck slides={slides} />;
}
