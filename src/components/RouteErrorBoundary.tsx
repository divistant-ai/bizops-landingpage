import { ErrorBoundary } from '@/components/ErrorBoundary';

/**
 * Error Boundary Wrapper for Routes
 *
 * Wraps the route content in an error boundary to catch any errors
 * that occur during rendering.
 */
export default function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
