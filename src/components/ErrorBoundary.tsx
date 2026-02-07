'use client';

import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';
import { logger } from '@/utils/logger';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 */
export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('ErrorBoundary caught an error:', error, errorInfo);

    // Send to error tracking service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Could also send to analytics
    // trackError(error, { component: 'ErrorBoundary' });
  }

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <DefaultErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

/**
 * Default Error Fallback UI
 */
function DefaultErrorFallback({ error }: { error: Error | null }) {
  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-neutral-900">Something went wrong</h2>

        <p className="mb-6 text-neutral-600">
          We apologize for the inconvenience. Please try refreshing the page or go back to the home
          page.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <div className="mb-6 text-left">
            <details className="rounded bg-neutral-100 p-4">
              <summary className="cursor-pointer font-medium text-neutral-700">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 overflow-auto text-sm text-red-600">
                {error.message}
                {'\n'}
                {error.stack}
              </pre>
            </details>
          </div>
        )}

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={handleReload}
            className="bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-2 text-white transition-colors"
          >
            Reload Page
          </button>

          <button
            onClick={handleGoHome}
            className="rounded-lg bg-neutral-200 px-6 py-2 text-neutral-800 transition-colors hover:bg-neutral-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Higher-order component to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
