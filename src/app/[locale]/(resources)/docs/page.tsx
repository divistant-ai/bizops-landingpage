import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import DocsContent from './DocsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Documentation & Guides | BizOps',
      description:
        'Comprehensive documentation, API reference, and user guides for BizOps ERP platform.',
      url: '/docs',
    });
  }

  return genMeta({
    title: 'Dokumentasi & Panduan | BizOps',
    description:
      'Dokumentasi lengkap, referensi API, dan panduan pengguna untuk platform BizOps ERP.',
    url: '/docs',
  });
}

export default function DocsPage() {
  return <DocsContent />;
}
