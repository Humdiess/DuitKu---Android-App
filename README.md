# DuitKu - Personal Finance Manager

![Platform](https://img.shields.io/badge/Platform-Android-green)
![Framework](https://img.shields.io/badge/Framework-React%20Native%20Expo-blue)
![Design](https://img.shields.io/badge/Design-Material%20Design%203-purple)

DuitKu adalah aplikasi manajemen keuangan pribadi yang modern dan intuitif, dibangun dengan React Native Expo dan mengadopsi Material Design 3 (Material You) dengan inspirasi dari Samsung One UI.

## ✨ Fitur Utama

- 📊 **Dashboard Interaktif** - Lihat ringkasan keuangan Anda dengan visualisasi yang jelas
- 💰 **Manajemen Transaksi** - Catat pemasukan dan pengeluaran dengan mudah
- 🏷️ **Kategori Kustom** - Buat dan kelola kategori transaksi dengan icon dan warna pilihan
- 💵 **Budget Tracking** - Atur dan pantau budget per kategori dengan alert otomatis
- 📈 **Laporan Keuangan** - Analisis pengeluaran dengan grafik dan statistik detail
- 🌙 **Dark Mode** - Dukungan penuh untuk mode gelap yang nyaman di mata
- 🔐 **Autentikasi Aman** - Login dan registrasi dengan enkripsi token

## 🎨 Design System

Aplikasi ini menggunakan **Material Design 3** (Material You) dengan inspirasi dari **Samsung One UI**:

- **Color Palette**: Material You dynamic colors dengan primary blue (#A8C7FA untuk dark, #0061A4 untuk light)
- **Typography**: Material Design Type Scale dengan font Roboto
- **Elevation**: Material Design elevation system (5 levels)
- **Spacing**: 8dp grid system untuk konsistensi layout
- **Components**: Material Design 3 components dengan ripple effects
- **Status Bar**: Solid background dengan proper spacing (tidak transparan)
- **Margins**: Konsisten 16dp horizontal margins di semua halaman

## 🚀 Tech Stack

### Frontend (Mobile)
- **React Native** - Framework untuk cross-platform mobile development
- **Expo** - Development platform untuk React Native
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Routing dan navigasi
- **TanStack Query** - Data fetching dan caching
- **AsyncStorage** - Local storage untuk token dan data

### Backend
- **Laravel 11** - PHP framework untuk REST API
- **MySQL** - Database relational
- **JWT Authentication** - Token-based authentication

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **Android Studio** (untuk Android emulator) atau perangkat Android fisik

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/duitku.git
cd duitku
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Buat file `.env` di root project dan tambahkan:

```env
EXPO_PUBLIC_API_BASE_URL=https://duitku.agriconnect.my.id/api/v1
```

Sesuaikan URL dengan backend API Anda.

### 4. Run Development Server

```bash
# Start Expo development server
npx expo start

# Atau untuk langsung ke Android
npm run android
```

## 📂 Project Structure

```
DuitKu/
├── app/                      # Expo Router pages
│   ├── (auth)/              # Authentication screens
│   ├── (tabs)/              # Main app tabs
│   ├── modals/              # Modal screens
│   └── _layout.tsx          # Root layout
├── components/              # Reusable components
│   └── ui/                  # UI components
├── constants/               # Constants and theme
│   └── theme.ts            # Material Design 3 theme
├── contexts/               # React contexts
├── services/               # API services
└── utils/                  # Utility functions
```

## 🎯 Key Features

### Dashboard
- Total pemasukan, pengeluaran, dan saldo
- Grafik perubahan keuangan
- 5 transaksi terbaru
- Quick actions

### Transactions
- Filter berdasarkan tipe
- Pull-to-refresh
- Detail transaksi per kategori

### Categories
- Kategori custom dengan icon dan warna
- Statistik per kategori
- Pisah pemasukan dan pengeluaran

### Budgets
- Set budget per kategori
- Progress bar dengan color coding
- Alert threshold

## 🔐 Authentication

Menggunakan JWT token-based authentication dengan Laravel backend.

## 📄 License

MIT License

## 👨‍💻 Developer

Developed with ❤️ for personal finance management

---

**Note**: Aplikasi ini masih dalam tahap pengembangan aktif.
