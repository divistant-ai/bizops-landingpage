'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { CustomerStoryCard } from '@/components/pages/CustomerStoryCard';
import { CardSlider, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';
import { customerStories } from '@/data/companyContent';

export default function CustomersContent() {
  const t = useTranslations('Customers');
  const locale = useLocale() as 'en' | 'id';
  const logos = customerStories.map(s => s.client);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500/30 dark:bg-slate-950">
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden bg-white py-16 text-white md:py-24 dark:bg-slate-900">
        <Container size="7xl" className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm dark:border-white/20 dark:bg-white/10">
              <ShieldCheck className="h-4 w-4 text-slate-900 dark:text-white" />
              <span className="text-slate-800 dark:text-white">{t('hero_badge')}</span>
            </div>

            <Typography
              variant="h1"
              className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              {t('hero_title')}
            </Typography>

            <Typography
              variant="body"
              className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl dark:text-slate-300"
            >
              {t('hero_desc')}
            </Typography>
          </motion.div>
        </Container>
      </Section>

      {/* CUSTOMER STORIES */}
      <Section className="bg-white py-16 md:py-24 dark:bg-slate-900">
        <Container size="7xl">
          <div className="mb-12 text-center">
            <Typography
              variant="h2"
              className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white"
            >
              {t('stories_title')}
            </Typography>
            <Typography
              variant="body"
              className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400"
            >
              {t('stories_desc')}
            </Typography>
          </div>

          <CardSlider desktopClassName="md:grid md:grid-cols-2 gap-8">
            {customerStories.map((story, idx) => (
              <CustomerStoryCard key={idx} story={story} idx={idx} locale={locale} />
            ))}
          </CardSlider>
        </Container>
      </Section>

      {/* LOGOS SECTION */}
      <Section className="border-y border-slate-200 !bg-slate-50 py-12 dark:border-slate-700 dark:!bg-slate-950">
        <Container size="7xl">
          <Typography
            variant="body"
            className="mb-8 text-center text-sm font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400"
          >
            {t('trusted_by')}
          </Typography>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-12">
            {logos.slice(0, 6).map((logo, idx) => (
              <div
                key={idx}
                className="text-2xl font-black tracking-tighter text-slate-800 dark:text-slate-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section className="bg-slate-50 py-16 md:py-24 dark:bg-slate-900">
        <Container size="4xl" className="text-center">
          <Typography
            variant="h2"
            className="mb-6 text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-white"
          >
            {t('cta_title')}
          </Typography>
          <Typography
            variant="body"
            className="mb-10 text-lg text-slate-600 md:text-xl dark:text-slate-400"
          >
            {t('cta_desc')}
          </Typography>

          <Stack direction="horizontal" gap={4} justify="center" className="flex-col sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-slate-700 dark:text-white"
            >
              <Link href={`/${locale}/demo`}>{t('cta_button_demo')}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Link href={`/${locale}/contact`}>{t('cta_button_contact')}</Link>
            </Button>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
