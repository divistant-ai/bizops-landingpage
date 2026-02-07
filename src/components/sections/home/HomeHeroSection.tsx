'use client';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Lock,
  Pause,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Button, HeroBackground, OptimizedImage, Typography } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { glass, modularTypography } from '@/design-tokens';
import { cn } from '@/libs/utils';

const SLIDE_CTA_MAP: Record<string, string> = {
  general: '/demo',
  ess: '/features/employee-self-service',
  ai: '/features/ai-assistant',
  industry: '/solutions',
};

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
  visual: 'dashboard' | 'ess' | 'ai' | 'industry';
  theme: string; // Tailwind text color class
  themeBg: string; // Tailwind background class for dots & widgets
  bgGradient: string; // Tailwind gradient class
  icon: any;
  image: string;
};

const SLIDES_CONFIG: SlideConfig[] = [
  {
    id: 'general',
    layout: 'split-right', // Text kiri, gambar kanan (bukan di bawah)
    visual: 'dashboard',
    theme: 'text-blue-600 dark:text-blue-400',
    themeBg: 'bg-blue-600 dark:bg-blue-400',
    bgGradient: 'from-blue-500/10 to-transparent',
    icon: CheckCircle2,
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Dashboard abstract
  },
  {
    id: 'ess',
    layout: 'split-left', // Image Left, Text Right
    visual: 'ess',
    theme: 'text-sky-600 dark:text-sky-400',
    themeBg: 'bg-sky-600 dark:bg-sky-400',
    bgGradient: 'from-sky-500/10 to-transparent',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop', // Team/Collaboration
  },
  {
    id: 'ai',
    layout: 'split-right', // Text Left, Image Right
    visual: 'ai',
    theme: 'text-purple-600 dark:text-purple-400',
    themeBg: 'bg-purple-600 dark:bg-purple-400',
    bgGradient: 'from-purple-500/10 to-transparent',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop', // AI/Technology
  },
  {
    id: 'industry',
    layout: 'split-left', // Image Left, Text Right
    visual: 'industry',
    theme: 'text-amber-600 dark:text-amber-400',
    themeBg: 'bg-amber-600 dark:bg-amber-400',
    bgGradient: 'from-amber-500/10 to-transparent',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1565514020176-db98e3c15439?q=80&w=2670&auto=format&fit=crop', // Multi-industry
  },
];

export function HomeHeroSection() {
  const t = useTranslations('Homepage');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Parallax Tilt State
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const xPct = clientX / innerWidth - 0.5;
    const yPct = clientY / innerHeight - 0.5;
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
  const ctaHref = SLIDE_CTA_MAP[activeSlide.id] ?? '/demo';

  // 3D Transforms (disabled when prefers reduced motion)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const motionStyle = prefersReducedMotion
    ? { rotateX: 0, rotateY: 0, perspective: 1000 }
    : { rotateX, rotateY, perspective: 1000 };

  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-80px)] w-full flex-col overflow-hidden bg-slate-50 transition-colors duration-700 dark:bg-slate-950"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements - Dynamic Gradient based on slide */}
      <HeroBackground />
      <motion.div
        animate={prefersReducedMotion ? { opacity: 0.5 } : { opacity: [0.3, 0.5, 0.3] }}
        transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity }}
        className={`pointer-events-none absolute inset-0 bg-linear-to-br transition-colors duration-1000 ${activeSlide.bgGradient}`}
      />

      {/* Content area - center content vertically with padding for navigation */}
      <div className="relative z-10 flex h-full flex-col justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto w-full max-w-6xl"
          >
            {/*
                LAYOUT SWITCHER
                Based on activeSlide.layout: centered, split-left, split-right
            */}

            {/* CENTERED LAYOUT (Default/General) */}
            {activeSlide.layout === 'centered' && (
              <div className="flex flex-col items-center text-center">
                <FadeIn delay={0.1}>
                  <div
                    className={`mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2 ${glass.light}`}
                  >
                    <span
                      className={`text-sm font-bold tracking-wide uppercase ${activeSlide.theme}`}
                    >
                      {t(`hero_slides.${activeSlide.id}.badge` as any)}
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-4xl">
                  <h1
                    className={`${modularTypography.hero} mb-6 leading-tight text-slate-900 dark:text-white`}
                  >
                    <span className="block">
                      {t(`hero_slides.${activeSlide.id}.title_prefix` as any)}
                    </span>
                    <span className={`block ${activeSlide.theme}`}>
                      {t(`hero_slides.${activeSlide.id}.title_highlight` as any)}
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.3} className="max-w-2xl">
                  <p
                    className={`${modularTypography.body} mb-8 text-lg text-slate-600 dark:text-slate-300`}
                  >
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
                    style={motionStyle}
                    className="relative mx-auto max-h-[350px] w-full max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:max-h-[400px]"
                  >
                    <OptimizedImage
                      src={activeSlide.image}
                      alt="Dashboard"
                      width={1200}
                      height={600}
                      className="h-full max-h-[330px] w-full rounded-xl object-cover shadow-inner lg:max-h-[380px]"
                    />
                    {/* Floating Badge */}
                    <div
                      className={`animate-float-slow absolute top-6 right-6 flex items-center gap-2 rounded-lg px-4 py-2 ${glass.strong}`}
                    >
                      <Lock className="h-4 w-4 text-emerald-500" />
                      <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200">
                        DATA_ENCRYPTED
                      </span>
                    </div>
                  </motion.div>
                </FadeIn>
              </div>
            )}

            {/* SPLIT LAYOUTS (Left or Right) */}
            {activeSlide.layout !== 'centered' && (
              <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
                {/* TEXT COLUMN */}
                <div
                  className={cn(
                    'flex flex-col justify-center',
                    activeSlide.layout === 'split-right'
                      ? 'order-1 lg:order-1' // Right Split: Text Left
                      : 'order-2 lg:order-2', // Left Split: Text Right
                  )}
                >
                  <FadeIn delay={0.1} className="mb-3">
                    <div
                      className={`inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1.5 ${glass.light}`}
                    >
                      <activeSlide.icon className={cn('h-4 w-4', activeSlide.theme)} />
                      <span
                        className={cn(
                          'text-xs font-bold tracking-wider uppercase',
                          activeSlide.theme,
                        )}
                      >
                        {t(`hero_slides.${activeSlide.id}.badge` as any)}
                      </span>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <Typography variant="h1" as="h1" color="default" className="mb-4">
                      <span className="mb-1 block">
                        {t(`hero_slides.${activeSlide.id}.title_prefix` as any)}
                      </span>
                      <span className={cn('block', activeSlide.theme)}>
                        {t(`hero_slides.${activeSlide.id}.title_highlight` as any)}
                      </span>
                    </Typography>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <Typography variant="body" color="muted" className="mb-5">
                      {t(`hero_slides.${activeSlide.id}.desc` as any)}
                    </Typography>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        variant="clay"
                        size="lg"
                        className="px-6 shadow-lg shadow-blue-500/20 sm:px-8"
                      >
                        <Link href={ctaHref}>
                          {t(`hero_slides.${activeSlide.id}.cta_primary` as any)}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="lg"
                        className="border border-slate-200 dark:border-slate-800"
                      >
                        <Link href="/contact">
                          {t(`hero_slides.${activeSlide.id}.cta_secondary` as any)}
                        </Link>
                      </Button>
                    </div>
                  </FadeIn>
                </div>

                {/* VISUAL COLUMN (3D Card) */}
                <div
                  className={cn(
                    'relative lg:max-w-lg xl:max-w-xl',
                    activeSlide.layout === 'split-right'
                      ? 'order-2 lg:order-2' // Right Split: Image Right
                      : 'order-1 lg:order-1', // Left Split: Image Left
                  )}
                >
                  <FadeIn delay={0.3}>
                    <motion.div
                      style={motionStyle}
                      className="relative rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm dark:bg-slate-800/20"
                    >
                      {/* Main Image */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
                        <OptimizedImage
                          src={activeSlide.image}
                          alt={activeSlide.id}
                          width={600}
                          height={450}
                          className="h-full w-full transform object-cover object-center transition-transform duration-1000 hover:scale-105"
                          priority={currentSlide === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>

                      {/* Floating Widget 1 - Top Right/Left */}
                      <motion.div
                        animate={prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
                        transition={
                          prefersReducedMotion
                            ? {}
                            : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                        }
                        className={`absolute -top-4 ${activeSlide.layout === 'split-right' ? '-right-4' : '-left-4'} w-36 rounded-lg border border-white/20 p-2.5 shadow-lg ${glass.strong} sm:w-40`}
                      >
                        <div className="mb-1.5 flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${activeSlide.themeBg}`} />
                          <div className="h-2 w-14 rounded-full bg-slate-200 dark:bg-slate-700" />
                        </div>
                        <div className="space-y-1">
                          <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
                          <div className="h-1.5 w-2/3 rounded-full bg-slate-100 dark:bg-slate-800" />
                        </div>
                      </motion.div>

                      {/* Floating Widget 2 - Bottom Left/Right */}
                      <motion.div
                        animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
                        transition={
                          prefersReducedMotion
                            ? {}
                            : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
                        }
                        className={`absolute -bottom-4 ${activeSlide.layout === 'split-right' ? '-left-4' : '-right-4'} rounded-lg border border-white/20 p-2.5 shadow-lg ${glass.strong}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-white p-2 shadow-md dark:bg-slate-800">
                            <activeSlide.icon className={`h-4 w-4 ${activeSlide.theme}`} />
                          </div>
                          <div className="text-left">
                            <p className="text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                              {t('hero_widget_status')}
                            </p>
                            <p className={`text-xs font-bold ${activeSlide.theme}`}>
                              {t('hero_widget_optimized')}
                            </p>
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
      </div>

      {/* Overlay: Slider Controls + Trusted By */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Slider Controls */}
        <div
          className="pointer-events-auto absolute right-0 bottom-16 left-0 z-30 flex items-center justify-center gap-6"
          role="group"
          aria-label="Hero slider controls"
        >
          {/* Dots */}
          <div
            className="flex gap-2 rounded-full bg-slate-900/10 p-2 backdrop-blur-md dark:bg-white/5"
            role="tablist"
            aria-label="Slide indicators"
          >
            {SLIDES_CONFIG.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={currentSlide === idx}
                aria-label={`${t('hero_slider_go_to')} ${slide.id} slide`}
                onClick={() => handleSlideChange(idx)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? `w-8 ${slide.themeBg}`
                    : 'w-2 bg-slate-400 hover:bg-slate-500 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause/Nav */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label={t('hero_slider_prev')}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? t('hero_slider_pause') : t('hero_slider_play')}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label={t('hero_slider_next')}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-white/20 dark:text-slate-400"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Trusted By at Bottom */}
        <div className="pointer-events-auto absolute right-0 bottom-0 left-0 z-20 w-full border-t border-slate-200/50 bg-white/30 py-4 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/30">
          <InfiniteScrollLoop speed={40} direction="left">
            {TRUSTED_BRANDS.map(brand => (
              <span
                key={brand}
                className="mx-6 text-sm font-semibold tracking-widest whitespace-nowrap text-slate-500/80 uppercase dark:text-slate-400/80"
              >
                {brand}
              </span>
            ))}
          </InfiniteScrollLoop>
        </div>
      </div>
    </section>
  );
}
