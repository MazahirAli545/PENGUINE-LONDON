import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BOTTOM_TAB_ICONS } from '@/assets/icons';
import { Fonts } from '@/assets/fonts';
import { colors } from '@/styles';

export type BottomTabKey = 'home' | 'quotes' | 'trips' | 'profile';

const TAB_ORDER: BottomTabKey[] = ['home', 'quotes', 'trips', 'profile'];

const TAB_LABELS: Record<BottomTabKey, string> = {
  home: 'Home',
  quotes: 'Quotes',
  trips: 'Trips',
  profile: 'Profile',
};

const ACTIVE_ICON_TINT = 'rgba(183, 149, 85, 1)';
const INACTIVE_ICON_TINT = 'rgba(165, 168, 176, 1)';
const ACTIVE_TEXT_COLOR = colors.white;
const PILL_BG = 'rgba(45, 45, 48, 1)';

const ICON_SIZE = 24;

const ICON_SIZE_SMALL = 20;

const ICON_BOX_SIZE = 28;

const getIconSize = (tab: BottomTabKey) =>
  tab === 'trips' || tab === 'profile' ? ICON_SIZE_SMALL : ICON_SIZE;

export type BottomTabBarProps = {
  activeTab: BottomTabKey;
  onTabChange: (tab: BottomTabKey) => void;
};

export function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 12),
          paddingTop: 12,
        },
      ]}
    >
      {TAB_ORDER.map(tab => {
        const isActive = activeTab === tab;
        const icon = BOTTOM_TAB_ICONS[tab];
        const tint = isActive ? ACTIVE_ICON_TINT : INACTIVE_ICON_TINT;
        const iconSize = getIconSize(tab);

        if (isActive) {
          return (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => onTabChange(tab)}
              activeOpacity={0.7}
            >
              <View style={styles.pill}>
                <View style={styles.iconBox}>
                  <Image
                    source={icon}
                    style={[
                      styles.icon,
                      { tintColor: tint, width: iconSize, height: iconSize },
                    ]}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.pillLabel}>{TAB_LABELS[tab]}</Text>
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => onTabChange(tab)}
            activeOpacity={0.7}
          >
            <View style={styles.iconBox}>
              <Image
                source={icon}
                style={[
                  styles.icon,
                  { tintColor: tint, width: iconSize, height: iconSize },
                ]}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.onboardingOuterShadow,
    paddingHorizontal: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PILL_BG,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  iconBox: {
    width: ICON_BOX_SIZE,
    height: ICON_BOX_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
  pillLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: ACTIVE_TEXT_COLOR,
    marginLeft: 8,
  },
});
