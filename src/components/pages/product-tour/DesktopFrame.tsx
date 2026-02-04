'use client';

import { BarChart3, Bell, ChevronRight, FileText } from 'lucide-react';

import Stack from '@/components/ui/Stack';

type DesktopFrameProps = {
  children: React.ReactNode;
  role: string;
};

export function DesktopFrame({ children, role }: DesktopFrameProps) {
  return (
    <div className="relative flex aspect-[16/10] w-full transform flex-col overflow-hidden rounded-xl border border-slate-300 bg-slate-100 shadow-2xl ring-4 ring-slate-200/50 transition-transform duration-500 hover:scale-[1.01] md:rounded-2xl dark:border-slate-700 dark:bg-slate-900 dark:ring-slate-900/50">
      <div className="flex h-8 items-center border-b border-slate-300 bg-slate-200 px-4 select-none md:h-10 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex gap-1.5 md:gap-2">
          <div className="bg-macos-close h-2.5 w-2.5 rounded-full md:h-3 md:w-3" />
          <div className="bg-macos-minimize h-2.5 w-2.5 rounded-full md:h-3 md:w-3" />
          <div className="bg-macos-maximize h-2.5 w-2.5 rounded-full md:h-3 md:w-3" />
        </div>
        <div className="ml-4 flex h-5 flex-1 items-center overflow-hidden rounded-md border border-slate-300/50 bg-slate-100/80 px-3 text-[10px] whitespace-nowrap text-slate-600 shadow-inner md:h-6 md:text-xs dark:border-slate-800/50 dark:bg-slate-900/80 dark:text-slate-400">
          <span className="mr-1 text-slate-500">https://</span>
          <span>app.bizops.id/desk</span>
        </div>
      </div>
      <div className="dark:bg-dark-bg flex flex-1 overflow-hidden bg-slate-50 text-slate-900 dark:text-white">
        <div className="flex hidden w-48 shrink-0 flex-col border-r border-slate-300 bg-slate-100 p-3 sm:flex md:w-64 md:p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 px-2 text-base font-bold text-slate-900 md:mb-8 md:text-lg dark:text-white">
            <div className="from-primary-600 to-primary-700 shadow-primary-900/50 flex h-6 w-6 items-center justify-center rounded-lg bg-linear-to-br text-xs shadow-lg md:h-8 md:w-8 md:text-sm">
              <span>B</span>
            </div>
            <span className="tracking-tight">BizOps</span>
          </div>
          <Stack direction="vertical" gap={1}>
            <div className="bg-primary-600/10 text-primary-600 border-primary-500/10 dark:text-primary-400 flex items-center gap-3 rounded-lg border px-3 py-2 text-xs font-medium md:py-2.5 md:text-sm">
              <BarChart3 className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {' '}
              <span>Dashboard</span>
            </div>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 md:py-2.5 md:text-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200">
              <Bell className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {' '}
              <span>Inbox</span>
              <span className="ml-auto rounded-md bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-md shadow-red-500/20">
                3
              </span>
            </div>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900 md:py-2.5 md:text-sm dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200">
              <FileText className="h-3.5 w-3.5 md:h-4 md:w-4" />
              {' '}
              <span>Reports</span>
            </div>
          </Stack>
          <div className="mt-auto flex items-center gap-3 border-t border-slate-300/50 pt-4 dark:border-slate-800/50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md md:h-9 md:w-9">
              <span>{role.charAt(0)}</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-xs font-bold text-slate-900 dark:text-white">
                <span>{role}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400" />
                {' '}
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col overflow-hidden bg-slate-100 dark:bg-slate-900">
          <div className="z-10 flex h-12 items-center justify-between border-b border-slate-200 bg-slate-100/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-slate-100/60 md:h-16 md:px-6 dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/60">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 md:text-sm dark:text-slate-400">
              <span className="text-slate-500">Workspace</span>
              {' '}
              <ChevronRight className="h-3 w-3" />
              {' '}
              <span className="text-slate-900 dark:text-white">Desk</span>
            </div>
          </div>
          <div className="dark:bg-dark-bg relative flex-1 overflow-y-auto bg-slate-50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] p-4 md:p-8 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]">
            {children}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
