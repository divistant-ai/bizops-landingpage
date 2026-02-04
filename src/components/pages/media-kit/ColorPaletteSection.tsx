'use client';

import { Check, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Grid } from '@/components/ui';

type ColorSwatchProps = {
  colorId: string;
  bgClass: string;
  colorName: string;
  colorDesc: string;
  hexCode: string;
  copied: string | null;
  onCopy: (hex: string, id: string) => void;
};

export function ColorSwatch({
  colorId,
  bgClass,
  colorName,
  colorDesc,
  hexCode,
  copied,
  onCopy,
}: ColorSwatchProps) {
  return (
    <div className="group h-full">
      <div
        className={`mb-4 flex h-40 items-center justify-center rounded-3xl shadow-lg transition-shadow ${bgClass}`}
      >
        <span className="text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
          {colorName}
        </span>
      </div>
      <div className="flex items-center justify-between px-2">
        <div>
          <div className="font-bold text-slate-900 dark:text-white">{colorName}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{colorDesc}</div>
        </div>
        <button
          onClick={() => onCopy(hexCode, colorId)}
          className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          {copied === colorId ? (
            <Check className="h-3 w-3 text-green-500 dark:text-green-400" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          {copied !== colorId && hexCode}
        </button>
      </div>
    </div>
  );
}

type ColorPaletteSectionProps = {
  copied: string | null;
  onCopy: (text: string, id: string) => void;
};

export function ColorPaletteSection({ copied, onCopy }: ColorPaletteSectionProps) {
  const t = useTranslations('MediaKit');

  const colors = [
    {
      id: 'c1',
      bgClass: 'bg-primary-600 group-hover:shadow-primary-500/30',
      name: t('color_primary'),
      desc: t('color_primary_desc'),
      hex: '#2563EB',
    },
    {
      id: 'c2',
      bgClass: 'border border-slate-800 bg-slate-900',
      name: t('color_neutral'),
      desc: t('color_neutral_desc'),
      hex: '#0F172A',
    },
    {
      id: 'c3',
      bgClass: 'bg-emerald-500 group-hover:shadow-emerald-500/30',
      name: t('color_success'),
      desc: t('color_success_desc'),
      hex: '#10B981',
    },
    {
      id: 'c4',
      bgClass: 'bg-amber-500 group-hover:shadow-amber-500/30',
      name: t('color_warning'),
      desc: t('color_warning_desc'),
      hex: '#F59E0B',
    },
  ];

  return (
    <Grid cols={4} gap={8} className="hidden md:grid">
      {colors.map(color => (
        <ColorSwatch
          key={color.id}
          colorId={color.id}
          bgClass={color.bgClass}
          colorName={color.name}
          colorDesc={color.desc}
          hexCode={color.hex}
          copied={copied}
          onCopy={onCopy}
        />
      ))}
    </Grid>
  );
}
