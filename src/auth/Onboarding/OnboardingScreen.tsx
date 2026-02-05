import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, onboardingStyles } from '@/styles';
import { Images } from '@/assets/images';

export interface OnboardingScreenProps {
  stepIndex: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
}

function OnboardingSlide1() {
  return (
    <View style={onboardingStyles.content}>
      <View style={onboardingStyles.imageWrapper}>
        <Image
          source={Images.onboarding1}
          style={onboardingStyles.heroImageSlide1}
          resizeMode="contain"
          accessibilityLabel="Airplane window"
        />
      </View>
      <View style={onboardingStyles.textBlock}>
        <Text style={onboardingStyles.heading}>
          Find a relax flight for next trip
        </Text>
        <Text style={onboardingStyles.subtitle}>
          Try this smart app for your next flight booking ticket
        </Text>
      </View>
    </View>
  );
}

function OnboardingSlide2() {
  return (
    <View style={onboardingStyles.content}>
      <View style={onboardingStyles.imageWrapper}>
        <Image
          source={Images.onboarding2}
          style={onboardingStyles.heroImageSlide2}
          resizeMode="contain"
          accessibilityLabel="Explore graphic"
        />
      </View>
      <View style={onboardingStyles.textBlock}>
        <Text style={onboardingStyles.heading}>
          Big world out there,{'\n'}Go Explore
        </Text>
        <Text style={onboardingStyles.subtitle}>
          Easy to use the app for your next{'\n'}flight booking ticket
        </Text>
      </View>
    </View>
  );
}

function OnboardingSlide3() {
  return (
    <View style={onboardingStyles.content}>
      <View style={onboardingStyles.imageWrapper}>
        <Image
          source={Images.onboarding3}
          style={onboardingStyles.heroImageSlide3}
          resizeMode="contain"
          accessibilityLabel="Ready to fly"
        />
      </View>
      <View style={onboardingStyles.textBlock}>
        <Text style={onboardingStyles.heading}>
          Ready to take{'\n'}off the flight
        </Text>
        <Text style={onboardingStyles.subtitle}>
          Easy to use the app for your next{'\n'}flight booking ticket
        </Text>
      </View>
    </View>
  );
}

export function OnboardingScreen({
  stepIndex,
  totalSteps,
  onNext,
  onSkip,
}: OnboardingScreenProps) {
  const isLastSlide = stepIndex === totalSteps - 1;
  const buttonLabel = isLastSlide ? 'Get Started' : 'Next';

  const renderSlide = () => {
    switch (stepIndex) {
      case 0:
        return <OnboardingSlide1 />;
      case 1:
        return <OnboardingSlide2 />;
      case 2:
        return <OnboardingSlide3 />;
      default:
        return <OnboardingSlide1 />;
    }
  };

  return (
    <SafeAreaView
      style={onboardingStyles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.onboardingBackground}
      />
      <View style={onboardingStyles.header}>
        <TouchableOpacity
          onPress={onSkip}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={onboardingStyles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {renderSlide()}

      <View style={onboardingStyles.bottom}>
        <View style={onboardingStyles.dots}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <View
              key={i}
              style={[
                onboardingStyles.dot,
                i === stepIndex
                  ? onboardingStyles.dotActive
                  : onboardingStyles.dotInactive,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={onboardingStyles.nextButton}
          onPress={onNext}
          activeOpacity={0.85}
        >
          <Text style={onboardingStyles.nextButtonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
