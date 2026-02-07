import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import GlossaryContent from './GlossaryContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Business & Technology Glossary | BizOps',
      description:
        'Understand business and technology terminology. A comprehensive knowledge center for enterprise management concepts.',
      url: '/glossary',
    });
  }

  return genMeta({
    title: 'Glosarium Bisnis & Teknologi | BizOps',
    description:
      'Pahami istilah bisnis dan teknologi. Pusat pengetahuan komprehensif untuk konsep manajemen perusahaan.',
    url: '/glossary',
  });
}

export default function GlossaryPage() {
  return <GlossaryContent />;
}
