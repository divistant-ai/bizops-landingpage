'use client';

import {
  Activity,
  BarChart3,
  Briefcase,
  Factory,
  FileCheck,
  Globe,
  Headphones,
  LayoutGrid,
  Package,
  PieChart,
  Settings,
  ShoppingCart,
  Store,
  Truck,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';

import { ModuleSelector } from '../../components/ModuleSelector';

const CORE_MODULES = [
  { key: 'needsCRM' as const, label: 'CRM & Sales', desc: 'Leads, Pipeline, Quotation', icon: UserCheck },
  { key: 'needsAccounting' as const, label: 'Finance', desc: 'Jurnal, Neraca, Laba Rugi', icon: Wallet },
  { key: 'needsInventory' as const, label: 'Inventory', desc: 'Stock, Warehouse, Transfer', icon: Package },
  { key: 'needsProcurement' as const, label: 'Procurement', desc: 'PO, PR, Supplier Portal', icon: ShoppingCart },
  { key: 'needsHRM' as const, label: 'HRM & Payroll', desc: 'Absensi, Cuti, Gaji, PPh21', icon: Users },
];

const SPECIALIZED_MODULES = [
  { key: 'needsManufacturing' as const, label: 'Manufacturing', desc: 'BOM, Work Order, Planning', icon: Factory },
  { key: 'needsProjectMgmt' as const, label: 'Project Management', desc: 'Task, Timesheet, Costing', icon: Briefcase },
  { key: 'needsAssetMgmt' as const, label: 'Asset Management', desc: 'Maintenance, Depreciation', icon: BarChart3 },
  { key: 'needsHelpdesk' as const, label: 'Helpdesk', desc: 'Ticket, SLA, Customer Portal', icon: Headphones },
  { key: 'needsPOS' as const, label: 'Point of Sales', desc: 'Kasir Retail / F&B', icon: Store },
  { key: 'needsEcommerce' as const, label: 'E-Commerce', desc: 'Webstore & Payment Gateway', icon: Globe },
];

const ADVANCED_MODULES = [
  { key: 'needsQualityControl' as const, label: 'Quality Control', desc: 'Inspections & Goals', icon: Activity },
  { key: 'needsFleet' as const, label: 'Fleet Management', desc: 'Vehicle Tracking & Fuel', icon: Truck },
  { key: 'needsDMS' as const, label: 'Document Management', desc: 'Digital Archive & Versioning', icon: FileCheck },
  { key: 'needsBI' as const, label: 'Business Intelligence', desc: 'Advanced Dashboard', icon: PieChart },
];

export function BusinessModulesStep() {
  return (
    <div className="space-y-8">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          Business Modules
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Pilih fungsionalitas yang dibutuhkan operasional Anda.
        </p>
      </div>

      {/* Core Operations */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
          <LayoutGrid className="h-3 w-3" />
          Core Operations
        </h4>
        <ModuleSelector modules={CORE_MODULES} />
      </div>

      {/* Specialized */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
          <Settings className="h-3 w-3" />
          Specialized
        </h4>
        <ModuleSelector modules={SPECIALIZED_MODULES} />
      </div>

      {/* Advanced */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
          <Activity className="h-3 w-3" />
          Advanced
        </h4>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <ModuleSelector modules={ADVANCED_MODULES} />
        </div>
      </div>
    </div>
  );
}
