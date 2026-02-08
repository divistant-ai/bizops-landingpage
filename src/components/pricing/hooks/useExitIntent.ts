'use client';

import { useCallback, useEffect, useState } from 'react';

type ExitIntentOptions = {
  threshold?: number;
  maxDisplays?: number;
  cookieExpiry?: number;
};

export function useExitIntent(options: ExitIntentOptions = {}) {
  const { threshold = 20, maxDisplays = 3, cookieExpiry = 24 * 60 * 60 * 1000 } = options;
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const getDisplayCount = useCallback(() => {
    if (typeof window === 'undefined') {
      return 0;
    }
    const count = localStorage.getItem('exit_intent_display_count');
    if (count) {
      return parseInt(count, 10);
    }
    return 0;
  }, []);

  const incrementDisplayCount = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const currentCount = getDisplayCount();
    localStorage.setItem('exit_intent_display_count', String(currentCount + 1));
    localStorage.setItem('exit_intent_last_display', String(Date.now()));
  }, [getDisplayCount]);

  const canShowModal = useCallback(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const displayCount = getDisplayCount();
    if (displayCount >= maxDisplays) {
      return false;
    }

    const lastDisplay = localStorage.getItem('exit_intent_last_display');
    if (lastDisplay) {
      const timeSinceLastDisplay = Date.now() - parseInt(lastDisplay, 10);
      if (timeSinceLastDisplay < cookieExpiry) {
        return false;
      }
    }

    return true;
  }, [getDisplayCount, maxDisplays, cookieExpiry]);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (hasTriggered) {
        return;
      }
      if (!canShowModal()) {
        return;
      }

      // Check if mouse is leaving through the top of the page
      if (e.clientY <= threshold) {
        setShowExitModal(true);
        setHasTriggered(true);
        incrementDisplayCount();

        // Track exit intent
        if (typeof window !== 'undefined') {
          if ((window as any).posthog) {
            (window as any).posthog.capture('pricing_exit_intent_triggered');
          }
          if ((window as any).gtag) {
            (window as any).gtag('event', 'pricing_exit_intent_triggered');
          }
        }
      }
    },
    [hasTriggered, threshold, canShowModal, incrementDisplayCount],
  );

  const closeModal = useCallback(() => {
    setShowExitModal(false);

    // Track close
    if (typeof window !== 'undefined') {
      if ((window as any).posthog) {
        (window as any).posthog.capture('pricing_exit_intent_closed');
      }
    }
  }, []);

  const resetExitIntent = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('exit_intent_display_count');
      localStorage.removeItem('exit_intent_last_display');
    }
    setHasTriggered(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return {
    showExitModal,
    closeModal,
    hasTriggered,
    resetExitIntent,
  };
}
