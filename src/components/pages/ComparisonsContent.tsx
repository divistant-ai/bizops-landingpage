'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import { useTranslations } from 'next-intl';
// import { useLocale } from 'next-intl';
import { useState } from 'react';
import Container from '@/components/layout/Container';
import {
  ComparisonHero,
  ComparisonList,
  ComparisonsSidebar,
  StrategicMetrics,
  WhyUpgradeCard,
} from '@/components/sections/comparisons';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { Grid, Typography } from '@/components/ui';

import { comparisonsData } from '@/data/comparisonData';

export default function ComparisonsContent() {
  const t = useTranslations('Compare');
  // const locale = useLocale() as 'en' | 'id';
  const [selectedId, setSelectedId] = useState<string>('manual');

  const selectedData = comparisonsData[selectedId]!;
  const isBizOps = selectedId === 'bizops';

  const getScoreColor = (score: number) => {
    if (score <= 20) {
      return 'text-emerald-500 dark:text-emerald-400';
    }
    if (score > 70) {
      return 'text-red-500 dark:text-red-400';
    }
    if (score > 50) {
      return 'text-amber-500 dark:text-amber-400';
    }
    return 'text-blue-500 dark:text-blue-400';
  };

  const getScoreBg = (score: number) => {
    if (score <= 20) {
      return 'bg-emerald-500';
    }
    if (score > 70) {
      return 'bg-red-500';
    }
    if (score > 50) {
      return 'bg-amber-500';
    }
    return 'bg-blue-500';
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 pb-32 font-sans transition-colors duration-300 dark:bg-slate-950">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-blue-500/10 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 mix-blend-multiply blur-[120px] dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <Container size="7xl" className="relative z-10">
        {/* HEADER */}
        <Container noPadding size="3xl" className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/50 bg-slate-200/50 px-4 py-1.5 text-xs font-bold tracking-wider text-slate-600 uppercase backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-400"
          >
            <LayoutGrid className="h-4 w-4" />
            {' '}
            System Architecture Comparison
          </motion.div>
          <Typography
            variant="h1"
            as="h1"
            className="leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Upgrade Your
            <br />
            {' '}
            Business Engine.
          </Typography>
          <Typography variant="body" className="leading-relaxed text-slate-600 dark:text-slate-400">
            Bandingkan arsitektur sistem Anda saat ini dengan
            {' '}
            <span className="font-semibold text-slate-900 dark:text-white">BizOps Evolution</span>
            .
            Lihat perbedaannya secara radikal.
          </Typography>
        </Container>

        <Grid cols={12} gap={8} className="items-start">
          {/* SIDEBAR SELECTION */}
          <ComparisonsSidebar selectedId={selectedId} setSelectedId={setSelectedId} />

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* 1. HERO ANALYSIS CARD */}
                <ComparisonHero
                  selectedData={selectedData}
                  getScoreBg={getScoreBg}
                  getScoreColor={getScoreColor}
                />

                {/* 2. STRATEGIC METRICS */}
                <StrategicMetrics selectedData={selectedData} />

                {/* 3. COMPARISON LIST */}
                <ComparisonList selectedData={selectedData} isBizOps={isBizOps} />

                {/* 4. WHY UPGRADE CARD */}
                <WhyUpgradeCard isBizOps={isBizOps} selectedData={selectedData} />

                {/* 4. WHY UPGRADE CARD */}
                <WhyUpgradeCard isBizOps={isBizOps} selectedData={selectedData} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Grid>
      </Container>

      <CTABannerSection
        title={t('cta_title')}
        subtitle={t('cta_subtitle')}
        badgeText="Comparison Verdict"
        demoBtnText={t('schedule_demo')}
        demoBtnLink="/demo"
        pricingBtnText={t('view_pricing')}
        pricingBtnLink="/tools/roi-calculator"
        trustText1="Seamless Migration"
        trustText2="Data Integrity Guaranteed"
      />
    </div>
  );
}
