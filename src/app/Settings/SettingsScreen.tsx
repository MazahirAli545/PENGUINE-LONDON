import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { settingsScreenStyles } from '@/styles';
import {
  BACK_BUTTON_SVG,
  DOWNLOAD_ICON,
  CHEVRON_RIGHT_ICON,
} from '@/assets/icons';

const SETTINGS_TEXT_ICON = 'rgba(165, 168, 176, 1)';
const SETTINGS_ARROW = 'rgba(83, 84, 84, 1)';

const fixSvg = (xml: string) =>
  xml
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule');

const svgWithColor = (xml: string, colorHex: string) =>
  fixSvg(xml)
    .replace(/#fff\b/gi, colorHex)
    .replace(/#ffffff/gi, colorHex);

const BACK_FIXED = fixSvg(BACK_BUTTON_SVG);

export interface SettingsScreenProps {
  onBack?: () => void;
  onChangeAppColor?: () => void;
  onExportToCalendar?: () => void;
}

export function SettingsScreen({
  onBack,
  onChangeAppColor,
  onExportToCalendar,
}: SettingsScreenProps) {
  useSafeAreaInsets();
  return (
    <View style={settingsScreenStyles.container}>
      <View style={[settingsScreenStyles.header, { paddingTop: 12 }]}>
        <TouchableOpacity
          style={settingsScreenStyles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <SvgXml xml={BACK_FIXED} width={40} height={40} />
        </TouchableOpacity>
        <Text style={settingsScreenStyles.headerTitle}>Settings</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={settingsScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={settingsScreenStyles.sectionTitle}>Settings</Text>

        <TouchableOpacity
          style={settingsScreenStyles.row}
          onPress={onChangeAppColor}
          activeOpacity={0.7}
        >
          <Image
            source={require('@/assets/icons/png/brush.png')}
            style={[
              settingsScreenStyles.rowIcon,
              { tintColor: SETTINGS_TEXT_ICON },
            ]}
            resizeMode="contain"
          />
          <Text style={settingsScreenStyles.rowLabel}>Change app color</Text>
          <SvgXml
            xml={svgWithColor(CHEVRON_RIGHT_ICON, SETTINGS_ARROW)}
            width={20}
            height={20}
            style={settingsScreenStyles.rowChevron}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={settingsScreenStyles.row}
          onPress={onExportToCalendar}
          activeOpacity={0.7}
        >
          <SvgXml
            xml={svgWithColor(DOWNLOAD_ICON, SETTINGS_TEXT_ICON)}
            width={24}
            height={24}
            style={settingsScreenStyles.rowIcon}
          />
          <Text style={settingsScreenStyles.rowLabel}>
            Export to Google calendar
          </Text>
          <SvgXml
            xml={svgWithColor(CHEVRON_RIGHT_ICON, SETTINGS_ARROW)}
            width={20}
            height={20}
            style={settingsScreenStyles.rowChevron}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
