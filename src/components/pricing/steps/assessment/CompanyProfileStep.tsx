'use client';

import {
  Building2,
  Factory,
  Globe,
  GraduationCap,
  HardHat,
  Info,
  MapPin,
  MoreHorizontal,
  Rocket,
  Stethoscope,
  Store,
  UserCheck,
  Users,
} from 'lucide-react';

import { SelectableCard, Tooltip } from '../../components';
import { usePricingContext } from '../../PricingContext';

const COMPANY_SIZES = [
  { id: 'startup', title: 'Small Business', desc: 'Fokus pada efisiensi & growth.', icon: Rocket },
  { id: 'sme', title: 'Medium (SME)', desc: 'Butuh kontrol operasional ketat.', icon: Building2 },
  { id: 'enterprise', title: 'Large Enterprise', desc: 'Keamanan & kustomisasi tinggi.', icon: Globe },
];

const INDUSTRIES = [
  { id: 'retail', name: 'Retail', icon: Store },
  { id: 'manufacturing', name: 'Factory', icon: Factory },
  { id: 'services', name: 'Service', icon: UserCheck },
  { id: 'construction', name: 'Construction', icon: HardHat },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'healthcare', name: 'Healthcare', icon: Stethoscope },
  { id: 'fnb', name: 'Food & Beverage', icon: Info },
  { id: 'other', name: 'Other', icon: MoreHorizontal },
];

export function CompanyProfileStep() {
  const { assessment, updateAssessment } = usePricingContext();

  return (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          Company Profile
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Tentukan skala bisnis Anda untuk estimasi kapasitas server.
        </p>
      </div>

      {/* User Capacity Slider */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-white/5">
        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
            <Users className="text-primary-600 dark:text-primary-400 h-4 w-4" />
            User Capacity
            <Tooltip text="Jumlah total karyawan yang akan memiliki akses login ke sistem ERP." />
          </label>
          <span className="text-2xl font-black text-slate-800 dark:text-white">
            {assessment.userCount}
          </span>
        </div>
        <input
          type="range"
          min="5"
          max="500"
          step="5"
          value={assessment.userCount}
          onChange={e => updateAssessment('userCount', Number.parseInt(e.target.value))}
          className="accent-primary-500 hover:accent-primary-600 dark:hover:accent-primary-400 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 transition-all dark:bg-slate-700"
        />
        <div className="mt-2 flex justify-between text-[10px] font-medium tracking-wider text-slate-500 uppercase">
          <span>Small Team (5-20)</span>
          <span>Growing (50-100)</span>
          <span>Enterprise (200+)</span>
        </div>
      </div>

      {/* Branch Count Slider */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/5 dark:bg-white/5">
        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
            <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            Branch / Warehouse
            <Tooltip text="Jumlah lokasi fisik (kantor cabang, gudang, pabrik) yang akan terhubung." />
          </label>
          <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
            {assessment.branchCount}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={assessment.branchCount}
          onChange={e => updateAssessment('branchCount', Number.parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-amber-600 transition-all hover:accent-amber-700 dark:bg-slate-700 dark:accent-amber-500 dark:hover:accent-amber-400"
        />
      </div>

      {/* Company Size Selection */}
      <div className="grid grid-cols-3 gap-3">
        {COMPANY_SIZES.map(opt => (
          <SelectableCard
            key={opt.id}
            selected={assessment.companySize === opt.id}
            onClick={() => updateAssessment('companySize', opt.id)}
            {...opt}
          />
        ))}
      </div>

      {/* Industry Selection */}
      <div>
        <label className="mb-3 flex items-center gap-2 text-sm font-bold tracking-wider text-slate-700 uppercase dark:text-slate-400">
          Industry Sector
          <Tooltip text="Kami akan merekomendasikan modul spesifik berdasarkan industri Anda." />
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INDUSTRIES.map(ind => (
            <div
              key={ind.id}
              onClick={() => updateAssessment('industry', ind.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  updateAssessment('industry', ind.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={assessment.industry === ind.id}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-2.5 transition-all duration-200 hover:scale-105 active:scale-95 ${
                assessment.industry === ind.id
                  ? 'scale-105 border-2 border-slate-900 bg-slate-100 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
                  : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
              }`}
            >
              <ind.icon
                className={`h-4 w-4 transition-all duration-200 ${
                  assessment.industry === ind.id
                    ? 'scale-110 text-slate-900 dark:text-white'
                    : 'text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white'
                }`}
              />
              <span
                className={`text-xs font-semibold transition-colors ${
                  assessment.industry === ind.id
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-700 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white'
                } text-center leading-tight`}
              >
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
