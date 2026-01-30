import type { Metadata } from 'next';
import GajiBersihCalculator from '@/components/tools/customer/GajiBersihCalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Net Salary Calculator | BizOps ERP Solutions' : 'Kalkulator Gaji Bersih | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Calculate your net salary accurately with BizOps ERP Solutions. Our calculator helps you determine take-home pay after taxes and deductions in Indonesia.'
        : 'Hitung gaji bersih Anda dengan akurat menggunakan Solusi ERP BizOps. Kalkulator kami membantu Anda menentukan gaji yang diterima setelah pajak dan potongan di Indonesia.',
  });
}

export default function GajiBersihPage() {
  return <GajiBersihCalculator />;
}
