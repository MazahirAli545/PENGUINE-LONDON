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
import { colors, signInStyles } from '@/styles';
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

export interface SignInScreenProps {
  onBack?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  onLogin?: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
  onAppleSignIn?: () => void;
}

export function SignInScreen({
  onBack,
  onForgotPassword,
  onSignUp,
  onLogin,
  onGoogleSignIn,
  onAppleSignIn,
}: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView
      style={signInStyles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.onboardingBackground}
      />
      <View style={signInStyles.header}>
        <TouchableOpacity
          style={signInStyles.backButton}
          onPress={onBack}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <SvgXml xml={BACK_BUTTON_SVG_FIXED} width={40} height={40} />
        </TouchableOpacity>
        <Text style={signInStyles.headerTitle}>Login</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={signInStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={signInStyles.welcome}>Welcome{'\n'}Back!</Text>

          <Text style={signInStyles.label}>Your Email</Text>
          <TextInput
            style={signInStyles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.signInPlaceholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={signInStyles.label}>Password</Text>
          <View style={signInStyles.passwordRow}>
            <View style={{ flex: 1, position: 'relative' }}>
              <TextInput
                style={[signInStyles.passwordInput, { paddingRight: 48 }]}
                placeholder="Enter password"
                placeholderTextColor={colors.signInPlaceholder}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={[
                  signInStyles.eyeButton,
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
          <TouchableOpacity
            onPress={onForgotPassword}
            activeOpacity={0.7}
            style={{ alignSelf: 'flex-end', marginBottom: 24 }}
          >
            <Text style={signInStyles.forgetPassword}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={signInStyles.loginButton}
            onPress={() => onLogin?.(email, password)}
            activeOpacity={0.85}
          >
            <Text style={signInStyles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={signInStyles.orRow}>
            <View style={signInStyles.orLine} />
            <Text style={signInStyles.orText}>or</Text>
            <View style={signInStyles.orLine} />
          </View>

          <TouchableOpacity
            style={signInStyles.socialButton}
            onPress={onGoogleSignIn}
            activeOpacity={0.85}
          >
            <SvgXml xml={GOOGLE_ICON_SVG} width={24} height={24} />
            <Text style={signInStyles.socialButtonText}>
              Sign up with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={signInStyles.socialButton}
            onPress={onAppleSignIn}
            activeOpacity={0.85}
          >
            <SvgXml xml={APPLE_ICON_SVG} width={24} height={24} />
            <Text style={signInStyles.socialButtonText}>
              Sign up with Apple
            </Text>
          </TouchableOpacity>

          <View style={signInStyles.footer}>
            <Text style={signInStyles.footerText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={onSignUp} activeOpacity={0.7}>
              <Text style={signInStyles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
