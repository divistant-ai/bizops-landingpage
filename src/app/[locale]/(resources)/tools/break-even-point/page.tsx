import type { Metadata } from 'next';
import BreakEvenCalculator from '@/components/tools/customer/BreakEvenCalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Break-Even Point Calculator | BizOps ERP Solutions'
        : 'Kalkulator Titik Impas | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Determine your break-even point with BizOps ERP Solutions. Our Break-Even Point Calculator helps you analyze costs and revenues to make informed business decisions.'
        : 'Tentukan titik impas Anda dengan Solusi ERP BizOps. Kalkulator Titik Impas kami membantu Anda menganalisis biaya dan pendapatan untuk membuat keputusan bisnis yang tepat.',
  });
}

export default function BreakEvenPage() {
  return <BreakEvenCalculator />;
}
