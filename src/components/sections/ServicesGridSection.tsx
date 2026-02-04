'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

import { Container, Section } from '@/components/layout';
import { Badge } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { servicesData } from '@/data/servicesContent';
import { servicesTranslations } from '@/data/servicesContentTranslations';

export const ServicesGridSection = () => {
  const t = useTranslations('Services');
  const locale = useLocale();
  const safeLocale = (locale === 'en' || locale === 'id') ? locale : 'id';
  const textData = servicesTranslations[safeLocale];

  const serviceOrder = [
    'consulting',
    'implementation',
    'custom-dev',
    'managed-business-services',
    'training',
    'support',
  ];

  // Mapping service ID to translation key
  const getServiceDescKey = (serviceId: string) => {
    const keyMap = {
      'consulting': 'service_consulting_desc',
      'implementation': 'service_implementation_desc',
      'custom-dev': 'service_custom_dev_desc',
      'managed-business-services': 'service_managed_desc',
      'training': 'service_training_desc',
      'support': 'service_support_desc',
    } as const;
    return keyMap[serviceId as keyof typeof keyMap] || keyMap.consulting;
  };

  // services array mapping starts here

  const services = serviceOrder
    .filter(key => servicesData[key])
    .map(key => ({
      id: key,
      ...servicesData[key], // Contains icon
      ...textData[key as keyof typeof textData], // Contains title, desc
    }));

  return (
    <Section className="py-20 md:py-32">
      <Container size="7xl">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            {t('services_title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('services_description')}
          </p>
        </FadeIn>

        <FadeInStagger>
          <div className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon;
              if (!Icon) {
                return null;
              }
              // Bento Grid Spanning Logic
              const isLarge = idx === 0 || idx === 3; // 1st and 4th items are large horizontal
              const isTall = idx === 2; // 3rd item is tall

              const spanClass = isLarge ? 'md:col-span-2' : isTall ? 'md:row-span-2' : '';

              return (
                <FadeIn key={service.id} className={`h-full ${spanClass}`}>
                  <Link href={`/services/${service.id}`} className="group block h-full">
                    <SpotlightCard className="hover:border-primary-500/50 dark:hover:border-primary-500/50 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all dark:border-slate-800 dark:bg-slate-900">
                      {/* Tech Pattern Background */}
                      <div
                        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
                        style={{
                          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }}
                      />

                      <div className="relative z-10 flex h-full flex-col p-8">
                        <div className="mb-6 flex items-start justify-between">
                          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 ring-primary-200 dark:ring-primary-800 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform group-hover:scale-110">
                            <Icon className="h-7 w-7" />
                          </div>
                          {isLarge && (
                            <Badge variant="outline" className="hidden sm:inline-flex">
                              {t('badge_popular')}
                            </Badge>
                          )}
                        </div>

                        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                          {service.title}
                        </h3>

                        <p className="mb-6 grow leading-relaxed text-slate-600 dark:text-slate-400">
                          {t(getServiceDescKey(service.id))}
                        </p>

                        <div className="text-primary-600 dark:text-primary-400 mt-auto flex items-center text-sm font-bold transition-transform group-hover:translate-x-2">
                          {t('view_detail')}
                          {' '}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </FadeInStagger>
      </Container>
    </Section>
  );
};
