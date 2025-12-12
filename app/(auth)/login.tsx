/**
 * Login Screen
 * Modern AI-style design with glass effects
 */

import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { Input } from '@/components/ui/Input';
import { darkColors, lightColors, spacing, typography } from '@/constants/theme';
import { useAuth } from '@/contexts/AuthContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Mohon isi email dan password');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Login Gagal', error instanceof Error ? error.message : 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={
        colorScheme === 'dark' 
          ? ['#000000', '#1A1A2E', '#16213E'] 
          : ['#F8F9FA', '#E9ECEF', '#DEE2E6']
      }
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <LinearGradient
                colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.logoGradient}
              >
                <Text style={styles.logo}>💰</Text>
              </LinearGradient>
            </View>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Selamat Datang
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Masuk untuk mengelola keuangan Anda
            </Text>
          </View>

          {/* Glass Card Form */}
          <GlassCard intensity={100} padding={spacing.lg}>
            <View style={styles.form}>
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="nama@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />

              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Masukkan password"
                secureTextEntry
                autoComplete="password"
              />

              <Button
                onPress={handleLogin}
                loading={loading}
                style={styles.loginButton}
              >
                Masuk
              </Button>

              <Button
                variant="outlined"
                onPress={() => router.push('/(auth)/register')}
                style={styles.registerButton}
              >
                Belum punya akun? Daftar
              </Button>
            </View>
          </GlassCard>

          {/* Footer */}
          <Text style={[styles.footer, { color: colors.textTertiary }]}>
            Kelola keuangan dengan mudah dan aman
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoContainer: {
    marginBottom: spacing.lg,
  },
  logoGradient: {
    width: 100,
    height: 100,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logo: {
    fontSize: 56,
  },
  title: {
    ...typography.headlineLarge,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyLarge,
    textAlign: 'center',
    maxWidth: 280,
  },
  form: {
    width: '100%',
  },
  loginButton: {
    marginTop: spacing.lg,
  },
  registerButton: {
    marginTop: spacing.md,
  },
  footer: {
    ...typography.bodySmall,
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
