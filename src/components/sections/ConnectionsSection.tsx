'use client';

import { ArrowRightLeft, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

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
    <Section
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Connecting Lines Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Container size="6xl" className="relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:bg-indigo-900/30 dark:text-indigo-400">
            <Share2 className="h-3 w-3" />
            {t('ecosystem_connections')}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            Connected to Everything
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('ecosystem_description')}
          </p>
        </div>

        <FadeInStagger>
          {/* Proportional Grid Logic */}
          <div className={`grid gap-6 ${
            connections.length % 3 === 0 ? 'md:grid-cols-3'
              : connections.length % 2 === 0 ? 'md:grid-cols-2 lg:grid-cols-4'
                : 'md:grid-cols-3'
          }`}
          >
            {connections.map((c, i) => (
              <FadeIn key={i}>
                <div
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
                >
                  {/* Top Connector Decor */}
                  <div className="absolute top-0 left-1/2 -mt-px h-4 w-12 -translate-x-1/2 rounded-b-lg bg-slate-100 transition-colors group-hover:bg-indigo-500 dark:bg-slate-800" />

                  <div className="mb-6 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-500 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-900/20 dark:text-indigo-400 dark:group-hover:text-white">
                      <ArrowRightLeft className="h-6 w-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {c.target}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {c.desc}
                    </p>
                  </div>

                  {/* Bottom Connector Decor */}
                  <div className="absolute bottom-0 left-1/2 -mb-px h-4 w-12 -translate-x-1/2 rounded-t-lg bg-slate-100 transition-colors group-hover:bg-indigo-500 dark:bg-slate-800" />
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
