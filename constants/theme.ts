/**
 * App color system
 * - Base colors (design tokens)
 * - Theme colors (light / dark)
 */

import { Platform } from 'react-native';

/* ================= BASE COLORS ================= */

export const BaseColors = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#9BA1A6',
  lightGrey: '#F0F0F0',
  errorRed: '#F44336',

  primaryBlue: '#5475E3',
  primaryBlueDark: '#5475E3',

  lightBackground: '#F5F5F5',
};

/* ================= THEME COLORS ================= */

export const Colors = {
  ...BaseColors,
  light: {
    text: '#11181C',
    background: BaseColors.white,
    tint: BaseColors.primaryBlue,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: BaseColors.primaryBlue,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: BaseColors.white,
    icon: BaseColors.grey,
    tabIconDefault: BaseColors.grey,
    tabIconSelected: BaseColors.white,
  },
};

/* ================= FONTS ================= */

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
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
