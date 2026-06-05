import { AnyValidColor } from '@/types';

export interface ThemeColor {
  color: AnyValidColor;
  text: AnyValidColor;
  shadow: AnyValidColor;
  highlight: AnyValidColor;
  success: AnyValidColor;
  warning: AnyValidColor;
  error: AnyValidColor;
  info: AnyValidColor;
  lightGrey: AnyValidColor;
  darkGrey: AnyValidColor;
  darkScreen: AnyValidColor;
  lightScreen: AnyValidColor;
  darkScreenText: AnyValidColor;
  lightScreenText: AnyValidColor;
  disabled: AnyValidColor;
  default: 'dark' | 'light';
}

export interface Theme extends ThemeColor {
  pallete: 'primary' | 'light' | 'dark';
  zIndex: {
    tooltip: number;
    selectItems: number;
  };
  transitions: {
    default: string;
  };
  padding: {
    small: number;
    medium: number;
    big: number;
  };
  textSize: {
    small: number;
    medium: number;
    big: number;
  };
  media: {
    smallDevices: string;
    otherDevices: string;
  };
  getCurrentPallete: () => {
    color: AnyValidColor;
    text: AnyValidColor;
    highlight: AnyValidColor;
    contrast: AnyValidColor;
    shadow: AnyValidColor;
  };
}

export type ThemeColorAccents = keyof Omit<ThemeColor, 'default'>;

export interface ExportedThemeCommons {
  background: string;
  text: string;
  black: string;
  white: string;
}

export interface ExportedTheme {
  common: ExportedThemeCommons;
  color: string;
  accent: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  shadow: string;
  disabled: string;
  grey: {
    dark: {
      color: string;
      disabled: string;
    };
    light: {
      color: string;
      disabled: string;
    };
  };
  text: {
    primary: {
      color: string;
      disabled: string;
    };
    secondary: {
      color: string;
      disabled: string;
    };
  };
}

export interface ExportedDarkAndLightTheme {
  dark: ExportedTheme;
  light: ExportedTheme;
}
export interface ExportedAllThemes {
  [key: string]: ExportedTheme;
}
