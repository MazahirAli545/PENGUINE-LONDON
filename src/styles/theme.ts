import { colors, darkColors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export { colors, darkColors } from './colors';
export type { Colors } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
} as const;

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
};

export type Theme = typeof theme;
