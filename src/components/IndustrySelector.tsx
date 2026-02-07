'use client';

import { motion } from 'framer-motion';
import { Check, Factory } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { INDUSTRY_MODULES } from '@/data/modulesArchitecture';
import { cn } from '@/libs/utils';

type IndustrySelectorProps = {
  selectedIndustries: string[];
  onChange: (industries: string[]) => void;
  maxSelection?: number;
  showDescription?: boolean;
  className?: string;
};

export function IndustrySelector({
  selectedIndustries,
  onChange,
  maxSelection = 3,
  showDescription = true,
  className,
}: IndustrySelectorProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const industries = Object.values(INDUSTRY_MODULES);

  const toggleIndustry = (id: string) => {
    if (selectedIndustries.includes(id)) {
      onChange(selectedIndustries.filter(i => i !== id));
    } else if (selectedIndustries.length < maxSelection) {
      onChange([...selectedIndustries, id]);
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Factory className="text-primary-500 h-5 w-5" />
          <span className="font-semibold text-slate-900 dark:text-white">Select Your Industry</span>
        </div>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {selectedIndustries.length}
          {' '}
          /
          {maxSelection}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry) => {
          const isSelected = selectedIndustries.includes(industry.id);
          const isHovered = hoveredId === industry.id;
          const Icon = industry.icon;

          return (
            <motion.button
              key={industry.id}
              onClick={() => toggleIndustry(industry.id)}
              onMouseEnter={() => setHoveredId(industry.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all',
                isSelected
                  ? 'border-primary-500 bg-primary-50 dark:border-primary-500 dark:bg-primary-900/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600',
                selectedIndustries.length >= maxSelection
                  && !isSelected
                  && 'cursor-not-allowed opacity-50',
              )}
            >
              {/* Selection Indicator */}
              <div
                className={cn(
                  'absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full transition-colors',
                  isSelected ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-700',
                )}
              >
                {isSelected && <Check className="h-3 w-3" />}
              </div>

              {/* Icon */}
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
                  isSelected || isHovered
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400',
                )}
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {industry.name}
                </h3>
                {showDescription && (
                  <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                    {industry.description}
                  </p>
                )}
              </div>

              {/* Objects Tags */}
              {isSelected && industry.objects && (
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {industry.objects.slice(0, 2).map((obj, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full px-2 py-0.5 text-[10px] font-medium"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Summary */}
      {selectedIndustries.length > 0 && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50">
          <p className="mb-2 text-xs font-semibold text-slate-500 uppercase dark:text-slate-400">
            Selected Industries:
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedIndustries.map((id) => {
              const industry = industries.find(i => i.id === id);
              if (!industry) {
                return null;
              }
              return (
                <span
                  key={id}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:bg-slate-700 dark:text-slate-300"
                >
                  <industry.icon className="h-3 w-3" />
                  {industry.name}
                  <button
                    onClick={() => toggleIndustry(id)}
                    className="ml-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Standalone page component for onboarding
export function IndustrySelectorPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = async () => {
    if (selected.length === 0) {
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Navigate to next step
    console.log('Selected industries:', selected);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
          What industries does your business operate in?
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Select up to 3 industries. This helps us customize your BizOps experience with
          industry-specific features.
        </p>
      </div>

      <IndustrySelector selectedIndustries={selected} onChange={setSelected} maxSelection={3} />

      <div className="mt-8 flex justify-center">
        <Button
          onClick={handleContinue}
          disabled={selected.length === 0 || isSubmitting}
          size="lg"
          className="min-w-[200px]"
        >
          {isSubmitting ? 'Saving...' : 'Continue'}
        </Button>
      </div>
    </div>
  );
}

export default IndustrySelector;
