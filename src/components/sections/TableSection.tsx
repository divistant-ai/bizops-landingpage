'use client';

import { Table as TableIcon } from 'lucide-react';
import React from 'react';

import { Container, Section } from '@/components/layout';

type ExtraSection = {
  title: string;
  type: string; // 'table'
  headers: string[];
  rows: string[][];
};

type TableSectionProps = {
  extraSection: ExtraSection;
};

export const TableSection: React.FC<TableSectionProps> = ({ extraSection }) => {
  if (!extraSection || extraSection.type !== 'table') {
    return null;
  }

  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container size="5xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-slate-600 dark:text-slate-400">
            <TableIcon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {extraSection.title}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold tracking-wider text-slate-900 uppercase dark:border-slate-800 dark:bg-slate-950 dark:text-white">
              <tr>
                {extraSection.headers.map((h, i) => (
                  <th key={i} className="px-6 py-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {extraSection.rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-slate-50 dark:bg-slate-950/50">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="first:text-primary-600 px-6 py-4 font-medium whitespace-nowrap text-slate-600 first:font-bold dark:text-slate-400"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
};
