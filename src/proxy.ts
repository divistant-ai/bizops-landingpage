import type { NextFetchEvent, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from '@/libs/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

// Capability URL redirects (old → new)
const capabilityRedirects: Record<string, string> = {
  '/platform/automation-ai': '/platform/ai-assistant',
  '/platform/multi-company': '/platform/multi-company-management',
  '/platform/portals': '/platform/customer-portals',
  '/platform/analytics': '/platform/reports-analytics',
  '/platform/low-code': '/platform/custom-apps',
  '/platform/collaboration': '/platform/team-collaboration',
};

export default async function proxy(request: NextRequest, _event: NextFetchEvent) {
  const pathname = request.nextUrl.pathname;

  // Check if this is an old capability URL that needs redirect
  for (const [oldPath, newPath] of Object.entries(capabilityRedirects)) {
    // Check exact match
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 308);
    }
    // Check with locale prefix (e.g., /en/platform/automation-ai)
    const localePattern = new RegExp(`^/([a-z]{2})${oldPath}$`);
    const match = pathname.match(localePattern);
    if (match) {
      const locale = match[1];
      return NextResponse.redirect(new URL(`/${locale}${newPath}`, request.url), 308);
    }
  }

  // Service URL redirects (old → new)
  const serviceRedirects: Record<string, string> = {
    '/services/custom-dev': '/services/custom-development',
    '/services/managed-business-services': '/services/managed-services',
  };

  for (const [oldPath, newPath] of Object.entries(serviceRedirects)) {
    if (pathname === oldPath) {
      return NextResponse.redirect(new URL(newPath, request.url), 308);
    }
    const localePattern = new RegExp(`^/([a-z]{2})${oldPath}$`);
    const match = pathname.match(localePattern);
    if (match) {
      const locale = match[1];
      return NextResponse.redirect(new URL(`/${locale}${newPath}`, request.url), 308);
    }
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/_next`, `/_vercel` or `monitoring`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!_next|_vercel|monitoring|.*\\..*).*)', '/'],
};
