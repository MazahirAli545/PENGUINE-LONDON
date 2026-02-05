# Android development – "Unable to load script" fix

## Node version (important)

React Native 0.83 expects **Node 20+**. If you're on Node 18, Metro may fail with `toReversed is not a function` or `styleText is not a function`. This project includes patches so Metro works on Node 18; for best results, upgrade to Node 20 or 22 (LTS): [nodejs.org](https://nodejs.org).

## Quick fix (do this every time you develop)

1. **Start Metro first** (leave this terminal open):

   ```bash
   npm run start:android
   ```

   This runs `adb reverse tcp:8081 tcp:8081` and starts Metro on `0.0.0.0:8081` so the emulator can connect.

2. **In a second terminal, run the app:**

   ```bash
   npm run android
   ```

3. If you still see **"Unable to load script"**, on the device/emulator:
   - Press **Ctrl+M** (or shake the device) to open the **Dev Menu**
   - Tap **Settings** → **Debug server host & port for device**
   - Set it to your PC’s IP and port, e.g. **`192.168.1.100:8081`** (use your actual IP from `ipconfig`)
   - Go back and tap **Reload**

## Why this happens

The app loads the JavaScript bundle from Metro on port 8081. If Metro isn’t running, or the emulator/device can’t reach your PC on 8081, you get "Unable to load script".

- **Emulator:** `adb reverse tcp:8081 tcp:8081` forwards the device’s port 8081 to your PC.
- **Metro on 0.0.0.0:** So it accepts connections from the emulator (and from your PC).
- **Physical device on Wi‑Fi:** Use **Debug server host & port** set to your PC’s IP (e.g. `192.168.x.x:8081`).

## Install failed: TimeoutException / Failed to install on any devices

If you see **PropertyFetcher: TimeoutException** or **ShellCommandUnresponsiveException** and **Failed to install on any devices**:

1. **Restart ADB** (in a terminal):

   ```bash
   adb kill-server
   adb start-server
   ```

2. **Ensure the emulator is fully booted** – wait until the home screen is visible and responsive before running `npx react-native run-android`.

3. **Cold boot the emulator** – in Android Studio: Device Manager → ⋮ on your AVD → **Cold Boot Now**. Then run the app again.

4. **ADB timeout** – This project sets `adbOptions.timeOutInMs = 120000` (2 minutes) in `android/app/build.gradle` so slow emulators have more time. If it still times out, try a different AVD or a physical device.

5. **"Could not find build of variant which supports density 560 and an ABI"** – Usually happens because the device was skipped due to the timeout above. Fix the ADB/emulator responsiveness first; `gradle.properties` already builds for `x86_64` (emulator) and `arm64-v8a`.

## Scripts

| Script                  | What it does                                               |
| ----------------------- | ---------------------------------------------------------- |
| `npm run start:android` | Runs `adb reverse` and starts Metro with `--host 0.0.0.0`  |
| `npm run start`         | Starts Metro with `--host 0.0.0.0` (no adb reverse)        |
| `npm run android:dev`   | Runs `adb reverse` then `react-native run-android`         |
| `npm run android`       | Builds and runs the app (Metro must be running separately) |
