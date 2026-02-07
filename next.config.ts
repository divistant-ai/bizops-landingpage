import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

// Content Security Policy (CSP) configuration
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.posthog.com https://*.sentry.io https://*.clerk.com https://*.clerk.accounts.dev https://challenges.cloudflare.com https://js.stripe.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data: https://*.unsplash.com https://*.pravatar.cc https://ui-avatars.com https://images.unsplash.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://*.posthog.com https://*.sentry.io https://*.clerk.com https://*.clerk.accounts.dev https://api.betterstack.com wss://*.clerk.com;
  frame-src 'self' https://challenges.cloudflare.com https://js.stripe.com https://*.clerk.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, ' ')
  .trim();

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  output: 'standalone',
  devIndicators: {
    position: 'bottom-left',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy,
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/tour',
        destination: '/product-tour',
        permanent: true,
      },
      {
        source: '/pricing-calculator',
        destination: '/pricing/calculator',
        permanent: true,
      },
      // Capability URL redirects (old → new)
      {
        source: '/:locale/platform/automation-ai',
        destination: '/:locale/platform/ai-assistant',
        permanent: true,
      },
      {
        source: '/:locale/platform/multi-company',
        destination: '/:locale/platform/multi-company-management',
        permanent: true,
      },
      {
        source: '/:locale/platform/portals',
        destination: '/:locale/platform/customer-portals',
        permanent: true,
      },
      {
        source: '/:locale/platform/analytics',
        destination: '/:locale/platform/reports-analytics',
        permanent: true,
      },
      {
        source: '/:locale/platform/low-code',
        destination: '/:locale/platform/custom-apps',
        permanent: true,
      },
      {
        source: '/:locale/platform/collaboration',
        destination: '/:locale/platform/team-collaboration',
        permanent: true,
      },
      // Without locale prefix
      {
        source: '/platform/automation-ai',
        destination: '/platform/ai-assistant',
        permanent: true,
      },
      {
        source: '/platform/multi-company',
        destination: '/platform/multi-company-management',
        permanent: true,
      },
      {
        source: '/platform/portals',
        destination: '/platform/customer-portals',
        permanent: true,
      },
      {
        source: '/platform/analytics',
        destination: '/platform/reports-analytics',
        permanent: true,
      },
      {
        source: '/platform/low-code',
        destination: '/platform/custom-apps',
        permanent: true,
      },
      {
        source: '/platform/collaboration',
        destination: '/platform/team-collaboration',
        permanent: true,
      },
    ];
  },
};

// Initialize the Next-Intl plugin
let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

// Conditionally enable Sentry configuration
if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  configWithPlugins = withSentryConfig(configWithPlugins, {
    // For all available options, see:
    // https://www.npmjs.com/package/@sentry/webpack-plugin#options
    org: process.env.SENTRY_ORGANIZATION,
    project: process.env.SENTRY_PROJECT,

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    reactComponentAnnotation: {
      enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Disable Sentry telemetry
    telemetry: false,
  });
}

const nextConfig = configWithPlugins;
export default nextConfig;
