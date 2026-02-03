'use client';

import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button, SectionHeader } from '@/components/ui';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { homeIntegrations } from '@/data/homeContent';
import { sectionPaddingHybrid } from '@/design-tokens';

export function IntegrationsSection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="integrations"
      className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      noPadding
      containerClassName={sectionPaddingHybrid.compact}
    >
      <SectionHeader
        title={t('integrations_title')}
        description={t('integrations_desc')}
        className="mb-8"
      />

      <div className="max-w-full overflow-hidden">
        <InfiniteScrollLoop speed={30} direction="right">
          {homeIntegrations.map((int, idx) => (
            <div
              key={idx}
              className="group mx-2.5 flex cursor-default items-center gap-3 rounded-full border border-slate-100 bg-white px-5 py-3 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 dark:ring-slate-700 ${int.color}`}
              >
                <int.icon className="h-5 w-5" />
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">{int.name}</span>
            </div>
          ))}
        </InfiniteScrollLoop>
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="glass" size="md" className="h-11 px-6 text-sm font-semibold">
          <Link href="/platform/technologies/integration">
            {t('integrations_view_more')}{' '}
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
