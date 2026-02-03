import type { Metadata } from 'next';
import { DemoContent } from '@/components/pages/DemoContent';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Book a Demo | BizOps Enterprise ERP',
      description: 'Schedule a consultation and exclusive demo with our Solution Architect. Validate your operational needs now.',
      url: '/demo',
    });
  }

  return genMeta({
    title: 'Book a Demo | BizOps Enterprise ERP',
    description: 'Jadwalkan sesi konsultasi dan demo eksklusif dengan Solution Architect kami. Validasi kebutuhan operasional Anda sekarang.',
    url: '/demo',
  });
}

export default function DemoPage() {
  return <DemoContent />;
}
