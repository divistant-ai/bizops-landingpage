import type { ServiceData } from '@/types';
import { getTranslations } from 'next-intl/server';
import { servicesData } from '@/data/servicesContent';

/**
 * Get translated service data based on locale
 * Merges static data from servicesContent with translations from locale files
 */
export async function getTranslatedServiceData(
  slug: string,
  locale: string,
): Promise<ServiceData | null> {
  const baseData = servicesData[slug];

  if (!baseData) {
    return null;
  }

  // Get translations
  const t = await getTranslations({ locale, namespace: 'ServicesDetail' });

  // Check if translations exist for this service
  const hasTranslations =
    slug === 'consulting' ||
    slug === 'implementation' ||
    slug === 'custom-dev' ||
    slug === 'managed-business-services' ||
    slug === 'training' ||
    slug === 'support';

  if (!hasTranslations) {
    return baseData;
  }

  // Create translated data
  const translatedData: ServiceData = {
    ...baseData,
    subtitle: t(`${slug}.subtitle` as any),
    description: t(`${slug}.description` as any),
    methodology: baseData.methodology.map((item, index) => ({
      ...item,
      desc: t(`${slug}.methodology_${index + 1}_desc` as any),
    })),
    benefits: baseData.benefits.map((item, index) => ({
      ...item,
      desc: t(`${slug}.benefits_${index + 1}_desc` as any),
    })),
    cta: t(`${slug}.cta` as any),
  };

  return translatedData;
}
