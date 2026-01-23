import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import ServicesContent from './ServicesContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Professional Services & ERP Consulting | BizOps',
      description:
        'From strategic consulting to technical implementation. We accompany every step of your digital transformation.',
    });
  }

  return genMeta({
    title: 'Layanan Profesional & Konsultasi ERP | BizOps',
    description:
      'Dari konsultasi strategi hingga implementasi teknis. Kami mendampingi setiap langkah transformasi digital Anda.',
  });
}

export default function ServicesPage() {
  return <ServicesContent />;
}
