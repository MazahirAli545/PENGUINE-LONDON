import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './colors';
import { Fonts } from '@/assets/fonts';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/** Slide 1: airplane window – larger, Figma ~60% height. */
const SLIDE1_MAX_WIDTH = SCREEN_WIDTH - 48;
const SLIDE1_MAX_HEIGHT = Math.min(SCREEN_HEIGHT * 0.55, 600);
/** Slides 2 & 3: oval graphics – consistent size. */
const SLIDE2_3_MAX_WIDTH = Math.min(SCREEN_WIDTH * 0.82, 308);
const SLIDE2_3_MAX_HEIGHT = Math.min(SCREEN_HEIGHT * 0.42, 340);

const HEADING_LINE_HEIGHT = 35.84;
const BODY_LINE_HEIGHT = 27.2;
const BUTTON_LINE_HEIGHT = 16;

/** Splash */
export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.splashBackground,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});

/** Onboarding */
export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
    minHeight: 44,
  },
  skipText: {
    fontFamily: Fonts.light,
    fontSize: 16,
    color: colors.white,
    lineHeight: BODY_LINE_HEIGHT,
    letterSpacing: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 8,
    paddingBottom: 20,
  },
  heroImageSlide1: {
    width: SLIDE1_MAX_WIDTH,
    maxWidth: SLIDE1_MAX_WIDTH,
    height: SLIDE1_MAX_HEIGHT,
    maxHeight: SLIDE1_MAX_HEIGHT,
    resizeMode: 'contain',
  },
  heroImageSlide2: {
    width: SLIDE2_3_MAX_WIDTH,
    maxWidth: SLIDE2_3_MAX_WIDTH,
    height: SLIDE2_3_MAX_HEIGHT,
    maxHeight: SLIDE2_3_MAX_HEIGHT,
    resizeMode: 'contain',
  },
  heroImageSlide3: {
    width: SLIDE2_3_MAX_WIDTH,
    maxWidth: SLIDE2_3_MAX_WIDTH,
    height: SLIDE2_3_MAX_HEIGHT,
    maxHeight: SLIDE2_3_MAX_HEIGHT,
    resizeMode: 'contain',
  },
  textBlock: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  heading: {
    fontFamily: Fonts.semiBold,
    fontSize: 28,
    lineHeight: HEADING_LINE_HEIGHT,
    letterSpacing: 0,
    color: colors.white,
    textAlign: 'center',
    maxWidth: 320,
  },
  subtitle: {
    fontFamily: Fonts.light,
    fontSize: 16,
    lineHeight: BODY_LINE_HEIGHT,
    letterSpacing: 0,
    color: colors.onboardingBackAccent2,
    textAlign: 'center',
    maxWidth: 249,
    marginTop: 12,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 34,
    backgroundColor: colors.onboardingOuterShadow,
    shadowColor: colors.onboardingOuterShadow,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotActive: {
    backgroundColor: colors.onboardingPrimary,
  },
  dotInactive: {
    backgroundColor: colors.onboardingBackAccent1,
  },
  nextButton: {
    height: 48,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: colors.onboardingPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    lineHeight: BUTTON_LINE_HEIGHT,
    letterSpacing: 0,
    color: colors.onboardingButtonText,
  },
});

/** Sign In */
export const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: colors.white,
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  welcome: {
    fontFamily: Fonts.semiBold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.white,
    marginBottom: 32,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
    marginBottom: 8,
  },
  input: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
  },
  passwordRow: {
    marginBottom: 8,
  },
  passwordInput: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  eyeButton: {
    padding: 4,
  },
  forgetPassword: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.onboardingPrimary,
    textAlign: 'right',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: colors.onboardingPrimary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.onboardingBackAccent1,
  },
  orText: {
    fontFamily: Fonts.light,
    fontSize: 14,
    color: colors.white,
    paddingHorizontal: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  socialButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    flexWrap: 'wrap',
  },
  footerText: {
    fontFamily: Fonts.light,
    fontSize: 14,
    color: colors.white,
  },
  signUpLink: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.onboardingPrimary,
    marginLeft: 4,
  },
});

/** Sign Up */
export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    color: colors.white,
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: 32,
    lineHeight: 40,
    color: colors.white,
    marginBottom: 32,
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
    marginBottom: 8,
  },
  input: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 20,
  },
  passwordRow: {
    marginBottom: 20,
  },
  passwordInput: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  eyeButton: {
    padding: 4,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.onboardingPrimary,
    marginRight: 12,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.onboardingPrimary,
  },
  termsText: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.signInPlaceholder,
  },
  termsLink: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: colors.onboardingPrimary,
    textDecorationLine: 'underline',
  },
  createAccountButton: {
    backgroundColor: colors.onboardingPrimary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  createAccountButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.onboardingBackAccent1,
  },
  orText: {
    fontFamily: Fonts.light,
    fontSize: 14,
    color: colors.white,
    paddingHorizontal: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.signInInputBg,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  socialButtonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    flexWrap: 'wrap',
  },
  footerText: {
    fontFamily: Fonts.light,
    fontSize: 14,
    color: colors.white,
  },
  loginLink: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.onboardingPrimary,
    marginLeft: 4,
  },
});

/** Trip cards (FlightCard, HotelCard, CarLimousineCard) + QuoteCard shared */
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.onboardingOuterShadow,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    overflow: 'visible',
  },
  cardLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: colors.white,
    letterSpacing: 0.5,
  },
  cardYellowLine: {
    height: 1,
    backgroundColor: colors.onboardingPrimary,
    marginTop: 6,
    marginBottom: 16,
    width: '100%',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardRowBottom: {
    flexWrap: 'nowrap',
  },
  cardBottomLeft: {
    flexShrink: 1,
    minWidth: 0,
    maxWidth: '50%',
  },
  cardBottomRight: {
    flexShrink: 1,
    minWidth: 0,
    maxWidth: '50%',
    alignItems: 'flex-end',
  },
  cardRowRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
  },
  cardRouteLeft: {
    flex: 1,
    minWidth: 0,
    alignItems: 'flex-start',
    overflow: 'visible',
  },
  cardRouteCenter: {
    width: 160,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  cardRouteRight: {
    flex: 1,
    minWidth: 0,
    alignItems: 'flex-end',
    overflow: 'visible',
  },
  cardFlightPathWrap: {
    width: '100%',
    aspectRatio: 153 / 16,
    minHeight: 48,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  cardFlightLineSvg: {
    position: 'absolute',
  },
  cardPlaneOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  cardPlaneIconAbove: {
    transform: [{ translateY: -7 }, { translateX: 8 }],
    overflow: 'visible',
  },
  cardPlaneIconBuffer: {
    padding: 8,
    overflow: 'visible',
  },
  cardValue: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: colors.white,
  },
  cardSub: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.onboardingBackAccent2,
    marginTop: 2,
  },
  cardSubRight: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.onboardingBackAccent2,
    marginTop: 2,
    textAlign: 'right',
  },
  cardValueRight: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: colors.white,
    textAlign: 'right',
  },
  cardMeta: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.onboardingBackAccent2,
    marginBottom: 4,
  },
  cardMetaRight: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.onboardingBackAccent2,
    marginBottom: 4,
    textAlign: 'right',
  },
  cardValueSmall: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
  },
  cardValueSmallRight: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
    textAlign: 'right',
  },
  cardPriceRight: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  /** Quote card specific (Quotes screen card header uses white label) */
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderIcon: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: colors.onboardingPrimary,
  },
  cardDateInCard: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: colors.onboardingPrimary,
    letterSpacing: 0.5,
    marginBottom: 10,
    textAlign: 'center',
  },
  cardRowMargin: {
    marginTop: 10,
  },
  cardLabelWhite: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: colors.white,
    letterSpacing: 0.5,
  },
  cardValueLarge: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: colors.white,
  },
  cardValueLargeRight: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: colors.white,
    textAlign: 'right',
  },
  cardValueQuotes: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
  },
  cardValueRightQuotes: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: colors.white,
    textAlign: 'right',
  },
});

/** Home screen */
export const homeScreenStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 32,
  },
  greeting: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.onboardingPrimary,
    marginBottom: 5,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 20,
    color: colors.white,
  },
  viewAll: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: colors.onboardingBackAccent2,
  },
});

/** Quotes screen */
export const quotesScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: '#000000',
  },
  headerBack: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
  },
  headerRight: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    minHeight: 56,
  },
  logoSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: colors.white,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 24,
  },
  totalLabel: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
  },
  totalValue: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  buttonsRow: {
    flexDirection: 'row',
  },
  buttonAccept: {
    flex: 1,
    marginRight: 6,
    backgroundColor: colors.onboardingPrimary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReject: {
    flex: 1,
    marginLeft: 6,
    backgroundColor: colors.onboardingOuterShadow,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.onboardingBackAccent2,
  },
  buttonAcceptText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.onboardingButtonText,
  },
  buttonRejectText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.white,
  },
});

/** Trips screen: segment bar (Upcoming Trip / Past Trip) + card list */
export const tripsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  segmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 20,
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentTabActive: {
    backgroundColor: colors.onboardingPrimary,
    marginHorizontal: 4,
  },
  segmentTabInactive: {
    backgroundColor: '#2C2C2C',
    marginHorizontal: 4,
  },
  segmentTabText: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: colors.white,
  },
  segmentTabTextActive: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: colors.white,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
});

/** Profile screen – avatar, segment, settings/account/wallet rows, logout */
export const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  avatarWrap: {
    position: 'relative',
    overflow: 'visible',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'rgba(196, 196, 196, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIconPlaceholder: {
    width: 48,
    height: 48,
  },
  avatarGalleryImage: {
    width: 48,
    height: 48,
  },
  editButtonWrap: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(248, 248, 248, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  userName: {
    fontFamily: Fonts.semiBold,
    fontSize: 20,
    color: colors.white,
    marginTop: 12,
  },
  segmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8,
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0954F',
  },
  segmentTabActive: {
    backgroundColor: '#C0954F',
  },
  segmentTabInactive: {
    backgroundColor: '#C0954F',
  },
  segmentTabText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#303030',
  },
  segmentTabTextActive: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#303030',
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(140, 138, 147, 1)',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  rowIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  rowLabel: {
    flex: 1,
    fontFamily: Fonts.light,
    fontSize: 16,
    color: '#A5A8B0',
  },
  rowChevron: {
    width: 20,
    height: 20,
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 0,
    marginTop: 16,
  },
  logoutRowIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  logoutRowText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: 'rgba(255, 73, 73, 1)',
  },
});

/** Shared sub-screen (Settings, Passport, Family): header + scroll content */
export const subScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
    // marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
    marginLeft: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
  },
});

/** Settings screen – Change app color, Export to Google calendar */
const SETTINGS_BORDER = 'rgba(140, 138, 147, 1)';
const SETTINGS_TEXT_ICON = 'rgba(165, 168, 176, 1)';
const SETTINGS_ARROW = 'rgba(83, 84, 84, 1)';

export const settingsScreenStyles = StyleSheet.create({
  container: subScreenStyles.container,
  header: subScreenStyles.header,
  backButton: subScreenStyles.backButton,
  headerTitle: subScreenStyles.headerTitle,
  scrollContent: subScreenStyles.scrollContent,
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.onboardingOuterShadow,
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: SETTINGS_BORDER,
  },
  rowIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  rowLabel: {
    flex: 1,
    fontFamily: Fonts.light,
    fontSize: 16,
    color: SETTINGS_TEXT_ICON,
  },
  rowChevron: { width: 20, height: 20 },
});

/** Passport / Family Details – same colors as Settings: border, text/icon, arrow */
const PASSPORT_BORDER = 'rgba(140, 138, 147, 1)';
const PASSPORT_TEXT_ICON = 'rgba(165, 168, 176, 1)';
const PASSPORT_ARROW = 'rgba(83, 84, 84, 1)';

export const passportScreenStyles = StyleSheet.create({
  container: subScreenStyles.container,
  header: subScreenStyles.header,
  backButton: subScreenStyles.backButton,
  headerTitle: subScreenStyles.headerTitle,
  scrollContent: subScreenStyles.scrollContent,
  sectionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
    marginTop: 24,
  },
  detailField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.signInInputBg,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PASSPORT_BORDER,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailFieldIcon: { width: 24, height: 24, marginRight: 12 },
  detailFieldPlaceholder: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: PASSPORT_TEXT_ICON,
  },
  detailFieldChevron: { width: 20, height: 20 },
  expiryRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expiryLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: PASSPORT_TEXT_ICON,
    marginBottom: 8,
  },
  expiryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.signInInputBg,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PASSPORT_BORDER,
    paddingVertical: 14,
    paddingHorizontal: 13,
    width: '60%',
  },
  expiryLabelInRow: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: PASSPORT_TEXT_ICON,
    marginRight: 12,
  },
  expiryDateText: {
    flex: 1,
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: PASSPORT_TEXT_ICON,
  },
  expiryCalendarIcon: {
    width: 24,
    height: 24,
    tintColor: 'rgba(183, 149, 85, 1)',
  },
});

/** MainLayout (drawer, header, content) */
export const mainLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onboardingBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
  },
  headerSpacer: {
    flex: 1,
  },
  headerGalleryButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 1)',
    borderRadius: 10,
  },
  headerNotificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
  },
  drawerOverlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  drawerPanel: {
    flex: 0,
    backgroundColor: 'rgba(26, 26, 26, 0.92)',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  drawerOverlayRight: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  drawerScroll: {
    flexGrow: 1,
  },
  drawerLogoWrap: {
    marginTop: 20,
    marginBottom: 24,
  },
  drawerLogo: {
    width: '100%',
    maxWidth: 220,
    height: 52,
  },
  drawerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: 'rgba(61, 61, 61, 1)',
    marginBottom: 12,
  },
  drawerUserName: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: colors.white,
    marginBottom: 4,
  },
  drawerUserEmail: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: 'rgba(165, 168, 176, 1)',
    marginBottom: 28,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    marginBottom: 8,
  },
  drawerItemIconBg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(49, 49, 51, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    shadowColor: 'rgba(49, 49, 51, 1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  drawerItemIconBgNoShadow: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(49, 49, 51, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  drawerItemIconSpace: {
    width: 40,
    height: 40,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  drawerItemIcon: {
    width: 24,
    height: 24,
  },
  drawerItemText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: colors.white,
  },
  drawerItemTextRed: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: 'rgba(255, 73, 73, 1)',
  },
});
