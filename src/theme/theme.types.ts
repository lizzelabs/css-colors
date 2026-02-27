import { AnyValidColor } from '@/types';

export interface ThemeColor {
  color: AnyValidColor;
  text: AnyValidColor;
  shadow: AnyValidColor;
  highlight: AnyValidColor;
}

export interface Theme extends ThemeColor {
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
}

export type ThemeColorAccents = keyof ThemeColor;
