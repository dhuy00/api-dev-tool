/**
 * Application Route Paths
 * Centralized constant to prevent hardcoded string paths across the codebase.
 */
export const PATHS = {
  HOME: '/',
  AUTH: {
    ROOT: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  BUILDER: {
    ROOT: '/builder',
    REQUEST: '/builder/:requestId',
  },
  COLLECTIONS: '/collections',
  FLOWS: {
    ROOT: '/flows',
    DETAIL: '/flows/:flowId',
  },
  ENVIRONMENTS: '/environments',
  TESTS: '/tests',
  PERFORMANCE: '/performance',
  DOCUMENTATION: '/docs',
  SETTINGS: {
    ROOT: '/settings',
    API_KEYS: '/settings/api-keys',
  },
} as const
