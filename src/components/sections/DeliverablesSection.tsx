'use client';

import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { sectionPaddingHybrid } from '@/design-tokens';

type DeliverablesSectionProps = {
  deliverables: string[];
};

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ deliverables }) => {
  const t = useTranslations('GenericLandingPage');

  if (!deliverables || deliverables.length === 0) {
    return null;
  }

  return (
    <Section
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <Container size="4xl">
        <SectionHeader
          title={t('what_you_get')}
          description={t('real_deliverables')}
          className="mb-12"
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 md:grid-cols-2">
            {deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
