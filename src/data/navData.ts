import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BarChart,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Calculator,
  Code,
  Compass,
  Crosshair,
  Database,
  DollarSign,
  Factory,
  FileSpreadsheet,
  GanttChartSquare,
  Globe,
  GraduationCap,
  Handshake,
  HardHat,
  Headphones,
  HeartPulse,
  HelpCircle,
  Landmark,
  Layers,
  LayoutGrid,
  LifeBuoy,
  Network,
  Newspaper,
  PieChart,
  Plane,
  Presentation,
  Rocket,
  Search,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Signal,
  Smile,
  Star,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
  Video,
  Wrench,
  Zap,
} from 'lucide-react';

import { getCapabilityNavItems, getModuleNavItems, getTechnologyNavItems } from './navHelpers';

type MenuItem = {
  to: string;
  label: string;
  desc: string;
  icon: LucideIcon;
  color?: string;
  bg?: string;
};

type MenuTab = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type MenuContent = {
  title: string;
  description: string;
  items: Array<MenuItem>;
};

export const platformTabs: Array<MenuTab> = [
  { id: 'modules', label: 'Core Modules', icon: Layers },
  { id: 'capabilities', label: 'Capabilities', icon: Zap },
  { id: 'technology', label: 'Technology', icon: Code },
];

export const platformContent: Record<string, MenuContent> = {
  modules: {
    title: 'Core Business Modules',
    description: 'Integrated applications to run your entire enterprise.',
    items: getModuleNavItems(),
  },
  capabilities: {
    title: 'Platform Capabilities',
    description: 'Powerful features shared across all modules.',
    items: getCapabilityNavItems(),
  },
  technology: {
    title: 'Underlying Technology',
    description: 'Enterprise-grade architecture built for scale.',
    items: getTechnologyNavItems(),
  },
};

export const solutionsTabs: Array<MenuTab> = [
  { id: 'industry', label: 'By Industry', icon: Factory },
  { id: 'role', label: 'By Role', icon: UserCheck },
];

export const solutionsContent: Record<string, MenuContent> = {
  industry: {
    title: 'Industry Solutions',
    description: 'Tailored workflows for specific business sectors.',
    items: [
      {
        to: '/solutions/construction',
        label: 'Construction & Engineering',
        desc: 'Project-based ERP',
        icon: HardHat,
      },
      {
        to: '/solutions/retail',
        label: 'Retail & Distribution',
        desc: 'Omnichannel & POS',
        icon: ShoppingCart,
      },
      {
        to: '/solutions/outsourcing',
        label: 'Outsourcing & Manpower',
        desc: 'Manpower management',
        icon: UserCheck,
      },
      {
        to: '/solutions/manufacturing',
        label: 'Manufacturing',
        desc: 'MRP & Production',
        icon: Factory,
      },
      {
        to: '/solutions/consulting',
        label: 'Consulting & Agency',
        desc: 'Billable hours & projects',
        icon: Briefcase,
      },
      {
        to: '/solutions/enterprise',
        label: 'Enterprise Group',
        desc: 'Consolidation & control',
        icon: Building,
      },
      {
        to: '/solutions/travel',
        label: 'Travel & Hospitality',
        desc: 'Tour & Umrah management',
        icon: Plane,
      },
      {
        to: '/solutions/bfsi',
        label: 'Banking & Financial Services',
        desc: 'Loan & compliance management',
        icon: Landmark,
      },
      {
        to: '/solutions/realestate',
        label: 'Real Estate & Property',
        desc: 'Unit inventory & sales',
        icon: Building2,
      },
      {
        to: '/solutions/healthcare',
        label: 'Healthcare & Medical',
        desc: 'EMR & patient management',
        icon: HeartPulse,
      },
      {
        to: '/solutions/fnb',
        label: 'Food & Beverage',
        desc: 'Recipe costing & multi-outlet',
        icon: UtensilsCrossed,
      },
      {
        to: '/solutions/logistics',
        label: 'Logistics & Transportation',
        desc: 'Fleet & route optimization',
        icon: Truck,
      },
    ],
  },
  role: {
    title: 'Solutions by Role',
    description: 'Tools designed for specific stakeholders.',
    items: [
      {
        to: '/role/ceo',
        label: 'CEO & Executives',
        desc: 'Executive dashboards',
        icon: BarChart,
      },
      {
        to: '/role/finance',
        label: 'Finance Leaders',
        desc: 'Cashflow control',
        icon: DollarSign,
      },
      { to: '/role/hr', label: 'HR Leaders', desc: 'Talent acquisition', icon: Users },
      { to: '/role/it', label: 'IT Leaders', desc: 'Security & compliance', icon: Server },
      {
        to: '/role/ops',
        label: 'Operations Leaders',
        desc: 'Efficiency tracking',
        icon: Activity,
      },
      {
        to: '/role/sales',
        label: 'Sales Leaders',
        desc: 'Pipeline & CRM',
        icon: Target,
      },
      {
        to: '/role/procurement',
        label: 'Procurement Leaders',
        desc: 'Vendor & cost optimization',
        icon: ShoppingBag,
      },
    ],
  },
};

export const resourcesTabs: Array<MenuTab> = [
  { id: 'insights', label: 'Insights & News', icon: BookOpen },
  { id: 'customer-tools', label: 'Customer Tools', icon: Calculator },
  { id: 'strategic-tools', label: 'Strategic Tools', icon: BarChart },
  { id: 'slides', label: 'Presentation Slides', icon: Presentation },
  { id: 'support', label: 'Support Center', icon: LifeBuoy },
];

export const resourcesContent: Record<string, MenuContent> = {
  'insights': {
    title: 'Latest Insights',
    description: 'Stay updated with industry trends and success stories.',
    items: [
      {
        to: '/blog',
        label: 'Blog & News',
        desc: 'Latest industry news and tips',
        icon: Newspaper,
      },
      {
        to: '/use-cases',
        label: 'Use Cases',
        desc: 'Real-world implementation stories',
        icon: Layers,
      },
      {
        to: '/customers',
        label: 'Customer Stories',
        desc: 'Success stories from our clients',
        icon: Smile,
      },
      {
        to: '/events',
        label: 'Events & Webinars',
        desc: 'Join our upcoming sessions',
        icon: Video,
      },
    ],
  },
  'customer-tools': {
    title: 'Customer Tools',
    description: 'Kalkulator & tools untuk operasional sehari-hari.',
    items: [
      {
        to: '/tools',
        label: 'View All Tools',
        desc: 'Browse all available tools',
        icon: LayoutGrid,
      },
      {
        to: '/tools/pajak-pph21',
        label: 'Kalkulator Pajak PPh 21',
        desc: 'Hitung pajak karyawan',
        icon: Calculator,
      },
      {
        to: '/tools/gaji-bersih',
        label: 'Kalkulator Gaji Bersih',
        desc: 'Hitung take home pay',
        icon: DollarSign,
      },
      {
        to: '/tools/bpjs',
        label: 'Kalkulator BPJS',
        desc: 'Hitung iuran BPJS',
        icon: Shield,
      },
      {
        to: '/tools/margin-markup',
        label: 'Margin & Markup',
        desc: 'Hitung harga jual optimal',
        icon: TrendingUp,
      },
      {
        to: '/tools/invoice-checker',
        label: 'Invoice Checker',
        desc: 'Validasi kelengkapan invoice',
        icon: FileSpreadsheet,
      },
      {
        to: '/tools/break-even-point',
        label: 'Break Even Point',
        desc: 'Hitung titik impas',
        icon: Target,
      },
      {
        to: '/tools/efisiensi-produksi',
        label: 'Efisiensi Produksi',
        desc: 'Hitung OEE mesin',
        icon: Factory,
      },
    ],
  },
  'strategic-tools': {
    title: 'Strategic Tools',
    description: 'Tools untuk perencanaan & transformasi digital.',
    items: [
      {
        to: '/tools/assessment',
        label: 'Maturity Assessment',
        desc: 'Digital readiness evaluation',
        icon: PieChart,
      },
      {
        to: '/tools/needs-analysis',
        label: 'Solution Finder',
        desc: '7-step needs analysis',
        icon: Crosshair,
      },
      {
        to: '/tools/roi-calculator',
        label: 'ROI Calculator',
        desc: 'Investment analysis',
        icon: DollarSign,
      },
      {
        to: '/tools/timeline-generator',
        label: 'Timeline Generator',
        desc: 'Project planning',
        icon: GanttChartSquare,
      },
      {
        to: '/tools/pricing-calculator',
        label: 'Pricing Calculator',
        desc: 'Cost estimation',
        icon: Calculator,
      },
      {
        to: '/tools/biaya-turnover',
        label: 'Biaya Turnover',
        desc: 'HR cost analysis',
        icon: Users,
      },
      {
        to: '/comparisons',
        label: 'System Comparison',
        desc: 'Compare with competitors',
        icon: LayoutGrid,
      },
      {
        to: '/migration',
        label: 'Migration Center',
        desc: 'Data migration guides',
        icon: Rocket,
      },
    ],
  },
  'slides': {
    title: 'Presentation Slides',
    description: 'Interactive presentations about BizOps platform.',
    items: [
      {
        to: '/slide/intro',
        label: 'Platform Introduction',
        desc: 'Overview of BizOps platform',
        icon: Presentation,
      },
      {
        to: '/slide/onboarding',
        label: 'Onboarding Journey',
        desc: 'End-to-end implementation guide',
        icon: Rocket,
      },
    ],
  },
  'support': {
    title: 'Help & Support',
    description: 'Get the assistance you need to succeed.',
    items: [
      {
        to: '/docs',
        label: 'Help & API Docs',
        desc: 'Technical documentation',
        icon: HelpCircle,
      },
      {
        to: '/status',
        label: 'System Status',
        desc: 'Real-time performance',
        icon: Signal,
      },
    ],
  },
};

export const companyTabs: Array<MenuTab> = [
  { id: 'story', label: 'Our Story', icon: Building },
  { id: 'ecosystem', label: 'Ecosystem', icon: Globe },
];

export const companyContent: Record<string, MenuContent> = {
  story: {
    title: 'About BizOps',
    description: 'Building the future of enterprise efficiency.',
    items: [
      { to: '/about', label: 'About Us', desc: 'Our mission & vision', icon: Building },
      {
        to: '/why-bizops',
        label: 'Why BizOps',
        desc: 'Our unique value proposition',
        icon: Star,
      },
      {
        to: '/trust',
        label: 'Trust & Security',
        desc: 'Enterprise-grade security',
        icon: ShieldCheck,
      },
      {
        to: '/media-kit',
        label: 'Media Kit',
        desc: 'Logos & brand assets',
        icon: Newspaper,
      },
    ],
  },
  ecosystem: {
    title: 'Join the Ecosystem',
    description: 'Grow your career or business with us.',
    items: [
      {
        to: '/partners',
        label: 'Partner Program',
        desc: 'Become a solution partner',
        icon: Handshake,
      },
      {
        to: '/partners/directory',
        label: 'Partner Directory',
        desc: 'Find certified implementors',
        icon: Search,
      },
      {
        to: '/partners/startup-program',
        label: 'Startup Program',
        desc: 'Credits for early-stage startups',
        icon: Rocket,
      },
      { to: '/careers', label: 'Careers', desc: 'We are hiring!', icon: Briefcase },
    ],
  },
};

export const servicesItems: Array<MenuItem> = [
  { to: '/services/consulting', label: 'Strategic Consulting', desc: '', icon: Compass },
  { to: '/services/implementation', label: 'Implementation', desc: '', icon: Wrench },
  { to: '/services/custom-development', label: 'Custom Development', desc: '', icon: Code },
  { to: '/services/data-migration', label: 'Data Migration', desc: '', icon: Database },
  { to: '/services/integration', label: 'System Integration', desc: '', icon: Network },
  { to: '/services/security-audit', label: 'Security Audit', desc: '', icon: Shield },
  {
    to: '/services/managed-services',
    label: 'Managed Services',
    desc: 'Virtual Head Office',
    icon: Building,
  },
  {
    to: '/services/training',
    label: 'Training & Change Management',
    desc: '',
    icon: GraduationCap,
  },
  { to: '/services/support', label: 'Support & Managed Services', desc: '', icon: Headphones },
];
