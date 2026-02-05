/**
 * PENGUIN LONDON - Root component.
 * Shows splash screen first, then main app (SafeArea + providers + navigator).
 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from '@/auth';
import { AppProvider } from '@/store';
import { RootNavigator } from '@/navigation';

const SPLASH_DURATION_MS = 2500;

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#222222" />
        <SplashScreen />
      </>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppProvider>
        <RootNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;
