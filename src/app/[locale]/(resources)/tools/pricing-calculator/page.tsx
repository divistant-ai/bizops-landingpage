import PricingCalculator from '@/components/PricingCalculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

export const metadata = genMeta({
  title: 'Pricing Calculator | Enterprise Cost Estimator | BizOps',
  description:
    'Hitung estimasi biaya implementasi ERP untuk bisnis Anda dengan kalkulator harga yang komprehensif.',
});

export default function PricingCalculatorPage() {
  return <PricingCalculator />;
}
