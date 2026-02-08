export type OtherSoftwareOption = {
  id: string;
  labelEn: string;
  labelId: string;
};

export const OTHER_SOFTWARE_OPTIONS: OtherSoftwareOption[] = [
  { id: 'accounting', labelEn: 'Accounting / Finance', labelId: 'Akuntansi / Keuangan' },
  { id: 'crm', labelEn: 'CRM / Sales', labelId: 'CRM / Sales' },
  { id: 'hr', labelEn: 'HR / Payroll', labelId: 'HR / Penggajian' },
  { id: 'inventory', labelEn: 'Inventory / WMS', labelId: 'Inventory / WMS' },
  { id: 'pos', labelEn: 'Point of Sale', labelId: 'Point of Sale' },
  { id: 'ecommerce', labelEn: 'E-Commerce', labelId: 'E-Commerce' },
  { id: 'project', labelEn: 'Project Management', labelId: 'Manajemen Proyek' },
  { id: 'custom', labelEn: 'Other / Custom', labelId: 'Lainnya / Kustom' },
];
