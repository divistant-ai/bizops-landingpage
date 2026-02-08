'use client';

import { useEffect, useState } from 'react';

export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export function useUTMTracking() {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Parse UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);

    const params: UTMParams = {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
    };

    // Filter out undefined values
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value !== undefined),
    ) as UTMParams;

    setUtmParams(cleanParams);

    // Store in localStorage for persistence across pages
    if (Object.keys(cleanParams).length > 0) {
      const existing = localStorage.getItem('bizops_utm_params');
      const existingParams = existing ? JSON.parse(existing) : {};
      localStorage.setItem(
        'bizops_utm_params',
        JSON.stringify({ ...existingParams, ...cleanParams }),
      );
    }
  }, []);

  const getStoredUtmParams = (): Record<string, string> => {
    if (typeof window === 'undefined') {
      return {};
    }
    const stored = localStorage.getItem('bizops_utm_params');
    if (!stored) {
      return {};
    }
    const parsed = JSON.parse(stored) as UTMParams;
    // Filter out undefined values and convert to Record<string, string>
    return Object.fromEntries(
      Object.entries(parsed).filter(([, value]) => value !== undefined),
    ) as Record<string, string>;
  };

  const clearUtmParams = () => {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.removeItem('bizops_utm_params');
    setUtmParams({});
  };

  return {
    utmParams,
    getStoredUtmParams,
    clearUtmParams,
    hasUTMParams: Object.keys(utmParams).length > 0,
  };
}
