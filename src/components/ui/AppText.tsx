import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { theme } from '@/styles';

const { colors, typography } = theme;

type TextVariant = 'body' | 'caption' | 'heading' | 'title' | 'subtitle';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
  children: React.ReactNode;
}

const variantStyles: Record<
  TextVariant,
  { fontSize: number; fontWeight: '400' | '500' | '600' | '700' }
> = {
  body: {
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.regular,
  },
  caption: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.regular,
  },
  heading: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
  },
  title: {
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.semiBold,
  },
  subtitle: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.medium,
  },
};

export function AppText({
  variant = 'body',
  color = colors.text,
  style,
  children,
  ...rest
}: AppTextProps) {
  const v = variantStyles[variant];
  return (
    <Text
      style={[
        styles.base,
        { fontSize: v.fontSize, fontWeight: v.fontWeight, color },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {},
});
