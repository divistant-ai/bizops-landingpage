import {
  BarChart,
  Briefcase,
  Calculator,
  Code,
  Coffee,
  CreditCard,
  Database,
  DollarSign,
  FileText,
  Fingerprint,
  HardHat,
  HeadphonesIcon,
  Heart,
  LayoutDashboard,
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
    stat: t('Homepage.problems_data.data_silo_stat'),
    cost: t('Homepage.problems_data.data_silo_cost'),
    icon: LinkIcon,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    title: t('Homepage.problems_data.compliance_title'),
    subtitle: t('Homepage.problems_data.compliance_subtitle'),
    desc: t('Homepage.problems_data.compliance_desc'),
    stat: t('Homepage.problems_data.compliance_stat'),
    cost: t('Homepage.problems_data.compliance_cost'),
    icon: ShieldCheck,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    title: t('Homepage.problems_data.adoption_title'),
    subtitle: t('Homepage.problems_data.adoption_subtitle'),
    desc: t('Homepage.problems_data.adoption_desc'),
    stat: t('Homepage.problems_data.adoption_stat'),
    cost: t('Homepage.problems_data.adoption_cost'),
    icon: Smartphone,
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  },
  {
    title: t('Homepage.problems_data.hidden_cost_title'),
    subtitle: t('Homepage.problems_data.hidden_cost_subtitle'),
    desc: t('Homepage.problems_data.hidden_cost_desc'),
    stat: t('Homepage.problems_data.hidden_cost_stat'),
    cost: t('Homepage.problems_data.hidden_cost_cost'),
    icon: Calculator,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
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

// --- HOMEPAGE SOLUTIONS TABS ---
export const getHomeSolutions = (t: (key: string) => string) => [
  {
    id: 'people',
    label: 'People',
    category: 'HR & Payroll',
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
    metrics: [
      { value: '70%', label: t('Homepage.solutions_data.people_metric1') },
      { value: '100%', label: t('Homepage.solutions_data.people_metric2') },
    ],
    demoLink: '/demo/hr-module',
    industries: ['services', 'manufacturing', 'healthcare', 'retail'],
  },
  {
    id: 'money',
    label: 'Money',
    category: 'Accounts, Invoices, Taxes',
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
    metrics: [
      { value: '3x', label: t('Homepage.solutions_data.finance_metric1') },
      { value: '99.9%', label: t('Homepage.solutions_data.finance_metric2') },
    ],
    demoLink: '/demo/finance-module',
    industries: ['manufacturing', 'retail', 'services', 'healthcare', 'fnb'],
  },
  {
    id: 'supply',
    label: 'Supply',
    category: 'Suppliers, Purchases, Warehouses',
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
    metrics: [
      { value: '99%', label: t('Homepage.solutions_data.ops_metric1') },
      { value: '30%', label: t('Homepage.solutions_data.ops_metric2') },
    ],
    demoLink: '/demo/ops-module',
    industries: ['manufacturing', 'retail', 'fnb', 'healthcare'],
  },
  {
    id: 'growth',
    label: 'Growth',
    category: 'Leads, Deals, Customers',
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
    metrics: [
      { value: '40%', label: t('Homepage.solutions_data.growth_metric1') },
      { value: '2x', label: t('Homepage.solutions_data.growth_metric2') },
    ],
    demoLink: '/demo/crm-module',
    industries: ['retail', 'services', 'manufacturing', 'healthcare'],
  },
  {
    id: 'work',
    label: 'Work',
    category: 'Projects, Tasks, Assets',
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
    metrics: [
      { value: '95%', label: t('Homepage.solutions_data.project_metric1') },
      { value: '50%', label: t('Homepage.solutions_data.project_metric2') },
    ],
    demoLink: '/demo/project-module',
    industries: ['services', 'construction', 'manufacturing'],
  },
  {
    id: 'care',
    label: 'Care',
    category: 'Tickets, Issues, Portal',
    icon: HeadphonesIcon,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    impact: t('Homepage.solutions_data.care_impact'),
    modules: [
      t('Homepage.solutions_data.care_module1'),
      t('Homepage.solutions_data.care_module2'),
      t('Homepage.solutions_data.care_module3'),
      t('Homepage.solutions_data.care_module4'),
    ],
    metrics: [
      { value: '95%', label: t('Homepage.solutions_data.care_metric1') },
      { value: '<2h', label: t('Homepage.solutions_data.care_metric2') },
    ],
    demoLink: '/demo/care-module',
    industries: ['services', 'retail', 'healthcare', 'fnb'],
  },
  {
    id: 'hub',
    label: 'Hub',
    category: 'Dashboards, Files, Settings',
    icon: LayoutDashboard,
    color: 'text-slate-600',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    impact: t('Homepage.solutions_data.hub_impact'),
    modules: [
      t('Homepage.solutions_data.hub_module1'),
      t('Homepage.solutions_data.hub_module2'),
      t('Homepage.solutions_data.hub_module3'),
      t('Homepage.solutions_data.hub_module4'),
    ],
    metrics: [
      { value: '360°', label: t('Homepage.solutions_data.hub_metric1') },
      { value: 'Real-time', label: t('Homepage.solutions_data.hub_metric2') },
    ],
    demoLink: '/demo/hub-module',
    industries: ['services', 'manufacturing', 'healthcare', 'retail', 'fnb'],
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
  {
    name: 'WhatsApp Business',
    cat: 'Communication',
    icon: MessageCircle,
    color: 'text-emerald-500',
  },
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
