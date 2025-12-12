/**
 * Modern Glass UI Theme
 * Vibrant colors with glass effects and gradients
 */

import { Platform, StatusBar } from 'react-native';

// Dark Mode Colors (Premium Glass Design)
export const darkColors = {
  // Backgrounds
  bgBase: '#000000',
  bgElevated: '#0A0A0A',
  bgSurface: '#1A1A1A',
  
  // Glass Effects
  glassBg: 'rgba(255, 255, 255, 0.05)',
  glassBgHeavy: 'rgba(255, 255, 255, 0.1)',
  glassBorder: 'rgba(255, 255, 255, 0.15)',
  
  // Text
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.5)',
  
  // Primary Gradient (Indigo to Purple)
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  primaryLight: '#8B5CF6',
  primaryGradientStart: '#6366F1',
  primaryGradientEnd: '#8B5CF6',
  onPrimary: '#FFFFFF',
  
  // Accent Colors (Vibrant)
  accentColor: '#6366F1',
  accentSecondary: '#8B5CF6',
  
  // System Colors (Bright & Clear)
  systemGreen: '#10B981',
  systemRed: '#EF4444',
  systemOrange: '#F59E0B',
  systemYellow: '#FBBF24',
  systemBlue: '#3B82F6',
  
  // Surface & Borders
  separator: 'rgba(255, 255, 255, 0.1)',
  outline: 'rgba(255, 255, 255, 0.2)',
  
  // Ripple effect
  ripple: 'rgba(255, 255, 255, 0.15)',
};

// Light Mode Colors (Clean & Modern)
export const lightColors = {
  // Backgrounds
  bgBase: '#FAFAFA',
  bgElevated: '#FFFFFF',
  bgSurface: '#F5F5F5',
  
  // Glass Effects
  glassBg: 'rgba(255, 255, 255, 0.7)',
  glassBgHeavy: 'rgba(255, 255, 255, 0.85)',
  glassBorder: 'rgba(0, 0, 0, 0.08)',
  
  // Text
  textPrimary: '#0A0A0A',
  textSecondary: 'rgba(0, 0, 0, 0.6)',
  textTertiary: 'rgba(0, 0, 0, 0.4)',
  
  // Primary Gradient (Indigo to Purple)
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  primaryLight: '#8B5CF6',
  primaryGradientStart: '#6366F1',
  primaryGradientEnd: '#8B5CF6',
  onPrimary: '#FFFFFF',
  
  // Accent Colors
  accentColor: '#6366F1',
  accentSecondary: '#8B5CF6',
  
  // System Colors (Bright & Clear)
  systemGreen: '#10B981',
  systemRed: '#EF4444',
  systemOrange: '#F59E0B',
  systemYellow: '#FBBF24',
  systemBlue: '#3B82F6',
  
  // Surface & Borders
  separator: 'rgba(0, 0, 0, 0.08)',
  outline: 'rgba(0, 0, 0, 0.15)',
  
  // Ripple effect
  ripple: 'rgba(0, 0, 0, 0.1)',
};

// Typography (Material Design Type Scale)
export const typography = {
  // Font Family
  fontFamily: Platform.select({
    ios: 'System',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Display
  displayLarge: {
    fontSize: 57,
    fontWeight: '400' as const,
    letterSpacing: -0.25,
    lineHeight: 64,
  },
  displayMedium: {
    fontSize: 45,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontSize: 36,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 44,
  },
  
  // Headline
  headlineLarge: {
    fontSize: 32,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontSize: 28,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontSize: 24,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 32,
  },
  
  // Title
  titleLarge: {
    fontSize: 22,
    fontWeight: '500' as const,
    letterSpacing: 0,
    lineHeight: 28,
  },
  titleMedium: {
    fontSize: 16,
    fontWeight: '500' as const,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: '500' as const,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  
  // Body
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400' as const,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400' as const,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as const,
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  
  // Label
  labelLarge: {
    fontSize: 14,
    fontWeight: '500' as const,
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  labelSmall: {
    fontSize: 11,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
};

// Spacing (8dp grid system)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Status Bar Height
export const statusBarHeight = Platform.select({
  android: StatusBar.currentHeight || 24,
  ios: 44,
  default: 24,
});

// Border Radius
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 9999,
};

// Elevation (for depth)
export const elevation = {
  level0: {
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  level1: {
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  level2: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },
  level3: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  level4: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  level5: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
};

// Export default theme
export const Colors = {
  light: lightColors,
  dark: darkColors,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'System',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  android: {
    sans: 'Roboto',
    serif: 'serif',
    rounded: 'Roboto',
    mono: 'monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
