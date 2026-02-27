import {
  Picker,
  SelectValue,
  WheelOutput,
  WheelOutputAccents,
} from '@/components';
import { MainPageState, Mode } from './main.types';
import { AnyValidColor, Position, Reducer, ValidColors } from '@/types';
import { Modes } from './main.static';
import { ThemeColorAccents } from '@/theme';
import { CssColorsUtils } from '@/utils';
import { CssColorsFactories } from '@/factories';

export const MainPageReducer = {
  changeMode: ({ prevState }, mode: SelectValue<Mode>) => {
    return {
      ...prevState,
      mode,
      numberOfPickers: mode.value.pickers,
      distanceBetweenEachPicker: mode.value.distanceBetweenEachOne,
    };
  },
  settingsClick: ({ prevState }) => {
    return {
      ...prevState,
      activeView: prevState.activeView === 'wheel' ? 'settings' : 'wheel',
    };
  },
  onPickersCountChange: ({ prevState }, value: number) => {
    const numberOfPickers = CssColorsUtils.getBetweenRange(value, 1, 12);
    const maxDistance = 360 / numberOfPickers;
    const distanceBetweenEachPicker = CssColorsUtils.getBetweenRange(
      prevState.distanceBetweenEachPicker,
      0,
      maxDistance,
    );

    return {
      ...prevState,
      mode: Modes.find((mode) => mode.id === 'custom'),
      numberOfPickers,
      distanceBetweenEachPicker,
    };
  },
  onSpaceBetweenPickersChange: ({ prevState }, value: number) => {
    const maxDistance = 360 / prevState.numberOfPickers;
    const distanceBetweenEachPicker = CssColorsUtils.getBetweenRange(
      value,
      0,
      maxDistance,
    );

    return {
      ...prevState,
      mode: Modes.find((mode) => mode.id === 'custom'),
      distanceBetweenEachPicker,
    };
  },
  onDarknessChange: ({ prevState }, darkness: number) => {
    return {
      ...prevState,
      darkness,
    };
  },
  onEmitWheelOutput: ({ prevState }, themes: WheelOutput[]) => {
    return {
      ...prevState,
      themes,
      selectedWheelOutputId: themes[0].id,
    };
  },
  onChangeWheelOutputAccent: (
    { prevState },
    {
      activeAccent,
      theme,
    }: { activeAccent: WheelOutputAccents; theme: WheelOutput },
  ) => {
    return {
      ...prevState,
      themes: prevState.themes.map((previousTheme) =>
        previousTheme.id === theme.id
          ? { ...theme, activeAccent }
          : previousTheme,
      ),
    };
  },
  onChangeWheelOutputApplyOn: (
    { prevState },
    { theme, applyOn }: { applyOn: ThemeColorAccents; theme: WheelOutput },
  ) => {
    return {
      ...prevState,
      themes: prevState.themes.map((previousTheme) =>
        previousTheme.id === theme.id
          ? { ...theme, applyTo: applyOn }
          : previousTheme,
      ),
    };
  },
  onChangeWheelOutputColorKind: (
    { prevState },
    { kind }: { theme: WheelOutput; kind: ValidColors },
  ) => {
    const themeAccents = [
      '100',
      '200',
      '300',
      '400',
      'main',
      '600',
      '700',
      '800',
      '900',
    ] satisfies WheelOutputAccents[];
    const apply = ['color', 'highlight', 'text', 'shadow'];

    const themes = prevState.themes.map((previousTheme) => ({
      ...previousTheme,
      ...themeAccents.reduce(
        (themeAccent, key) => ({
          ...themeAccent,
          [key]: apply.reduce(
            (current, currentApply) => ({
              ...current,
              [currentApply]: CssColorsFactories.makeCurrentColorTo(
                previousTheme[key as keyof WheelOutput][
                  currentApply as any
                ] as AnyValidColor,
                kind,
              ),
            }),
            {},
          ),
        }),
        {},
      ),
      kind,
    }));

    return {
      ...prevState,
      themes,
    };
  },
  onChangeColor: (
    { prevState },
    { theme, color }: { theme: WheelOutput; color: AnyValidColor },
  ) => {
    return {
      ...prevState,
      themes: prevState.themes.map((previousTheme) =>
        previousTheme.id === theme.id
          ? {
              ...theme,
              [theme.activeAccent]: {
                ...theme[theme.activeAccent],
                [theme.applyTo]: color,
              },
            }
          : previousTheme,
      ),
    };
  },
  selectedPickerChange: (
    { prevState },
    {
      selectedPickerIndex,
      selectedPickerId,
    }: { selectedPickerIndex: number; selectedPickerId?: string },
  ) => {
    return {
      ...prevState,
      selectedPickerId,
      selectedPickerIndex,
    };
  },
  onPickersChange: (
    { prevState },
    { pickers, darkness }: { pickers: Picker[]; darkness?: number },
  ) => {
    return {
      ...prevState,
      pickers: pickers || [],
      darkness: darkness || prevState.darkness,
    };
  },
  onSelectWheelOutput: ({ prevState }, selectedWheelOutputId: string) => {
    return {
      ...prevState,
      selectedWheelOutputId,
    };
  },
  setVisibleWheelColor: ({ prevState }, visibleColorIndex: number) => {
    return {
      ...prevState,
      visibleColorIndex,
    };
  },
  updatePickerCoordinate: (
    { prevState },
    { coordinate, darkness }: { coordinate: Position; darkness: number },
  ) => {
    return {
      ...prevState,
      pickers: prevState.pickers.map((picker, index) =>
        index === 0 ? { ...picker, ...coordinate } : picker,
      ),
      darkness,
    };
  },
} satisfies Reducer<MainPageState>;
