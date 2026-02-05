import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { colors, signUpStyles } from '@/styles';
import {
  BACK_BUTTON_SVG,
  GOOGLE_ICON_SVG,
  APPLE_ICON_SVG,
  EYE_ICON_SVG,
  EYE_CLOSE_ICON_SVG,
} from '@/assets/icons';

const BACK_BUTTON_SVG_FIXED = BACK_BUTTON_SVG.replace(
  'fill-rule',
  'fillRule',
).replace('clip-rule', 'clipRule');
const EYE_ICON_SVG_FIXED = EYE_ICON_SVG.replace('stroke-width', 'strokeWidth')
  .replace('stroke-linecap', 'strokeLinecap')
  .replace('stroke-linejoin', 'strokeLinejoin');
const EYE_CLOSE_ICON_SVG_FIXED = EYE_CLOSE_ICON_SVG.replace(
  'stroke-width',
  'strokeWidth',
)
  .replace('stroke-linecap', 'strokeLinecap')
  .replace('stroke-linejoin', 'strokeLinejoin');

export interface SignUpScreenProps {
  onBack?: () => void;
  onLogin?: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onCreateAccount?: (
    email: string,
    password: string,
    agreedToTerms: boolean,
  ) => void;
  onGoogleSignUp?: () => void;
  onAppleSignUp?: () => void;
}

export function SignUpScreen({
  onBack,
  onLogin,
  onTerms,
  onPrivacy,
  onCreateAccount,
  onGoogleSignUp,
  onAppleSignUp,
}: SignUpScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <SafeAreaView
      style={signUpStyles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.onboardingBackground}
      />
      <View style={signUpStyles.header}>
        <TouchableOpacity
          style={signUpStyles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <SvgXml xml={BACK_BUTTON_SVG_FIXED} width={40} height={40} />
        </TouchableOpacity>
        <Text style={signUpStyles.headerTitle}>Registration</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={signUpStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={signUpStyles.title}>Create{'\n'}Account</Text>

          <Text style={signUpStyles.label}>Your Email</Text>
          <TextInput
            style={signUpStyles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.signInPlaceholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={signUpStyles.label}>Password</Text>
          <View style={signUpStyles.passwordRow}>
            <View style={{ flex: 1, position: 'relative' }}>
              <TextInput
                style={[signUpStyles.passwordInput, { paddingRight: 48 }]}
                placeholder="Enter password"
                placeholderTextColor={colors.signInPlaceholder}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={[
                  signUpStyles.eyeButton,
                  { position: 'absolute', right: 12, top: 14 },
                ]}
                onPress={() => setShowPassword(v => !v)}
                activeOpacity={0.7}
              >
                <SvgXml
                  xml={
                    showPassword ? EYE_CLOSE_ICON_SVG_FIXED : EYE_ICON_SVG_FIXED
                  }
                  width={24}
                  height={24}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={signUpStyles.termsRow}>
            <TouchableOpacity
              style={[
                signUpStyles.checkbox,
                agreedToTerms && signUpStyles.checkboxChecked,
              ]}
              onPress={() => setAgreedToTerms(v => !v)}
              activeOpacity={0.7}
            >
              {agreedToTerms && (
                <Text
                  style={{
                    color: colors.onboardingButtonText,
                    fontSize: 12,
                    fontWeight: '700',
                  }}
                >
                  ✓
                </Text>
              )}
            </TouchableOpacity>
            <Text style={signUpStyles.termsText}>
              I agree to the{' '}
              <Text style={signUpStyles.termsLink} onPress={onTerms}>
                Terms & Conditions
              </Text>{' '}
              and{' '}
              <Text style={signUpStyles.termsLink} onPress={onPrivacy}>
                Privacy Policy
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={signUpStyles.createAccountButton}
            onPress={() => onCreateAccount?.(email, password, agreedToTerms)}
            activeOpacity={0.85}
          >
            <Text style={signUpStyles.createAccountButtonText}>
              Create account
            </Text>
          </TouchableOpacity>

          <View style={signUpStyles.orRow}>
            <View style={signUpStyles.orLine} />
            <Text style={signUpStyles.orText}>or</Text>
            <View style={signUpStyles.orLine} />
          </View>

          <TouchableOpacity
            style={signUpStyles.socialButton}
            onPress={onGoogleSignUp}
            activeOpacity={0.85}
          >
            <SvgXml xml={GOOGLE_ICON_SVG} width={24} height={24} />
            <Text style={signUpStyles.socialButtonText}>
              Sign up with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={signUpStyles.socialButton}
            onPress={onAppleSignUp}
            activeOpacity={0.85}
          >
            <SvgXml xml={APPLE_ICON_SVG} width={24} height={24} />
            <Text style={signUpStyles.socialButtonText}>
              Sign up with Apple
            </Text>
          </TouchableOpacity>

          <View style={signUpStyles.footer}>
            <Text style={signUpStyles.footerText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={onLogin} activeOpacity={0.7}>
              <Text style={signUpStyles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
