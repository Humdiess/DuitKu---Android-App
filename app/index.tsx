/**
 * Splash Screen
 * Modern animated splash screen with gradient
 */

import { darkColors, lightColors, spacing, typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function SplashScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkColors : lightColors;
  
  // Animation values
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animated sequence
    Animated.sequence([
      // Logo appears with scale
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Glow effect
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      // Text fades in
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate after animation
      setTimeout(() => {
        router.replace('/(auth)/login');
      }, 800);
    });
  }, []);

  return (
    <LinearGradient
      colors={
        colorScheme === 'dark'
          ? ['#000000', '#1A1A2E', '#16213E', '#0F3460']
          : ['#F8F9FA', '#E9ECEF', '#DEE2E6', '#CED4DA']
      }
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Animated Glow */}
        <Animated.View
          style={[
            styles.glow,
            {
              opacity: glowOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <LinearGradient
            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.glowGradient}
          />
        </Animated.View>

        {/* Animated Logo */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <LinearGradient
            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoGradient}
          >
            <Text style={styles.logo}>💰</Text>
          </LinearGradient>
        </Animated.View>

        {/* Animated Text */}
        <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
          <Text style={[styles.appName, { color: colors.textPrimary }]}>
            DuitKu
          </Text>
          <Text style={[styles.tagline, { color: colors.textSecondary }]}>
            Kelola Keuangan dengan Mudah
          </Text>
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View style={[styles.footer, { opacity: textOpacity }]}>
        <Text style={[styles.footerText, { color: colors.textTertiary }]}>
          Powered by Modern AI Design
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  glowGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    opacity: 0.3,
  },
  logoContainer: {
    marginBottom: spacing.xl,
  },
  logoGradient: {
    width: 140,
    height: 140,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  logo: {
    fontSize: 72,
  },
  textContainer: {
    alignItems: 'center',
  },
  appName: {
    ...typography.displaySmall,
    fontWeight: '800',
    marginBottom: spacing.xs,
    letterSpacing: -1,
  },
  tagline: {
    ...typography.bodyLarge,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: spacing.xxl,
  },
  footerText: {
    ...typography.bodySmall,
    letterSpacing: 0.5,
  },
});
