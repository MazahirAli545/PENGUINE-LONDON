# Penguin London – App Structure

This document describes the current folder structure and purpose of each folder and key file in the Penguin London React Native app.

---

## Root

| File / Folder | Purpose |
|---------------|---------|
| **App.tsx** | Root component. Shows Splash for 2.5s, then SafeAreaProvider + AppProvider + RootNavigator. |
| **index.js** | React Native entry point. Registers the app component. |
| **package.json** | Dependencies and scripts (React Native, react-native-svg, safe-area-context, etc.). |
| **tsconfig.json** | TypeScript config; path alias `@/*` → `src/*`. |
| **babel.config.js** | Babel config; includes module-resolver for `@/` alias. |
| **metro.config.js** | Metro bundler config. |
| **app.json** | App name and config for React Native / Expo (if used). |
| **README.md** | Project readme. |
| **ANDROID_DEV.md** | Android-specific dev notes. |
| **__tests__/** | Jest tests (e.g. App.test.tsx). |
| **android/** | Android native project (Gradle, build). |
| **ios/** | iOS native project (Xcode, PenguinLondon target). |
| **patches/** | patch-package patches (e.g. react-native-svg, safe-area-context). |
| **react-native.config.js** | React Native CLI config (e.g. assets, fonts). |
| **src/** | **Main application source code** (see below). |

---

## src/

Main source directory. Uses path alias `@/` (e.g. `@/screens`, `@/components`).

| Folder / File | Purpose |
|---------------|---------|
| **index.ts** | Barrel file: re-exports assets, components, config, constants, hooks, navigation, screens, services, store, styles, types, utils. |
| **assets/** | Static assets: icons (SVG/PNG), images, fonts. |
| **components/** | Reusable UI and navigation components. |
| **config/** | Environment and app config. |
| **constants/** | API URLs, app constants. |
| **hooks/** | Custom React hooks (e.g. useDebounce, useAppState). |
| **navigation/** | Root navigator, main layout (tabs + drawer). |
| **screens/** | All app screens (Auth, Home, Quotes, Trips, Profile). |
| **services/** | API client and service layer. |
| **store/** | App context / state (AppProvider, useApp). |
| **styles/** | Global theme (colors, spacing), globalStyles. |
| **types/** | Shared TypeScript types and declarations. |
| **utils/** | Helpers (formatters, validation). |

---

## src/assets/

| Folder / File | Purpose |
|---------------|---------|
| **index.ts** | Re-exports images, fonts, icons. |
| **fonts/** | Poppins font family (.ttf). `index.ts` exports `Fonts` (regular, light, medium, semiBold, bold). |
| **icons/** | SVG strings and PNGs for UI. |
| **images/** | PNGs (onboarding), SVG logo. |

### src/assets/icons/

| File | Purpose |
|------|---------|
| **index.ts** | Exports all icon SVGs and BOTTOM_TAB_ICONS (PNG), IconNames. |
| **BackButton.ts** | Back arrow SVG (quotes header). |
| **FlightIcon.ts** | Plane SVG (flight path). |
| **flightTakeOffLine.ts** | Dashed line + dots SVG (flight path). |
| **Hamburger.ts** | Hamburger menu SVG. |
| **GalleryIcon.ts** | Gallery/image SVG. |
| **EyeIcon.ts**, **EyeCloseIcon.ts** | Password visibility (SignIn). |
| **GoggleIcon.ts**, **AppleIcon.ts** | Social login icons. |
| **AeroPlane.ts** | Alternative plane SVG. |
| **YellowLine.ts** | Gold line SVG. |
| **png/** | house.png, aeroplane.png, calendar.png, profile.png (bottom tab bar). |

### src/assets/images/

| Folder / File | Purpose |
|---------------|---------|
| **index.ts** | Exports `Images` (onboarding PNGs). |
| **png/** | Onboarding-1.png, Onboarding-2.png, Onboarding-3.png. |
| **svg/logoWhiteSvg.ts** | Penguin London logo SVG (Quotes screen). |

---

## src/components/

| Folder / File | Purpose |
|---------------|---------|
| **index.ts** | Re-exports ui, common, navigation. |
| **common/** | ScreenContainer and other shared layout. |
| **navigation/** | BottomTabBar. |
| **ui/** | Button, AppText. |

### src/components/common/

| File | Purpose |
|------|---------|
| **index.ts** | Exports ScreenContainer. |
| **ScreenContainer.tsx** | Wrapper for screens: SafeAreaView, padding, optional scroll. |

### src/components/navigation/

| File | Purpose |
|------|---------|
| **index.ts** | Exports BottomTabBar, BottomTabBarProps, BottomTabKey. |
| **BottomTabBar.tsx** | Bottom tab bar: Home, Quotes, Trips, Profile. Active tab = black pill + icon + label (horizontal). Inactive = icon only. Straight top border. |

### src/components/ui/

| File | Purpose |
|------|---------|
| **index.ts** | Exports Button, AppText. |
| **Button.tsx** | Reusable button component. |
| **AppText.tsx** | Reusable text component. |

---

## src/config/

| File | Purpose |
|------|---------|
| **index.ts** | Re-exports env. |
| **env.ts** | Environment variables / config. |

---

## src/constants/

| File | Purpose |
|------|---------|
| **index.ts** | Re-exports config, api. |
| **config.ts** | App constants. |
| **api.ts** | API base URLs / endpoints. |

---

## src/hooks/

| File | Purpose |
|------|---------|
| **index.ts** | Exports useDebounce, useDebouncedCallback, useAppState. |
| **useDebounce.ts** | Debounce value or callback. |
| **useAppState.ts** | React to app foreground/background. |

---

## src/navigation/

| File | Purpose |
|------|---------|
| **index.ts** | Exports RootNavigator, MainLayout, types. |
| **RootNavigator.tsx** | Auth flow: Onboarding → SignIn/SignUp → MainLayout (after sign-in). No React Navigation; conditional render by state. |
| **MainLayout.tsx** | Post-login layout: header (hamburger + gallery; hidden on Quotes), content (tab screen), BottomTabBar, drawer modal. Tabs: home, quotes, trips, profile. |
| **types.ts** | RootStackParamList, ReactNavigation RootParamList. |

---

## src/screens/

All app screens. Exported from `src/screens/index.ts`.

| Folder | Purpose |
|--------|---------|
| **Auth/** | Splash, Onboarding, SignIn, SignUp. |
| **Home/** | Home tab: trip cards (Flights, Hotel, Car). |
| **Quotes/** | Quotes tab: itinerary summary (Flights, Hotel, Ground Transport, Other), total, Accept/Reject. |
| **Trips/** | Trips tab (placeholder). |
| **Profile/** | Profile tab (placeholder). |

### src/screens/Auth/

| File | Purpose |
|------|---------|
| **index.ts** | Exports SignInScreen, SignUpScreen, SplashScreen, OnboardingScreen and their prop types. |
| **Splash/SplashScreen.tsx** | Full-screen splash (logo, dark theme). |
| **Splash/index.ts** | Exports SplashScreen. |
| **Onboarding/OnboardingScreen.tsx** | 3-step onboarding carousel; Skip, Next, final CTA. |
| **Onboarding/styles.ts** | Onboarding styles. |
| **Onboarding/index.ts** | Exports OnboardingScreen, OnboardingScreenProps. |
| **SignIn/SignInScreen.tsx** | Email/password sign-in; links to SignUp; on success navigates to MainLayout. |
| **SignIn/styles.ts** | Sign-in form styles. |
| **SignIn/index.ts** | Exports SignInScreen, SignInScreenProps. |
| **SignUp/SignUpScreen.tsx** | Sign-up form; Back, Terms, Privacy, Create Account, Google. |
| **SignUp/styles.ts** | Sign-up form styles. |
| **SignUp/index.ts** | Exports SignUpScreen, SignUpScreenProps. |

### src/screens/Home/

| File | Purpose |
|------|---------|
| **index.ts** | Exports HomeScreen. |
| **HomeScreen.tsx** | “Upcoming Trip” section; renders list of trip cards from defaultTripData (or future API). |
| **styles.ts** | homeScreenStyles: card, labels, route row, flight path, prices, etc. |
| **types.ts** | FlightItem, HotelItem, CarLimousineItem, TripItem. |
| **defaultTripData.ts** | Mock TripItem[] (flights, hotel, car). |
| **FlightCard.tsx** | Card: FLIGHTS label, origin ↔ destination (dashed line + plane), DATE & TIME, TICKET PRICE. |
| **HotelCard.tsx** | Card: HOTEL label, hotel name, ticket price, check-in/out, guests, hotel price. |
| **CarLimousineCard.tsx** | Card: CAR LIMOUSINE placeholder. |

### src/screens/Quotes/

| File | Purpose |
|------|---------|
| **index.ts** | Exports QuotesScreen. |
| **QuotesScreen.tsx** | Header (back, “Quotes” centered, gallery), Penguin logo + tagline, ScrollView with QuoteCards (FLIGHTS with date at top, HOTEL, GROUND TRANSPORT, OTHER), TOTAL, Accept/Reject buttons. Uses QuoteCard wrapper; only FLIGHTS has showDateAtTop (12 DECEMBER, 2025). |
| **styles.ts** | quotesScreenStyles: header, logo, cards, cardDateInCard, flight path, total, buttons. |

### src/screens/Trips/

| File | Purpose |
|------|---------|
| **index.ts** | Exports TripsScreen. |
| **TripsScreen.tsx** | Placeholder “Trips” screen. |

### src/screens/Profile/

| File | Purpose |
|------|---------|
| **index.ts** | Exports ProfileScreen. |
| **ProfileScreen.tsx** | Placeholder “Profile” screen. |

---

## src/services/

| File | Purpose |
|------|---------|
| **index.ts** | Re-exports api. |
| **api/index.ts** | Re-exports client. |
| **api/client.ts** | API HTTP client (e.g. axios/fetch base). |

---

## src/store/

| File | Purpose |
|------|---------|
| **index.ts** | Exports AppProvider, useApp. |
| **AppContext.tsx** | React Context for app-level state; AppProvider and useApp hook. |

---

## src/styles/

| File | Purpose |
|------|---------|
| **index.ts** | Re-exports theme, globalStyles. |
| **theme.ts** | colors (onboardingPrimary, onboardingBackground, etc.), spacing, typography, borderRadius. |
| **globalStyles.ts** | Global style helpers if any. |

---

## src/types/

| File | Purpose |
|------|---------|
| **index.ts** | Nullable, Optional, BaseResponse, PaginatedResponse. |
| **images.d.ts** | Declarations for image imports (e.g. require('.png')). |
| **svg.d.ts** | Declarations for SVG imports if needed. |

---

## src/utils/

| File | Purpose |
|------|---------|
| **index.ts** | Re-exports formatters, validation. |
| **formatters.ts** | Data formatting helpers. |
| **validation.ts** | Validation helpers. |

---

## Flow Summary

1. **App.tsx** → Splash (2.5s) → SafeAreaProvider + AppProvider + **RootNavigator**.
2. **RootNavigator** → Not signed in: **Onboarding** → **SignIn** / **SignUp** → on success: **MainLayout**. Signed in: **MainLayout**.
3. **MainLayout** → Header (hamburger + gallery; hidden on Quotes) + content (tab) + **BottomTabBar** + drawer modal. Content: **HomeScreen** | **QuotesScreen** | **TripsScreen** | **ProfileScreen**.
4. **QuotesScreen** has its own header (back, “Quotes”, gallery) and logo; back switches tab to Home.

---

## Screens at a Glance

| Screen | Route / Trigger | Main content |
|--------|------------------|--------------|
| SplashScreen | App load, 2.5s | Logo, dark theme |
| OnboardingScreen | After splash, before sign-in | 3 slides, Skip/Next |
| SignInScreen | After onboarding / from SignUp | Email, password, Sign In, Sign Up link |
| SignUpScreen | From SignIn | Sign-up form, Back, Create Account |
| HomeScreen | Tab “Home” | Upcoming Trip, Flight/Hotel/Car cards |
| QuotesScreen | Tab “Quotes” | Header + logo, FLIGHTS (with date), HOTEL, Ground Transport, Other, Total, Accept/Reject |
| TripsScreen | Tab “Trips” | Placeholder |
| ProfileScreen | Tab “Profile” | Placeholder |

This file is the single reference for the current folder and file structure of the Penguin London app.
