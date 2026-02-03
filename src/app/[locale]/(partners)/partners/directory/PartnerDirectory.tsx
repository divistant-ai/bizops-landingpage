'use client';

import { CheckCircle2, Globe, MapPin, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import { Badge, OptimizedImage } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { partnerDirectoryData } from '@/data/partnerDirectoryContent';

type PartnerDirectoryPageProps = {
  locale: string;
};

export default function PartnerDirectoryPage({ locale }: PartnerDirectoryPageProps) {
  const localeTyped = locale as 'en' | 'id';
  const t = useTranslations('PartnerDirectory');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const filteredPartners = partnerDirectoryData.filter((partner) => {
    const description = partner.description[localeTyped] || partner.description.en;
    const matchesSearch
      = partner.name.toLowerCase().includes(searchTerm.toLowerCase())
        || description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || partner.type === selectedType;
    const matchesLocation
      = selectedLocation === 'all' || partner.location.includes(selectedLocation);

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950">
      <Section className="border-b border-neutral-200 bg-white pt-32 pb-12 dark:border-slate-800 dark:bg-slate-900">
        <Container>
          <h1 className="mb-6 text-4xl font-bold text-neutral-900 dark:text-white">{t('title')}</h1>
          <p className="mb-10 max-w-2xl text-xl text-neutral-600 dark:text-slate-400">
            {t('subtitle')}
          </p>

          {/* Filters */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative grow">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-neutral-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder={t('search_placeholder')}
                className="focus:ring-primary-500 focus:border-primary-500 w-full rounded-xl border border-neutral-300 bg-white py-3 pr-4 pl-12 text-neutral-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="focus:ring-primary-500 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
            >
              <option value="all">{t('filter_all_types')}</option>
              <option value="implementation">{t('type_implementation')}</option>
              <option value="technology">{t('type_technology')}</option>
              <option value="managed-service">{t('type_managed_service')}</option>
              <option value="referral">{t('type_referral')}</option>
            </select>
            <select
              className="focus:ring-primary-500 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
            >
              <option value="all">{t('filter_all_locations')}</option>
              <option value="Indonesia">Indonesia</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
            </select>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeInStagger>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPartners.map(partner => (
                <FadeIn key={partner.id}>
                  <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        {/* Logo Placeholder */}
                        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-slate-700 dark:bg-slate-800">
                          <OptimizedImage
                            src={partner.logo}
                            alt={partner.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="line-clamp-1 font-bold text-neutral-900 dark:text-white">
                            {partner.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-slate-400">
                            <MapPin className="h-3 w-3" />
                            {' '}
                            {partner.location}
                          </div>
                        </div>
                      </div>
                      {partner.certified && (
                        <div className="text-primary-600" title={t('certified_partner')}>
                          <CheckCircle2 className="fill-primary-50 h-5 w-5" />
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <Badge
                        variant={
                          partner.type === 'technology'
                            ? 'outline'
                            : partner.type === 'managed-service'
                              ? 'neutral'
                              : 'primary'
                        }
                        className="mb-3"
                      >
                        {partner.partnershipStatus || partner.type.replace('-', ' ').toUpperCase()}
                      </Badge>
                      <p className="line-clamp-3 text-sm text-neutral-600 dark:text-slate-400">
                        {partner.description[localeTyped] || partner.description.en}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1">
                        {partner.industries.slice(0, 2).map((ind, i) => (
                          <span
                            key={i}
                            className="rounded bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600 dark:bg-slate-800 dark:text-slate-400"
                          >
                            {ind}
                          </span>
                        ))}
                        {partner.industries.length > 2 && (
                          <span className="px-1 py-1 text-[10px] text-neutral-400 dark:text-slate-500">
                            +
                            {partner.industries.length - 2}
                          </span>
                        )}
                      </div>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-600 dark:hover:text-primary-400 text-neutral-400 transition-colors dark:text-slate-500"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="py-20 text-center text-neutral-500 dark:text-slate-400">
                <p className="text-lg">{t('no_results')}</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedLocation('all');
                  }}
                  className="text-primary-600 mt-2 font-bold hover:underline"
                >
                  {t('reset_filter')}
                </button>
              </div>
            )}
          </FadeInStagger>
        </Container>
      </Section>
    </div>
  );
}
