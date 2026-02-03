'use client';

import Link from 'next/link';
import { Button, Typography } from '@/components/ui';

export function ComparisonMobileCTA() {
  return (
    <div className="mt-8 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-center text-white shadow-xl lg:hidden">
      <Typography variant="h3" as="h3" className="text-white">
        Hitung ROI Upgrade
      </Typography>
      <Typography variant="small">Lihat berapa banyak biaya yang bisa dihemat.</Typography>
      <Link href="/tools/roi-calculator">
        <Button
          size="md"
          fullWidth
          className="mt-4 border-none bg-white font-bold text-blue-700 hover:bg-blue-50"
        >
          Buka Kalkulator ROI
        </Button>
      </Link>
    </div>
  );
}
