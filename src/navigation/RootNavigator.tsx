import React, { useState, useCallback } from 'react';
import { OnboardingScreen, SignInScreen, SignUpScreen } from '@/auth';
import { MainLayout } from './MainLayout';

const ONBOARDING_TOTAL_STEPS = 3;

type AuthScreen = 'signin' | 'signup';

export function RootNavigator() {
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>('signin');

  const handleOnboardingNext = useCallback(() => {
    if (onboardingStep + 1 < ONBOARDING_TOTAL_STEPS) {
      setOnboardingStep(s => s + 1);
    } else {
      setHasCompletedOnboarding(true);
    }
  }, [onboardingStep]);

  const handleOnboardingSkip = useCallback(() => {
    setHasCompletedOnboarding(true);
  }, []);

  const handleBackToOnboarding = useCallback(() => {
    setHasCompletedOnboarding(false);
    setOnboardingStep(0);
  }, []);

  if (!hasCompletedOnboarding) {
    return (
      <OnboardingScreen
        stepIndex={onboardingStep}
        totalSteps={ONBOARDING_TOTAL_STEPS}
        onNext={handleOnboardingNext}
        onSkip={handleOnboardingSkip}
      />
    );
  }

  if (!isSignedIn) {
    if (authScreen === 'signup') {
      return (
        <SignUpScreen
          onBack={() => setAuthScreen('signin')}
          onLogin={() => setAuthScreen('signin')}
          onTerms={() => {}}
          onPrivacy={() => {}}
          onCreateAccount={() => setIsSignedIn(true)}
          onGoogleSignUp={() => setIsSignedIn(true)}
          onAppleSignUp={() => setIsSignedIn(true)}
        />
      );
    }
    return (
      <SignInScreen
        onBack={handleBackToOnboarding}
        onForgotPassword={() => {}}
        onSignUp={() => setAuthScreen('signup')}
        onLogin={() => setIsSignedIn(true)}
        onGoogleSignIn={() => setIsSignedIn(true)}
        onAppleSignIn={() => setIsSignedIn(true)}
      />
    );
  }

  return <MainLayout />;
}
