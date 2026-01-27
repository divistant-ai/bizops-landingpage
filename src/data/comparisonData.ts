import { Cloud, FileSpreadsheet, Globe, MessageSquare, Rocket, Server } from 'lucide-react';

export type ComparisonPoint = {
  feature: string;
  them: string;
  us: string;
  impact: string;
};

export type ComparisonData = {
  id: string;
  name: { en: string; id: string };
  icon: any;
  color: string;
  description: { en: string; id: string };
  verdict: { en: string; id: string };
  bottleneckScore: number;
  bottleneckLabel: { en: string; id: string };
  limitations: { en: string[]; id: string[] };

  // NEW STRATEGIC VARIABLES
  ttv: { en: string; id: string }; // Time to Value
  maintenance: { en: string; id: string }; // 'Low' | 'Medium' | 'High' | 'Very High' | 'Low (Managed)' | etc.
  customizability: { en: string; id: string }; // 'None' | 'Low' | 'Medium' | 'High' | 'High (Low-Code)' | 'Low (Expensive Change Request)' | etc.
  avgTCO: { en: string; id: string }; // Estimasi Total Cost 3 Tahun

  points: { en: ComparisonPoint[]; id: ComparisonPoint[] };
};

export const comparisonsData: Record<string, ComparisonData> = {
  bizops: {
    id: 'bizops',
    name: {
      en: 'BizOps Platform (Reference)',
      id: 'BizOps Platform (Reference)',
    },
    icon: Rocket,
    color: 'text-emerald-600',
    description: {
      en: 'Modern architecture benchmark that combines Low-Code flexibility with Enterprise ERP power.',
      id: 'Benchmark arsitektur modern yang menggabungkan fleksibilitas Low-Code dengan kekuatan Enterprise ERP.',
    },
    verdict: {
      en: 'The Gold Standard. Optimal balance between implementation speed, cost, and long-term scalability.',
      id: 'The Gold Standard. Keseimbangan optimal antara kecepatan implementasi, biaya, dan skalabilitas jangka panjang.',
    },
    bottleneckScore: 5,
    bottleneckLabel: {
      en: 'OPTIMIZED STATE',
      id: 'OPTIMIZED STATE',
    },
    limitations: {
      en: [
        'Requires stable internet connection (Cloud-first)',
        'Need transparent work culture adaptation (Audit Trail)',
        'Focus on B2B/Internal Ops (Not Marketplace)',
      ],
      id: [
        'Membutuhkan koneksi internet stabil (Cloud-first)',
        'Perlu adaptasi budaya kerja transparan (Audit Trail)',
        'Fokus B2B/Internal Ops (Bukan Marketplace)',
      ],
    },
    ttv: {
      en: '2-4 Weeks (Rapid)',
      id: '2-4 Minggu (Cepat)',
    },
    maintenance: {
      en: 'Low (Managed)',
      id: 'Rendah (Terkelola)',
    },
    customizability: {
      en: 'High (Low-Code)',
      id: 'Tinggi (Low-Code)',
    },
    avgTCO: {
      en: 'Lowest (Flat Pricing)',
      id: 'Terendah (Harga Flat)',
    },
    points: {
      en: [
        {
          feature: 'Core Architecture',
          them: 'Unified Monolithic (Frappe Framework).',
          us: 'Seamless Integration.',
          impact: 'No more data synchronization issues between modules.',
        },
        {
          feature: 'Pricing Model',
          them: 'Resource Based / Flat.',
          us: 'Predictable Cost.',
          impact: "Costs don't explode as users increase.",
        },
        {
          feature: 'User Experience',
          them: 'Modern Web Interface.',
          us: 'High Adoption Rate.',
          impact: "Teams enjoy using the system because it's easy (like social media).",
        },
      ],
      id: [
        {
          feature: 'Core Architecture',
          them: 'Unified Monolithic (Frappe Framework).',
          us: 'Seamless Integration.',
          impact: 'Tidak ada lagi isu sinkronisasi data antar modul.',
        },
        {
          feature: 'Pricing Model',
          them: 'Resource Based / Flat.',
          us: 'Predictable Cost.',
          impact: 'Biaya tidak meledak saat user bertambah.',
        },
        {
          feature: 'User Experience',
          them: 'Modern Web Interface.',
          us: 'High Adoption Rate.',
          impact: 'Tim senang menggunakan sistem karena mudah (mirip Sosmed).',
        },
      ],
    },
  },
  manual: {
    id: 'manual',
    name: {
      en: 'Excel / Spreadsheet',
      id: 'Excel / Spreadsheet',
    },
    icon: FileSpreadsheet,
    color: 'text-emerald-500',
    description: {
      en: 'Decentralized data management using separate spreadsheet files.',
      id: 'Manajemen data terdesentralisasi menggunakan file spreadsheet terpisah.',
    },
    verdict: {
      en: 'Cheap upfront, but very expensive in the end due to HR inefficiency and fraud risk.',
      id: 'Murah di awal, tapi sangat mahal di akhir karena inefisiensi SDM dan risiko fraud.',
    },
    bottleneckScore: 92,
    bottleneckLabel: {
      en: 'CRITICAL LIMITATION',
      id: 'CRITICAL LIMITATION',
    },
    limitations: {
      en: [
        'Data Silos (Separated between divisions)',
        'No Audit Trail (Fraud Prone)',
        'Manual recap time required (Inefficiency)',
      ],
      id: [
        'Data Silo (Terpisah antar divisi)',
        'Tidak ada Audit Trail (Rawan Fraud)',
        'Butuh waktu rekap manual (Inefisiensi)',
      ],
    },
    ttv: {
      en: 'Instant',
      id: 'Instan',
    },
    maintenance: {
      en: 'High',
      id: 'Tinggi',
    },
    customizability: {
      en: 'High',
      id: 'Tinggi',
    },
    avgTCO: {
      en: 'Variable (High Labor Cost)',
      id: 'Variatif (Biaya Tenaga Kerja Tinggi)',
    },
    points: {
      en: [
        {
          feature: 'Data Integrity',
          them: 'Prone to human error & duplication.',
          us: 'Single Source of Truth (Centralized Database).',
          impact: 'Business decisions based on accurate data, not assumptions.',
        },
        {
          feature: 'Team Collaboration',
          them: 'Waiting for files / version conflicts.',
          us: 'Real-time Multi-user Access.',
          impact: 'Team productivity increases dramatically without admin bottlenecks.',
        },
        {
          feature: 'Automation Capability',
          them: 'Manual / Complex Macro Scripts.',
          us: 'Native Workflow Automation.',
          impact: 'Repetitive tasks eliminated, staff focus on strategy.',
        },
      ],
      id: [
        {
          feature: 'Integritas Data',
          them: 'Rentan human error & duplikasi.',
          us: 'Single Source of Truth (Database Terpusat).',
          impact: 'Keputusan bisnis berbasis data akurat, bukan asumsi.',
        },
        {
          feature: 'Kolaborasi Tim',
          them: 'Saling tunggu file / versi konflik.',
          us: 'Real-time Multi-user Access.',
          impact: 'Produktivitas tim meningkat drastis tanpa bottleneck admin.',
        },
        {
          feature: 'Automation Capability',
          them: 'Manual / Macro Script rumit.',
          us: 'Native Workflow Automation.',
          impact: 'Tugas repetitif hilang, staf fokus ke strategi.',
        },
      ],
    },
  },
  saas: {
    id: 'saas',
    name: {
      en: 'Local Accounting SaaS',
      id: 'SaaS Akuntansi Lokal',
    },
    icon: Cloud,
    color: 'text-blue-500',
    description: {
      en: 'Cloud solution focused on standard bookkeeping and taxation.',
      id: 'Solusi cloud fokus pada pembukuan standar dan perpajakan.',
    },
    verdict: {
      en: 'Excellent for Accounting Compliance, but often disconnected from Operations (Warehouse/Production) requiring manual re-entry.',
      id: 'Sangat baik untuk Accounting Compliance, tapi seringkali terputus dari Operasional (Gudang/Produksi) sehingga butuh input ulang.',
    },
    bottleneckScore: 65,
    bottleneckLabel: {
      en: 'OPERATIONAL GAP',
      id: 'OPERATIONAL GAP',
    },
    limitations: {
      en: [
        'Limited Operational features (Manufacturing/Project)',
        'Difficult to customize unique approval flows',
        'Accumulating add-on plugin costs',
      ],
      id: [
        'Fitur Operasional (Manufaktur/Project) terbatas',
        'Sulit kustomisasi alur approval unik',
        'Biaya add-on plugin yang menumpuk',
      ],
    },
    ttv: {
      en: '1-2 Weeks',
      id: '1-2 Minggu',
    },
    maintenance: {
      en: 'Low',
      id: 'Rendah',
    },
    customizability: {
      en: 'Low',
      id: 'Rendah',
    },
    avgTCO: {
      en: 'Low - Medium',
      id: 'Rendah - Menengah',
    },
    points: {
      en: [
        {
          feature: 'System Coverage',
          them: 'Accounting Centric.',
          us: 'Full ERP (Ops + HR + Finance).',
          impact: 'Eliminates the need for manual re-entry from operations to finance.',
        },
        {
          feature: 'Workflow Flexibility',
          them: 'Follow software standards (Rigid).',
          us: 'Software follows company SOP (Flexible).',
          impact: 'System supports your business uniqueness, not limiting it.',
        },
        {
          feature: 'Database Ownership',
          them: 'Shared Cloud (Data at vendor).',
          us: 'Private Cloud / On-Premise Option.',
          impact: 'Full data sovereignty in your hands.',
        },
      ],
      id: [
        {
          feature: 'Cakupan Sistem',
          them: 'Accounting Centric.',
          us: 'Full ERP (Ops + HR + Finance).',
          impact: 'Menghilangkan kebutuhan input ulang dari divisi operasional ke finance.',
        },
        {
          feature: 'Fleksibilitas Workflow',
          them: 'Mengikuti standar software (Kaku).',
          us: 'Software mengikuti SOP perusahaan (Fleksibel).',
          impact: 'Sistem mendukung keunikan bisnis Anda, bukan membatasinya.',
        },
        {
          feature: 'Database Ownership',
          them: 'Shared Cloud (Data di vendor).',
          us: 'Private Cloud / On-Premise Option.',
          impact: 'Kedaulatan data penuh di tangan Anda.',
        },
      ],
    },
  },
  odoo: {
    id: 'odoo',
    name: {
      en: 'Odoo Ecosystem',
      id: 'Odoo Ecosystem',
    },
    icon: Globe,
    color: 'text-purple-600',
    description: {
      en: 'Global modular platform with extensive apps marketplace.',
      id: 'Platform modular global dengan marketplace apps yang luas.',
    },
    verdict: {
      en: 'Rich ecosystem, but modular architecture triggers high licensing costs during scale-up and data fragmentation issues.',
      id: 'Ekosistem kaya, namun model arsitektur modularnya memicu biaya lisensi tinggi saat scale-up dan isu fragmentasi data.',
    },
    bottleneckScore: 55,
    bottleneckLabel: {
      en: 'SCALABILITY COST',
      id: 'SCALABILITY COST',
    },
    limitations: {
      en: [
        'Pricing model: Per User + Per App (Expensive when scaling)',
        'Major version upgrades often difficult (Breaking Changes)',
        'Community module quality not standardized',
      ],
      id: [
        'Pricing model: Per User + Per App (Mahal saat scale up)',
        'Upgrade major version seringkali sulit (Breaking Changes)',
        'Kualitas modul komunitas tidak standar',
      ],
    },
    ttv: {
      en: '1-3 Months',
      id: '1-3 Bulan',
    },
    maintenance: {
      en: 'Medium',
      id: 'Menengah',
    },
    customizability: {
      en: 'Medium',
      id: 'Menengah',
    },
    avgTCO: {
      en: 'Medium - High (Scaling Cost)',
      id: 'Menengah - Tinggi (Biaya Scaling)',
    },
    points: {
      en: [
        {
          feature: 'Core Architecture',
          them: 'Modular Fragmented.',
          us: 'Unified Monolithic (Frappe Framework).',
          impact: 'Data integration between modules in BizOps is more seamless and stable.',
        },
        {
          feature: 'Ownership Cost',
          them: 'Cost rises exponentially with users.',
          us: 'Flat / Resource Based Pricing.',
          impact: 'More controlled IT cost prediction for the long term.',
        },
        {
          feature: 'Local Support',
          them: 'Via Partner (Variable Quality).',
          us: 'Principal Direct Support.',
          impact: 'Faster and more accountable technical issue resolution.',
        },
      ],
      id: [
        {
          feature: 'Core Architecture',
          them: 'Modular Fragmented.',
          us: 'Unified Monolithic (Frappe Framework).',
          impact: 'Integrasi data antar modul di BizOps lebih seamless dan stabil.',
        },
        {
          feature: 'Ownership Cost',
          them: 'Biaya naik eksponensial seiring user.',
          us: 'Flat / Resource Based Pricing.',
          impact: 'Prediksi biaya IT yang lebih terkontrol untuk jangka panjang.',
        },
        {
          feature: 'Local Support',
          them: 'Via Partner (Kualitas Variatif).',
          us: 'Principal Direct Support.',
          impact: 'Resolusi masalah teknis lebih cepat dan akuntabel.',
        },
      ],
    },
  },
  bitrix: {
    id: 'bitrix',
    name: {
      en: 'Bitrix24',
      id: 'Bitrix24',
    },
    icon: MessageSquare,
    color: 'text-sky-500',
    description: {
      en: 'Social collaboration platform, CRM, and task management.',
      id: 'Platform kolaborasi sosial, CRM, dan manajemen tugas.',
    },
    verdict: {
      en: 'Champion in Communication & CRM, but lacks depth for Core ERP (Inventory, Accounting, Manufacturing).',
      id: 'Juara dalam Komunikasi & CRM, namun kurang mendalam untuk Core ERP (Inventory, Accounting, Manufacturing).',
    },
    bottleneckScore: 70,
    bottleneckLabel: {
      en: 'BACK-OFFICE GAP',
      id: 'BACK-OFFICE GAP',
    },
    limitations: {
      en: [
        'Very basic Accounting/Inventory features',
        'Does not support complex manufacturing',
        'Financial reports not compliant with Indonesian PSAK standards',
      ],
      id: [
        'Fitur Accounting/Inventory sangat basic',
        'Tidak support manufaktur kompleks',
        'Laporan keuangan tidak standar PSAK Indonesia',
      ],
    },
    ttv: {
      en: '1 Month',
      id: '1 Bulan',
    },
    maintenance: {
      en: 'Low',
      id: 'Rendah',
    },
    customizability: {
      en: 'Medium',
      id: 'Menengah',
    },
    avgTCO: {
      en: 'Medium',
      id: 'Menengah',
    },
    points: {
      en: [
        {
          feature: 'Main Focus',
          them: 'Front-Office (Sales & Chat).',
          us: 'Back-Office Backbone (Finance, Ops, HR).',
          impact: 'Use BizOps for heavy and detailed operational execution.',
        },
        {
          feature: 'Inventory Management',
          them: 'Simple Product Catalog.',
          us: 'Multi-warehouse, Serial No, Batch Tracking.',
          impact: 'Precise stock control for trading/manufacturing companies.',
        },
        {
          feature: 'Reporting',
          them: 'Activity Based Reports.',
          us: 'Financial & Ledger Based Reports.',
          impact: 'Auditable financial reports for banks/investors.',
        },
      ],
      id: [
        {
          feature: 'Fokus Utama',
          them: 'Front-Office (Sales & Chat).',
          us: 'Back-Office Backbone (Finance, Ops, HR).',
          impact: 'Gunakan BizOps untuk eksekusi operasional yang berat dan detail.',
        },
        {
          feature: 'Inventory Management',
          them: 'Simple Product Catalog.',
          us: 'Multi-warehouse, Serial No, Batch Tracking.',
          impact: 'Kontrol stok presisi untuk perusahaan dagang/manufaktur.',
        },
        {
          feature: 'Reporting',
          them: 'Activity Based Reports.',
          us: 'Financial & Ledger Based Reports.',
          impact: 'Laporan keuangan yang auditable untuk bank/investor.',
        },
      ],
    },
  },
  legacy: {
    id: 'legacy',
    name: {
      en: 'Legacy / Enterprise ERP',
      id: 'Legacy / Enterprise ERP',
    },
    icon: Server,
    color: 'text-slate-600 dark:text-slate-50',
    description: {
      en: 'Tier-1 systems (SAP/Oracle) that are very powerful yet complex.',
      id: 'Sistem Tier-1 (SAP/Oracle) yang sangat powerful namun kompleks.',
    },
    verdict: {
      en: 'Powerhouse for giant corporations, but "Overkill" (too complex & expensive) for companies needing agility.',
      id: "Powerhouse untuk korporasi raksasa, namun 'Overkill' (terlalu rumit & mahal) untuk perusahaan yang butuh kelincahan.",
    },
    bottleneckScore: 45,
    bottleneckLabel: {
      en: 'AGILITY BARRIER',
      id: 'AGILITY BARRIER',
    },
    limitations: {
      en: [
        'Very high Implementation & Maintenance costs',
        'User interface (UI) tends to be rigid/outdated',
        'Requires large dedicated IT team',
      ],
      id: [
        'Biaya Implementasi & Maintenance sangat tinggi',
        'Tampilan (UI) cenderung kaku/kuno',
        'Butuh tim IT dedicated yang besar',
      ],
    },
    ttv: {
      en: '6-12 Months',
      id: '6-12 Bulan',
    },
    maintenance: {
      en: 'Very High',
      id: 'Sangat Tinggi',
    },
    customizability: {
      en: 'Low (Expensive Change Request)',
      id: 'Rendah (Change Request Mahal)',
    },
    avgTCO: {
      en: 'Very High (> $200k)',
      id: 'Sangat Tinggi (> Rp 1M)',
    },
    points: {
      en: [
        {
          feature: 'Implementation',
          them: '6-12 Months (Waterfall).',
          us: '1-3 Months (Agile/Rapid).',
          impact: 'Faster time-to-value, investment ROI felt earlier.',
        },
        {
          feature: 'User Experience',
          them: 'Complex, requires intensive training.',
          us: 'Modern Web-based, intuitive.',
          impact: 'Higher user adoption, lower resistance to change.',
        },
        {
          feature: 'Flexibility',
          them: 'Rigid / Inflexible.',
          us: 'Low-code Customization.',
          impact: 'Business can pivot strategy without system limitations.',
        },
      ],
      id: [
        {
          feature: 'Implementasi',
          them: '6-12 Bulan (Waterfall).',
          us: '1-3 Bulan (Agile/Rapid).',
          impact: 'Time-to-value lebih cepat, ROI investasi terasa lebih awal.',
        },
        {
          feature: 'User Experience',
          them: 'Complex, butuh training intensif.',
          us: 'Modern Web-based, intuitif.',
          impact: 'Adopsi user lebih tinggi, resistensi perubahan lebih rendah.',
        },
        {
          feature: 'Flexibility',
          them: 'Rigid / Kaku.',
          us: 'Low-code Customization.',
          impact: 'Bisnis bisa pivot strategi tanpa terhambat sistem.',
        },
      ],
    },
  },
};
