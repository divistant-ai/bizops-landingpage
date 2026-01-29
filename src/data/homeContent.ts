import {
  BarChart,
  Briefcase,
  Code,
  Coffee,
  CreditCard,
  Database,
  DollarSign,
  FileText,
  Fingerprint,
  HardHat,
  Heart,
  Layers,
  Link as LinkIcon,
  MessageCircle,
  MonitorPlay,
  Puzzle,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react';

// --- GLOBAL STATS ---
export const globalStats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: 'Rp 12T+', label: 'Transaksi Terproses' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '30 Hari', label: 'Rata-rata Go-Live' },
];

// --- HOMEPAGE: PROBLEMS ---
export const getHomeProblems = (t: (key: string) => string) => [
  {
    title: t('Homepage.problems_data.data_silo_title'),
    subtitle: t('Homepage.problems_data.data_silo_subtitle'),
    desc: t('Homepage.problems_data.data_silo_desc'),
    icon: LinkIcon,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    title: t('Homepage.problems_data.compliance_title'),
    subtitle: t('Homepage.problems_data.compliance_subtitle'),
    desc: t('Homepage.problems_data.compliance_desc'),
    icon: ShieldCheck,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    title: t('Homepage.problems_data.adoption_title'),
    subtitle: t('Homepage.problems_data.adoption_subtitle'),
    desc: t('Homepage.problems_data.adoption_desc'),
    icon: Smartphone,
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  },
];

// Keep original for backward compatibility if needed
export const homeProblems = [
  {
    title: 'Data Silo & Disconnected',
    subtitle: 'Kebutaan Antar Divisi',
    desc: 'Marketing jualan, Gudang kosong. Finance menagih, Proyek belum selesai. Ketika data terpisah di spreadsheet dan software berbeda, keputusan strategis menjadi tebak-tebakan berbahaya.',
    icon: LinkIcon,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    title: 'Compliance Nightmare',
    subtitle: 'Risiko Audit & Pajak',
    desc: 'Peraturan PPh 21 berubah, e-Faktur error, dan data karyawan tersebar. Risiko denda pajak dan kebocoran data menghantui perusahaan yang masih mengandalkan proses manual.',
    icon: ShieldCheck,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    title: 'Low User Adoption',
    subtitle: 'Sistem Canggih yang Ditolak',
    desc: 'Investasi ERP miliaran rupiah menjadi sia-sia karena tim lapangan enggan menggunakannya. UI yang rumit dan tidak mobile-friendly adalah pembunuh utama transformasi digital.',
    icon: Smartphone,
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  },
];

// --- HOMEPAGE: UVP ---
export const getHomeUVP = (t: (key: string) => string) => [
  {
    title: t('Homepage.uvp_data.hybrid_title'),
    subtitle: t('Homepage.uvp_data.hybrid_subtitle'),
    desc: t('Homepage.uvp_data.hybrid_desc'),
    icon: Database,
  },
  {
    title: t('Homepage.uvp_data.ux_title'),
    subtitle: t('Homepage.uvp_data.ux_subtitle'),
    desc: t('Homepage.uvp_data.ux_desc'),
    icon: Smartphone,
  },
  {
    title: t('Homepage.uvp_data.compliance_title'),
    subtitle: t('Homepage.uvp_data.compliance_subtitle'),
    desc: t('Homepage.uvp_data.compliance_desc'),
    icon: ShieldCheck,
  },
  {
    title: t('Homepage.uvp_data.ai_title'),
    subtitle: t('Homepage.uvp_data.ai_subtitle'),
    desc: t('Homepage.uvp_data.ai_desc'),
    icon: Zap,
  },
];

export const homeUVP = [
  {
    title: 'Hybrid Cloud Freedom',
    subtitle: 'Kendali Penuh Infrastruktur',
    desc: 'Satu-satunya solusi yang menawarkan fleksibilitas penuh: Cloud untuk kecepatan, atau On-Premise untuk kedaulatan data total. Migrasi kapan saja tanpa lock-in.',
    icon: Database,
  },
  {
    title: 'Consumer-Grade UX',
    subtitle: 'Semudah Menggunakan Sosmed',
    desc: 'Kami mendesain BizOps dengan prinsip \'Zero Training\'. Antarmuka intuitif memastikan staf gudang hingga direksi bisa langsung produktif sejak hari pertama.',
    icon: Smartphone,
  },
  {
    title: 'Indonesia-Ready Compliance',
    subtitle: 'Pajak, BPJS, e-Faktur Built-in',
    desc: 'Siap audit sejak hari pertama. PPh 21 TER, BPJS, dan e-Faktur terintegrasi. Update regulasi otomatis tanpa biaya tambahan.',
    icon: ShieldCheck,
  },
  {
    title: 'AI-Powered Insights',
    subtitle: 'Keputusan Berbasis Data',
    desc: 'Machine learning menganalisa tren penjualan, prediksi cashflow, dan rekomendasi inventory otomatis. Tidak perlu data scientist.',
    icon: Zap,
  },
];

// --- HOMEPAGE: TECHNICAL VALIDATION ---
export const homeTechValidation = [
  {
    label: 'Backend Core',
    value: 'Frappe Framework',
    desc: 'Enterprise Python Monolith',
    icon: Code,
  },
  {
    label: 'Mobile Native',
    value: 'Flutter Engine',
    desc: '60 FPS iOS & Android',
    icon: Zap,
  },
  {
    label: 'Database',
    value: 'PostgreSQL 15+',
    desc: 'ACID Compliant & Robust',
    icon: Database,
  },
  {
    label: 'Infrastructure',
    value: 'Docker Swarm/K8s',
    desc: 'Auto-scaling Ready',
    icon: Layers,
  },
];

// --- HOMEPAGE SOLUTIONS TABS ---
export const getHomeSolutions = (t: (key: string) => string) => [
  {
    id: 'people',
    label: 'HR & People',
    category: 'Human Capital',
    icon: Users,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    impact: t('Homepage.solutions_data.people_impact'),
    modules: [
      t('Homepage.solutions_data.people_module1'),
      t('Homepage.solutions_data.people_module2'),
      t('Homepage.solutions_data.people_module3'),
      t('Homepage.solutions_data.people_module4'),
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Accounting',
    category: 'Finance',
    icon: DollarSign,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    impact: t('Homepage.solutions_data.finance_impact'),
    modules: [
      t('Homepage.solutions_data.finance_module1'),
      t('Homepage.solutions_data.finance_module2'),
      t('Homepage.solutions_data.finance_module3'),
      t('Homepage.solutions_data.finance_module4'),
    ],
  },
  {
    id: 'ops',
    label: 'Supply Chain & Ops',
    category: 'Operations',
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    impact: t('Homepage.solutions_data.ops_impact'),
    modules: [
      t('Homepage.solutions_data.ops_module1'),
      t('Homepage.solutions_data.ops_module2'),
      t('Homepage.solutions_data.ops_module3'),
      t('Homepage.solutions_data.ops_module4'),
    ],
  },
  {
    id: 'growth',
    label: 'Sales & CRM',
    category: 'Commercial',
    icon: TrendingUp,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    impact: t('Homepage.solutions_data.growth_impact'),
    modules: [
      t('Homepage.solutions_data.growth_module1'),
      t('Homepage.solutions_data.growth_module2'),
      t('Homepage.solutions_data.growth_module3'),
      t('Homepage.solutions_data.growth_module4'),
    ],
  },
  {
    id: 'project',
    label: 'Project & Service',
    category: 'Services',
    icon: Briefcase,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    impact: t('Homepage.solutions_data.project_impact'),
    modules: [
      t('Homepage.solutions_data.project_module1'),
      t('Homepage.solutions_data.project_module2'),
      t('Homepage.solutions_data.project_module3'),
      t('Homepage.solutions_data.project_module4'),
    ],
  },
];

export const homeSolutions = [
  {
    id: 'people',
    label: 'HR & People',
    category: 'Human Capital',
    icon: Users,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    impact:
      'Otomatisasi payroll dan administrasi karyawan, fokuskan HR pada pengembangan talenta dan budaya kerja.',
    modules: [
      'GPS & Face Recognition Attendance',
      'Payroll Otomatis (BPJS & PPh 21)',
      'Employee Self-Service (Cuti/Reimburse)',
      'KPI & Performance Appraisal',
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Accounting',
    category: 'Finance',
    icon: DollarSign,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    impact:
      'Real-time visibility terhadap cashflow. Tutup buku lebih cepat, kontrol budget lebih ketat.',
    modules: [
      'Multi-Currency Accounting',
      'Automated Bank Reconciliation',
      'Budgeting & Cost Control',
      'Asset Management & Depresiasi',
    ],
  },
  {
    id: 'ops',
    label: 'Supply Chain & Ops',
    category: 'Operations',
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    impact:
      'Optimalkan inventory level, tekan HPP, dan pastikan pengiriman tepat waktu ke pelanggan.',
    modules: [
      'Multi-Warehouse Management',
      'Procurement & Vendor Portal',
      'Production Planning (MRP)',
      'Serial & Batch Tracking',
    ],
  },
  {
    id: 'growth',
    label: 'Sales & CRM',
    category: 'Commercial',
    icon: TrendingUp,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    impact:
      'Percepat siklus penjualan dari lead hingga cash. Berdayakan tim sales dengan data di genggaman.',
    modules: [
      'Omnichannel CRM',
      'Sales Order & Invoicing',
      'Mobile Sales Force Automation',
      'Customer Support Ticketing',
    ],
  },
  {
    id: 'project',
    label: 'Project & Service',
    category: 'Services',
    icon: Briefcase,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    impact:
      'Kelola profitabilitas proyek secara real-time. Pantau budget vs aktual, timesheet tim, dan penagihan termin.',
    modules: [
      'Project Budgeting (RAB)',
      'Timesheet & Utilitas Tim',
      'Progress Billing (Termin)',
      'Job Costing & Profitability',
    ],
  },
];

// --- HOMEPAGE: PROCESS ---
export const getHomeProcess = (t: (key: string) => string) => [
  {
    step: '01',
    title: t('Homepage.process_data.step1_title'),
    desc: t('Homepage.process_data.step1_desc'),
    icon: Briefcase,
  },
  {
    step: '02',
    title: t('Homepage.process_data.step2_title'),
    desc: t('Homepage.process_data.step2_desc'),
    icon: Database,
  },
  {
    step: '03',
    title: t('Homepage.process_data.step3_title'),
    desc: t('Homepage.process_data.step3_desc'),
    icon: MonitorPlay,
  },
  {
    step: '04',
    title: t('Homepage.process_data.step4_title'),
    desc: t('Homepage.process_data.step4_desc'),
    icon: Rocket,
  },
];

export const homeProcess = [
  {
    step: '01',
    title: 'Discovery & Blueprint',
    desc: 'Analisa mendalam alur kerja bisnis Anda untuk memetakan gap dan kebutuhan konfigurasi sistem.',
    icon: Briefcase,
  },
  {
    step: '02',
    title: 'Data Migration',
    desc: 'Migrasi aman data historis dari Excel atau sistem lama ke database BizOps yang terstruktur.',
    icon: Database,
  },
  {
    step: '03',
    title: 'Training & UAT',
    desc: 'Pelatihan role-based untuk setiap divisi dan User Acceptance Test untuk memastikan kesiapan.',
    icon: MonitorPlay,
  },
  {
    step: '04',
    title: 'Go-Live & Support',
    desc: 'Peluncuran resmi dengan pendampingan intensif (Hypercare) untuk menjamin kelancaran transisi.',
    icon: Rocket,
  },
];

// Helper for icon consistency in map if needed, but we use Lucide icons usually passed as component or name.
// For simplicity in this file structure, we keep it data-centric.

// --- HOMEPAGE: INTEGRATIONS ---
export const homeIntegrations = [
  { name: 'BCA KlikBisnis', cat: 'Banking', icon: CreditCard, color: 'text-blue-600' },
  { name: 'DJP e-Faktur', cat: 'Taxation', icon: FileText, color: 'text-red-600' },
  { name: 'Tokopedia', cat: 'Marketplace', icon: ShoppingBag, color: 'text-green-600' },
  { name: 'Shopee', cat: 'Marketplace', icon: ShoppingCart, color: 'text-orange-500' },
  { name: 'WooCommerce', cat: 'E-Commerce', icon: ShoppingCart, color: 'text-purple-600' },
  { name: 'Google Data Studio', cat: 'Analytics', icon: BarChart, color: 'text-amber-600' },
  { name: 'WhatsApp Business', cat: 'Communication', icon: MessageCircle, color: 'text-emerald-500' },
  { name: 'Fingerprint Machine', cat: 'Hardware', icon: Fingerprint, color: 'text-slate-600' },
];

export const getHomeIndustriesData = (t: (key: string) => string) => ({
  manufacturing: {
    title: t('Homepage.industries_data.manufacturing_title'),
    description: t('Homepage.industries_data.manufacturing_desc'),
    icon: Puzzle,
  },
  retail: {
    title: t('Homepage.industries_data.retail_title'),
    description: t('Homepage.industries_data.retail_desc'),
    icon: Truck,
  },
  services: {
    title: t('Homepage.industries_data.services_title'),
    description: t('Homepage.industries_data.services_desc'),
    icon: Briefcase,
  },
  construction: {
    title: t('Homepage.industries_data.construction_title'),
    description: t('Homepage.industries_data.construction_desc'),
    icon: HardHat,
  },
  fnb: {
    title: t('Homepage.industries_data.fnb_title'),
    description: t('Homepage.industries_data.fnb_desc'),
    icon: Coffee,
  },
  healthcare: {
    title: t('Homepage.industries_data.healthcare_title'),
    description: t('Homepage.industries_data.healthcare_desc'),
    icon: Heart,
  },
});

export const homeIndustriesData = {
  manufacturing: {
    title: 'Manufaktur',
    description: 'Otomatisasi produksi dan inventory. Kurangi waste hingga 30%.',
    icon: Puzzle,
  },
  retail: {
    title: 'Retail & Distribusi',
    description: 'Stok terpusat, pengiriman tepat waktu. Tingkatkan akurasi 99%.',
    icon: Truck,
  },
  services: {
    title: 'Jasa & Agensi',
    description: 'Pantau profitabilitas proyek real-time. Tagih lebih cepat 50%.',
    icon: Briefcase,
  },
  construction: {
    title: 'Konstruksi',
    description: 'Kontrol biaya proyek vs aktual. Hindari cost overrun.',
    icon: HardHat,
  },
  fnb: {
    title: 'F&B & Restoran',
    description: 'Kelola multi-outlet, inventory bahan baku, dan resep terpusat.',
    icon: Coffee,
  },
  healthcare: {
    title: 'Kesehatan',
    description: 'Manajemen pasien, jadwal dokter, dan billing terintegrasi.',
    icon: Heart,
  },
};

export const getHomeRolesData = (t: (key: string) => string) => ({
  ceo: {
    title: t('Homepage.roles_data.ceo_title'),
    subtitle: t('Homepage.roles_data.ceo_subtitle'),
    icon: BarChart,
  },
  finance: {
    title: t('Homepage.roles_data.finance_title'),
    subtitle: t('Homepage.roles_data.finance_subtitle'),
    icon: DollarSign,
  },
  hr: {
    title: t('Homepage.roles_data.hr_title'),
    subtitle: t('Homepage.roles_data.hr_subtitle'),
    icon: Users,
  },
  ops: {
    title: t('Homepage.roles_data.ops_title'),
    subtitle: t('Homepage.roles_data.ops_subtitle'),
    icon: Truck,
  },
  it: {
    title: t('Homepage.roles_data.it_title'),
    subtitle: t('Homepage.roles_data.it_subtitle'),
    icon: Code,
  },
});

export const homeRolesData = {
  ceo: {
    title: 'CEO / Owner',
    subtitle: 'Bird-eye view performa bisnis & cashflow.',
    icon: BarChart,
  },
  finance: {
    title: 'Finance Manager',
    subtitle: 'Kontrol budget & laporan keuangan akurat.',
    icon: DollarSign,
  },
  hr: { title: 'HR Manager', subtitle: 'Kelola talenta, payroll & kepatuhan.', icon: Users },
  ops: { title: 'Ops Manager', subtitle: 'Efisiensi rantai pasok & produksi.', icon: Truck },
  it: { title: 'IT Manager', subtitle: 'Keamanan data & integrasi sistem.', icon: Code },
};
