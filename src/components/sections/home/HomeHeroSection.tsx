'use client';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, FlaskConical, Gavel, HardHat, Leaf, Lock, Pause, Play, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Container, Section } from '@/components/layout';
import { Button, HeroBackground, OptimizedImage } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { glass, modularTypography } from '@/design-tokens';
import { cn } from '@/libs/utils';

const TRUSTED_BRANDS = [
  'Divistant',
  'Dikstra',
  'Arena Rasa Nusantara',
  'Aero Travel Indonesia',
  'TechCorp',
  'BuildCo',
  'PT Maju Bersama',
  'Distribusi Nusantara',
  'Konstruksi Prima',
  'Mitra Sejahtera',
];

type SlideConfig = {
  id: string;
  layout: 'centered' | 'split-left' | 'split-right';
  visual: 'dashboard' | 'factory' | 'medical' | 'logistics' | 'agri' | 'project';
  theme: string; // Tailwind text color class
  bgGradient: string; // Tailwind gradient class
  icon: any;
  image: string;
};

const SLIDES_CONFIG: SlideConfig[] = [
  {
    id: 'general',
    layout: 'split-left',
    visual: 'dashboard',
    theme: 'text-blue-600 dark:text-blue-400',
    bgGradient: 'from-blue-500/10 to-transparent',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Dashboard abstract
  },
  {
    id: 'manufacturing',
    layout: 'split-right', // Text Left, Image Right
    visual: 'factory',
    theme: 'text-orange-600 dark:text-orange-400',
    bgGradient: 'from-orange-500/10 to-transparent',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop', // Industrial/Factory
  },
  {
    id: 'healthcare',
    layout: 'split-left', // Image Left, Text Right
    visual: 'medical',
    theme: 'text-teal-600 dark:text-teal-400',
    bgGradient: 'from-teal-500/10 to-transparent',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop', // Lab/Medical
  },
  {
    id: 'logistics',
    layout: 'split-right',
    visual: 'logistics',
    theme: 'text-indigo-600 dark:text-indigo-400',
    bgGradient: 'from-indigo-500/10 to-transparent',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop', // Warehouse/Logistics
  },
  {
    id: 'agribusiness',
    layout: 'split-left',
    visual: 'agri',
    theme: 'text-emerald-600 dark:text-emerald-400',
    bgGradient: 'from-emerald-500/10 to-transparent',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop', // Farm/Agriculture
  },
  {
    id: 'services',
    layout: 'split-right',
    visual: 'project',
    theme: 'text-violet-600 dark:text-violet-400',
    bgGradient: 'from-violet-500/10 to-transparent',
    icon: Gavel,
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2574&auto=format&fit=crop', // Meeting/Project
  },
];

export function HomeHeroSection() {
  const t = useTranslations('Homepage');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Parallax Tilt State
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth) - 0.5;
    const yPct = (clientY / innerHeight) - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  // Auto-rotate logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % SLIDES_CONFIG.length);
      }, 7000); // 7 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % SLIDES_CONFIG.length);
    setIsPlaying(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + SLIDES_CONFIG.length) % SLIDES_CONFIG.length);
    setIsPlaying(false);
  }, []);

  const activeSlide = SLIDES_CONFIG[currentSlide] ?? SLIDES_CONFIG[0]!;

  // 3D Transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-slate-50 transition-colors duration-700 dark:bg-slate-950"
      noPadding
      containerClassName="pt-24 pb-20 lg:pt-36 lg:pb-32"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements - Dynamic Gradient based on slide */}
      <HeroBackground />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`pointer-events-none absolute inset-0 bg-linear-to-br transition-colors duration-1000 ${activeSlide.bgGradient}`}
      />

      <Container size="6xl" className="relative z-10 flex h-[950px] flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="w-full"
          >
            {/*
                LAYOUT SWITCHER
                Based on activeSlide.layout: centered, split-left, split-right
            */}

            {/* CENTERED LAYOUT (Default/General) */}
            {activeSlide.layout === 'centered' && (
              <div className="flex flex-col items-center text-center">
                <FadeIn delay={0.1}>
                  <div className={`mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2 ${glass.light}`}>
                    <span className={`text-sm font-bold tracking-wide uppercase ${activeSlide.theme}`}>
                      {t(`hero_slides.${activeSlide.id}.badge` as any)}
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-4xl">
                  <h1 className={`${modularTypography.hero} mb-6 leading-tight text-slate-900 dark:text-white`}>
                    <span className="block">{t(`hero_slides.${activeSlide.id}.title_prefix` as any)}</span>
                    <span className={`block ${activeSlide.theme}`}>
                      {t(`hero_slides.${activeSlide.id}.title_highlight` as any)}
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.3} className="max-w-2xl">
                  <p className={`${modularTypography.body} mb-8 text-lg text-slate-600 dark:text-slate-300`}>
                    {t(`hero_slides.${activeSlide.id}.desc` as any)}
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                      asChild
                      variant="clay"
                      size="lg"
                      className="h-16 px-12 text-lg font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <Link href="/demo">
                        {t(`hero_slides.${activeSlide.id}.cta_primary` as any)}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="lg"
                      className="h-16 border border-slate-200 px-10 text-lg hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <Link href="/contact">
                        {t(`hero_slides.${activeSlide.id}.cta_secondary` as any)}
                      </Link>
                    </Button>
                  </div>
                </FadeIn>

                {/* 3D Dashboard Preview (Centered Bottom) */}
                <FadeIn delay={0.6} className="mt-8 w-full max-w-5xl px-4">
                  <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="relative mx-auto max-h-[400px] w-full max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:max-h-[450px]"
                  >
                    <OptimizedImage
                      src={activeSlide.image}
                      alt="Dashboard"
                      width={1200}
                      height={600}
                      className="h-full max-h-[380px] w-full rounded-xl object-cover shadow-inner lg:max-h-[430px]"
                    />
                    {/* Floating Badge */}
                    <div className={`animate-float-slow absolute top-6 right-6 flex items-center gap-2 rounded-lg px-4 py-2 ${glass.strong}`}>
                      <Lock className="h-4 w-4 text-emerald-500" />
                      <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200">DATA_ENCRYPTED</span>
                    </div>
                  </motion.div>
                </FadeIn>
              </div>
            )}

            {/* SPLIT LAYOUTS (Left or Right) */}
            {activeSlide.layout !== 'centered' && (
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                {/* TEXT COLUMN */}
                <div className={cn(
                  'flex flex-col justify-center',
                  activeSlide.layout === 'split-right'
                    ? 'order-1 lg:col-span-6 lg:order-1' // Right Split: Text Left (1st)
                    : 'order-2 lg:col-span-6 lg:order-2', // Left Split: Text Right (2nd), Image Top (1st)
                )}
                >
                  <FadeIn delay={0.1} className="mb-4">
                    <div className={`inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1 ${glass.light}`}>
                      <activeSlide.icon className={cn('h-4 w-4', activeSlide.theme)} />
                      <span className={cn('text-xs font-bold uppercase tracking-wider', activeSlide.theme)}>
                        {t(`hero_slides.${activeSlide.id}.badge` as any)}
                      </span>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <h1 className="mb-4 text-4xl leading-tight font-bold text-slate-900 lg:text-5xl dark:text-white">
                      <span className="mb-2 block">{t(`hero_slides.${activeSlide.id}.title_prefix` as any)}</span>
                      <span className={cn('block', activeSlide.theme)}>
                        {t(`hero_slides.${activeSlide.id}.title_highlight` as any)}
                      </span>
                    </h1>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`hero_slides.${activeSlide.id}.desc` as any)}
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div className="flex flex-wrap gap-4">
                      <Button asChild variant="clay" size="lg" className="px-8 shadow-lg shadow-blue-500/20">
                        <Link href={`/solutions/${activeSlide.id}`}>
                          {t(`hero_slides.${activeSlide.id}.cta_primary` as any)}
                        </Link>
                      </Button>
                      <Button asChild variant="ghost" size="lg" className="border border-slate-200 dark:border-slate-800">
                        <Link href="/contact">
                          {t(`hero_slides.${activeSlide.id}.cta_secondary` as any)}
                        </Link>
                      </Button>
                    </div>
                  </FadeIn>
                </div>

                {/* VISUAL COLUMN (3D Card) */}
                <div className={cn(
                  'relative perspective-1000',
                  activeSlide.layout === 'split-right'
                    ? 'order-2 lg:col-span-6 lg:order-2' // Right Split: Image Right (2nd)
                    : 'order-1 lg:col-span-6 lg:order-1', // Left Split: Image Left (1st)
                )}
                >
                  <FadeIn delay={0.3}>
                    <motion.div
                      style={{ rotateX, rotateY }}
                      className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm dark:bg-slate-800/20"
                    >
                      {/* Main Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900">
                        <OptimizedImage
                          src={activeSlide.image}
                          alt={activeSlide.id}
                          width={1000}
                          height={750}
                          className="h-full w-full transform object-cover transition-transform duration-1000 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      </div>

                      {/* Floating Widget 1 */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className={`absolute -top-6 ${activeSlide.layout === 'split-right' ? '-right-6' : '-left-6'} w-48 rounded-xl border border-white/20 p-4 shadow-xl ${glass.strong}`}
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${activeSlide.theme.replace('text-', 'bg-')}`} />
                          <div className="h-2 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
                          <div className="h-1.5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
                        </div>
                      </motion.div>

                      {/* Floating Widget 2 */}
                      <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className={`absolute -bottom-8 ${activeSlide.layout === 'split-right' ? '-left-8' : '-right-8'} rounded-xl border border-white/20 p-4 shadow-xl ${glass.strong}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-white p-3 shadow-md dark:bg-slate-800">
                            <activeSlide.icon className={`h-6 w-6 ${activeSlide.theme}`} />
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Status</p>
                            <p className={`text-lg font-bold ${activeSlide.theme}`}>Optimized</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </FadeIn>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Slider Controls */}
      <div className="pointer-events-auto absolute right-0 bottom-8 left-0 z-30 flex items-center justify-center gap-6">
        {/* Dots */}
        <div className="flex gap-2 rounded-full bg-slate-900/10 p-2 backdrop-blur-md dark:bg-white/5">
          {SLIDES_CONFIG.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(idx)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? `w-8 ${slide.theme.replace('text-', 'bg-')}` : 'w-2 bg-slate-400 hover:bg-slate-500 dark:bg-slate-600'
              }`}
              aria-label={`Go to ${slide.id} slide`}
            />
          ))}
        </div>

        {/* Play/Pause/Nav */}
        <div className="flex items-center gap-2">
          <button onClick={prevSlide} className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button onClick={nextSlide} className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Trusted By at Bottom */}
      <div className="absolute bottom-0 w-full border-t border-slate-200/50 bg-white/30 py-4 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/30">
        <InfiniteScrollLoop speed={40} direction="left">
          {TRUSTED_BRANDS.map(brand => (
            <span key={brand} className="mx-6 text-sm font-semibold tracking-widest whitespace-nowrap text-slate-500/80 uppercase dark:text-slate-400/80">
              {brand}
            </span>
          ))}
        </InfiniteScrollLoop>
      </div>
    </Section>
  );
}
