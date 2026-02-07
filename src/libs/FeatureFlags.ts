/**
 * Feature Flag System
 *
 * A simple, lightweight feature flag implementation for the BizOps website.
 * Supports local storage overrides for development and environment-based flags.
 *
 * Features:
 * - Environment-based flags (dev/staging/prod)
 * - Local storage overrides for development
 * - Type-safe flag definitions
 * - SSR-safe implementation
 */

type Environment = 'development' | 'staging' | 'production';

type FeatureFlagConfig = {
  enabled: boolean;
  environments: Environment[];
  description: string;
};

// Define your feature flags here
const FEATURE_FLAGS: Record<string, FeatureFlagConfig> = {
  // Example flags
  NEW_PRICING_PAGE: {
    enabled: false,
    environments: ['development', 'staging'],
    description: 'New redesigned pricing page',
  },
  BETA_TOOLS: {
    enabled: false,
    environments: ['development'],
    description: 'Beta calculator tools',
  },
  ADVANCED_ANALYTICS: {
    enabled: true,
    environments: ['development', 'staging', 'production'],
    description: 'Advanced analytics dashboard',
  },
  DARK_MODE_DEFAULT: {
    enabled: false,
    environments: ['development'],
    description: 'Use dark mode as default theme',
  },
  EXPERIMENTAL_FEATURES: {
    enabled: false,
    environments: ['development'],
    description: 'Enable experimental features',
  },
};

/**
 * Get current environment
 */
const getEnvironment = (): Environment => {
  if (typeof window === 'undefined') {
    return (process.env.NODE_ENV as Environment) || 'production';
  }

  const hostname = window.location.hostname;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'development';
  }

  if (hostname.includes('staging') || hostname.includes('preview')) {
    return 'staging';
  }

  return 'production';
};

/**
 * Check if feature flag is enabled
 */
export const isFeatureEnabled = (flagName: string): boolean => {
  const flag = FEATURE_FLAGS[flagName];

  if (!flag) {
    console.warn(`Feature flag "${flagName}" not found`);
    return false;
  }

  const environment = getEnvironment();

  // Check if flag is enabled for current environment
  if (!flag.environments.includes(environment)) {
    return false;
  }

  // Check local storage override (development only)
  if (environment === 'development' && typeof window !== 'undefined') {
    try {
      const localOverride = localStorage.getItem(`feature_flag_${flagName}`);
      if (localOverride !== null) {
        return localOverride === 'true';
      }
    } catch {
      // Local storage not available
    }
  }

  return flag.enabled;
};

/**
 * Get all feature flags
 */
export const getAllFeatureFlags = (): Record<string, boolean> => {
  const flags: Record<string, boolean> = {};

  for (const [name] of Object.entries(FEATURE_FLAGS)) {
    flags[name] = isFeatureEnabled(name);
  }

  return flags;
};

/**
 * Set local override for a feature flag (development only)
 */
export const setFeatureFlagOverride = (flagName: string, enabled: boolean): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const environment = getEnvironment();

  if (environment !== 'development') {
    console.warn('Feature flag overrides only allowed in development');
    return;
  }

  try {
    localStorage.setItem(`feature_flag_${flagName}`, String(enabled));

    // Dispatch event for real-time updates
    window.dispatchEvent(
      new CustomEvent('featureFlagChanged', {
        detail: { flagName, enabled },
      }),
    );
  } catch {
    console.error('Failed to set feature flag override');
  }
};

/**
 * Clear local override for a feature flag
 */
export const clearFeatureFlagOverride = (flagName: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(`feature_flag_${flagName}`);
  } catch {
    console.error('Failed to clear feature flag override');
  }
};

/**
 * Clear all feature flag overrides
 */
export const clearAllFeatureFlagOverrides = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith('feature_flag_')) {
        localStorage.removeItem(key);
      }
    }
  } catch {
    console.error('Failed to clear feature flag overrides');
  }
};

/**
 * Feature Flag Provider (for React context if needed)
 */
export type FeatureFlags = ReturnType<typeof getAllFeatureFlags>;
