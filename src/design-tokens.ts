/**
 * Design Tokens - Centralized design system values
 * Used to maintain consistency across the application
 */

export const designTokens = {
  spacing: {
    'xs': '0.5rem', // 8px
    'sm': '0.75rem', // 12px
    'md': '1rem', // 16px
    'lg': '1.5rem', // 24px
    'xl': '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '6rem', // 96px
  },
  borderRadius: {
    'sm': '0.5rem', // 8px - small elements
    'md': '0.75rem', // 12px - buttons, inputs
    'lg': '1rem', // 16px - cards
    'xl': '1.5rem', // 24px - large cards
    '2xl': '2rem', // 32px - hero sections
    '3xl': '1.5rem', // 24px - spotlight cards
    'full': '9999px', // full - badges, pills
  },
  typography: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
    },
    fontSize: {
      'xs': '0.75rem', // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
    },
    lineHeight: {
      tight: '1.25', // Headings
      normal: '1.5', // Default
      relaxed: '1.625', // Body text
      loose: '2', // Large paragraphs
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  transitions: {
    fast: 'duration-150', // 150ms - micro interactions
    normal: 'duration-200', // 200ms - buttons, links
    slow: 'duration-300', // 300ms - cards, modals
    slower: 'duration-500', // 500ms - page transitions
  },
  shadows: {
    'sm': 'shadow-sm', // Subtle elevation (cards)
    'md': 'shadow-md', // Medium elevation (hover states)
    'lg': 'shadow-lg', // High elevation (modals, dropdowns)
    'xl': 'shadow-xl', // Very high elevation (hero elements)
    '2xl': 'shadow-2xl', // Maximum elevation
  },
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB', // Main primary
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
      950: '#172554',
    },
    accent: {
      500: '#F59E0B',
      600: '#D97706',
    },
    success: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      500: '#22C55E',
      600: '#16A34A',
    },
    danger: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      500: '#EF4444',
      600: '#DC2626',
    },
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      500: '#F59E0B',
      600: '#D97706',
    },
  },
  breakpoints: {
    sm: '640px', // Tablet
    md: '768px', // Desktop
    lg: '1024px', // Large desktop
    xl: '1280px', // Extra large
  },
  touchTarget: {
    min: '44px', // Minimum touch target (Apple)
    recommended: '48px', // Recommended (Material)
  },
} as const;

// Typography scale classes for easy use
export const typography = {
  hero: 'text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight',
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight',
  h3: 'text-2xl md:text-3xl font-bold leading-tight',
  h4: 'text-xl md:text-2xl font-semibold leading-tight',
  h5: 'text-lg md:text-xl font-semibold',
  h6: 'text-base md:text-lg font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
  bodyLarge: 'text-xl md:text-2xl leading-relaxed',
  bodySmall: 'text-sm md:text-base leading-relaxed',
  small: 'text-sm leading-normal',
  tiny: 'text-xs leading-normal',
  label: 'text-sm font-medium uppercase tracking-wider',
} as const;

// Focus styles for consistency
export const focusStyles = {
  default: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  button: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  input: 'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
  link: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded',
} as const;

// Section padding variants
export const sectionPadding = {
  default: 'py-20 md:py-28 lg:py-36',
  compact: 'py-12 md:py-16 lg:py-20',
  spacious: 'py-24 md:py-32 lg:py-40',
} as const;

// Color shadows for buttons and cards
export const colorShadows = {
  primary: 'shadow-lg shadow-primary-600/25',
  primaryHover: 'shadow-xl shadow-primary-600/30',
  success: 'shadow-lg shadow-green-600/25',
  danger: 'shadow-lg shadow-red-600/25',
  accent: 'shadow-lg shadow-amber-600/25',
} as const;

// Section header spacing
export const sectionHeaderSpacing = {
  marginBottom: 'mb-16 md:mb-20',
  titleGap: 'mt-4',
} as const;

// Card grid gaps
export const gridGaps = {
  default: 'gap-6 md:gap-8',
  compact: 'gap-4 md:gap-6',
  spacious: 'gap-8 md:gap-10',
} as const;

// Card styles for consistency
export const cardStyles = {
  default: 'rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-slate-700 dark:bg-slate-900',
  elevated: 'rounded-3xl border border-slate-200 bg-white shadow-premium dark:border-slate-700 dark:bg-slate-900',
  spotlight: 'rounded-3xl bg-white dark:bg-slate-900',
  subtle: 'rounded-2xl border border-slate-200 bg-slate-50/50 dark:border-slate-700/50 dark:bg-slate-800/50',
} as const;

// Gradient patterns
export const gradients = {
  primary: 'bg-gradient-to-r from-primary-600 to-primary-500',
  primaryIndigo: 'bg-gradient-to-r from-primary-600 to-indigo-600',
  primaryVertical: 'bg-gradient-to-b from-primary-600 to-primary-700',
  accent: 'bg-gradient-to-r from-amber-500 to-orange-500',
  success: 'bg-gradient-to-r from-green-500 to-emerald-500',
  danger: 'bg-gradient-to-r from-red-500 to-rose-500',
  dark: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  darkBlue: 'bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900',
  glow: 'bg-gradient-to-tr from-primary-500/20 to-blue-500/20',
  glowAccent: 'bg-gradient-to-tr from-amber-500/20 to-orange-500/20',
  subtle: 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950',
  hero: 'bg-gradient-to-br from-primary-600 via-primary-500 to-blue-500',
  // Solid text colors - vibrant and high contrast
  textPrimary: 'text-blue-600 dark:text-blue-400',
  textSuccess: 'text-emerald-600 dark:text-emerald-400',
  textDanger: 'text-rose-600 dark:text-rose-400',
  textWarning: 'text-amber-600 dark:text-amber-400',
} as const;

// Card hover effects
export const cardHover = {
  lift: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
  glow: 'transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10',
  scale: 'transition-transform duration-300 hover:scale-[1.01]', // Reduced scale
} as const;

// ============================================
// HYBRID DESIGN SYSTEM TOKENS - COMPACT VERSION
// ============================================

// Modular Typography Scale (1.125x ratio - Major Second)
// Base: 16px, Ratio: 1.125^n
// Optimized for information density and cleaner look
export const modularTypography = {
  sizes: {
    'xs': '0.79rem',    // 12.64px
    'sm': '0.89rem',    // 14.22px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.266rem',   // 20.25px
    '2xl': '1.424rem',  // 22.78px
    '3xl': '1.602rem',  // 25.63px
    '4xl': '1.802rem',  // 28.83px
    '5xl': '2.027rem',  // 32.44px
    '6xl': '2.281rem',  // 36.49px
    '7xl': '2.566rem',  // 41.05px
  },
  // Pre-built classes using compact modular scale
  hero: 'text-[1.75rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold leading-[1.15] tracking-[-0.02em]',
  display: 'text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.2] tracking-[-0.02em]',
  h1: 'text-[1.5rem] md:text-[1.802rem] lg:text-[2.25rem] font-bold leading-[1.2] tracking-[-0.015em]',
  h2: 'text-[1.35rem] md:text-[1.602rem] lg:text-[1.802rem] font-bold leading-[1.25] tracking-[-0.01em]',
  h3: 'text-[1.424rem] md:text-[1.602rem] font-bold leading-[1.3]',
  h4: 'text-[1.266rem] md:text-[1.424rem] font-semibold leading-[1.35]',
  h5: 'text-[1.125rem] md:text-[1.266rem] font-semibold leading-[1.4]',
  body: 'text-[1rem] md:text-[1.125rem] leading-[1.5]',
  bodySmall: 'text-[0.89rem] md:text-[1rem] leading-[1.5]',
  caption: 'text-[0.79rem] md:text-[0.89rem] leading-[1.4]',
} as const;

// Glassmorphism Tokens - Refined for professional look
export const glass = {
  // Light variants
  light: 'bg-white/70 backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.05)]',
  medium: 'bg-white/50 backdrop-blur-lg border border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
  strong: 'bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
  subtle: 'bg-white/30 backdrop-blur-sm border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.03)]',
  // Dark mode variants
  dark: 'bg-slate-900/70 backdrop-blur-md border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)]',
  darkMedium: 'bg-slate-900/50 backdrop-blur-lg border border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.4)]',
  // Colored glass - Softer tints
  primary: 'bg-primary-500/5 backdrop-blur-md border border-primary-200/20 shadow-[0_4px_12px_rgba(37,99,235,0.05)]',
  accent: 'bg-amber-500/5 backdrop-blur-md border border-amber-200/20 shadow-[0_4px_12px_rgba(245,158,11,0.05)]',
  danger: 'bg-red-500/5 backdrop-blur-md border border-red-200/20 shadow-[0_4px_12px_rgba(239,68,68,0.05)]',
  success: 'bg-emerald-500/5 backdrop-blur-md border border-emerald-200/20 shadow-[0_4px_12px_rgba(16,185,129,0.05)]',
} as const;

// Neumorphism Tokens - Flatter, cleaner look
export const neumorph = {
  // Light mode - subtle embossed
  raised: 'bg-slate-50 shadow-[4px_4px_10px_#e2e8f0,-4px_-4px_10px_#ffffff] dark:bg-slate-800 dark:shadow-[4px_4px_10px_#0f172a,-4px_-4px_10px_#334155]',
  pressed: 'bg-slate-50 shadow-[inset_2px_2px_5px_#e2e8f0,inset_-2px_-2px_5px_#ffffff] dark:bg-slate-800 dark:shadow-[inset_2px_2px_5px_#0f172a,inset_-4px_-4px_8px_#334155]',
  flat: 'bg-slate-50 shadow-[2px_2px_5px_#e2e8f0,-2px_-2px_5px_#ffffff] dark:bg-slate-800 dark:shadow-[2px_2px_5px_#0f172a,-2px_-2px_5px_#334155]',
  // Button specific
  button: 'bg-gradient-to-br from-slate-50 to-slate-100 shadow-[3px_3px_8px_#cbd5e1,-3px_-3px_8px_#ffffff] hover:shadow-[1px_1px_3px_#cbd5e1,-1px_-1px_3px_#ffffff] active:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff] dark:from-slate-800 dark:to-slate-900',
  // Card variants
  card: 'bg-slate-50 rounded-xl shadow-[6px_6px_12px_#e2e8f0,-6px_-6px_12px_#ffffff] dark:bg-slate-800 dark:shadow-[6px_6px_12px_#0f172a,-6px_-6px_12px_#334155]',
  cardSubtle: 'bg-slate-50 rounded-lg shadow-[3px_3px_6px_#e2e8f0,-3px_-3px_6px_#ffffff] dark:bg-slate-800 dark:shadow-[3px_3px_6px_#0f172a,-3px_-3px_6px_#334155]',
} as const;

// Claymorphism Tokens -> Softened to "Soft UI"
export const clay = {
  // Cleaner cards, less "cartoony"
  card: 'bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_-2px_4px_rgba(0,0,0,0.02),inset_0_2px_4px_rgba(255,255,255,0.6)] dark:bg-slate-900',
  cardSubtle: 'bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.04),inset_0_-1px_2px_rgba(0,0,0,0.02),inset_0_1px_2px_rgba(255,255,255,0.5)] dark:bg-slate-900',
  // Icon containers - cleaner gradient
  icon: 'bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)]',
  // Colored icons - stronger, more visible
  primaryIcon: 'bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-[0_6px_16px_rgba(37,99,235,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)]',
  dangerIcon: 'bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-[0_6px_16px_rgba(239,68,68,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)]',
  successIcon: 'bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-[0_6px_16px_rgba(16,185,129,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)]',
  warningIcon: 'bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl shadow-[0_6px_16px_rgba(245,158,11,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)]',
  neutralIcon: 'bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl shadow-[0_6px_16px_rgba(100,116,139,0.45),inset_0_1px_2px_rgba(255,255,255,0.3)]',
  // Button - less bulky
  button: 'bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.3),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.4),inset_0_1px_2px_rgba(255,255,255,0.3)] active:scale-[0.98]',
} as const;

// Updated section padding - Mobile-optimized, compact
export const sectionPaddingHybrid = {
  hero: 'pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-28 lg:pb-20',
  default: 'py-10 sm:py-14 md:py-16 lg:py-20',
  compact: 'py-8 sm:py-10 md:py-12 lg:py-14',
  spacious: 'py-14 sm:py-16 md:py-20 lg:py-24',
} as const;

// Content max widths (unchanged, good for readability)
export const contentWidth = {
  narrow: 'max-w-2xl',
  default: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-7xl',
} as const;

// Updated grid gaps - Tighter
export const gridGapsHybrid = {
  tight: 'gap-3 md:gap-4',
  default: 'gap-5 md:gap-6',      // Reduced from 6/8 -> 5/6
  relaxed: 'gap-6 md:gap-8',      // Reduced from 8/12 -> 6/8
  spacious: 'gap-8 md:gap-10',    // Reduced from 12/16 -> 8/10
} as const;
