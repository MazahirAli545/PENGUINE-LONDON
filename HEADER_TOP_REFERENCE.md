# Where to change header distance from top

Use this as a reference when you want to move the header up or down on each screen.

---

## 1. Home screen, Trips screen, Profile screen

**Same header** is used for all three; it’s rendered in **MainLayout**.

| What to change                | File                            | Location     |
| ----------------------------- | ------------------------------- | ------------ |
| Extra padding below safe area | `src/navigation/MainLayout.tsx` | **Line 125** |

**Code:**

```tsx
style={[mainLayoutStyles.header, { paddingTop: insets.top + 12 }]}
```

- Change **`12`** to move the header:
  - Larger value (e.g. `16`, `20`) → header further from top.
  - Smaller value (e.g. `8`, `4`) → header closer to top.

---

## 2. Quotes screen

Quotes has its **own header** inside **QuotesScreen**.

| What to change        | File                              | Location        |
| --------------------- | --------------------------------- | --------------- |
| Top padding of header | `src/app/Quotes/QuotesScreen.tsx` | **Lines 54–55** |

**Code:**

```tsx
style={[
  quotesScreenStyles.header,
  { paddingTop: Math.max(insets.top, 14) },
]}
```

- To add extra space below the safe area, use something like `paddingTop: insets.top + 14` and then change **`14`** to the value you want.
- Or keep `Math.max(insets.top, 14)` and change **`14`** to set the minimum top padding.

---

## 3. Hamburger modal (drawer) screen

Two places control how far the drawer content is from the top.

### 3a. Drawer panel top padding

| What to change                             | File                            | Location     |
| ------------------------------------------ | ------------------------------- | ------------ |
| Space from top of screen to drawer content | `src/navigation/MainLayout.tsx` | **Line 200** |

**Code:**

```tsx
paddingTop: insets.top + 40,
```

- Change **`40`** to move the whole drawer content (logo, profile, menu items) up or down.

### 3b. Space above the Penguin logo inside the drawer

| What to change              | File                       | Location                                |
| --------------------------- | -------------------------- | --------------------------------------- |
| Extra margin above the logo | `src/styles/components.ts` | **Line 1236** (inside `drawerLogoWrap`) |

**Code:**

```tsx
drawerLogoWrap: {
  marginTop: 24,
  marginBottom: 24,
}
```

- Change **`marginTop: 24`** to add more or less space above the penguin/logo inside the drawer.

---

## Summary table

| Screen            | File                           | What to change                         |
| ----------------- | ------------------------------ | -------------------------------------- |
| Home              | `MainLayout.tsx` line 125      | `insets.top + 12` → change `12`        |
| Trips             | `MainLayout.tsx` line 125      | Same as Home                           |
| Profile           | `MainLayout.tsx` line 125      | Same as Home                           |
| Quotes            | `QuotesScreen.tsx` lines 54–55 | `paddingTop: Math.max(insets.top, 14)` |
| Hamburger (panel) | `MainLayout.tsx` line 200      | `insets.top + 40` → change `40`        |
| Hamburger (logo)  | `components.ts` ~line 1236     | `drawerLogoWrap.marginTop: 24`         |
