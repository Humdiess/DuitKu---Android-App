/**
 * GlassCard Component
 * Premium frosted glass effect with blur
 */

import { borderRadius, darkColors, elevation, lightColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BlurView } from 'expo-blur';
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface GlassCardProps {
  children: ReactNode;
  style?: ViewStyle;
  intensity?: number;
  padding?: number;
}

export function GlassCard({ 
  children, 
  style, 
  intensity = 90,
  padding = 16 
}: GlassCardProps) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  return (
    <View style={[styles.container, style]}>
      <BlurView
        intensity={intensity}
        tint={colorScheme === 'dark' ? 'dark' : 'light'}
        style={[
          styles.blurContainer,
          {
            backgroundColor: colors.glassBgHeavy,
            borderColor: colors.glassBorder,
            padding,
          },
          elevation.level2,
        ]}
      >
        {children}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  blurContainer: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
  },
});
