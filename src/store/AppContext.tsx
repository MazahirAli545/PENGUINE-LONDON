import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { theme as lightTheme, darkTheme, type Theme } from '@/styles';

type ThemeMode = 'light' | 'dark';

interface AppState {
  themeMode: ThemeMode;
  theme: Theme | typeof darkTheme;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('light');
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value: AppState = {
    themeMode,
    theme,
    setThemeMode,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
