'use client';

import { AlertTriangle, RefreshCw, RotateCcw } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui';

type PricingErrorBoundaryProps = {
  children: React.ReactNode;
  onReset?: () => void;
};

type PricingErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export class PricingErrorBoundary extends React.Component<
  PricingErrorBoundaryProps,
  PricingErrorBoundaryState
> {
  constructor(props: PricingErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): PricingErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to analytics
    if (typeof window !== 'undefined') {
      // PostHog
      if ((window as any).posthog) {
        (window as any).posthog.capture('pricing_calculator_error', {
          error_message: error.message,
          error_stack: error.stack,
          component_stack: errorInfo.componentStack,
        });
      }

      // Console error for debugging
      console.error('Pricing Calculator Error:', error);
      console.error('Component Stack:', errorInfo.componentStack);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  handleClearStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bizops_pricing_calculator_v1');
      window.location.reload();
    }
  };

  override render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center p-6">
          <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-lg dark:border-red-800 dark:bg-red-900/20">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-800">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-300" />
              </div>
            </div>

            <h2 className="mb-2 text-xl font-bold text-red-900 dark:text-red-100">
              Terjadi Kesalahan
            </h2>

            <p className="mb-6 text-sm text-red-700 dark:text-red-300">
              Maaf, terjadi kesalahan saat memuat kalkulator harga.
              <br />
              Silakan coba lagi atau hubungi tim support kami.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 rounded-lg bg-red-100 p-4 text-left dark:bg-red-900/30">
                <p className="mb-2 text-xs font-bold text-red-800 uppercase dark:text-red-200">
                  Error Details (Development Only):
                </p>
                <p className="font-mono text-xs break-all text-red-700 dark:text-red-300">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Button onClick={this.handleReset} variant="primary" className="w-full gap-2">
                <RefreshCw className="h-4 w-4" />
                Coba Lagi
              </Button>

              <div className="flex gap-3">
                <Button onClick={this.handleReload} variant="outline" className="flex-1 gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Refresh Halaman
                </Button>

                <Button
                  onClick={this.handleClearStorage}
                  variant="outline"
                  className="flex-1 border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300"
                >
                  Reset Data
                </Button>
              </div>
            </div>

            <p className="mt-6 text-xs text-red-600 dark:text-red-400">
              Jika masalah berlanjut, silakan hubungi
              {' '}
              <a
                href="mailto:support@bizops.com"
                className="underline hover:text-red-800 dark:hover:text-red-200"
              >
                support@bizops.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
