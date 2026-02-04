'use client';

import { useTranslations } from 'next-intl';

import { Container, Section } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';

const DEFAULT_BRANDS = [
  'Divistant',
  'Dikstra',
  'Arena Rasa Nusantara',
  'Aero Travel Indonesia',
  'TechCorp',
  'BuildCo',
  'PT Maju Bersama',
  'Distribusi Nusantara',
  'Konstruksi Prima',
  'Mitra Sejahtera',
];

type LogoCloudSectionProps = {
  title?: string;
  brands?: string[];
};

export function LogoCloudSection({ title, brands = DEFAULT_BRANDS }: LogoCloudSectionProps) {
  // Try to use translations if available, otherwise fallback
  let t;
  try {
    t = useTranslations('Homepage');
  } catch (e) {
    t = (key: string) => key === 'trusted_by' ? 'Trusted by industry leaders' : key;
  }

  return (
    <Section className="border-y border-slate-200/50 bg-slate-50 py-12 dark:border-slate-800/50 dark:bg-slate-950">
      <Container>
        <FadeIn>
          <p className="mb-8 text-center text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
            {title || t('trusted_by')}
          </p>
          <div className="w-full overflow-hidden">
            <InfiniteScrollLoop speed={30} direction="left">
              {brands.map((brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="mx-3 cursor-default rounded-full border border-slate-100 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap text-slate-700 dark:text-slate-300">
                    {brand}
                  </span>
                </div>
              ))}
            </InfiniteScrollLoop>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
