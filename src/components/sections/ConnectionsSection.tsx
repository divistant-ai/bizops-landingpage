'use client';

import { Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';

type Connection = {
  target: string;
  desc: string;
};

type ConnectionsSectionProps = {
  connections: Connection[];
};

export const ConnectionsSection: React.FC<ConnectionsSectionProps> = ({ connections }) => {
  const t = useTranslations('GenericLandingPage');

  if (!connections || connections.length === 0) {
    return null;
  }

  return (
    <Section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container size="6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
              <Share2 className="text-primary-600 h-6 w-6" />
              {t('ecosystem_connections')}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{t('ecosystem_description')}</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {connections.map((c, i) => (
            <div
              key={i}
              className="hover:border-primary-300 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800"
            >
              <div className="text-primary-600 mb-2 text-xs font-bold tracking-wider uppercase">
                {t('connected_to')}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{c.target}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
