'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle,
  Cloud,
  Download,
  FileSpreadsheet,
  Server,
} from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { Button, Grid, Typography } from '@/components/ui';
import { migrationData } from '@/data/resourcesContent';

export function MigrationSources() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'spreadsheet':
        return FileSpreadsheet;
      case 'saas':
        return Cloud;
      case 'legacy':
        return Server;
      default:
        return FileSpreadsheet;
    }
  };

  return (
    <Section>
      <Container size="7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
            Sumber Data Anda
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Pilih sumber data untuk panduan spesifik
          </p>
        </div>

        <Grid cols={3} gap={8}>
          {migrationData.map((item) => {
            const Icon = getIcon(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Icon className="text-primary-600 dark:text-primary-400 h-8 w-8" />
                </div>
                <Typography variant="h3" as="h3" className="mb-2 font-bold">
                  {item.title}
                </Typography>
                <Typography variant="body" className="mb-6 text-slate-500 dark:text-slate-400">
                  {item.desc}
                </Typography>

                <div className="mb-6 space-y-4">
                  <div className="rounded-xl border border-red-100 bg-red-50 p-4 dark:border-red-900/20 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <Typography
                        variant="small"
                        className="font-bold text-red-700 dark:text-red-400"
                      >
                        Challenge
                      </Typography>
                    </div>
                    <Typography variant="small" className="text-slate-700 dark:text-slate-300">
                      {item.challenge}
                    </Typography>
                  </div>
                  <div className="rounded-xl border border-green-100 bg-green-50 p-4 dark:border-green-900/20 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <Typography
                        variant="small"
                        className="font-bold text-green-700 dark:text-green-400"
                      >
                        Solution
                      </Typography>
                    </div>
                    <Typography variant="small" className="text-slate-700 dark:text-slate-300">
                      {item.solution}
                    </Typography>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {' '}
                  {item.asset}
                </Button>
              </motion.div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
