import Link from 'next/link';

export const DemoBanner = () => (
  <div className="sticky top-0 z-50 hidden bg-slate-900 p-4 text-center text-lg font-semibold text-slate-100 dark:bg-slate-950 dark:text-slate-200 [&_a]:text-fuchsia-500 [&_a:hover]:text-indigo-500">
    Live Demo of Next.js Boilerplate -
    {' '}
    <Link href="/sign-up">Explore the Authentication</Link>
  </div>
);
