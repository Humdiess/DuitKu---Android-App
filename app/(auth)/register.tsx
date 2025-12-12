/**
 * Register Screen
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

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Mohon isi semua field');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password tidak cocok');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password minimal 6 karakter');
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Registrasi Gagal', error instanceof Error ? error.message : 'Terjadi kesalahan');
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
              Buat Akun Baru
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              Mulai kelola keuangan Anda dengan mudah
            </Text>
          </View>

          {/* Glass Card Form */}
          <GlassCard intensity={100} padding={spacing.lg}>
            <View style={styles.form}>
              <Input
                label="Nama Lengkap"
                value={name}
                onChangeText={setName}
                placeholder="Masukkan nama lengkap"
                autoComplete="name"
              />

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
                placeholder="Minimal 6 karakter"
                secureTextEntry
                autoComplete="password-new"
              />

              <Input
                label="Konfirmasi Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Masukkan ulang password"
                secureTextEntry
                autoComplete="password-new"
              />

              <Button
                onPress={handleRegister}
                loading={loading}
                style={styles.registerButton}
              >
                Daftar
              </Button>

              <Button
                variant="outlined"
                onPress={() => router.back()}
                style={styles.loginButton}
              >
                Sudah punya akun? Masuk
              </Button>
            </View>
          </GlassCard>

          {/* Footer */}
          <Text style={[styles.footer, { color: colors.textTertiary }]}>
            Dengan mendaftar, Anda menyetujui syarat & ketentuan
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
    paddingVertical: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  logoContainer: {
    marginBottom: spacing.md,
  },
  logoGradient: {
    width: 80,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  logo: {
    fontSize: 48,
  },
  title: {
    ...typography.headlineMedium,
    fontWeight: '700',
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.bodyMedium,
    textAlign: 'center',
    maxWidth: 280,
  },
  form: {
    width: '100%',
  },
  registerButton: {
    marginTop: spacing.lg,
  },
  loginButton: {
    marginTop: spacing.md,
  },
  footer: {
    ...typography.bodySmall,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
