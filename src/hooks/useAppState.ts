import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppState(): AppStateStatus {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );
  const subscription = useRef<ReturnType<
    typeof AppState.addEventListener
  > | null>(null);

  useEffect(() => {
    subscription.current = AppState.addEventListener('change', setAppState);
    return () => {
      subscription.current?.remove();
    };
  }, []);

  return appState;
}
