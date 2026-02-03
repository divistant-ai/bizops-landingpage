'use client';

import React from 'react';

type MobileFrameProps = {
  children: React.ReactNode;
};

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative mx-auto flex h-[650px] w-[320px] transform flex-col overflow-hidden rounded-[2.5rem] border-[12px] border-slate-300 bg-slate-200 shadow-2xl ring-1 ring-slate-300/50 transition-transform duration-500 hover:scale-[1.02] md:h-[720px] md:w-[360px] md:rounded-[3rem] md:border-[14px] dark:border-slate-800 dark:bg-slate-950 dark:ring-slate-700/50">
      <div className="pointer-events-none absolute top-0 right-0 z-30 h-full w-1/2 bg-linear-to-l from-white/5 to-transparent" />
      <div className="absolute top-[80px] -left-[15px] h-[32px] w-[3px] rounded-l-lg bg-slate-400 md:-left-[17px] dark:bg-slate-700" />
      <div className="absolute top-[140px] -left-[15px] h-[46px] w-[3px] rounded-l-lg bg-slate-400 md:-left-[17px] dark:bg-slate-700" />
      <div className="absolute top-[160px] -right-[15px] h-[64px] w-[3px] rounded-r-lg bg-slate-400 md:-right-[17px] dark:bg-slate-700" />
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-slate-50 dark:bg-slate-950">
        <div className="z-20 flex h-10 shrink-0 items-center justify-between bg-slate-900 px-6 text-[10px] text-white select-none dark:bg-slate-950">
          <span>9:41</span>
          <div className="absolute top-0 left-1/2 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-slate-800 dark:bg-black" />
          <div className="flex gap-1.5">
            <span className="text-xs">📶</span>
            <div className="h-2.5 w-5 rounded bg-white" />
          </div>
        </div>
        {children}
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-1/3 -translate-x-1/2 rounded-full bg-slate-400/50 backdrop-blur-sm" />
      </div>
    </div>
  );
}
