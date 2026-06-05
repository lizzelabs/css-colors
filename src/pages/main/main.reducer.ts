import { Picker, SelectValue } from '@/components';
import { MainPageState, Mode } from './main.types';
import { AnyValidColor, Position, Reducer, ValidColors } from '@/types';
import { Modes } from './main.static';
import { ThemeColorAccents } from '@/theme';
import { CssColorsUtils } from '@/utils';
import { CssColorsFactories } from '@/factories';
import { ColorTheme, ColorThemeAccents } from '@/hooks';

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
  onEmitWheelOutput: ({ prevState }, colors: ColorTheme[]) => {
    return {
      ...prevState,
      themes: colors,
      selectedWheelOutputId: colors[0].id,
    };
  },
  onChangeWheelOutputAccent: (
    { prevState },
    {
      activeAccent,
      theme,
    }: { activeAccent: ColorThemeAccents; theme: ColorTheme },
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
    { theme, applyOn }: { applyOn: ThemeColorAccents; theme: ColorTheme },
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
    { kind, theme }: { theme: ColorTheme; kind: ValidColors },
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
    ] satisfies ColorThemeAccents[];
    const apply = ['color', 'highlight', 'text', 'shadow'];

    return {
      ...prevState,
      themes: prevState.themes.map((current) =>
        current.id === theme.id
          ? {
              ...theme,
              ...themeAccents.reduce(
                (themeAccent, key) => ({
                  ...themeAccent,
                  [key]: apply.reduce(
                    (applyObj, currentApply) => ({
                      ...applyObj,
                      [currentApply]: CssColorsFactories.makeCurrentColorTo(
                        current[key as keyof ColorTheme][
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
            }
          : current,
      ),
    };
  },
  onChangeColor: (
    { prevState },
    { theme, color }: { theme: ColorTheme; color: AnyValidColor },
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
  setClipboard: ({ prevState }, clipboard: ColorTheme) => {
    return {
      ...prevState,
      clipboard,
    };
  },
  updateTheme: ({ prevState }, theme: ColorTheme) => {
    return {
      ...prevState,
      themes: prevState.themes.map((current) =>
        theme.id === current.id ? theme : current,
      ),
    };
  },
  deleteTheme: ({ prevState }, theme: ColorTheme) => {
    if (prevState.themes.length <= 1) {
      return prevState;
    }

    return {
      ...prevState,
      themes: prevState.themes.filter((current) => current.id !== theme.id),
      pickers: prevState.pickers.filter((current) => current.id !== theme.id),
      mode: Modes.find((current) => current.id === 'custom'),
    };
  },
  updatePallete: ({ prevState }, pallete: 'light' | 'dark' | 'primary') => {
    return {
      ...prevState,
      pallete,
    };
  },
} satisfies Reducer<MainPageState>;
