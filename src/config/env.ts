export const ENV = {
  isDev: __DEV__,
  isProd: !__DEV__,
  apiBaseUrl: __DEV__
    ? 'https://api.staging.example.com'
    : 'https://api.example.com',
  enableLogs: __DEV__,
  enableAnalytics: !__DEV__,
} as const;
