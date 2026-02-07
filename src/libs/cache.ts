/**
 * Request Caching Strategy
 *
 * Provides utilities for caching API requests with different strategies:
 * - Memory cache: Fast, for session data
 * - LocalStorage: Persistent, for user preferences
 * - SWR: Stale-while-revalidate pattern
 */

import { logger } from '@/utils/logger';

// Cache entry with metadata
type CacheEntry<T> = {
  data: T;
  timestamp: number;
  ttl: number;
};

// In-memory cache store
const memoryCache = new Map<string, CacheEntry<unknown>>();

/**
 * Cache configuration
 */
type CacheConfig = {
  ttl: number; // Time to live in milliseconds
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
};

const DEFAULT_CONFIG: CacheConfig = {
  ttl: 5 * 60 * 1000, // 5 minutes
  storage: 'memory',
};

/**
 * Generate cache key from request parameters
 */
export const generateCacheKey = (endpoint: string, params?: Record<string, unknown>): string => {
  if (!params) {
    return endpoint;
  }

  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${key}=${JSON.stringify(params[key])}`)
    .join('&');

  return `${endpoint}?${sortedParams}`;
};

/**
 * Get cached data
 */
export function getCachedData<T>(key: string, config: CacheConfig = DEFAULT_CONFIG): T | null {
  try {
    let entry: CacheEntry<T> | undefined;

    if (config.storage === 'localStorage' && typeof window !== 'undefined') {
      const stored = localStorage.getItem(`cache_${key}`);
      if (stored) {
        entry = JSON.parse(stored) as CacheEntry<T>;
      }
    } else if (config.storage === 'sessionStorage' && typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(`cache_${key}`);
      if (stored) {
        entry = JSON.parse(stored) as CacheEntry<T>;
      }
    } else {
      entry = memoryCache.get(key) as CacheEntry<T> | undefined;
    }

    if (!entry) {
      return null;
    }

    // Check if cache has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      invalidateCache(key, config);
      return null;
    }

    return entry.data;
  } catch (error) {
    logger.error('Cache retrieval error:', error);
    return null;
  }
}

/**
 * Set cached data
 */
export function setCachedData<T>(key: string, data: T, config: CacheConfig = DEFAULT_CONFIG): void {
  try {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: config.ttl,
    };

    if (config.storage === 'localStorage' && typeof window !== 'undefined') {
      localStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } else if (config.storage === 'sessionStorage' && typeof window !== 'undefined') {
      sessionStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    } else {
      memoryCache.set(key, entry as CacheEntry<unknown>);
    }
  } catch (error) {
    logger.error('Cache storage error:', error);
  }
}

/**
 * Invalidate cached data
 */
export function invalidateCache(key: string, config: CacheConfig = DEFAULT_CONFIG): void {
  try {
    if (config.storage === 'localStorage' && typeof window !== 'undefined') {
      localStorage.removeItem(`cache_${key}`);
    } else if (config.storage === 'sessionStorage' && typeof window !== 'undefined') {
      sessionStorage.removeItem(`cache_${key}`);
    } else {
      memoryCache.delete(key);
    }
  } catch (error) {
    logger.error('Cache invalidation error:', error);
  }
}

/**
 * Clear all cached data
 */
export function clearAllCache(config: CacheConfig = DEFAULT_CONFIG): void {
  try {
    if (config.storage === 'localStorage' && typeof window !== 'undefined') {
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      }
    } else if (config.storage === 'sessionStorage' && typeof window !== 'undefined') {
      for (const key of Object.keys(sessionStorage)) {
        if (key.startsWith('cache_')) {
          sessionStorage.removeItem(key);
        }
      }
    } else {
      memoryCache.clear();
    }
  } catch (error) {
    logger.error('Cache clear error:', error);
  }
}

/**
 * Fetch with caching (SWR pattern)
 */
export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  config: CacheConfig = DEFAULT_CONFIG,
): Promise<T> {
  // Try to get cached data first
  const cached = getCachedData<T>(key, config);

  if (cached !== null) {
    // Return cached data immediately, but refresh in background
    refreshCacheInBackground(key, fetcher, config);
    return cached;
  }

  // No cache, fetch fresh data
  const data = await fetcher();
  setCachedData(key, data, config);
  return data;
}

/**
 * Refresh cache in background (don't await)
 */
function refreshCacheInBackground<T>(
  key: string,
  fetcher: () => Promise<T>,
  config: CacheConfig,
): void {
  fetcher()
    .then((data) => {
      setCachedData(key, data, config);
    })
    .catch((error) => {
      logger.warn('Background cache refresh failed:', error);
    });
}

/**
 * Predefined cache configurations
 */
export const cacheConfigs = {
  // Short-lived data that changes frequently
  realtime: { ttl: 30 * 1000 }, // 30 seconds

  // User data that changes occasionally
  user: { ttl: 5 * 60 * 1000 }, // 5 minutes

  // Reference data that rarely changes
  reference: { ttl: 60 * 60 * 1000 }, // 1 hour

  // Static content that almost never changes
  static: { ttl: 24 * 60 * 60 * 1000 }, // 24 hours

  // Persistent user preferences
  preferences: { ttl: 30 * 24 * 60 * 60 * 1000, storage: 'localStorage' as const }, // 30 days
};

/**
 * Cache statistics (for debugging)
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: memoryCache.size,
    keys: Array.from(memoryCache.keys()),
  };
}
