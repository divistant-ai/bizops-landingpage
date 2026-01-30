import type { Metadata } from 'next';
import BPJSCalculator from '@/components/tools/customer/BPJSCalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'BPJS Calculator | BizOps ERP Solutions'
        : 'Kalkulator BPJS | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Calculate your BPJS contributions accurately with BizOps ERP Solutions. Our calculator helps you determine BPJS obligations for employees in Indonesia.'
        : 'Hitung kontribusi BPJS Anda dengan akurat menggunakan Solusi ERP BizOps. Kalkulator kami membantu Anda menentukan kewajiban BPJS untuk karyawan di Indonesia.',
  });
}

export default function BPJSPage() {
  return <BPJSCalculator />;
}
