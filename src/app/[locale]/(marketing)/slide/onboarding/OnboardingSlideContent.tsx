'use client';

import type { SlideData } from '@/components/presentation/SlideDeck';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  Database,
  FileSpreadsheet,
  Globe,
  GraduationCap,
  Headphones,
  Layers,
  Rocket,
  Settings,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import SlideDeck from '@/components/presentation/SlideDeck';
import { Badge, Button } from '@/components/ui';

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
    className={`flex h-full flex-col items-center justify-center px-8 ${className}`}
  >
    {children}
  </motion.div>
);

const TimelineItem = ({
  icon: Icon,
  title,
  subtitle,
  duration,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
}) => (
  <motion.div variants={itemVariants} className="group relative flex items-start gap-6">
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${color} transition-transform group-hover:scale-110`}
    >
      <Icon className="h-8 w-8 text-white" />
    </div>
    <div className="flex-1">
      <div className="mb-1 flex items-center gap-3">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <Badge className="border-blue-200 bg-blue-50 text-xs text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400">
          {duration}
        </Badge>
      </div>
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
    </div>
  </motion.div>
);

const SlideBg = ({ variant = 'default' }: { variant?: 'default' | 'blue' }) => (
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

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  color: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
  >
    <div className={`mb-4 inline-flex rounded-xl ${color} p-4`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
  </motion.div>
);

// --- SLIDE DEFINITIONS ---
export default function OnboardingSlideContent() {
  const t = useTranslations('Onboarding');

  const slides: SlideData[] = [
    // SLIDE 1: Cover
    {
      id: 'cover',
      title: t('cover_title'),
      content: (
        <>
          <SlideBg variant="blue" />
          <AnimatedSlide className="relative z-10 w-full">
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex rounded-2xl bg-slate-900 p-4 shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:bg-white"
            >
              <Rocket className="h-16 w-16 text-white dark:text-slate-950" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-center text-6xl leading-tight font-bold text-slate-900 dark:text-white"
            >
              {t('cover_title')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-12 max-w-3xl text-center text-2xl text-slate-700 dark:text-slate-300"
            >
              {t('cover_subtitle')}
              <br />
              <span className="text-lg text-slate-600 dark:text-slate-400">
                {t('cover_duration')}
              </span>
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/demo">
                <Button
                  size="lg"
                  className="h-14 rounded-xl border-none bg-slate-900 px-10 text-lg font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-blue-700 dark:hover:bg-blue-50"
                >
                  {t('cover_cta')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSlide>
        </>
      ),
    },

    // SLIDE 2: Why Onboarding Matters
    {
      id: 'why-onboarding',
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className="mb-4 text-5xl font-bold text-slate-900 dark:text-white">
              {t('why_title')}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400">
              {t('why_subtitle')}
            </p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900/30 dark:bg-green-900/10"
            >
              <div className="mb-4 text-6xl font-bold text-green-600 dark:text-green-400">
                {t('why_stat_1')}
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {t('why_stat_1_label')}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t('why_stat_1_desc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center dark:border-blue-900/30 dark:bg-blue-900/10"
            >
              <div className="mb-4 text-6xl font-bold text-blue-600 dark:text-blue-400">
                {t('why_stat_2')}
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {t('why_stat_2_label')}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t('why_stat_2_desc')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-purple-200 bg-purple-50 p-8 text-center dark:border-purple-900/30 dark:bg-purple-900/10"
            >
              <div className="mb-4 text-6xl font-bold text-purple-600 dark:text-purple-400">
                {t('why_stat_3')}
              </div>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {t('why_stat_3_label')}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t('why_stat_3_desc')}
              </p>
            </motion.div>
          </div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 3: Complete Timeline
    {
      id: 'timeline-overview',
      title: t('timeline_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-slate-900 dark:text-white">
              {t('timeline_title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">{t('timeline_subtitle')}</p>
          </motion.div>

          <div className="flex w-full max-w-6xl flex-col gap-6">
            <TimelineItem
              icon={Rocket}
              title={t('phase1_title')}
              subtitle={t('phase1_subtitle')}
              duration={t('phase1_duration')}
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
            />
            <TimelineItem
              icon={Settings}
              title={t('phase2_title')}
              subtitle={t('phase2_subtitle')}
              duration={t('phase2_duration')}
              color="bg-gradient-to-br from-purple-500 to-indigo-600"
            />
            <TimelineItem
              icon={Database}
              title={t('phase3_title')}
              subtitle={t('phase3_subtitle')}
              duration={t('phase3_duration')}
              color="bg-gradient-to-br from-amber-500 to-orange-600"
            />
            <TimelineItem
              icon={GraduationCap}
              title={t('phase4_title')}
              subtitle={t('phase4_subtitle')}
              duration={t('phase4_duration')}
              color="bg-gradient-to-br from-green-500 to-emerald-600"
            />
            <TimelineItem
              icon={CheckCircle2}
              title={t('phase5_title')}
              subtitle={t('phase5_subtitle')}
              duration={t('phase5_duration')}
              color="bg-gradient-to-br from-red-500 to-rose-600"
            />
          </div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 4: Phase 1 - Kickoff & Discovery
    {
      id: 'phase1-kickoff',
      title: t('phase1_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-4">
              <Rocket className="h-12 w-12 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('phase1_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('phase1_detail_title')}
            </p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-2 gap-6">
            <FeatureCard
              icon={Target}
              title={t('phase1_card_1_title')}
              desc={t('phase1_card_1_desc')}
              color="bg-blue-600"
            />
            <FeatureCard
              icon={Users}
              title={t('phase1_card_2_title')}
              desc={t('phase1_card_2_desc')}
              color="bg-cyan-600"
            />
            <FeatureCard
              icon={BookOpen}
              title={t('phase1_card_3_title')}
              desc={t('phase1_card_3_desc')}
              color="bg-indigo-600"
            />
            <FeatureCard
              icon={Shield}
              title={t('phase1_card_4_title')}
              desc={t('phase1_card_4_desc')}
              color="bg-purple-600"
            />
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t('phase1_deliverable')}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{t('phase1_deliverable_desc')}</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 5: Phase 2 - Configuration
    {
      id: 'phase2-configuration',
      title: t('phase2_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4">
              <Settings className="h-12 w-12 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('phase2_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('phase2_detail_title')}
            </p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-3 gap-6">
            <FeatureCard
              icon={Layers}
              title={t('phase2_card_1_title')}
              desc={t('phase2_card_1_desc')}
              color="bg-purple-600"
            />
            <FeatureCard
              icon={Briefcase}
              title={t('phase2_card_2_title')}
              desc={t('phase2_card_2_desc')}
              color="bg-indigo-600"
            />
            <FeatureCard
              icon={FileSpreadsheet}
              title={t('phase2_card_3_title')}
              desc={t('phase2_card_3_desc')}
              color="bg-blue-600"
            />
            <FeatureCard
              icon={Zap}
              title={t('phase2_card_4_title')}
              desc={t('phase2_card_4_desc')}
              color="bg-cyan-600"
            />
            <FeatureCard
              icon={UserCheck}
              title={t('phase2_card_5_title')}
              desc={t('phase2_card_5_desc')}
              color="bg-purple-500"
            />
            <FeatureCard
              icon={Globe}
              title={t('phase2_card_6_title')}
              desc={t('phase2_card_6_desc')}
              color="bg-indigo-500"
            />
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-900/30 dark:bg-purple-900/10"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t('phase2_deliverable')}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{t('phase2_deliverable_desc')}</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 6: Phase 3 - Data Migration
    {
      id: 'phase3-migration',
      title: t('phase3_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4">
              <Database className="h-12 w-12 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('phase3_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('phase3_detail_title')}
            </p>
          </motion.div>

          <div className="w-full max-w-5xl space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {t('phase3_step_1_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t('phase3_step_1_desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {t('phase3_step_2_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t('phase3_step_2_desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {t('phase3_step_3_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t('phase3_step_3_desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {t('phase3_step_4_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{t('phase3_step_4_desc')}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/30 dark:bg-amber-900/10"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t('phase3_deliverable')}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{t('phase3_deliverable_desc')}</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 7: Phase 4 - Training & Testing
    {
      id: 'phase4-training',
      title: t('phase4_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-4">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('phase4_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('phase4_detail_title')}
            </p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/30 dark:bg-green-900/10">
                <div className="mb-4 flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('phase4_training_title')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>
                      <strong>{t('phase4_training_1')}</strong> {t('phase4_training_1_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>
                      <strong>{t('phase4_training_2')}</strong> {t('phase4_training_2_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>
                      <strong>{t('phase4_training_3')}</strong> {t('phase4_training_3_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>
                      <strong>{t('phase4_training_4')}</strong> {t('phase4_training_4_desc')}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/30 dark:bg-emerald-900/10">
                <div className="mb-4 flex items-center gap-3">
                  <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('phase4_uat_title')}
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      <strong>{t('phase4_uat_1')}</strong> {t('phase4_uat_1_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      <strong>{t('phase4_uat_2')}</strong> {t('phase4_uat_2_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      <strong>{t('phase4_uat_3')}</strong> {t('phase4_uat_3_desc')}
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      <strong>{t('phase4_uat_4')}</strong> {t('phase4_uat_4_desc')}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900/30 dark:bg-green-900/10"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t('phase4_deliverable')}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{t('phase4_deliverable_desc')}</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 8: Phase 5 - Go-Live
    {
      id: 'phase5-golive',
      title: t('phase5_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 p-4">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              {t('phase5_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('phase5_detail_title')}
            </p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-2 gap-6">
            <FeatureCard
              icon={Rocket}
              title={t('phase5_card_1_title')}
              desc={t('phase5_card_1_desc')}
              color="bg-red-600"
            />
            <FeatureCard
              icon={Headphones}
              title={t('phase5_card_2_title')}
              desc={t('phase5_card_2_desc')}
              color="bg-rose-600"
            />
            <FeatureCard
              icon={BarChart3}
              title={t('phase5_card_3_title')}
              desc={t('phase5_card_3_desc')}
              color="bg-orange-600"
            />
            <FeatureCard
              icon={TrendingUp}
              title={t('phase5_card_4_title')}
              desc={t('phase5_card_4_desc')}
              color="bg-amber-600"
            />
          </div>

          <motion.div variants={itemVariants} className="mt-8 w-full max-w-6xl">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-900/30 dark:bg-red-900/10">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-red-600 dark:text-red-400" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('phase5_hypercare_title')}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-red-200 bg-white p-4 text-center dark:border-red-800 dark:bg-slate-900">
                  <div className="mb-2 text-3xl font-bold text-red-600 dark:text-red-400">
                    {t('phase5_hypercare_1')}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t('phase5_hypercare_1_label')}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {t('phase5_hypercare_1_desc')}
                  </p>
                </div>
                <div className="rounded-lg border border-orange-200 bg-white p-4 text-center dark:border-orange-800 dark:bg-slate-900">
                  <div className="mb-2 text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {t('phase5_hypercare_2')}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t('phase5_hypercare_2_label')}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {t('phase5_hypercare_2_desc')}
                  </p>
                </div>
                <div className="rounded-lg border border-amber-200 bg-white p-4 text-center dark:border-amber-800 dark:bg-slate-900">
                  <div className="mb-2 text-3xl font-bold text-amber-600 dark:text-amber-400">
                    {t('phase5_hypercare_3')}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t('phase5_hypercare_3_label')}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {t('phase5_hypercare_3_desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 9: Success Metrics
    {
      id: 'success-metrics',
      title: t('metrics_title'),
      content: (
        <AnimatedSlide>
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold text-slate-900 dark:text-white">
              {t('metrics_title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">{t('metrics_subtitle')}</p>
          </motion.div>

          <div className="grid w-full max-w-6xl grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 dark:border-blue-900/30 dark:from-blue-900/10 dark:to-cyan-900/10"
            >
              <TrendingUp className="mb-4 h-12 w-12 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                {t('metrics_business_title')}
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{t('metrics_business_1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{t('metrics_business_2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{t('metrics_business_3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{t('metrics_business_4')}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:border-green-900/30 dark:from-green-900/10 dark:to-emerald-900/10"
            >
              <Users className="mb-4 h-12 w-12 text-green-600 dark:text-green-400" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                {t('metrics_adoption_title')}
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>{t('metrics_adoption_1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>{t('metrics_adoption_2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>{t('metrics_adoption_3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>{t('metrics_adoption_4')}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </AnimatedSlide>
      ),
    },

    // SLIDE 10: CTA
    {
      id: 'cta',
      title: t('cta_title_2'),
      content: (
        <>
          <SlideBg variant="blue" />
          <AnimatedSlide className="relative z-10 w-full">
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex rounded-2xl bg-slate-900 p-4 shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:bg-white"
            >
              <Rocket className="h-16 w-16 text-white dark:text-slate-950" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-center text-5xl leading-tight font-bold text-slate-900 dark:text-white"
            >
              {t('cta_title_1')} <br />
              {t('cta_title_2')}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mb-12 max-w-3xl text-center text-xl text-slate-700 dark:text-slate-300"
            >
              {t('cta_subtitle')}
              <br />
              <span className="text-lg text-slate-600 dark:text-slate-400">
                {t('cta_duration')}
              </span>
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Link href="/demo">
                <Button
                  size="lg"
                  className="h-14 rounded-xl border-none bg-slate-900 px-10 text-lg font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-blue-700 dark:hover:bg-blue-50"
                >
                  {t('cta_button_1')} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-xl border-2 border-slate-900 bg-transparent px-10 text-lg font-semibold text-slate-900 hover:bg-slate-900/10 dark:border-white dark:text-white dark:hover:bg-white/10"
                >
                  {t('cta_button_2')}
                </Button>
              </Link>
            </motion.div>
          </AnimatedSlide>
        </>
      ),
    },
  ];

  return <SlideDeck slides={slides} />;
}
