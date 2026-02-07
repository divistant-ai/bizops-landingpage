'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggeredText } from '@/components/ui/motion-text';
import { FADE_UP_VARIANTS } from '@/libs/animations';

type PricingHeroProps = {
  annual: boolean;
  setAnnual: (value: boolean) => void;
};

export function PricingHero({ annual, setAnnual }: PricingHeroProps) {
  const t = useTranslations('Pricing');

  return (
    <div className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Modern Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-full max-w-7xl -translate-x-1/2">
        <div className="animate-pulse-slow absolute top-[-10%] left-[20%] h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="animate-pulse-slow absolute top-[10%] right-[20%] h-72 w-72 rounded-full bg-purple-500/20 blur-[100px] delay-1000" />
      </div>

      <Container size="7xl" className="relative z-10 text-center">
        <FadeIn delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900">
            <span className="relative flex h-2 w-2 gap-4">
              <span className="absolute inline-flex h-full w-full animate-ping gap-4 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 gap-4 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {t('hero_badge')}
            </span>
          </div>
        </FadeIn>

        <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
          <StaggeredText
            text={t('hero_title_1')}
            className="mb-2 flex w-full justify-center"
            delay={0.2}
          />
          <motion.span
            variants={FADE_UP_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {t('hero_title_2')}
          </motion.span>
        </h1>

        <FadeIn delay={0.3}>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
            {t('hero_description')}
          </p>
        </FadeIn>

        {/* Enhanced Toggle */}
        <FadeIn delay={0.4}>
          <div className="mb-12 flex justify-center">
            <div className="relative inline-flex rounded-full border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-700 dark:bg-slate-800">
              <div
                className={`absolute top-1.5 bottom-1.5 left-[14px] rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out dark:border-slate-600 dark:bg-slate-700 ${annual ? 'left-[40%] w-[calc(60%-6px)]' : 'left-50% w-[calc(50%-50px)]'}`}
              />
              <button
                onClick={() => setAnnual(false)}
                className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-colors duration-300 ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
              >
                {t('toggle_monthly')}
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`relative z-10 flex items-center gap-2 rounded-full py-2.5 pr-3 pl-6 text-sm font-bold transition-colors duration-300 ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
              >
                {t('toggle_yearly')}
                <span className="rounded-full border border-green-200 bg-green-100 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-green-700 uppercase dark:border-green-800 dark:bg-green-950 dark:text-green-400">
                  {t('toggle_save')}
                </span>
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
