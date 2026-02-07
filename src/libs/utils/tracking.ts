/**
 * Analytics & Event Tracking Utility
 *
 * Provides centralized event tracking for:
 * - Page views
 * - User interactions
 * - Conversion events
 * - Custom business events
 */

import { logger } from '@/utils/logger';
import { getEnvConfig } from './env';

type EventProperties = Record<string, string | number | boolean | null | undefined>;

type TrackingEvent = {
  name: string;
  properties?: EventProperties;
  timestamp?: number;
};

// In-memory event queue (for batching)
let eventQueue: Array<TrackingEvent> = [];
let isInitialized = false;

/**
 * Send events to PostHog analytics service
 */
const sendEventsToPostHog = async (events: TrackingEvent[]): Promise<void> => {
  const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const postHogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (!postHogKey) {
    logger.warn('PostHog key not configured, events will not be sent');
    return;
  }

  try {
    const response = await fetch(`${postHogHost}/capture/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: postHogKey,
        batch: events.map(event => ({
          event: event.name,
          properties: {
            ...event.properties,
            timestamp: event.timestamp,
          },
        })),
      }),
    });

    if (!response.ok) {
      throw new Error(`PostHog API error: ${response.statusText}`);
    }

    logger.debug(`Successfully sent ${events.length} events to PostHog`);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Failed to send events to PostHog:', errorMessage);
    // Re-queue events for retry
    eventQueue.unshift(...events);
  }
};

/**
 * Flush event queue
 */
const flushEventQueue = (): void => {
  if (eventQueue.length === 0) {
    return;
  }

  const events = [...eventQueue];
  eventQueue = [];

  logger.debug(`Tracking: Flushed ${events.length} events`);

  // Send events to analytics service
  // PostHog is the primary analytics provider
  sendEventsToPostHog(events).catch((error) => {
    logger.error('Failed to send events to PostHog:', error);
  });
};

/**
 * Send event to analytics service
 */
const sendEvent = (event: TrackingEvent): void => {
  const config = getEnvConfig();

  if (config.isDevelopment) {
    logger.debug('Tracking Event:', event);
  }

  if (config.isProduction) {
    // Queue events for batching and send to analytics
    eventQueue.push(event);

    if (eventQueue.length >= 10 || event.name === 'conversion') {
      flushEventQueue();
    }
  }
};

/**
 * Track custom event
 */
export const trackEvent = (eventName: string, properties?: EventProperties): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const event: TrackingEvent = {
    name: eventName,
    properties: {
      ...properties,
      url: window.location.href,
      path: window.location.pathname,
    },
    timestamp: Date.now(),
  };

  sendEvent(event);
};

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const event: TrackingEvent = {
    name: 'page_view',
    properties: {
      path,
      title: title || document.title,
      referrer: document.referrer,
    },
    timestamp: Date.now(),
  };

  sendEvent(event);
};

/**
 * Initialize tracking
 * Sets up tracking based on environment
 */
export const initTracking = (): void => {
  if (isInitialized || typeof window === 'undefined') {
    return;
  }

  const config = getEnvConfig();

  if (config.isDevelopment) {
    logger.debug('Tracking: Initialized (development mode)');
  }

  // Track page view on init
  trackPageView(window.location.pathname);

  // Listen for route changes (Next.js uses pushState)
  window.addEventListener('popstate', () => {
    trackPageView(window.location.pathname);
  });

  isInitialized = true;
};

/**
 * Track conversion event
 */
export const trackConversion = (
  conversionType: string,
  value?: number,
  properties?: EventProperties,
): void => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value,
    ...properties,
  });
};

/**
 * Track user interaction
 */
export const trackInteraction = (
  action: string,
  element: string,
  properties?: EventProperties,
): void => {
  trackEvent('user_interaction', {
    action,
    element,
    ...properties,
  });
};

/**
 * Track tool usage
 */
export const trackToolUsage = (
  toolName: string,
  action: string,
  properties?: EventProperties,
): void => {
  trackEvent('tool_usage', {
    tool_name: toolName,
    action,
    ...properties,
  });
};

/**
 * Track error
 */
export const trackError = (error: Error, context?: EventProperties): void => {
  trackEvent('error', {
    error_message: error.message,
    error_stack: error.stack,
    ...context,
  });
};

/**
 * Set user properties
 */
export const setUserProperties = (properties: EventProperties): void => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem('analytics_user_properties', JSON.stringify(properties));
};

/**
 * Get user properties
 */
export const getUserProperties = (): EventProperties => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = localStorage.getItem('analytics_user_properties');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};
