export const Fonts = {
  regular: 'Poppins-Regular',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export type FontFamily = (typeof Fonts)[keyof typeof Fonts];
