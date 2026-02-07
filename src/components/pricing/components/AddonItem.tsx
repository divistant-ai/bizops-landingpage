'use client';

import type { ServiceAddon } from '@/data/pricingData';
import { Check, Minus, Plus } from 'lucide-react';
import { Tooltip } from './Tooltip';

type AddonItemProps = {
  addon: ServiceAddon;
  quantity: number;
  onToggle: (addonId: string, isSelected: boolean) => void;
  onQuantityChange: (addonId: string, delta: number) => void;
  formatIDR: (amount: number) => string;
  isExclusive?: boolean;
};

export function AddonItem({
  addon,
  quantity,
  onToggle,
  onQuantityChange,
  formatIDR,
  isExclusive,
}: AddonItemProps) {
  const isSelected = quantity > 0;
  const isConfigurable
    = !isExclusive
    && (addon.unit.includes('per') || addon.unit.includes('sistem') || addon.unit.includes('sesi'));

  return (
    <div
      onClick={() => !isConfigurable && onToggle(addon.id, isSelected)}
      onKeyDown={e =>
        !isConfigurable && (e.key === 'Enter' || e.key === ' ') && onToggle(addon.id, isSelected)}
      role={!isConfigurable ? 'button' : undefined}
      tabIndex={!isConfigurable ? 0 : undefined}
      className={`group flex items-center justify-between rounded-xl border p-4 transition-all ${isSelected ? 'border-primary-500 bg-primary-100 dark:border-primary-500/40 dark:bg-primary-900/10 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/10'} ${!isConfigurable ? 'cursor-pointer' : ''}`}
    >
      <div className="flex grow items-center gap-4">
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${isSelected ? 'border-primary-600 bg-primary-600 text-slate-800 dark:text-white' : 'border-slate-400 bg-transparent dark:border-slate-600'}`}
        >
          {isSelected && <Check className="h-3.5 w-3.5" />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4
              className={`text-sm font-bold ${isSelected ? 'text-slate-800 dark:text-white' : 'text-slate-900 dark:text-white'}`}
            >
              {addon.name}
            </h4>
            {addon.tooltip && <Tooltip text={addon.tooltip} />}
          </div>
          <p className="max-w-md text-[10px] text-slate-600 dark:text-slate-400">
            {addon.description}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-6">
        <div className="text-right">
          <span
            className={`block text-sm font-bold ${isSelected ? 'text-slate-800 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
          >
            {formatIDR(addon.price)}
          </span>
          <span className="text-[9px] text-slate-500 dark:text-slate-400">{addon.unit}</span>
        </div>

        {isConfigurable ? (
          <div
            className={`flex items-center rounded-lg border p-0.5 ${isSelected ? 'border-primary-300 bg-primary-50 dark:border-white/10 dark:bg-black/40' : 'border-slate-300 bg-slate-100 dark:border-white/10 dark:bg-black/40'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => onQuantityChange(addon.id, -1)}
              className={`rounded-md p-1.5 transition-colors ${isSelected ? 'hover:bg-primary-200 text-slate-800 dark:text-white dark:hover:bg-white/10' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white'}`}
              disabled={quantity === 0}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span
              className={`w-8 text-center text-xs font-bold ${quantity > 0 ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}
            >
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(addon.id, 1)}
              className={`rounded-md p-1.5 transition-colors ${isSelected ? 'hover:bg-primary-200 text-slate-800 dark:text-white dark:hover:bg-white/10' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white'}`}
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <div className="w-8"></div>
        )}
      </div>
    </div>
  );
}

export default AddonItem;
