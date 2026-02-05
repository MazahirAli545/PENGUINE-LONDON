/**
 * Icon asset exports or icon name constants.
 * SVG for header/auth; PNG for bottom tab bar (use with tintColor for active/inactive).
 */

export { BACK_BUTTON_SVG } from './BackButton';
export { GOOGLE_ICON_SVG } from './GoggleIcon';
export { APPLE_ICON_SVG } from './AppleIcon';
export { EYE_ICON_SVG } from './EyeIcon';
export { EYE_CLOSE_ICON_SVG } from './EyeCloseIcon';
export { HAMBURGER_ICON_SVG } from './Hamburger';
export { GALLERY_ICON_SVG } from './GalleryIcon';
export { AERO_PLANE_ICON_SVG } from './AeroPlane';
export { FLIGHT_ICON_SVG } from './FlightIcon';
export { FLIGHT_TAKE_OFF_LINE_SVG } from './flightTakeOffLine';
export { CODICON_ICON as NOTIFICATION_ICON_SVG } from './codicon';
export { EDIT_ICON } from './editIcons';
export { SETTING_ICON } from './setting';
export { USER_ICON } from './userIcon';
export { KEY_ICON } from './key';
export { CAMERA_ICON } from './camera';
export { MORE_ICON } from './more';
export { FAQ_ICON } from './faq';
export { LIGHTNING_ICON } from './lightning';
export { THUMBUP_ICON } from './thumbup';
export { LOGOUT_ICON } from './logout';
export { CHEVRON_RIGHT_ICON } from './chevronRight';
export { IMAGE_PLACEHOLDER_ICON } from './imagePlaceholder';
export { PAINT_ICON } from './paint';
export { DOWNLOAD_ICON } from './download';
export { CALENDAR_ICON } from './calender';

/** Bottom tab bar icons (PNG) – use tintColor for active (gold) / inactive (grey). */
export const BOTTOM_TAB_ICONS = {
  home: require('./png/house.png'),
  quotes: require('./png/aeroplane.png'),
  trips: require('./png/calendar.png'),
  profile: require('./png/profile.png'),
} as const;

/** Drawer menu icons (PNG) – mail, user, trips. */
export const DRAWER_ICONS = {
  mail: require('./png/mail.png'),
  user: require('./png/user.png'),
  trips: require('./png/trips.png'),
} as const;

export const IconNames = {
  home: 'home',
  profile: 'person',
  settings: 'settings',
  back: 'arrow-back',
  close: 'close',
} as const;

export type IconName = (typeof IconNames)[keyof typeof IconNames];
