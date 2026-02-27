import {
  Picker,
  SelectValue,
  WheelComputedSize,
  WheelOutput,
  WheelOutputAccents,
} from '@/components';
import { ThemeColorAccents } from '@/theme';
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
  themes: WheelOutput[];
  selectedPickerIndex: number;
  selectedPickerId?: string;
  selectedWheelOutputId?: string;
  visibleColorIndex: number;
}

export type UseMain = {
  colorsSection: RefObject<HTMLElement>;
  wheelSection: RefObject<HTMLElement>;
  settingsSection: RefObject<HTMLElement>;
  wheelContainer: RefObject<HTMLDivElement>;
  state: MainPageState;
  computed: WheelComputedSize;
  onModeChange: (mode: SelectValue<Mode>) => void;
  onSettingsClick: () => void;
  onPickerNumberChange: (value: number) => void;
  onSpaceBetweenEachPickerChange: (value: number) => void;
  onDarknessChange: (value: number) => void;
  onEmitWheelOutput: (value: WheelOutput[]) => void;
  onChangeWheelOutputAccent: (
    theme: WheelOutput,
    activeAccent: WheelOutputAccents,
  ) => void;
  onChangeWheelOutputApplyOn: (
    theme: WheelOutput,
    applyOn: ThemeColorAccents,
  ) => void;
  onChangeWheelOutputColorKind: (theme: WheelOutput, kind: ValidColors) => void;
  onChangeWheelOutputColor: (theme: WheelOutput, color: AnyValidColor) => void;
  onSelectedPickerChange: (
    selectedPickerIndex: number,
    selectedPickerId?: string,
  ) => void;
  onPickersMove: (value: Picker[]) => void;
  onSelectWheelOutput: (value: WheelOutput) => void;
  onVisibleWheelColorChange: (value: number) => () => void;
  goTo: (ref: RefObject<HTMLElement | null>) => () => void;
};
