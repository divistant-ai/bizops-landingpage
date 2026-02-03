'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Rocket } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function StartupHero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-700/50 bg-purple-900/30 px-3 py-1 text-xs font-bold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-md"
      >
        <Rocket className="h-3 w-3" />
        {' '}
        BizOps for Startups
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mb-8 text-5xl leading-tight font-extrabold tracking-tight md:text-7xl lg:text-8xl"
      >
        Build Fast.
        {' '}
        <br />
        <span className="bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Scale Safe.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-300 md:text-2xl"
      >
        Infrastruktur operasional
        {' '}
        <em>audit-ready</em>
        {' '}
        untuk startup ambisius. Hemat
        {' '}
        <em>burn rate</em>
        {' '}
        dengan kredit hingga $5,000 dan akses ke teknologi Enterprise
        sejak Day 1.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col justify-center gap-4 sm:flex-row"
      >
        <Link href="/partners/apply">
          <Button
            size="lg"
            className="w-full transform border-none bg-white px-10 text-lg font-bold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-100 hover:shadow-2xl hover:shadow-purple-500/20 sm:w-auto"
          >
            Apply for Credits
            {' '}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Button
          size="lg"
          variant="outline"
          className="w-full border-slate-700 px-10 font-medium text-white hover:bg-white/10 sm:w-auto"
        >
          <Play className="mr-2 h-4 w-4 fill-current" />
          {' '}
          Watch Founder Stories
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-sm font-medium text-slate-500"
      >
        Trusted by 500+ High-Growth Startups in Indonesia
      </motion.p>
    </>
  );
}
