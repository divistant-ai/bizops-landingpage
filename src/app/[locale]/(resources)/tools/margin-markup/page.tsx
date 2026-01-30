import type { Metadata } from 'next';
import MarginMarkupCalculator from '@/components/tools/customer/MarginMarkupCalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Margin Markup Calculator | BizOps ERP Solutions'
        : 'Kalkulator Margin Markup | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Calculate margin markup for your products and services with BizOps ERP Solutions. Our calculator helps you set competitive prices to maximize profitability.'
        : 'Hitung margin markup untuk produk dan layanan Anda dengan Solusi ERP BizOps. Kalkulator kami membantu Anda menetapkan harga yang kompetitif untuk memaksimalkan profitabilitas.',
  });
}

export default function MarginMarkupPage() {
  return <MarginMarkupCalculator />;
}
