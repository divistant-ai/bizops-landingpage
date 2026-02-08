'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Building2,
  Calculator,
  Check,
  Database,
  FileSpreadsheet,
  Globe,
  Layers,
  Wallet,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { OTHER_SOFTWARE_OPTIONS } from '@/data/assessmentSoftwareOptions';
import { usePricingContext } from '../../PricingContext';
import { getCurrentSoftwareCost } from '../../utils/tierRecommendation';

const SOFTWARE_OPTIONS = [
  {
    value: 'excel',
    label: 'Spreadsheet/Excel Manual',
    icon: FileSpreadsheet,
    painPoints: ['Data tidak terintegrasi', 'Error manual tinggi', 'Tidak scalable'],
  },
  {
    value: 'sap',
    label: 'SAP Business One',
    icon: Building2,
    painPoints: ['Terlalu kompleks', 'Biaya tinggi', 'Maintenance mahal'],
  },
  {
    value: 'oracle',
    label: 'Oracle NetSuite',
    icon: Globe,
    painPoints: ['Harga premium', 'Setup lama', 'Kurang fleksibel'],
  },
  {
    value: 'odoo',
    label: 'Odoo Enterprise',
    icon: Layers,
    painPoints: ['Butuh technical skill', 'Self-managed', 'Support terbatas'],
  },
  {
    value: 'accurate',
    label: 'Accurate Online',
    icon: Wallet,
    painPoints: ['Fitur terbatas', 'Integrasi kurang', 'Tidak bisa custom'],
  },
  {
    value: 'jurnal',
    label: 'Jurnal.id',
    icon: Database,
    painPoints: ['Terbatas accounting', 'Tidak ada CRM', 'Reporting basic'],
  },
  {
    value: 'custom',
    label: 'Custom Development',
    icon: BarChart3,
    painPoints: ['Maintenance mahal', 'Vendor dependency', 'Update sulit'],
  },
  {
    value: 'others',
    label: 'Software Lainnya',
    icon: Calculator,
    painPoints: ['Fragmented system', 'Data silo', 'Inefisiensi'],
  },
];

const COMMON_PAIN_POINTS = [
  'Data tidak terintegrasi antar departemen',
  'Laporan manual dan memakan waktu',
  'Kesulitan tracking inventory',
  'Tidak ada visibilitas real-time',
  'Proses approval lambat',
  'Kesalahan data entry manual',
  'Tidak bisa akses mobile',
  'Integrasi dengan bank/partner sulit',
  'Reporting tidak customizable',
  'Sulit scale saat bisnis bertumbuh',
];

export function CurrentSoftwareStep() {
  const locale = useLocale();
  const { assessment, setAssessment } = usePricingContext();

  const handleSoftwareChange = (software: string) => {
    setAssessment(prev => ({ ...prev, currentSoftware: software }));
  };

  const handleOtherSoftwareToggle = (id: string) => {
    setAssessment((prev) => {
      const current = prev.otherSoftwareUsed || [];
      const updated = current.includes(id)
        ? current.filter(x => x !== id)
        : [...current, id];
      return { ...prev, otherSoftwareUsed: updated };
    });
  };

  const handlePainPointToggle = (point: string) => {
    setAssessment((prev) => {
      const current = prev.currentPainPoints || [];
      const updated = current.includes(point)
        ? current.filter((p: string) => p !== point)
        : [...current, point];
      return { ...prev, currentPainPoints: updated };
    });
  };

  const currentCost = assessment.currentSoftware
    ? getCurrentSoftwareCost(assessment.currentSoftware)
    : null;

  const t = useTranslations('Pricing');
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          {t('calculator_step_software')}
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Kami akan hitung berapa banyak Anda bisa hemat dengan BizOps
        </p>
      </div>

      {/* Software Selection */}
      <div className="grid gap-5 md:grid-cols-2">
        {SOFTWARE_OPTIONS.map(({ value, label, icon: Icon, painPoints }) => {
          const isSelected = assessment.currentSoftware === value;
          return (
            <motion.button
              key={value}
              onClick={() => handleSoftwareChange(value)}
              className={`group relative flex flex-col rounded-xl border-2 p-5 text-left transition-all ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-900/20'
                  : 'border-slate-200 bg-white hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/30'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`rounded-lg p-2.5 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-indigo-900/50 dark:group-hover:text-indigo-400'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isSelected ? 'text-indigo-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
                      {label}
                    </span>
                    {isSelected && (
                      <div className="rounded-full bg-indigo-600 p-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {painPoints.join(' • ')}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Other software in use (multi-select) */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 dark:text-white">
          Software lain yang juga digunakan (selain ERP di atas)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Pilih semua yang berlaku untuk gambarkan landscape sistem Anda.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {OTHER_SOFTWARE_OPTIONS.map((opt) => {
            const isSelected = assessment.otherSoftwareUsed?.includes(opt.id);
            const label = locale === 'id' ? opt.labelId : opt.labelEn;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleOtherSoftwareToggle(opt.id)}
                className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50 font-medium text-indigo-700 dark:border-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-300'
                    : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500'
                      : 'border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800'
                  }`}
                >
                  {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                </div>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Cost Display */}
      {currentCost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg shadow-red-100/50 dark:border-red-900/30 dark:bg-slate-900 dark:shadow-none"
        >
          <div className="flex items-center gap-3 border-b border-slate-100 bg-red-50/50 p-4 dark:border-white/5 dark:bg-red-900/10">
            <div className="rounded-lg bg-red-100 p-2 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white">Estimasi Biaya Saat Ini</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Berdasarkan benchmark industri untuk sistem sejenis</p>
            </div>
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">Biaya Bulanan</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">
                Rp
                {' '}
                {(currentCost.costPerMonth / 1000000).toFixed(1)}
                {' '}
                <span className="text-sm font-normal text-slate-500">jt/bln</span>
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">Implementasi</p>
              <p className="text-xl font-bold text-slate-900 dark:text-white">
                Rp
                {' '}
                {(currentCost.implementationCost / 1000000).toFixed(0)}
                {' '}
                <span className="text-sm font-normal text-slate-500">jt</span>
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 -left-3 hidden w-px bg-slate-100 sm:block dark:bg-white/5"></div>
              <p className="mb-1 text-xs font-bold tracking-wider text-red-600 uppercase dark:text-red-400">Total per Tahun</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                Rp
                {' '}
                {(currentCost.annualTotal / 1000000000).toFixed(1)}
                {' '}
                <span className="text-sm font-bold text-slate-500">M/thn</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Pain Points */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-white">Pain Points Saat Ini</h3>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            Pilih semua yang sesuai
          </span>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {COMMON_PAIN_POINTS.map((point) => {
            const isSelected = assessment.currentPainPoints?.includes(point);
            return (
              <button
                key={point}
                onClick={() => handlePainPointToggle(point)}
                className={`flex items-center gap-2 rounded-lg border p-3 text-left text-sm transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-300'
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                      : 'border-slate-300 dark:border-slate-600'
                  }`}
                >
                  {isSelected && <Check className="h-3 w-3 text-white" />}
                </div>
                <span>{point}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
