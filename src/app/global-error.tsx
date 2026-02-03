'use client';

import * as Sentry from '@sentry/nextjs';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { useEffect } from 'react';
import { routing } from '@/libs/I18nRouting';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(props.error);
    console.error(props.error);
  }, [props.error]);

  const refreshPage = () => {
    // When a global error happens, we can try to reset, but often reloading the page is cleaner
    // or we can call props.reset() as standard Next.js behavior
    props.reset();
  };

  return (
    <html lang={routing.defaultLocale}>
      <body className="flex min-h-screen items-center justify-center bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <AlertTriangle className="h-10 w-10" />
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Critical System Error
          </h1>

          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
            Something went wrong at the application level. We apologize for the inconvenience.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={refreshPage}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </button>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </a>
          </div>

          {props.error.digest && (
            <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
              Error Digest:
              {' '}
              <span className="font-mono">{props.error.digest}</span>
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
