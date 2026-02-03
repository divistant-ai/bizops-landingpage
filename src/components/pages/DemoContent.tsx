'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Container from '@/components/layout/Container';
import { Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';
import { DemoForm, DemoHero } from '@/components/sections/demo';
import { useDemoForm } from '@/hooks/useDemoForm';

export function DemoContent() {
  const t = useTranslations('Demo');
  const router = useRouter();
  const { form, formState, onSubmit } = useDemoForm();

  if (formState === 'success') {
    return (
      <Stack
        direction="vertical"
        gap={4}
        align="center"
        justify="center"
        className="min-h-screen bg-slate-50 px-4 text-center dark:bg-dark-bg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/50"
        >
          <CheckCircle className="h-10 w-10 text-emerald-500" aria-hidden="true" />
        </motion.div>
        <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white">
          {t('success_title')}
        </Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400">
          {t('success_description')}
        </Typography>
        <Button size="md" variant="primary" onClick={() => router.push('/')}>
          {t('success_button')}
        </Button>
      </Stack>
    );
  }

  return (
    <div className="selection:bg-primary-500/30 min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-dark-bg dark:text-slate-200">
      <div className="relative overflow-hidden pt-28 pb-24">
        <div className="bg-primary-600/20 pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-[120px] dark:opacity-60"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent dark:via-white/10"></div>

        <Container size="7xl" className="relative z-10">
          <Grid cols={12} gap={12}>
            {/* Left: Value Proposition */}
            <DemoHero />

            {/* Right: Form */}
            <DemoForm form={form} formState={formState} onSubmit={onSubmit} />
          </Grid>
        </Container>
      </div>
    </div>
  );
}
