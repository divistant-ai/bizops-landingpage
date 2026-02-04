import type { ServiceData } from '@/types';
import { servicesData } from '@/data/servicesContent';
import { servicesTranslations } from '@/data/servicesContentTranslations';

/**
 * Get translated service data based on locale
 * Merges static data (icons) from servicesContent with text from servicesContentTranslations
 */
export async function getTranslatedServiceData(
  slug: string,
  locale: string,
): Promise<ServiceData | null> {
  const baseData = servicesData[slug];

  // Validate slug exists in base data (for icons)
  if (!baseData) {
    return null;
  }

  // Get text data from translations file
  // Default to 'id' if locale not found (or 'en' if preferred default)
  const safeLocale = (locale === 'en' || locale === 'id') ? locale : 'id';
  const textData = servicesTranslations[safeLocale]?.[slug as keyof typeof servicesTranslations['id']];

  if (!textData) {
    return null;
  }

  // Merge them
  const mergedData: ServiceData = {
    ...textData,
    icon: baseData.icon,
  };

  return mergedData;
}
