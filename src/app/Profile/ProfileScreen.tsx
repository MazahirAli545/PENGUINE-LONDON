import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { profileScreenStyles } from '@/styles';
import { Images } from '@/assets/images';
import {
  EDIT_ICON,
  SETTING_ICON,
  USER_ICON,
  KEY_ICON,
  CAMERA_ICON,
  MORE_ICON,
  FAQ_ICON,
  LIGHTNING_ICON,
  THUMBUP_ICON,
  LOGOUT_ICON,
  CHEVRON_RIGHT_ICON,
} from '@/assets/icons';

const ROW_ITEM_GREY = '#A5A8B0'; // Figma: same light grey for menu item text and icons

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

type ProfileSegment = 'upcoming' | 'last';

function ProfileRow({
  iconXml,
  label,
  onPress,
}: {
  iconXml: string;
  label: string;
  onPress?: () => void;
}) {
  const greyIcon = svgWithColor(iconXml, ROW_ITEM_GREY);
  const greyChevron = svgWithColor(CHEVRON_RIGHT_ICON, ROW_ITEM_GREY);
  return (
    <TouchableOpacity
      style={profileScreenStyles.row}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <SvgXml
        xml={greyIcon}
        width={24}
        height={24}
        style={profileScreenStyles.rowIcon}
      />
      <Text style={profileScreenStyles.rowLabel}>{label}</Text>
      <SvgXml
        xml={greyChevron}
        width={20}
        height={20}
        style={profileScreenStyles.rowChevron}
      />
    </TouchableOpacity>
  );
}

export interface ProfileScreenProps {
  onAppSettingsPress?: () => void;
  onMyPassportPress?: () => void;
  onMyFamilyPress?: () => void;
}

export function ProfileScreen({
  onAppSettingsPress,
  onMyPassportPress,
  onMyFamilyPress,
}: ProfileScreenProps) {
  const [segment, setSegment] = useState<ProfileSegment>('upcoming');

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={profileScreenStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={profileScreenStyles.avatarSection}>
        <View style={profileScreenStyles.avatarWrap}>
          <View style={profileScreenStyles.avatarPlaceholder}>
            <Image
              source={Images.profileGallery}
              style={{ width: 48, height: 48 }}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={profileScreenStyles.editButtonWrap}
            activeOpacity={0.7}
          >
            <SvgXml
              xml={fixSvg(EDIT_ICON)}
              width={24}
              height={24}
              color="rgba(83, 84, 84, 1)"
            />
          </TouchableOpacity>
        </View>
        <Text style={profileScreenStyles.userName}>James Bond</Text>
      </View>

      <View style={profileScreenStyles.segmentRow}>
        <TouchableOpacity
          style={[
            profileScreenStyles.segmentTab,
            segment === 'upcoming'
              ? profileScreenStyles.segmentTabActive
              : profileScreenStyles.segmentTabInactive,
          ]}
          onPress={() => setSegment('upcoming')}
          activeOpacity={0.8}
        >
          <Text
            style={
              segment === 'upcoming'
                ? profileScreenStyles.segmentTabTextActive
                : profileScreenStyles.segmentTabText
            }
          >
            Upcoming Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            profileScreenStyles.segmentTab,
            segment === 'last'
              ? profileScreenStyles.segmentTabActive
              : profileScreenStyles.segmentTabInactive,
          ]}
          onPress={() => setSegment('last')}
          activeOpacity={0.8}
        >
          <Text
            style={
              segment === 'last'
                ? profileScreenStyles.segmentTabTextActive
                : profileScreenStyles.segmentTabText
            }
          >
            Last Trips
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={profileScreenStyles.sectionTitle}>Settings</Text>
      <ProfileRow
        iconXml={SETTING_ICON}
        label="App Settings"
        onPress={onAppSettingsPress}
      />

      <Text style={[profileScreenStyles.sectionTitle, { marginTop: 20 }]}>
        Account
      </Text>
      <ProfileRow
        iconXml={USER_ICON}
        label="Change account name"
        onPress={() => {}}
      />
      <ProfileRow
        iconXml={KEY_ICON}
        label="Change password"
        onPress={() => {}}
      />
      <ProfileRow
        iconXml={CAMERA_ICON}
        label="Change account Image"
        onPress={() => {}}
      />

      <Text style={[profileScreenStyles.sectionTitle, { marginTop: 20 }]}>
        My Wallet
      </Text>
      <ProfileRow
        iconXml={MORE_ICON}
        label="My Family"
        onPress={onMyFamilyPress}
      />
      <ProfileRow
        iconXml={MORE_ICON}
        label="My Passport"
        onPress={onMyPassportPress}
      />
      <ProfileRow iconXml={FAQ_ICON} label="FAQ" onPress={() => {}} />
      <ProfileRow
        iconXml={LIGHTNING_ICON}
        label="Help & Feedback"
        onPress={() => {}}
      />
      <ProfileRow iconXml={THUMBUP_ICON} label="Share App" onPress={() => {}} />

      <TouchableOpacity
        style={profileScreenStyles.logoutRow}
        onPress={() => {}}
        activeOpacity={0.7}
      >
        <SvgXml
          xml={fixSvg(LOGOUT_ICON.replace(/#DC2626/g, 'rgba(255, 73, 73, 1)'))}
          width={24}
          height={24}
          style={profileScreenStyles.logoutRowIcon}
        />
        <Text style={profileScreenStyles.logoutRowText}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
