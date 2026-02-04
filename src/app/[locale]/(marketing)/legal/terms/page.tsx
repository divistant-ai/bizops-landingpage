'use client';

import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { Typography } from '@/components/ui';

export default function TermsPage() {
  const t = useTranslations('Legal');

  return (
    <Section className="py-20 md:py-32">
      <Container size="4xl">
        <div className="mb-12 border-b border-slate-200 pb-8 dark:border-slate-800">
          <Typography variant="h1" className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            {t('terms.title')}
          </Typography>
          <Typography variant="body" className="text-slate-500 dark:text-slate-400">
            {t('last_updated')}
            {' '}
            2024-01-01
          </Typography>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="lead text-lg text-slate-600 dark:text-slate-300">
            {t('terms.intro')}
          </p>

          <h3>
            1.
            {t('terms.section_1_title')}
          </h3>
          <p>{t('terms.section_1_desc')}</p>

          <h3>
            2.
            {t('terms.section_2_title')}
          </h3>
          <p>{t('terms.section_2_desc')}</p>

          <h3>
            3.
            {t('terms.section_3_title')}
          </h3>
          <p>{t('terms.section_3_desc')}</p>

          <h3>
            4.
            {t('terms.section_4_title')}
          </h3>
          <p>{t('terms.section_4_desc')}</p>
        </div>
      </Container>
    </Section>
  );
}
