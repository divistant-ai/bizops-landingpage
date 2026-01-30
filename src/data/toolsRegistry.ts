import type { LucideIcon } from 'lucide-react';
import {
  Calculator,
  Calendar,
  DollarSign,
  Factory,
  FileCheck,
  PieChart,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';

export type ToolMetadata = {
  id: string;
  title: {
    en: string;
    id: string;
  };
  subtitle: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  icon: LucideIcon;
  href: string;
  color: string;
  category: 'customer' | 'consultant';
  badge?: string | null;
  features: string[];
  keywords: string[];
  relatedTools?: string[];
};

export const toolsRegistry: ToolMetadata[] = [
  // Customer Tools
  {
    id: 'pajak-pph21',
    title: {
      id: 'Kalkulator Pajak PPh 21',
      en: 'PPh 21 Tax Calculator',
    },
    subtitle: {
      id: 'Kalkulator Pajak',
      en: 'Tax Calculator',
    },
    description: {
      id: 'Hitung pajak penghasilan karyawan sesuai aturan terbaru dengan akurat.',
      en: 'Accurately calculate employee income tax based on the latest regulations.',
    },
    icon: Calculator,
    href: '/tools/pajak-pph21',
    color: 'blue',
    category: 'customer',
    badge: 'Popular',
    features: ['Progressive Tax', 'PTKP Calculation', 'Breakdown per Bracket'],
    keywords: ['pajak', 'pph', 'pph21', 'tax', 'payroll', 'gaji', 'karyawan'],
    relatedTools: ['gaji-bersih', 'bpjs'],
  },
  {
    id: 'gaji-bersih',
    title: {
      id: 'Kalkulator Gaji Bersih',
      en: 'Net Salary Calculator',
    },
    subtitle: {
      id: 'Gaji Bersih',
      en: 'Take Home Pay',
    },
    description: {
      id: 'Hitung gaji bersih setelah dipotong pajak dan BPJS.',
      en: 'Calculate your net salary after tax and BPJS deductions.',
    },
    icon: Wallet,
    href: '/tools/gaji-bersih',
    color: 'emerald',
    category: 'customer',
    badge: 'Popular',
    features: ['PPh 21', 'BPJS', 'Annual Projection'],
    keywords: ['gaji', 'salary', 'take home pay', 'payroll', 'bersih', 'nett'],
    relatedTools: ['pajak-pph21', 'bpjs'],
  },
  {
    id: 'bpjs',
    title: {
      id: 'Kalkulator BPJS',
      en: 'BPJS Contribution Calculator',
    },
    subtitle: {
      id: 'Kesehatan & Ketenagakerjaan',
      en: 'Health & Employment',
    },
    description: {
      id: 'Hitung iuran BPJS Kesehatan dan Ketenagakerjaan (JHT, JP, JKK, JKM).',
      en: 'Calculate BPJS Health and Employment contributions (JHT, JP, JKK, JKM).',
    },
    icon: Shield,
    href: '/tools/bpjs',
    color: 'teal',
    category: 'customer',
    badge: null,
    features: ['Kesehatan', 'Ketenagakerjaan', 'Risk Level'],
    keywords: ['bpjs', 'kesehatan', 'ketenagakerjaan', 'jht', 'jp', 'jkk', 'jkm', 'iuran'],
    relatedTools: ['gaji-bersih', 'pajak-pph21'],
  },
  {
    id: 'margin-markup',
    title: {
      id: 'Kalkulator Margin & Markup',
      en: 'Margin & Markup Calculator',
    },
    subtitle: {
      id: 'Kalkulator Harga',
      en: 'Pricing Calculator',
    },
    description: {
      id: 'Hitung margin profit, markup, dan harga jual optimal untuk produk Anda.',
      en: 'Calculate profit margin, markup, and optimal selling price for your products.',
    },
    icon: TrendingUp,
    href: '/tools/margin-markup',
    color: 'orange',
    category: 'customer',
    badge: null,
    features: ['Margin', 'Markup', 'Sales Projection'],
    keywords: ['margin', 'markup', 'pricing', 'harga', 'jual', 'profit', 'untung'],
    relatedTools: ['break-even-point', 'roi-calculator'],
  },
  {
    id: 'invoice-checker',
    title: {
      id: 'Checker Kelengkapan Invoice',
      en: 'Invoice Completeness Checker',
    },
    subtitle: {
      id: 'Validator Invoice',
      en: 'Invoice Validator',
    },
    description: {
      id: 'Validasi kelengkapan dan kebenaran data invoice sebelum diproses.',
      en: 'Validate the completeness and accuracy of invoice data before processing.',
    },
    icon: FileCheck,
    href: '/tools/invoice-checker',
    color: 'indigo',
    category: 'customer',
    badge: null,
    features: ['8 Validation Checks', 'Score', 'Error Detection'],
    keywords: ['invoice', 'faktur', 'validasi', 'checker', 'kelengkapan', 'npwp', 'ppn'],
    relatedTools: ['pajak-pph21'],
  },
  {
    id: 'break-even-point',
    title: {
      id: 'Kalkulator Break Even Point',
      en: 'Break Even Point Calculator',
    },
    subtitle: {
      id: 'Kalkulator BEP',
      en: 'BEP Calculator',
    },
    description: {
      id: 'Hitung berapa unit yang harus dijual agar bisnis mencapai titik impas.',
      en: 'Calculate how many units must be sold for your business to reach break-even.',
    },
    icon: Target,
    href: '/tools/break-even-point',
    color: 'emerald',
    category: 'customer',
    badge: null,
    features: ['Contribution Margin', 'Scenario Analysis', 'Time to BEP'],
    keywords: ['bep', 'break even', 'titik impas', 'profit', 'loss', 'balik modal'],
    relatedTools: ['margin-markup', 'roi-calculator'],
  },
  {
    id: 'efisiensi-produksi',
    title: {
      id: 'Kalkulator Efisiensi Produksi',
      en: 'Production Efficiency Calculator',
    },
    subtitle: {
      id: 'Kalkulator OEE',
      en: 'OEE Calculator',
    },
    description: {
      id: 'Hitung Overall Equipment Effectiveness untuk mengukur efisiensi mesin.',
      en: 'Calculate Overall Equipment Effectiveness to measure machine efficiency.',
    },
    icon: Factory,
    href: '/tools/efisiensi-produksi',
    color: 'slate',
    category: 'customer',
    badge: null,
    features: ['Availability', 'Performance', 'Quality'],
    keywords: ['oee', 'efisiensi', 'produksi', 'manufacturing', 'mesin'],
    relatedTools: ['break-even-point'],
  },

  // Consultant Tools
  {
    id: 'needs-analysis',
    title: {
      id: 'Analisis Kebutuhan',
      en: 'Needs Analysis',
    },
    subtitle: {
      id: 'Pencari Solusi',
      en: 'Solution Finder',
    },
    description: {
      id: 'Temukan solusi ERP yang tepat dengan analisis kebutuhan komprehensif 7 langkah.',
      en: 'Find the right ERP solution through a comprehensive 7-step needs analysis.',
    },
    icon: Search,
    href: '/tools/needs-analysis',
    color: 'blue',
    category: 'consultant',
    badge: 'Essential',
    features: ['7-Step Wizard', 'Smart Recommendations', 'Visual Roadmap'],
    keywords: ['needs', 'analysis', 'solution', 'finder', 'erp'],
    relatedTools: ['assessment', 'roi-calculator'],
  },
  {
    id: 'roi-calculator',
    title: {
      id: 'Kalkulator ROI',
      en: 'ROI Calculator',
    },
    subtitle: {
      id: 'Analisis Investasi',
      en: 'Investment Analysis',
    },
    description: {
      id: 'Hitung potensi ROI dan break-even point dari investasi ERP Anda.',
      en: 'Calculate potential ROI and break-even point for your ERP investment.',
    },
    icon: DollarSign,
    href: '/tools/roi-calculator',
    color: 'emerald',
    category: 'consultant',
    badge: 'Essential',
    features: ['Detailed Savings', 'Payback Period', 'Lead Form'],
    keywords: ['roi', 'investment', 'payback'],
    relatedTools: ['needs-analysis', 'timeline-generator'],
  },
  {
    id: 'timeline-generator',
    title: {
      id: 'Generator Timeline',
      en: 'Timeline Generator',
    },
    subtitle: {
      id: 'Perencanaan Proyek',
      en: 'Project Planning',
    },
    description: {
      id: 'Buat estimasi timeline implementasi dengan Gantt Chart interaktif.',
      en: 'Create an estimated implementation timeline with an interactive Gantt chart.',
    },
    icon: Calendar,
    href: '/tools/timeline-generator',
    color: 'purple',
    category: 'consultant',
    badge: null,
    features: ['Gantt Chart', 'Expandable Phases', 'Risk Analysis'],
    keywords: ['timeline', 'gantt', 'project'],
    relatedTools: ['roi-calculator', 'needs-analysis'],
  },
  {
    id: 'assessment',
    title: {
      id: 'Penilaian Kematangan',
      en: 'Maturity Assessment',
    },
    subtitle: {
      id: 'Kesiapan Digital',
      en: 'Digital Readiness',
    },
    description: {
      id: 'Evaluasi tingkat kematangan digital perusahaan dengan framework CMMI.',
      en: 'Evaluate your company’s digital maturity level using the CMMI framework.',
    },
    icon: PieChart,
    href: '/tools/assessment',
    color: 'amber',
    category: 'consultant',
    badge: null,
    features: ['8 Dimensions', 'Detailed Report', 'Recommendations'],
    keywords: ['maturity', 'assessment', 'digital'],
    relatedTools: ['needs-analysis', 'roi-calculator'],
  },
  {
    id: 'pricing-calculator',
    title: {
      id: 'Kalkulator Harga',
      en: 'Pricing Calculator',
    },
    subtitle: {
      id: 'Estimasi Biaya',
      en: 'Cost Estimation',
    },
    description: {
      id: 'Dapatkan estimasi harga yang akurat berdasarkan kebutuhan spesifik Anda.',
      en: 'Get accurate pricing estimates based on your specific requirements.',
    },
    icon: Calculator,
    href: '/tools/pricing-calculator',
    color: 'rose',
    category: 'consultant',
    badge: null,
    features: ['Custom Pricing', 'Add-ons', 'Instant Quote'],
    keywords: ['pricing', 'cost', 'estimation'],
    relatedTools: ['roi-calculator', 'needs-analysis'],
  },
  {
    id: 'biaya-turnover',
    title: {
      id: 'Kalkulator Biaya Turnover',
      en: 'Employee Turnover Cost Calculator',
    },
    subtitle: {
      id: 'Analisis Biaya HR',
      en: 'HR Cost Analysis',
    },
    description: {
      id: 'Hitung biaya tersembunyi yang perusahaan keluarkan akibat turnover karyawan.',
      en: 'Calculate the hidden costs incurred by companies due to employee turnover.',
    },
    icon: Users,
    href: '/tools/biaya-turnover',
    color: 'rose',
    category: 'consultant',
    badge: 'New',
    features: ['Direct Costs', 'Indirect Costs', 'ROI Insight'],
    keywords: ['turnover', 'hr', 'cost'],
    relatedTools: ['roi-calculator'],
  },
];

// Helper functions
// export function getToolById(id: string): ToolMetadata | undefined {
//   return toolsRegistry.find((tool) => tool.id === id);
// }

export function getToolsByCategory(category: 'customer' | 'consultant'): ToolMetadata[] {
  return toolsRegistry.filter((tool) => tool.category === category);
}

// export function getRelatedTools(toolId: string, limit: number = 3): ToolMetadata[] {
//   const tool = getToolById(toolId);
//   if (!tool || !tool.relatedTools) {
//     return [];
//   }

//   return tool.relatedTools
//     .map((id) => getToolById(id))
//     .filter((t): t is ToolMetadata => t !== undefined)
//     .slice(0, limit);
// }

// export function searchTools(query: string): ToolMetadata[] {
//   const lowerQuery = query.toLowerCase();
//   return toolsRegistry.filter(
//     (tool) =>
//       tool.title.toLowerCase().includes(lowerQuery) ||
//       tool.description.toLowerCase().includes(lowerQuery) ||
//       tool.keywords.some((keyword) => keyword.includes(lowerQuery)),
//   );
// }

export const customerTools = getToolsByCategory('customer');
export const consultantTools = getToolsByCategory('consultant');
