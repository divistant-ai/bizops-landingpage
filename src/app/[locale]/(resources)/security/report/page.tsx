'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Copy, Terminal } from 'lucide-react';
import { useState } from 'react';
import { Section } from '@/components/layout';
import Container from '@/components/layout/Container';
import { Grid, Typography } from '@/components/ui';
import Button from '@/components/ui/Button';
import Stack from '@/components/ui/Stack';
import { securityReportData } from '@/data/supportContent';

export default function SecurityReportPage() {
  const [copied, setCopied] = useState(false);
  const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2

mQINBF... (Truncated for display) ...
...BizOps Security Team <security@bizops.id>...
-----END PGP PUBLIC KEY BLOCK-----`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="selection:bg-primary-100 selection:text-primary-900 dark:selection:bg-primary-900 dark:selection:text-primary-100 min-h-screen bg-white pt-20 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-slate-200 py-20 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay dark:opacity-10"></div>
        <div className="bg-primary-200/30 dark:bg-primary-900/20 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[120px]"></div>

        <Container size="5xl" className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="border-primary-300 bg-primary-100 text-primary-700 dark:border-primary-700/50 dark:bg-primary-900/30 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
          >
            <Terminal className="h-3 w-3" />
            {' '}
            VULNERABILITY DISCLOSURE PROGRAM
          </motion.div>
          <Typography
            variant="h1"
            as="h1"
            className="font-bold tracking-tight text-slate-900 dark:text-white"
          >
            See Something,
            {' '}
            <span className="text-primary-600 dark:text-primary-500">Say Something.</span>
          </Typography>
          <Typography variant="body" className="text-slate-600 dark:text-slate-400">
            Keamanan adalah prioritas #1 kami. Kami mengundang peneliti keamanan untuk membantu
            melindungi ekosistem BizOps melalui pengungkapan yang bertanggung jawab.
          </Typography>
        </Container>
      </Section>

      {/* Scope Table */}
      <Section className="mx-auto max-w-6xl py-20">
        <Grid cols={2} gap={12}>
          {/* In Scope */}
          <div className="border-primary-200 hover:border-primary-300 dark:border-primary-900/30 dark:hover:border-primary-700/50 rounded-2xl border bg-white p-8 shadow-sm transition-colors dark:bg-slate-900/50">
            <Typography
              variant="h3"
              as="h3"
              className="mb-6 flex items-center gap-3 font-bold text-slate-900 dark:text-white"
            >
              <div className="bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 rounded-lg p-2">
                <CheckCircle className="h-5 w-5" />
              </div>
              In Scope
            </Typography>
            <ul className="space-y-4">
              {securityReportData.scope.in.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="text-primary-600 dark:text-primary-500 mt-1">▹</span>
                  {' '}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Out of Scope */}
          <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm transition-colors hover:border-red-300 dark:border-red-900/30 dark:bg-slate-900/50 dark:hover:border-red-700/50">
            <Typography
              variant="h3"
              as="h3"
              className="mb-6 flex items-center gap-3 font-bold text-slate-900 dark:text-white"
            >
              <div className="rounded-lg bg-red-100 p-2 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              Out of Scope
            </Typography>
            <ul className="space-y-4">
              {securityReportData.scope.out.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1 text-red-600 dark:text-red-500">×</span>
                  {' '}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Section>

      {/* Report Form & PGP */}
      <Section className="mx-auto max-w-4xl py-12 pb-32">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12 dark:border-slate-800 dark:bg-slate-900">
          <Typography variant="h2" as="h2" className="mb-8 text-slate-900 dark:text-white">
            Cara Melaporkan
          </Typography>

          <Stack direction="vertical" gap={8}>
            <div>
              <Typography variant="h4" as="h4" className="mb-4 text-slate-900 dark:text-white">
                Via Email Terenkripsi
              </Typography>
              <Typography variant="small" className="mb-4 block text-slate-600 dark:text-slate-400">
                Kirim detail temuan Anda (PoC, Impact) ke
                {' '}
                <a
                  href="mailto:security@bizops.id"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  security@bizops.id
                </a>
                . Gunakan PGP Key kami untuk informasi sensitif.
              </Typography>

              <div className="relative overflow-x-auto rounded-xl border border-slate-300 bg-slate-50 p-4 text-xs text-slate-700 dark:border-slate-800 dark:bg-black dark:text-slate-500">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 rounded bg-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  title="Copy PGP Key"
                >
                  {copied
                    ? (
                        <CheckCircle className="text-primary-600 dark:text-primary-400 h-4 w-4" />
                      )
                    : (
                        <Copy className="h-4 w-4" />
                      )}
                </button>
                <pre>{pgpKey}</pre>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
              <Typography variant="h4" as="h4" className="mb-4 text-slate-900 dark:text-white">
                Laporan Cepat (Tanpa Enkripsi)
              </Typography>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <Grid cols={2} gap={4}>
                  <input
                    type="text"
                    placeholder="Nama / Alias Peneliti"
                    className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-600 dark:focus:ring-primary-600 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-1 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Kontak"
                    className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-600 dark:focus:ring-primary-600 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-1 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </Grid>
                <textarea
                  rows={4}
                  placeholder="Deskripsi Kerentanan Singkat..."
                  className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-600 dark:focus:ring-primary-600 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-1 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                >
                </textarea>
                <Button
                  size="md"
                  className="w-full border-none bg-slate-900 text-white hover:bg-slate-800 md:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Submit Report
                </Button>
              </form>
            </div>
          </Stack>
        </div>
      </Section>
    </div>
  );
}
