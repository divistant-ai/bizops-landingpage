import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import PreferencesContent from './PreferencesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Email Preferences | BizOps',
      description:
        'Control your inbox content. Choose which BizOps email topics are relevant to you.',
      url: '/preferences',
    });
  }

  return genMeta({
    title: 'Preferensi Email | BizOps',
    description: 'Kendalikan isi inbox Anda. Pilih topik email BizOps yang relevan bagi Anda.',
    url: '/preferences',
  });
}

export default function PreferencesPage() {
  return <PreferencesContent />;
}
