'use client';

import { Globe, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Typography } from '@/components/ui';
import Stack from '@/components/ui/Stack';

export function PressContactSection() {
  const t = useTranslations('MediaKit');

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white p-8 text-center md:rounded-[3rem] md:p-12 lg:text-left dark:bg-slate-900">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

      <Stack
        direction="vertical"
        gap={12}
        className="relative z-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-xl">
          <Typography variant="h2" as="h2" className="text-slate-900 dark:text-white">
            {t('press_title')}
          </Typography>
          <Typography
            variant="body"
            className="leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {t('press_subtitle')}
          </Typography>
          <Stack direction="vertical" gap={4} className="mt-6">
            <a
              href="mailto:pr@divistant.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" /> {t('press_contact_button')}
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-transparent px-6 py-3 font-bold text-slate-900 transition-colors hover:bg-slate-200 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              {t('press_whatsapp')}
            </a>
          </Stack>
        </div>

        <div className="w-full max-w-sm rounded-3xl border border-slate-300 bg-white p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-400 bg-linear-to-br from-indigo-400 to-purple-500 text-lg font-bold text-white">
              SJ
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                {t('press_contact_name')}
              </div>
              <div className="text-sm text-indigo-600 dark:text-indigo-300">
                {t('press_contact_role')}
              </div>
            </div>
          </div>
          <Stack direction="vertical" gap={3} className="text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" /> pr@divistant.com
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-slate-500 dark:text-slate-400" />{' '}
              {t('press_contact_location')}
            </div>
          </Stack>
        </div>
      </Stack>
    </section>
  );
}
