export const colors = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  secondary: '#64748b',

  splashBackground: '#222222',
  background: '#ffffff',
  backgroundSecondary: '#f8fafc',
  surface: '#ffffff',
  text: '#0f172a',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  error: '#dc2626',
  success: '#16a34a',
  warning: '#ca8a04',
  white: '#ffffff',
  black: '#000000',

  onboardingPrimary: 'rgba(183,149,85,1)',

  onboardingButtonText: 'rgba(32,33,36,1)',

  onboardingBackAccent1: 'rgba(81,83,94,1)',

  onboardingBackAccent2: 'rgba(165,168,176,1)',

  onboardingBackground: 'rgba(0,0,0,1)',

  onboardingOuterShadow: 'rgba(29,29,31,1)',

  signInInputBg: 'rgba(45,45,48,1)',

  signInPlaceholder: 'rgba(165,168,176,1)',
} as const;

export const darkColors = {
  ...colors,
  splashBackground: '#222222',
  background: '#0f172a',
  backgroundSecondary: '#1e293b',
  surface: '#1e293b',
  text: '#f8fafc',
  textSecondary: '#94a3b8',
  border: '#334155',
} as const;

export type Colors = typeof colors;
