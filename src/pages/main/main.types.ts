import {
  Picker,
  SelectValue,
  WheelColor,
  WheelComputedSize,
} from '@/components';
import { ColorTheme, ColorThemeAccents } from '@/hooks';
import { Theme, ThemeColorAccents } from '@/theme';
import { AnyValidColor, State, ValidColors } from '@/types';
import { RefObject } from 'react';

export interface Mode {
  type:
    | 'monochromatic'
    | 'complementary'
    | 'analogous'
    | 'triad'
    | 'tetradic'
    | 'square'
    | 'pentadic'
    | 'hexadic'
    | 'fullspectrum'
    | 'custom';
  pickers: number;
  distanceBetweenEachOne: number;
  freeMove: boolean;
}

export interface MainPageState extends State {
  mode: SelectValue<Mode>;
  activeView: 'wheel' | 'settings';
  numberOfPickers: number;
  distanceBetweenEachPicker: number;
  darkness: number;
  pickers: Picker[];
  themes: ColorTheme[];
  selectedPickerIndex: number;
  selectedPickerId?: string;
  selectedWheelOutputId?: string;
  visibleColorIndex: number;
  clipboard?: ColorTheme[];
  pallete: 'primary' | 'light' | 'dark';
}

export type UseMain = {
  selectedTheme: Theme;
  colorsSection: RefObject<HTMLElement>;
  wheelSection: RefObject<HTMLElement>;
  settingsSection: RefObject<HTMLElement>;
  wheelContainer: RefObject<HTMLDivElement>;
  state: MainPageState;
  computed: WheelComputedSize;
  onModeChange: (mode: SelectValue<Mode>) => void;
  onSettingsClick: () => void;
  onSelectPallete: (pallete: 'light' | 'dark' | 'primary') => () => void;
  onPickerNumberChange: (value: number) => void;
  onSpaceBetweenEachPickerChange: (value: number) => void;
  onDarknessChange: (value: number) => void;
  onEmitWheelOutput: (value: WheelColor[]) => void;
  onChangeWheelOutputAccent: (
    theme: ColorTheme,
    activeAccent: ColorThemeAccents,
  ) => void;
  onChangeWheelOutputApplyOn: (
    theme: ColorTheme,
    applyOn: ThemeColorAccents,
  ) => void;
  onChangeWheelOutputColorKind: (theme: ColorTheme, kind: ValidColors) => void;
  onChangeWheelOutputColor: (theme: ColorTheme, color: AnyValidColor) => void;
  onSelectedPickerChange: (
    selectedPickerIndex: number,
    selectedPickerId?: string,
  ) => void;
  onPickersMove: (value: Picker[]) => void;
  onSelectWheelOutput: (value: ColorTheme) => void;
  onVisibleWheelColorChange: (value: number) => () => void;
  onChangeThemeTitle: (theme: ColorTheme) => void;
  onDeleteTheme: (theme: ColorTheme) => void;
  goTo: (ref: RefObject<HTMLElement | null>) => () => void;
};
