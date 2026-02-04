import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: '404 - Page Not Found | BizOps',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center font-sans">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] size-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute -right-[10%] -bottom-[10%] size-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute inset-0 bg-slate-50 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 dark:bg-slate-950 dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="text-[10rem] leading-none font-black tracking-tighter text-slate-300 select-none md:text-[14rem] dark:text-slate-700">
              404
            </div>

            <div className="relative -mt-16 md:-mt-24">
              <div className="relative z-10 mb-8 inline-flex size-24 items-center justify-center rounded-3xl border-4 border-slate-100 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <span className="animate-bounce text-5xl">🤔</span>
              </div>

              <h1 className="mb-6 text-3xl leading-tight font-extrabold text-slate-900 md:text-5xl dark:text-white">
                Page Not Found
                {' '}
                <br />
                <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Lost in Cyberspace?
                </span>
              </h1>
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
                The page you are looking for doesn't exist or has been moved.
              </p>

              <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/">
                  <Button
                    size="lg"
                    className="h-14 rounded-2xl px-8 text-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
                  >
                    <span className="text-slate-800 dark:text-white">Back to Home</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
