import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { splashStyles } from '@/styles';
import { LOGO_WHITE_SVG } from '@/assets/images/svg/logoWhiteSvg';

const LOGO_ASPECT = 331 / 79;
const LOGO_WIDTH = 280;

export function SplashScreen() {
  return (
    <View style={splashStyles.container}>
      <SvgXml
        xml={LOGO_WHITE_SVG}
        width={LOGO_WIDTH}
        height={LOGO_WIDTH / LOGO_ASPECT}
      />
    </View>
  );
}
