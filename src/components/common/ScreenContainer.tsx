import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '@/styles';

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

export function ScreenContainer({
  children,
  noPadding,
  style,
  ...rest
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        globalStyles.safeArea,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: noPadding ? 0 : insets.left,
          paddingRight: noPadding ? 0 : insets.right,
        },
        !noPadding && globalStyles.screenContainer,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
