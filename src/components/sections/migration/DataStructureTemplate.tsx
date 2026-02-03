'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Download, Table } from 'lucide-react';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import { Button, CardSlider } from '@/components/ui';
import { sampleStructures } from '@/data/migrationDetails';

export function DataStructureTemplate() {
  const [selectedStructure, setSelectedStructure] = useState<string | null>(null);

  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container size="7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Template Data Structure
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Download template Excel untuk setiap jenis data. Urutan import sangat penting untuk
            menjaga integritas referensi.
          </p>
        </div>

        {/* Mobile: CardSlider */}
        <div className="md:hidden">
          <CardSlider>
            {sampleStructures.map((structure) => {
              const Icon = structure.icon;
              return (
                <div key={structure.id} className="w-[320px]">
                  <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="bg-primary-100 dark:bg-primary-900/30 flex h-10 w-10 items-center justify-center rounded-lg">
                        <Icon className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {structure.label}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-4 text-xs text-slate-600 dark:text-slate-400">
                      {structure.desc}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                      onClick={() => setSelectedStructure(structure.id)}
                    >
                      <Table className="mr-2 h-3 w-3" />
                      View Columns
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardSlider>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleStructures.map((structure) => {
            const Icon = structure.icon;
            return (
              <motion.div
                key={structure.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
                onClick={() => setSelectedStructure(structure.id)}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary-100 dark:bg-primary-900/30 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Icon className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {structure.label}
                    </h3>
                  </div>
                </div>
                <p className="mb-4 text-xs text-slate-600 dark:text-slate-400">
                  {structure.desc}
                </p>
                <div className="text-primary-600 dark:text-primary-400 flex items-center text-xs font-medium">
                  <Table className="mr-1 h-3 w-3" />
                  {structure.columns.length}
                  {' '}
                  columns
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Structure Detail Modal */}
        <AnimatePresence>
          {selectedStructure && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelectedStructure(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 dark:bg-slate-900"
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const structure = sampleStructures.find(s => s.id === selectedStructure);
                  if (!structure) {
                    return null;
                  }
                  const Icon = structure.icon;
                  return (
                    <>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-primary-100 dark:bg-primary-900/30 flex h-12 w-12 items-center justify-center rounded-xl">
                            <Icon className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                              {structure.label}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {structure.desc}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedStructure(null)}
                          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="space-y-3">
                        {structure.columns.map((col, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <span className="font-bold text-slate-900 dark:text-white">
                                {col.name}
                              </span>
                              {col.req && (
                                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {col.desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-3">
                        <Button className="flex-1 text-slate-900 dark:text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Download Template
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedStructure(null)}>
                          Close
                        </Button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
