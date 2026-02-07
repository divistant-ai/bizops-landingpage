'use client';

import { Bell, Mail, Shield, XCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';

export default function PreferencesContent() {
  const t = useTranslations('Preferences');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white pt-16 pb-24 dark:bg-slate-950">
      <Section>
        <Container size="7xl">
          <div className="mb-12 text-center">
            <Stack
              direction="horizontal"
              gap={4}
              align="center"
              justify="center"
              className="mx-auto mb-6 h-16 w-16 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              <Mail className="h-8 w-8" />
            </Stack>
            <Typography variant="h1" as="h1">
              {t('hero_title')}
            </Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400">
              {t('hero_description')}
            </Typography>
          </div>

          <form onSubmit={handleSave} className="mx-auto max-w-3xl space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Typography variant="h3" as="h2" className="mb-6">
                {t('email_types_title')}
              </Typography>
              <Stack direction="vertical" gap={6}>
                <Stack direction="horizontal" gap={4} align="start" className="relative">
                  <Stack direction="horizontal" gap={4} align="center" className="h-6">
                    <input
                      id="pref_updates"
                      aria-describedby="pref_updates_desc"
                      name="pref_updates"
                      type="checkbox"
                      defaultChecked
                      className="text-primary-600 focus:ring-primary-600 h-5 w-5 rounded border-slate-300"
                    />
                  </Stack>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="pref_updates"
                      className="flex cursor-pointer items-center gap-2 font-bold text-slate-900 dark:text-white"
                    >
                      <Shield className="h-4 w-4 text-green-600" aria-hidden="true" />
                      {' '}
                      {t('product_updates_label')}
                    </label>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                      {t('product_updates_description')}
                    </Typography>
                  </div>
                </Stack>

                <Stack direction="horizontal" gap={4} align="start" className="relative">
                  <Stack direction="horizontal" gap={4} align="center" className="h-6">
                    <input
                      id="pref_digest"
                      aria-describedby="pref_digest_desc"
                      name="pref_digest"
                      type="checkbox"
                      defaultChecked
                      className="text-primary-600 focus:ring-primary-600 h-5 w-5 rounded border-slate-300"
                    />
                  </Stack>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="pref_digest"
                      className="flex cursor-pointer items-center gap-2 font-bold text-slate-900 dark:text-white"
                    >
                      <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      {' '}
                      {t('digest_label')}
                    </label>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                      {t('digest_description')}
                    </Typography>
                  </div>
                </Stack>

                <Stack direction="horizontal" gap={4} align="start" className="relative">
                  <Stack direction="horizontal" gap={4} align="center" className="h-6">
                    <input
                      id="pref_promo"
                      aria-describedby="pref_promo_desc"
                      name="pref_promo"
                      type="checkbox"
                      className="text-primary-600 focus:ring-primary-600 h-5 w-5 rounded border-slate-300"
                    />
                  </Stack>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="pref_promo"
                      className="flex cursor-pointer items-center gap-2 font-bold text-slate-900 dark:text-white"
                    >
                      <Bell className="h-4 w-4 text-amber-600" aria-hidden="true" />
                      {' '}
                      {t('promo_label')}
                    </label>
                    <Typography variant="body" className="text-slate-500 dark:text-slate-400">
                      {t('promo_description')}
                    </Typography>
                  </div>
                </Stack>
              </Stack>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <Typography variant="h3" as="h2" className="mb-6">
                {t('frequency_title')}
              </Typography>
              <div className="flex gap-6" role="radiogroup" aria-label={t('frequency_title')}>
                <Stack direction="horizontal" gap={4} align="center">
                  <input
                    id="freq_daily"
                    name="freq"
                    type="radio"
                    className="text-primary-600 focus:ring-primary-600 h-4 w-4 border-slate-300"
                  />
                  <label
                    htmlFor="freq_daily"
                    className="ml-3 block cursor-pointer text-sm leading-6 font-medium text-slate-900 dark:text-white"
                  >
                    {t('frequency_daily')}
                  </label>
                </Stack>
                <Stack direction="horizontal" gap={4} align="center">
                  <input
                    id="freq_weekly"
                    name="freq"
                    type="radio"
                    defaultChecked
                    className="text-primary-600 focus:ring-primary-600 h-4 w-4 border-slate-300"
                  />
                  <label
                    htmlFor="freq_weekly"
                    className="ml-3 block cursor-pointer text-sm leading-6 font-medium text-slate-900 dark:text-white"
                  >
                    {t('frequency_weekly')}
                  </label>
                </Stack>
                <Stack direction="horizontal" gap={4} align="center">
                  <input
                    id="freq_monthly"
                    name="freq"
                    type="radio"
                    className="text-primary-600 focus:ring-primary-600 h-4 w-4 border-slate-300"
                  />
                  <label
                    htmlFor="freq_monthly"
                    className="ml-3 block cursor-pointer text-sm leading-6 font-medium text-slate-900 dark:text-white"
                  >
                    {t('frequency_monthly')}
                  </label>
                </Stack>
              </div>
            </div>

            <Stack direction="horizontal" gap={4} align="center" justify="between" className="pt-4">
              <button
                type="button"
                className="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium text-red-500 hover:text-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <XCircle className="h-4 w-4" />
                {' '}
                {t('unsubscribe_all')}
              </button>
              <Button size="md" type="submit" disabled={saved}>
                {saved ? t('saved_button') : t('save_button')}
              </Button>
            </Stack>
          </form>
        </Container>
      </Section>
    </div>
  );
}
