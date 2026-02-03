'use client';

import { Clock, DollarSign, Settings, Wrench } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Grid } from '@/components/ui';

interface StrategicMetricsProps {
  selectedData: any;
}

export function StrategicMetrics({ selectedData }: StrategicMetricsProps) {
  const locale = useLocale() as 'en' | 'id';

  const metrics = [
    { icon: Clock, label: 'Time to Value', value: selectedData.ttv[locale] },
    { icon: DollarSign, label: '3-Year TCO', value: selectedData.avgTCO[locale] },
    { icon: Wrench, label: 'Maintenance', value: selectedData.maintenance[locale] },
    { icon: Settings, label: 'Flexibility', value: selectedData.customizability[locale] },
  ];

  return (
    <Grid cols={5} gap={4} className="border-t border-slate-100 pt-10 dark:border-slate-800">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="group rounded-2xl border border-transparent bg-slate-50 p-4 transition-colors hover:border-slate-200 hover:bg-white dark:bg-slate-800/50 dark:hover:border-slate-700 dark:hover:bg-slate-800"
        >
          <div className="group-hover:text-primary-500 mb-2 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase transition-colors dark:text-slate-300">
            <metric.icon className="h-3.5 w-3.5" />
            {' '}
            {metric.label}
          </div>
          <div className="text-sm font-bold text-slate-900 dark:text-white">{metric.value}</div>
        </div>
      ))}
    </Grid>
  );
}
