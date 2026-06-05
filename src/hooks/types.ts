import { ThemeColor, ThemeColorAccents } from '@/theme';
import { ValidColors } from '@/types';

export interface ColorTheme {
  id: string;
  title: string;
  main: ThemeColor;
  '100': ThemeColor;
  '200': ThemeColor;
  '300': ThemeColor;
  '400': ThemeColor;
  '600': ThemeColor;
  '700': ThemeColor;
  '800': ThemeColor;
  '900': ThemeColor;
  kind: ValidColors;
  applyTo: ThemeColorAccents;
  activeAccent: ColorThemeAccents;
}

export type ColorThemeAccents = keyof Omit<
  ColorTheme,
  'id' | 'activeAccent' | 'applyTo' | 'kind' | 'title'
>;
