'use client';

import { AlertTriangle, Calculator, XCircle } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button, Grid, Typography } from '@/components/ui';

type WhyUpgradeCardProps = {
  isBizOps: boolean;
  selectedData: any;
};

export function WhyUpgradeCard({ isBizOps, selectedData }: WhyUpgradeCardProps) {
  const locale = useLocale() as 'en' | 'id';

  if (isBizOps) { return null; }

  return (
    <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl md:p-12">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]"></div>

      <Grid cols={2} gap={12} className="relative z-10 items-center">
        <div>
          <Typography variant="h3" as="h3" className="font-bold">
            <AlertTriangle className="mr-2 inline h-6 w-6 text-amber-500" />
            {' '}
            <span className="text-white">Why Upgrade Now?</span>
          </Typography>
          <Typography variant="body" className="leading-relaxed text-slate-400">
            Sistem lama Anda memiliki keterbatasan yang menahan laju pertumbuhan. Lihat daftar di
            samping untuk mengetahui apa yang menghambat Anda saat ini.
          </Typography>
          <Link href="/tools/roi-calculator">
            <Button
              className="mt-4 border-none bg-white font-bold text-slate-900 shadow-lg shadow-white/10 hover:bg-slate-200"
              size="lg"
            >
              <Calculator className="mr-2 h-4 w-4" />
              {' '}
              Hitung Nominal Kerugian
            </Button>
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="mb-6 text-xs font-bold tracking-widest text-slate-500 uppercase">
            Identified Bottlenecks
          </div>
          <ul className="space-y-4">
            {selectedData.limitations[locale].map((lim: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <XCircle className="h-4 w-4 text-red-400" />
                </div>
                <span className="leading-relaxed font-medium">{lim}</span>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </div>
  );
}
