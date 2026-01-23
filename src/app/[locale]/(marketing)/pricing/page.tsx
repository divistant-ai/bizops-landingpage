import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import PricingContent from './PricingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // English metadata
  if (locale === 'en') {
    return genMeta({
      title: 'Pricing & Subscription Plans | BizOps ERP',
      description:
        'Choose Business, Growth, or Enterprise plans. Smart investment starting from IDR 2.5 Million/month. Calculate your specific needs with our calculator.',
      url: '/pricing',
    });
  }

  // Indonesian metadata (default)
  return genMeta({
    title: 'Harga & Paket Langganan ERP | BizOps',
    description:
      'Pilih paket Business, Growth, atau Enterprise. Investasi cerdas mulai Rp 2.5 Juta/bulan. Hitung kebutuhan spesifik Anda dengan kalkulator kami.',
    url: '/pricing',
  });
}

export default function PricingPage() {
  return <PricingContent />;
}
