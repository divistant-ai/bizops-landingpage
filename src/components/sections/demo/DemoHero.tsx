'use client';

import { motion } from 'framer-motion';
import { Calendar, FileCheck, Lock, Shield, Video } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Grid, Stack, Typography } from '@/components/ui';

export function DemoHero() {
  const t = useTranslations('Demo');

  const steps = [
    {
      icon: Calendar,
      title: t('step1_title'),
      desc: t('step1_description'),
    },
    {
      icon: Video,
      title: t('step2_title'),
      desc: t('step2_description'),
    },
    {
      icon: FileCheck,
      title: t('step3_title'),
      desc: t('step3_description'),
    },
  ];

  return (
    <Stack direction="vertical" gap={4} justify="center" className="lg:col-span-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Stack
          direction="horizontal"
          gap={1}
          align="center"
          className="bg-primary-100 dark:bg-primary-500/10 text-primary-700 dark:text-primary-400 mb-6 py-1 text-sm font-bold tracking-wider uppercase"
        >
          <Video className="h-5 w-5" />
          {' '}
          {t('badge_text')}
        </Stack>
        <Typography
          variant="h1"
          as="h1"
          className="leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {t('hero_title_part1')}
          {' '}
          <br />
          <span className="bg-linear-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent dark:to-cyan-400">
            {t('hero_title_part2')}
          </span>
        </Typography>
        <Typography variant="body" className="pb-6 text-slate-600 dark:text-slate-400">
          {t('hero_description')}
        </Typography>

        <Stack direction="vertical" gap={8} className="mb-12">
          {steps.map((item, idx) => (
            <div key={idx} className="flex gap-5">
              <Stack
                direction="horizontal"
                gap={4}
                align="center"
                justify="center"
                className="h-12 w-12 rounded-2xl border border-slate-200 bg-slate-100 shadow-inner dark:border-white/10 dark:bg-white/5"
              >
                <item.icon className="text-primary-600 dark:text-primary-400 h-6 w-6" />
              </Stack>
              <div>
                <Typography variant="h4" as="h4" className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </Typography>
                <Typography
                  variant="small"
                  className="leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </Stack>

        <Grid cols={3} gap={4} className="border-t border-slate-200 pt-8 dark:border-white/10">
          <Stack direction="vertical" gap={2}>
            <Shield className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
              {t('badge_iso')}
            </span>
          </Stack>
          <Stack direction="vertical" gap={2}>
            <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
              {t('badge_tls')}
            </span>
          </Stack>
          <Stack direction="vertical" gap={2}>
            <FileCheck className="h-5 w-5 text-slate-400 dark:text-slate-500" />
            <span className="text-xs font-bold text-slate-600 uppercase dark:text-slate-400">
              {t('badge_nda')}
            </span>
          </Stack>
        </Grid>
      </motion.div>
    </Stack>
  );
}
