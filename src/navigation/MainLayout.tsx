import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  Pressable,
  useWindowDimensions,
  ScrollView,
  Image,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { colors, mainLayoutStyles } from '@/styles';
import {
  HAMBURGER_ICON_SVG,
  GALLERY_ICON_SVG,
  NOTIFICATION_ICON_SVG,
  BACK_BUTTON_SVG,
  LOGOUT_ICON,
  DRAWER_ICONS,
} from '@/assets/icons';
import { LOGO_WHITE_SVG } from '@/assets/images/svg/logoWhiteSvg';
import { Images } from '@/assets/images';
import { BottomTabBar, type BottomTabKey } from '@/components';
import {
  HomeScreen,
  QuotesScreen,
  TripsScreen,
  ProfileScreen,
  SettingsScreen,
  PassportScreen,
  FamilyDetailsScreen,
} from '@/app';

type OverlayScreen = 'settings' | 'passport' | 'family' | null;

const fixSvg = (xml: string) =>
  xml
    .replace(/clip-path/g, 'clipPath')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin');

const HAMBURGER_FIXED = fixSvg(HAMBURGER_ICON_SVG.replace(/#8C8A93/g, '#fff'));
const GALLERY_FIXED = fixSvg(GALLERY_ICON_SVG);
const NOTIFICATION_FIXED = fixSvg(NOTIFICATION_ICON_SVG);
const BACK_FIXED = fixSvg(BACK_BUTTON_SVG);

const LOGO_WHITE_FIXED = LOGO_WHITE_SVG.replace(/clip-path/g, 'clipPath');
const DRAWER_LOGOUT = fixSvg(
  LOGOUT_ICON.replace(/#DC2626/g, 'rgba(255, 73, 73, 1)'),
);

export function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<BottomTabKey>('home');
  const [overlayScreen, setOverlayScreen] = useState<OverlayScreen>(null);
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const closeOverlay = useCallback(() => setOverlayScreen(null), []);

  const handleTabChange = useCallback((tab: BottomTabKey) => {
    setActiveTab(tab);
    setOverlayScreen(null);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'quotes':
        return <QuotesScreen onBack={() => setActiveTab('home')} />;
      case 'trips':
        return <TripsScreen />;
      case 'profile':
        return (
          <ProfileScreen
            onAppSettingsPress={() => setOverlayScreen('settings')}
            onMyPassportPress={() => setOverlayScreen('passport')}
            onMyFamilyPress={() => setOverlayScreen('family')}
          />
        );
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={mainLayoutStyles.container} edges={['top']}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.onboardingBackground}
      />

      {overlayScreen ? (
        <View style={mainLayoutStyles.content}>
          {overlayScreen === 'settings' && (
            <SettingsScreen onBack={closeOverlay} />
          )}
          {overlayScreen === 'passport' && (
            <PassportScreen onBack={closeOverlay} />
          )}
          {overlayScreen === 'family' && (
            <FamilyDetailsScreen onBack={closeOverlay} />
          )}
        </View>
      ) : (
        <>
          {activeTab !== 'quotes' && (
            <View style={[mainLayoutStyles.header, { paddingTop: 12 }]}>
              <Pressable
                style={
                  activeTab === 'profile'
                    ? mainLayoutStyles.headerBackButton
                    : mainLayoutStyles.headerButton
                }
                onPress={() =>
                  activeTab === 'profile' ? setActiveTab('home') : openDrawer()
                }
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                android_ripple={null}
              >
                <SvgXml
                  xml={activeTab === 'profile' ? BACK_FIXED : HAMBURGER_FIXED}
                  width={activeTab === 'profile' ? 40 : 24}
                  height={activeTab === 'profile' ? 40 : 24}
                />
              </Pressable>
              {activeTab === 'trips' ? (
                <View style={mainLayoutStyles.headerTitleWrap}>
                  <Text style={mainLayoutStyles.headerTitle}>My Trips</Text>
                </View>
              ) : activeTab === 'profile' ? (
                <View style={mainLayoutStyles.headerTitleWrap}>
                  <Text style={mainLayoutStyles.headerTitle}>Profile</Text>
                </View>
              ) : (
                <View style={mainLayoutStyles.headerSpacer} />
              )}
              {activeTab === 'profile' ? (
                <View style={{ width: 40, height: 40 }} />
              ) : (
                <TouchableOpacity
                  style={
                    activeTab === 'trips'
                      ? mainLayoutStyles.headerNotificationButton
                      : mainLayoutStyles.headerGalleryButton
                  }
                  onPress={() => {}}
                  activeOpacity={0.7}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <SvgXml
                    xml={
                      activeTab === 'trips' ? NOTIFICATION_FIXED : GALLERY_FIXED
                    }
                    width={22}
                    height={22}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}

          <View style={mainLayoutStyles.content}>{renderContent()}</View>
        </>
      )}

      <BottomTabBar activeTab={activeTab} onTabChange={handleTabChange} />

      <Modal
        visible={drawerOpen}
        transparent
        animationType="fade"
        onRequestClose={closeDrawer}
        statusBarTranslucent
      >
        <View style={mainLayoutStyles.drawerOverlay}>
          <Pressable
            style={[
              mainLayoutStyles.drawerPanel,
              {
                width: Math.max(width * 0.75, 280),
                paddingTop: insets.top + 12,
              },
            ]}
            onPress={e => e.stopPropagation()}
          >
            <ScrollView
              style={mainLayoutStyles.drawerScroll}
              showsVerticalScrollIndicator={false}
            >
              <View style={mainLayoutStyles.drawerLogoWrap}>
                <SvgXml
                  xml={LOGO_WHITE_FIXED}
                  width={220}
                  height={52}
                  style={mainLayoutStyles.drawerLogo}
                />
              </View>
              <Image
                source={Images.profileGallery}
                style={mainLayoutStyles.drawerAvatar}
                resizeMode="cover"
              />
              <Text style={mainLayoutStyles.drawerUserName}>James Bond</Text>
              <Text style={mainLayoutStyles.drawerUserEmail}>
                infoabraham12@gmail.com
              </Text>
              <TouchableOpacity
                style={mainLayoutStyles.drawerItem}
                onPress={() => {
                  setActiveTab('quotes');
                  closeDrawer();
                }}
                activeOpacity={0.7}
              >
                <View style={mainLayoutStyles.drawerItemIconBg}>
                  <Image
                    source={DRAWER_ICONS.mail}
                    style={mainLayoutStyles.drawerItemIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={mainLayoutStyles.drawerItemText}>Quotes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={mainLayoutStyles.drawerItem}
                onPress={() => {
                  setActiveTab('trips');
                  closeDrawer();
                }}
                activeOpacity={0.7}
              >
                <View style={mainLayoutStyles.drawerItemIconBg}>
                  <Image
                    source={DRAWER_ICONS.trips}
                    style={mainLayoutStyles.drawerItemIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={mainLayoutStyles.drawerItemText}>My Trips</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={mainLayoutStyles.drawerItem}
                onPress={() => {
                  setActiveTab('profile');
                  closeDrawer();
                }}
                activeOpacity={0.7}
              >
                <View style={mainLayoutStyles.drawerItemIconBg}>
                  <Image
                    source={DRAWER_ICONS.user}
                    style={mainLayoutStyles.drawerItemIcon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={mainLayoutStyles.drawerItemText}>My Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={mainLayoutStyles.drawerItem}
                onPress={() => closeDrawer()}
                activeOpacity={0.7}
              >
                <View style={mainLayoutStyles.drawerItemIconSpace}>
                  <SvgXml
                    xml={DRAWER_LOGOUT}
                    width={24}
                    height={24}
                    style={mainLayoutStyles.drawerItemIcon}
                  />
                </View>
                <Text style={mainLayoutStyles.drawerItemTextRed}>Log out</Text>
              </TouchableOpacity>
            </ScrollView>
          </Pressable>
          <Pressable
            style={mainLayoutStyles.drawerOverlayRight}
            onPress={closeDrawer}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
