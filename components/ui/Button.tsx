/**
 * Button Components
 * Modern gradient buttons with glass effects
 */

import { borderRadius, darkColors, elevation, lightColors, typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import {
    ActivityIndicator,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle
} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({
  children,
  onPress,
  variant = 'filled',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  const isFilled = variant === 'filled';
  const isOutlined = variant === 'outlined';

  if (isFilled) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        android_ripple={{ 
          color: 'rgba(255, 255, 255, 0.3)',
          borderless: false,
        }}
        style={({ pressed }) => [
          styles.button,
          disabled && styles.disabled,
          Platform.OS === 'ios' && pressed && styles.pressed,
          style,
        ]}
      >
        <LinearGradient
          colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradientButton, elevation.level2]}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={[styles.text, styles.filledText, textStyle]}>
              {children}
            </Text>
          )}
        </LinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      android_ripple={{ 
        color: colors.ripple,
        borderless: false,
      }}
      style={({ pressed }) => [
        styles.button,
        isOutlined && {
          backgroundColor: colors.glassBg,
          borderWidth: 1.5,
          borderColor: colors.glassBorder,
        },
        variant === 'text' && {
          backgroundColor: 'transparent',
        },
        disabled && styles.disabled,
        Platform.OS === 'ios' && pressed && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <Text
          style={[
            styles.text,
            { color: colors.primary },
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  text: {
    ...typography.labelLarge,
    fontWeight: '600',
  },
  filledText: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
});
