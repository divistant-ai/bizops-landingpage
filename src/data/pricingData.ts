// BizOps Pricing Model Data (Ultimate Version)
import { BIZOPS_MODULES } from './modulesArchitecture';

export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
  description: string;
  popular?: boolean;
  cta: string;
  features: string[];
  recommendedFor: string[];
};

export type FeatureCategory = {
  category: string;
  features: {
    name: string;
    business: boolean | string;
    growth: boolean | string;
    enterprise: boolean | string;
    description?: string;
  }[];
};

export type BillingType = 'recurring' | 'one-time';

export type ServiceAddon = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  availableFor: string[];
  category: 'infrastructure' | 'implementation' | 'support' | 'integration' | 'managed-services';
  billingType: BillingType;
  recommended?: boolean;
  tooltip?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'business',
    name: 'Business',
    tagline: 'Untuk Startups & SME',
    priceMonthly: 3000000,
    priceYearly: 2500000,
    currency: 'IDR',
    description: 'Cloud ERP lengkap untuk operasional bisnis sehari-hari.',
    cta: 'Mulai Trial Gratis 14 Hari',
    features: [
      'Core ERP (HR, Finance, Sales, Purchasing)',
      'Recommended up to 50 Users',
      'Shared Cloud Infrastructure',
      'Standard Support (Email)',
      'No Hidden Fees',
    ],
    recommendedFor: ['Startup', 'SME', 'Single Location', 'Simple Workflow'],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Untuk perusahaan berkembang',
    priceMonthly: 9000000,
    priceYearly: 7500000,
    currency: 'IDR',
    description: 'Performa dedicated & fitur lengkap untuk scaling up.',
    popular: true,
    cta: 'Konsultasi Paket Growth',
    features: [
      'All 7 Core Modules (HR, Finance, CRM, Supply, etc.)',
      'Industry Templates (Retail, Construction, Manufacturing)',
      'Recommended up to 200 Users',
      'Dedicated VPS Resource',
      'Priority Support (Chat/WA)',
    ],
    recommendedFor: ['Multi-Branch', 'Manufacturing', 'Complex Workflow', 'API Integration'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Untuk Korporat & BUMN',
    priceMonthly: 0, // Custom
    priceYearly: 0, // Custom
    currency: 'IDR',
    description: 'Kebebasan penuh kustomisasi, integrasi & infrastruktur.',
    cta: 'Ajukan Penawaran Kustom',
    features: [
      'Unlimited Users Capacity',
      'Private Cloud / On-Premise',
      'Custom Module Installation',
      'Full Database Access',
      'Dedicated Account Manager',
    ],
    recommendedFor: ['Enterprise', 'BUMN', 'High Security', 'Custom Development', 'On-Premise'],
  },
];

export const featureComparison: FeatureCategory[] = [

  {
    category: 'Core Modules (All 7 Modules Included)',
    features: [
      { name: `${BIZOPS_MODULES.people.name} (HRIS)`, business: true, growth: true, enterprise: true, description: 'Payroll, Attendance, Employee Self-Service, Recruitment' },
      { name: `${BIZOPS_MODULES.money.name} (Finance)`, business: true, growth: true, enterprise: true, description: 'Accounting, Invoicing, Budgeting, Multi-Currency' },
      { name: `${BIZOPS_MODULES.supply.name} (Inventory)`, business: true, growth: true, enterprise: true, description: 'Stock, Purchasing, Manufacturing, Quality Control' },
      { name: `${BIZOPS_MODULES.growth.name} (CRM)`, business: true, growth: true, enterprise: true, description: 'Sales Pipeline, Quotation, Support Helpdesk' },
      { name: `${BIZOPS_MODULES.work.name} (Projects)`, business: true, growth: true, enterprise: true, description: 'Project Management, Timesheets, Asset Management' },
      { name: `${BIZOPS_MODULES.care.name} (Support)`, business: true, growth: true, enterprise: true, description: 'Ticketing System, Knowledge Base, Customer Portal' },
      { name: `${BIZOPS_MODULES.hub.name} (Governance)`, business: true, growth: true, enterprise: true, description: 'Approval Matrix, Basic Audit Trail, User Rights' },
    ],
  },
  {
    category: 'Platform Capabilities',
    features: [
      { name: 'User & Role Management', business: 'Standard', growth: 'Advanced', enterprise: 'Unlimited Custom Roles' },
      { name: 'Workflow Builder', business: 'Standard', growth: 'Multi-Level', enterprise: 'Conditional Logic' },
      { name: 'Custom Fields', business: true, growth: true, enterprise: true, description: 'Add fields to any form' },
      { name: 'Print Format Builder', business: true, growth: true, enterprise: true, description: 'Custom PDF Layouts' },
      { name: 'Server Scripts', business: false, growth: 'Safe Mode (Restricted)', enterprise: 'Full Access' },
      { name: 'Audit Trail', business: '7 Days Log', growth: '90 Days Log', enterprise: 'Unlimited / Immutable' },
      { name: 'API Access', business: 'Standard', growth: 'High Volume', enterprise: 'Custom Limits' },
      { name: 'Mobile App Access', business: 'Standard', growth: 'Offline-First (Sales)', enterprise: 'Full Offline Support' },
      { name: 'AI Assistant (Copilot)', business: false, growth: 'Add-on', enterprise: 'Included' },
      { name: 'Whitelabeling', business: false, growth: 'Logo Only', enterprise: 'Full Re-skin / Custom App' },
      { name: 'Custom App Builder (No-code)', business: false, growth: 'Basic', enterprise: 'Advanced / Scripting' },
      { name: 'Single Sign-On (SSO)', business: false, growth: 'Google/Microsoft', enterprise: 'SAML / LDAP' },
    ],
  },
  {
    category: 'Infrastructure & Performance',
    features: [
      { name: 'Deployment Architecture', business: 'Shared Container', growth: 'Dedicated VPS', enterprise: 'Private Cloud / On-Prem' },
      { name: 'Background Workers', business: 'Shared Queue', growth: 'Dedicated Queue', enterprise: 'Custom / Scalable' },
      { name: 'Database Access', business: 'No Access', growth: 'Read-Only Replica', enterprise: 'Full TCP/IP Access' },
      { name: 'Storage (SSD)', business: '20 GB', growth: '80 GB', enterprise: 'Custom / Scalable' },
      { name: 'Backup Policy', business: 'Daily', growth: 'Daily + On-Demand', enterprise: 'Real-time / Custom' },
    ],
  },
  {
    category: 'Services & Support',
    features: [
      { name: 'Support Channel', business: 'Email / Ticket', growth: 'WhatsApp / Chat', enterprise: 'Dedicated Team' },
      { name: 'Support SLA', business: '48h (Email)', growth: '12h (Chat/WA)', enterprise: '4h (Dedicated Agent)' },
      { name: 'Bug Fix Priority', business: 'Standard', growth: 'High', enterprise: 'Critical' },
      { name: 'Implementation', business: 'Self-Service / Guides', growth: 'Assisted Setup', enterprise: 'Full Turnkey Project' },
      { name: 'Training Sessions', business: 'Videos / Docs', growth: '2x Online Sessions', enterprise: 'On-site / Custom' },
      { name: 'Data Migration', business: 'Excel Template', growth: 'Assisted Import', enterprise: 'Custom Migration Service' },
      { name: 'Consultation', business: false, growth: 'Monthly Review', enterprise: 'Weekly / On-demand' },
      { name: 'Custom Development', business: false, growth: 'Minor Tweaks', enterprise: 'Major Customization' },
      { name: 'Managed Services', business: false, growth: 'Optional Add-on', enterprise: 'Available' },
    ],
  },

];

export const addOns: ServiceAddon[] = [
  // Infrastructure
  {
    id: 'extra-storage',
    name: 'Extra Storage',
    description: 'Tambahan penyimpanan SSD untuk dokumen & attachment',
    price: 100000,
    unit: 'per 10GB/bulan',
    availableFor: ['business', 'growth'],
    category: 'infrastructure',
    billingType: 'recurring',
    tooltip: 'Ideal jika Anda menyimpan banyak lampiran file (PDF/Gambar) transaksi.',
  },
  {
    id: 'dedicated-ip',
    name: 'Dedicated IP Address',
    description: 'Alamat IP statis untuk whitelisting & enhanced security',
    price: 250000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'infrastructure',
    billingType: 'recurring',
    tooltip: 'Wajib untuk integrasi API tertentu (Bank/Payment) yang membutuhkan IP Whitelist.',
  },

  // Implementation Services
  {
    id: 'impl-express',
    name: 'Express Implementation (2 Minggu)',
    description: 'Fast-track setup: Database config, master data template, 1x training',
    price: 5000000,
    unit: 'one-time',
    availableFor: ['business'],
    category: 'implementation',
    billingType: 'one-time',
    tooltip: 'Paket kilat untuk bisnis kecil yang data master-nya sudah rapi (Excel ready).',
  },
  {
    id: 'impl-standard',
    name: 'Standard Implementation (1 Bulan)',
    description: 'Setup database, input master data, workflow basic, 3x training online',
    price: 10000000,
    unit: 'one-time',
    availableFor: ['business', 'growth'],
    category: 'implementation',
    billingType: 'one-time',
    recommended: true,
    tooltip: 'Pilihan paling populer. Mencakup setup end-to-end standar.',
  },
  {
    id: 'impl-pro',
    name: 'Professional Implementation (2 Bulan)',
    description: 'Full setup, data migration (clean), custom workflow, 6x training, 1x onsite',
    price: 25000000,
    unit: 'one-time',
    availableFor: ['growth', 'enterprise'],
    category: 'implementation',
    billingType: 'one-time',
    tooltip: 'Untuk perusahaan yang butuh pendampingan intensif & migrasi data kompleks.',
  },
  {
    id: 'data-migration',
    name: 'Data Migration Service',
    description: 'Migrasi data dari sistem lama (cleaning, mapping, validation)',
    price: 8000000,
    unit: 'per sistem',
    availableFor: ['business', 'growth', 'enterprise'],
    category: 'implementation',
    billingType: 'one-time',
    tooltip: 'Layanan pemindahan data historis (Saldo Awal, Stok, Hutang/Piutang) dari software lama.',
  },

  // Support Services
  {
    id: 'training-extra',
    name: 'Extra Training Session',
    description: 'Sesi training tambahan per modul (2 jam, online)',
    price: 1500000,
    unit: 'per sesi',
    availableFor: ['business', 'growth', 'enterprise'],
    category: 'support',
    billingType: 'one-time',
    tooltip: 'Jika staff Anda butuh bimbingan ulang atau ada karyawan baru.',
  },
  {
    id: 'onsite-visit',
    name: 'On-site Visit',
    description: 'Kunjungan tim teknis ke lokasi (Jadetabek, 1 hari)',
    price: 3500000,
    unit: 'per hari',
    availableFor: ['growth', 'enterprise'],
    category: 'support',
    billingType: 'one-time',
    tooltip: 'Kunjungan fisik untuk troubleshooting jaringan/hardware atau training tatap muka.',
  },
  {
    id: 'dedicated-support',
    name: 'Dedicated Support 24/7',
    description: 'Akses prioritas support via hotline dengan SLA 2 jam',
    price: 2500000,
    unit: 'per bulan',
    availableFor: ['enterprise'],
    category: 'support',
    billingType: 'recurring',
    tooltip: 'Garansi response time < 2 jam untuk isu kritis, tersedia di hari libur.',
  },
  {
    id: 'managed-integration',
    name: 'Managed Integration Service',
    description: 'Jasa integrasi sistem ke Bank, Marketplace, atau Software lain',
    price: 15000000,
    unit: 'per integrasi',
    availableFor: ['growth', 'enterprise'],
    category: 'implementation',
    billingType: 'one-time',
    tooltip: 'Tim kami yang bangun konektor kustom (API) sesuai kebutuhan bisnis Anda.',
  },
  {
    id: 'security-audit',
    name: 'Security Audit & Pen-Test',
    description: 'Audit keamanan sistem periodik & VAPT Report',
    price: 25000000,
    unit: 'per event',
    availableFor: ['enterprise'],
    category: 'support',
    billingType: 'one-time',
    tooltip: 'Wajib untuk standar kepatuhan ISO 27001 atau regulasi industri tertentu.',
  },

  // Integration Services
  {
    id: 'api-integration',
    name: 'API Integration (Per Endpoint)',
    description: 'Integrasi ke sistem eksternal via REST API',
    price: 5000000,
    unit: 'per integrasi',
    availableFor: ['growth', 'enterprise'],
    category: 'integration',
    billingType: 'one-time',
    tooltip: 'Menghubungkan ERP dengan Webstore, Marketplace, CRM lain, atau Logistics.',
  },
  {
    id: 'custom-report',
    name: 'Custom Report Development',
    description: 'Pembuatan laporan kustom sesuai kebutuhan bisnis',
    price: 2000000,
    unit: 'per report',
    availableFor: ['growth', 'enterprise'],
    category: 'integration',
    billingType: 'one-time',
    tooltip: 'Desain ulang format Invoice, PO, atau Laporan Management khusus.',
  },

  // Enterprise Managed Services
  {
    id: 'ms-finance-bookkeeper',
    name: 'Managed Finance - Bookkeeping',
    description: 'Jurnal harian, rekonsiliasi bank & laporan keuangan bulanan standar',
    price: 4500000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'managed-services',
    billingType: 'recurring',
    tooltip: 'Staff akuntan virtual untuk menangani pembukuan rutin (s/d 100 transaksi).',
  },
  {
    id: 'ms-finance-tax',
    name: 'Managed Finance - Tax Specialist',
    description: 'Kepatuhan pajak bulanan (PPN, PPh 21/23) & pelaporan SPT Masa',
    price: 3500000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'managed-services',
    billingType: 'recurring',
    tooltip: 'Konsultan pajak tersertifikasi untuk memastikan kepatuhan regulasi.',
  },
  {
    id: 'ms-hr-payroll',
    name: 'Managed HR - Payroll Specialist',
    description: 'Proses penggajian, perhitungan PPh 21 & administrasi BPJS',
    price: 3000000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'managed-services',
    billingType: 'recurring',
    tooltip: 'Pengelolaan payroll end-to-end yang akurat dan tepat waktu (s/d 50 karyawan).',
  },
  {
    id: 'ms-it-devops',
    name: 'Managed IT - DevOps Support',
    description: 'Maintenance server, monitoring keamanan 24/7 & backup management',
    price: 5000000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'managed-services',
    billingType: 'recurring',
    tooltip: 'Tim teknis untuk memastikan uptime dan performa infrastruktur server Anda.',
  },
  {
    id: 'ms-legal-retainer',
    name: 'Managed Legal - Retainer',
    description: 'Review kontrak bisnis, konsultasi hukum korporasi & perizinan',
    price: 5000000,
    unit: 'per bulan',
    availableFor: ['growth', 'enterprise'],
    category: 'managed-services',
    billingType: 'recurring',
    tooltip: 'Akses ke konsultan hukum untuk kebutuhan legal operasional sehari-hari.',
  },
];

export const faqs = [
  {
    q: 'Apakah biaya berlangganan sudah termasuk hosting?',
    a: 'Ya, untuk paket Business dan Growth, biaya berlangganan sudah termasuk biaya cloud hosting (AWS/Google Cloud) yang dikelola sepenuhnya oleh BizOps. Anda tidak perlu memikirkan biaya server terpisah.',
  },
  {
    q: 'Apakah ada biaya implementasi di awal?',
    a: 'Biaya implementasi bersifat opsional namun sangat disarankan untuk memastikan sistem berjalan lancar. Kami menyediakan paket implementasi mulai dari Rp 5 Juta (Express) hingga Rp 25 Juta (Professional). Untuk user yang tech-savvy, Anda bisa melakukan setup mandiri dengan panduan dokumentasi kami secara gratis.',
  },
  {
    q: 'Bagaimana jika saya ingin upgrade paket di tengah jalan?',
    a: 'Anda bisa melakukan upgrade kapan saja. Sistem akan secara otomatis menghitung selisih biaya pro-rata untuk sisa masa berlangganan Anda. Data Anda akan tetap aman dan tidak ada downtime saat upgrade.',
  },
  {
    q: 'Apakah data saya aman?',
    a: 'Sangat aman. Kami menggunakan enkripsi SSL 256-bit untuk seluruh transmisi data. Database Anda di-backup secara otomatis setiap hari ke lokasi server terpisah (Disaster Recovery). Untuk paket Enterprise, Anda bahkan bisa memilih untuk host data di server Anda sendiri (On-Premise).',
  },
  {
    q: 'Apakah saya bisa membatalkan langganan kapan saja?',
    a: 'Untuk paket bulanan, Anda bisa berhenti berlangganan kapan saja sebelum tanggal tagihan berikutnya. Untuk paket tahunan, pembatalan di tengah periode tidak mendapatkan pengembalian dana (refund), namun layanan akan tetap aktif hingga akhir periode berlangganan.',
  },
];
