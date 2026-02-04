'use client';

import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { Typography } from '@/components/ui';

export default function PrivacyPage() {
  const t = useTranslations('Legal');

  return (
    <Section className="py-20 md:py-32">
      <Container size="4xl">
        <div className="mb-12 border-b border-slate-200 pb-8 dark:border-slate-800">
          <Typography variant="h1" className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            {t('privacy.title')}
          </Typography>
          <Typography variant="body" className="text-slate-500 dark:text-slate-400">
            {t('last_updated')}
            {' '}
            {t('privacy.updated')}
          </Typography>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3>{t('privacy.intro_title')}</h3>
          <p className="lead text-lg text-slate-600 dark:text-slate-300">
            {t('privacy.intro_content')}
          </p>

          <h3>{t('privacy.data_collected_title')}</h3>
          <p>{t('privacy.data_collected_content')}</p>
          <ul>
            <li>{t('privacy.data_identity')}</li>
            <li>{t('privacy.data_business')}</li>
            <li>{t('privacy.data_technical')}</li>
            <li>{t('privacy.data_transaction')}</li>
          </ul>

          <h3>{t('privacy.data_usage_title')}</h3>
          <p>{t('privacy.data_usage_content')}</p>
          <ul>
            <li>{t('privacy.usage_provide')}</li>
            <li>{t('privacy.usage_process')}</li>
            <li>{t('privacy.usage_notify')}</li>
            <li>{t('privacy.usage_detect')}</li>
          </ul>

          <h3>{t('privacy.data_security_title')}</h3>
          <p>{t('privacy.data_security_content')}</p>
          <ul>
            <li>{t('privacy.security_encryption')}</li>
            <li>{t('privacy.security_access')}</li>
            <li>{t('privacy.security_audit')}</li>
          </ul>

          <h3>{t('privacy.contact_title')}</h3>
          <p>{t('privacy.contact_content')}</p>
        </div>
      </Container>
    </Section>
  );
}
