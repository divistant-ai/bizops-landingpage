'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export function HeroSection() {
  const t = useTranslations('MediaKit');

  return (
    <section className="dark:bg-dark-bg relative overflow-hidden bg-white pt-32 pb-24 lg:pb-32 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px]" />

      <Container size="5xl" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-xs font-bold tracking-wider text-indigo-700 uppercase backdrop-blur-md dark:bg-slate-800/50 dark:text-indigo-300"
        >
          <Download className="h-3 w-3" />
          {' '}
          {t('hero_badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl"
        >
          {t('hero_title_1')}
          {' '}
          <br />
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-300">
            {t('hero_title_2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 dark:text-slate-300"
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="border-none bg-slate-900 font-bold text-white shadow-xl hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            {t('hero_download_all')}
            {' '}
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-900 hover:bg-slate-200 dark:border-slate-700 dark:text-white dark:hover:bg-white/10"
          >
            {t('hero_brand_guidelines')}
            {' '}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
