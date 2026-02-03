'use client';

/**
 * SkipLinks - Accessibility component for keyboard navigation
 *
 * Provides skip links that allow keyboard users to bypass repetitive content
 * and jump directly to main sections of the page.
 */

type SkipLink = {
  href: string;
  label: string;
};

type SkipLinksProps = {
  links?: SkipLink[];
};

const defaultLinks: SkipLink[] = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#footer', label: 'Skip to footer' },
];

export function SkipLinks({ links = defaultLinks }: SkipLinksProps) {
  return (
    <nav
      aria-label="Skip links"
      className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-0 focus-within:left-0 focus-within:z-[9999] focus-within:w-full focus-within:bg-white focus-within:shadow-lg dark:focus-within:bg-slate-900"
    >
      <ul className="flex gap-4 p-4">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-lg px-4 py-2 text-sm font-semibold text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SkipLinks;
