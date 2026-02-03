import type { Metadata } from 'next';
import OEECalculator from '@/components/tools/customer/OEECalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return genMeta({
    title:
      locale === 'en'
        ? 'OEE Calculator | BizOps ERP Solutions'
        : 'Kalkulator OEE | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Optimize your production efficiency with BizOps ERP Solutions. Our OEE Calculator helps you measure Overall Equipment Effectiveness to improve manufacturing performance.'
        : 'Optimalkan efisiensi produksi Anda dengan Solusi ERP BizOps. Kalkulator OEE kami membantu Anda mengukur Efektivitas Peralatan Secara Keseluruhan untuk meningkatkan kinerja manufaktur.',
  });
}

export default function OEEPage() {
  return <OEECalculator />;
}
