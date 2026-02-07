/**
 * BizOps Modules Architecture
 *
 * I. Horizontal Modules (7 Core Business Functions)
 * 1. People - Human resources and talent management
 * 2. Money - Financial control and accounting
 * 3. Growth - Sales, CRM, and revenue generation
 * 4. Supply - Procurement and inventory
 * 5. Work - Project execution and operations
 * 6. Care - Customer support and service
 * 7. Hub - Central control and analytics
 */

import {
  BookOpen,
  Building2,
  Calculator,
  ClipboardList,
  FileText,
  HeadphonesIcon,
  LayoutDashboard,
  Megaphone,
  Package,
  Settings,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';

// HORIZONTAL MODULES - 7 Core Business Functions

export const BIZOPS_MODULES = {
  people: {
    id: 'people',
    name: 'People',
    tagline: 'Human resources and talent lifecycle',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Manage the entire employee lifecycle from hiring to development',
    subModules: {
      team: { id: 'team', name: 'Team', description: 'Employee profiles and organizational structure', icon: Users },
      attendance: { id: 'attendance', name: 'Attendance', description: 'Time tracking and leave management', icon: ClipboardList },
      payroll: { id: 'payroll', name: 'Payroll', description: 'Salary calculation and tax compliance', icon: Calculator },
      hiring: { id: 'hiring', name: 'Hiring', description: 'Recruitment pipeline and onboarding', icon: FileText },
      courses: { id: 'courses', name: 'Courses', description: 'Training and skill development', icon: BookOpen },
    },
  },

  money: {
    id: 'money',
    name: 'Money',
    tagline: 'Financial control and accounting',
    icon: Wallet,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    description: 'Central control of all cash flows and financial transactions',
    subModules: {
      accounts: { id: 'accounts', name: 'Accounts', description: 'General ledger and reconciliation', icon: Building2 },
      invoices: { id: 'invoices', name: 'Invoices', description: 'Customer billing management', icon: FileText },
      taxes: { id: 'taxes', name: 'Taxes', description: 'Tax reporting and compliance', icon: Calculator },
      bills: { id: 'bills', name: 'Bills', description: 'Vendor payment scheduling', icon: FileText },
      expenses: { id: 'expenses', name: 'Expenses', description: 'Reimbursement and expense claims', icon: Wallet },
    },
  },

  growth: {
    id: 'growth',
    name: 'Growth',
    tagline: 'Sales, CRM, and revenue generation',
    icon: Megaphone,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description: 'Front-end operations for acquiring and retaining customers',
    subModules: {
      leads: { id: 'leads', name: 'Leads', description: 'Prospect management', icon: Users },
      deals: { id: 'deals', name: 'Deals', description: 'Sales pipeline tracking', icon: Package },
      quotes: { id: 'quotes', name: 'Quotes', description: 'Price quotations', icon: FileText },
      customers: { id: 'customers', name: 'Customers', description: 'Customer database', icon: Users },
      campaigns: { id: 'campaigns', name: 'Campaigns', description: 'Marketing campaigns', icon: Megaphone },
    },
  },

  supply: {
    id: 'supply',
    name: 'Supply',
    tagline: 'Procurement and inventory',
    icon: ShoppingCart,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description: 'Physical goods management before sale or use',
    subModules: {
      suppliers: { id: 'suppliers', name: 'Suppliers', description: 'Vendor database', icon: Users },
      purchases: { id: 'purchases', name: 'Purchases', description: 'Purchase orders', icon: ShoppingCart },
      items: { id: 'items', name: 'Items', description: 'Product catalog', icon: Package },
      warehouses: { id: 'warehouses', name: 'Warehouses', description: 'Stock tracking', icon: Building2 },
    },
  },

  work: {
    id: 'work',
    name: 'Work',
    tagline: 'Project execution and operations',
    icon: Wrench,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Where value is created through delivery',
    subModules: {
      projects: { id: 'projects', name: 'Projects', description: 'Service project management', icon: ClipboardList },
      tasks: { id: 'tasks', name: 'Tasks', description: 'Task tracking', icon: FileText },
      production: { id: 'production', name: 'Production', description: 'Manufacturing orders', icon: Wrench },
      assets: { id: 'assets', name: 'Assets', description: 'Equipment and maintenance', icon: Truck },
      repairs: { id: 'repairs', name: 'Repairs', description: 'Maintenance scheduling', icon: Wrench },
    },
  },

  care: {
    id: 'care',
    name: 'Care',
    tagline: 'Customer support and service',
    icon: HeadphonesIcon,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    description: 'Post-sale customer satisfaction',
    subModules: {
      tickets: { id: 'tickets', name: 'Tickets', description: 'Support requests', icon: ClipboardList },
      issues: { id: 'issues', name: 'Issues', description: 'Bug tracking', icon: FileText },
      feedback: { id: 'feedback', name: 'Feedback', description: 'Customer surveys', icon: Megaphone },
      portal: { id: 'portal', name: 'Portal', description: 'Self-service access', icon: Users },
    },
  },

  hub: {
    id: 'hub',
    name: 'Hub',
    tagline: 'Central control and analytics',
    icon: LayoutDashboard,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    description: 'Brain of the entire application',
    subModules: {
      dashboards: { id: 'dashboards', name: 'Dashboards', description: 'Analytics reporting', icon: LayoutDashboard },
      files: { id: 'files', name: 'Files', description: 'Document storage', icon: FileText },
      sops: { id: 'sops', name: 'SOPs', description: 'Knowledge base', icon: BookOpen },
      logs: { id: 'logs', name: 'Logs', description: 'Audit trail', icon: ClipboardList },
      settings: { id: 'settings', name: 'Settings', description: 'System configuration', icon: Settings },
    },
  },
};

// Industry Vertical Modules
export const INDUSTRY_MODULES = {
  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Wrench,
    color: 'text-orange-600',
    description: 'Factory with BOM and Work Orders',
    objects: ['Factory', 'BOM', 'Work Orders'],
  },
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Building2,
    color: 'text-teal-600',
    description: 'Medical practice management',
    objects: ['Patients', 'Appointments', 'Records'],
  },
  education: {
    id: 'education',
    name: 'Education',
    icon: BookOpen,
    color: 'text-cyan-600',
    description: 'School management system',
    objects: ['Students', 'Faculty', 'Assessments'],
  },
  hospitality: {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Users,
    color: 'text-pink-600',
    description: 'Hotel and restaurant',
    objects: ['Room Bookings', 'Tenancy', 'Restaurant'],
  },
  agriculture: {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Package,
    color: 'text-green-600',
    description: 'Farm management',
    objects: ['Crops', 'Land', 'Weather', 'Soil'],
  },
  nonProfit: {
    id: 'nonProfit',
    name: 'Non-Profit',
    icon: Users,
    color: 'text-violet-600',
    description: 'Charity management',
    objects: ['Donors', 'Memberships', 'Volunteers'],
  },
  financialServices: {
    id: 'financialServices',
    name: 'Financial Services',
    icon: Wallet,
    color: 'text-yellow-600',
    description: 'Lending and banking',
    objects: ['Loan Apps', 'Tenure', 'Recovery'],
  },
  tourTravel: {
    id: 'tourTravel',
    name: 'Tour & Travel',
    icon: Truck,
    color: 'text-sky-600',
    description: 'Travel agency',
    objects: ['Bookings', 'Itineraries', 'Packages'],
  },
};

// Helper functions
export const getModuleById = (id: string) => BIZOPS_MODULES[id as keyof typeof BIZOPS_MODULES] || null;
export const getIndustryById = (id: string) => INDUSTRY_MODULES[id as keyof typeof INDUSTRY_MODULES] || null;
export const getAllModuleIds = () => Object.keys(BIZOPS_MODULES);
export const getAllIndustryIds = () => Object.keys(INDUSTRY_MODULES);

// Legacy mapping for migration
export const LEGACY_MODULE_MAP: Record<string, string> = {
  'HR & Payroll': 'People',
  'Human Capital': 'People',
  'Human Capital Management': 'People',
  'HRIS': 'People',
  'Finance & Accounting': 'Money',
  'Finance & Procurement': 'Money',
  'Accounting': 'Money',
  'Supply Chain': 'Supply',
  'Supply Chain & Inventory': 'Supply',
  'Inventory': 'Supply',
  'Operations': 'Work',
  'Operation': 'Work',
  'Project Management': 'Work',
  'Projects': 'Work',
  'Asset Management': 'Work',
  'Assets': 'Work',
  'CRM': 'Growth',
  'Sales': 'Growth',
  'CRM & Sales': 'Growth',
};
