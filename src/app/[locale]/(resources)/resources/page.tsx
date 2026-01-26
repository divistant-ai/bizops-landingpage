import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import ResourcesContent from './ResourcesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // English metadata
  if (locale === 'en') {
    return genMeta({
      title: 'Resource Center | BizOps',
      description:
        'Knowledge hub and support tools for your business growth. Blogs, guides, tools, and complete documentation.',
      url: '/resources',
    });
  }

  // Indonesian metadata (default)
  return genMeta({
    title: 'Resource Center | BizOps',
    description:
      'Pusat pengetahuan dan perangkat bantu untuk pertumbuhan bisnis Anda. Blog, panduan, tools, dan dokumentasi lengkap.',
    url: '/resources',
  });
}

export default function ResourcesPage() {
  return <ResourcesContent />;
}
