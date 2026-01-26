'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Download, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export function TrustHeroAnimated() {
  const t = useTranslations('Trust');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-900/30 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-800 uppercase backdrop-blur-md dark:text-emerald-400"
      >
        <Shield className="h-3 w-3" /> {t('hero_badge')}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl"
      >
        {t('hero_title_1')} <br />
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          {t('hero_title_2')}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-950 dark:text-slate-300"
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
          className="w-full border-none bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 sm:w-auto"
        >
          {t('hero_download')} <Download className="ml-2 h-4 w-4" />
        </Button>
        <Link href="/security/report">
          <Button
            size="lg"
            variant="outline"
            className="hover w-full border-slate-700 bg-white/10 text-slate-950 sm:w-auto dark:text-white"
          >
            {t('hero_report')} <AlertTriangle className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </>
  );
}
