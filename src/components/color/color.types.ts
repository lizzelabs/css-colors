import { ThemeColor, ThemeColorAccents } from '@/theme';
import { AnyValidColor, ValidColors } from '@/types';
import { ColorTheme, ColorThemeAccents } from '@/hooks';
import { RefObject } from 'react';
import { SelectValue } from '../select';

export interface ColorProps {
  theme: ColorTheme;
  selected?: boolean;
  onSelect: (theme: ColorTheme) => void;
  onChangeAccent: (theme: ColorTheme, accent: ColorThemeAccents) => void;
  onChangeApplyOn: (theme: ColorTheme, applyOn: ThemeColorAccents) => void;
  onChangeColorKind: (theme: ColorTheme, kind: ValidColors) => void;
  onColorChange: (theme: ColorTheme, color: AnyValidColor) => void;
  onDelete: (theme: ColorTheme) => void;
  onVisible: () => void;
  onChangeTitle: (theme: ColorTheme) => void;
  showClose?: boolean;
}

export interface UseColorResult {
  mode: 'dark' | 'light';
  titleRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLElement | null>;
  color: AnyValidColor;
  applyTo: SelectValue<keyof ThemeColor>;
  colorAccent: SelectValue<
    'main' | '100' | '200' | '300' | '400' | '600' | '700' | '800' | '900'
  >;
  kind: SelectValue<ValidColors>;
  onChangeActiveAccent: (
    value: SelectValue<
      'main' | '100' | '200' | '300' | '400' | '600' | '700' | '800' | '900'
    >,
  ) => void;
  onChangeApply: (value: SelectValue<keyof ThemeColor>) => void;
  onChangeColorKind: (value: SelectValue<ValidColors>) => void;
  onColorChange: (value: AnyValidColor) => void;
  onCopy: () => Promise<void>;
  onExport: () => void;
  onClick: () => void;
  onModeChange: () => void;
  onDelete: () => void;
}
