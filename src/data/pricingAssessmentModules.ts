import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  FileCheck,
  Globe,
  LayoutGrid,
  Store,
  Truck,
} from 'lucide-react';
import { modulesData } from './platformContent';

export type AssessmentModuleOption = {
  key:
    | 'needsCRM'
    | 'needsAccounting'
    | 'needsInventory'
    | 'needsProcurement'
    | 'needsHRM'
    | 'needsManufacturing'
    | 'needsProjectMgmt'
    | 'needsAssetMgmt'
    | 'needsHelpdesk'
    | 'needsPOS'
    | 'needsEcommerce'
    | 'needsQualityControl'
    | 'needsFleet'
    | 'needsDMS'
    | 'needsBI';
  label: string;
  desc: string;
  icon: LucideIcon;
};

type Slug = keyof typeof modulesData;

const slugToKeys: Record<
  Slug,
  { key: AssessmentModuleOption['key']; label?: string; desc?: string }[]
> = {
  people: [{ key: 'needsHRM' }],
  money: [{ key: 'needsAccounting' }],
  growth: [{ key: 'needsCRM' }],
  supply: [
    { key: 'needsInventory', label: 'Supply (Inventory)', desc: 'Stock, Warehouse, Transfer' },
    { key: 'needsProcurement', label: 'Supply (Procurement)', desc: 'PO, PR, Supplier Portal' },
  ],
  work: [
    { key: 'needsManufacturing', label: 'Manufacturing (Work)', desc: 'BOM, Work Order, Planning' },
    { key: 'needsProjectMgmt', label: 'Projects (Work)', desc: 'Task, Timesheet, Costing' },
    { key: 'needsAssetMgmt', label: 'Assets (Work)', desc: 'Maintenance, Depreciation' },
  ],
  care: [{ key: 'needsHelpdesk', label: 'Helpdesk (Care)', desc: 'Ticket, SLA, Customer Portal' }],
  hub: [{ key: 'needsBI', label: 'Business Intelligence', desc: 'Advanced Dashboard' }],
};

function buildFromSlugs(slugs: Slug[]): AssessmentModuleOption[] {
  const out: AssessmentModuleOption[] = [];
  slugs.forEach((slug) => {
    const data = modulesData[slug];
    const navLabel = data?.navLabel ?? slug;
    const navDesc = data?.navDesc ?? '';
    const icon = (data?.icon as LucideIcon) ?? LayoutGrid;
    slugToKeys[slug]?.forEach(({ key, label, desc }) => {
      out.push({ key, label: label ?? navLabel, desc: desc ?? navDesc, icon });
    });
  });
  return out;
}

export const CORE_MODULES: AssessmentModuleOption[] = buildFromSlugs([
  'people',
  'money',
  'growth',
  'supply',
]);

export const SPECIALIZED_MODULES: AssessmentModuleOption[] = [
  ...buildFromSlugs(['work', 'care']),
  { key: 'needsPOS', label: 'Point of Sales', desc: 'Kasir Retail / F&B', icon: Store },
  { key: 'needsEcommerce', label: 'E-Commerce', desc: 'Webstore & Payment Gateway', icon: Globe },
];

export const ADVANCED_MODULES: AssessmentModuleOption[] = [
  ...buildFromSlugs(['hub']),
  { key: 'needsQualityControl', label: 'Quality Control', desc: 'Inspections & Goals', icon: Activity },
  { key: 'needsFleet', label: 'Fleet Management', desc: 'Vehicle Tracking & Fuel', icon: Truck },
  { key: 'needsDMS', label: 'Document Management', desc: 'Digital Archive & Versioning', icon: FileCheck },
];
