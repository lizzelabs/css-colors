import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { MainPageReducer } from './main.reducer';
import { MainPageState, Mode, UseMain } from './main.types';
import { Modes } from './main.static';
import {
  Picker,
  SelectValue,
  useNotification,
  useWheel,
  WheelOutput,
  WheelOutputAccents,
} from '@/components';
import { CssColorsFactories } from '@/factories';
import { useClipboard, useObserveResize } from '@/hooks';
import { Theme, THEME_SIZES, ThemeColorAccents } from '@/theme';
import { AnyValidColor, ValidColors } from '@/types';
import { usePieceProvider } from '@lizzelabs/react-harmony';
import { CssColorsUtils } from '@/utils';

export const useMain = (): UseMain => {
  const { info } = useNotification();
  const pasteColorPrevious = useRef('');
  const wheelContainer = useRef<HTMLDivElement>(null);
  const wheelSection = useRef<HTMLElement>(null);
  const colorsSection = useRef<HTMLElement>(null);
  const settingsSection = useRef<HTMLElement>(null);
  const clipboard = useClipboard();
  const initialMode = Modes.find(
    (mode) => mode.id === 'monochromatic',
  ) as SelectValue<Mode>;
  const { width, height } = useObserveResize(wheelContainer, {
    width: 250,
    height: 250,
  });
  const wheel = useWheel();
  const computed = useMemo(
    () => wheel.calculeSizes({ width, height }),
    [width, height, wheel.calculeSizes],
  );

  const { updateTheme } = usePieceProvider();

  const [state, dispatch] = useReducer(
    CssColorsFactories.makeReducer<MainPageState, any, typeof MainPageReducer>(
      MainPageReducer,
      {},
    ),
    {
      selectedPickerIndex: -1,
      selectedPickerId: undefined,
      darkness: 0.5,
      mode: initialMode,
      activeView: 'wheel',
      numberOfPickers: initialMode.value.pickers,
      distanceBetweenEachPicker: initialMode.value.distanceBetweenEachOne,
      pickers: wheel.makePickers(
        initialMode.value.pickers,
        initialMode.value.distanceBetweenEachOne,
        computed,
      ),
      themes: [],
      visibleColorIndex: 0,
    },
  );

  const selectedWheelColor = useMemo(
    () =>
      state.themes.find((theme) => theme.id === state.selectedWheelOutputId),
    [state.themes, state.selectedWheelOutputId],
  );

  const selectedTheme = useMemo(
    () =>
      selectedWheelColor
        ? CssColorsUtils.assign(
            {} as Theme,
            THEME_SIZES,
            selectedWheelColor[selectedWheelColor?.activeAccent || 'main'],
          )
        : undefined,
    [selectedWheelColor],
  );

  const goTo = useCallback(
    (ref: RefObject<HTMLElement | null>) => () => {
      const section = ref.current;

      if (section === null) {
        return;
      }

      section.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  const onEmitWheelOutput = useCallback((value: WheelOutput[]) => {
    dispatch({ type: 'onEmitWheelOutput', value });
  }, []);

  const onModeChange = useCallback(
    (value: SelectValue<Mode>) => {
      dispatch({
        type: 'changeMode',
        value,
      });
    },
    [computed],
  );

  const onSettingsClick = useCallback(() => {
    dispatch({ type: 'settingsClick', value: null });
  }, []);

  const onPickerNumberChange = useCallback((value: number) => {
    dispatch({
      type: 'onPickersCountChange',
      value,
    });
  }, []);

  const onSpaceBetweenEachPickerChange = useCallback((value: number) => {
    dispatch({
      type: 'onSpaceBetweenPickersChange',
      value,
    });
  }, []);

  const onDarknessChange = useCallback((value: number) => {
    dispatch({ type: 'onDarknessChange', value });
  }, []);

  const onChangeWheelOutputAccent = useCallback(
    (theme: WheelOutput, activeAccent: WheelOutputAccents) => {
      dispatch({
        type: 'onChangeWheelOutputAccent',
        value: { theme, activeAccent },
      });
    },
    [],
  );

  const onChangeWheelOutputApplyOn = useCallback(
    (theme: WheelOutput, applyOn: ThemeColorAccents) => {
      dispatch({
        type: 'onChangeWheelOutputApplyOn',
        value: { theme, applyOn },
      });
    },
    [],
  );

  const onChangeWheelOutputColorKind = useCallback(
    (theme: WheelOutput, kind: ValidColors) => {
      dispatch({
        type: 'onChangeWheelOutputColorKind',
        value: { theme, kind },
      });
    },
    [],
  );

  const onChangeWheelOutputColor = useCallback(
    (theme: WheelOutput, color: AnyValidColor) => {
      dispatch({
        type: 'onChangeColor',
        value: { theme, color },
      });
    },
    [],
  );

  const onSelectWheelOutput = useCallback((value: WheelOutput) => {
    dispatch({ type: 'onSelectWheelOutput', value: value.id });
  }, []);

  const onSelectedPickerChange = useCallback(
    (selectedPickerIndex: number, selectedPickerId?: string) => {
      dispatch({
        type: 'selectedPickerChange',
        value: { selectedPickerIndex, selectedPickerId },
      });
    },
    [],
  );

  const onPickersMove = useCallback((pickers: Picker[]) => {
    dispatch({ type: 'onPickersChange', value: { pickers } });
  }, []);

  const onVisibleWheelColorChange = useCallback(
    (value: number) => () => {
      dispatch({ type: 'setVisibleWheelColor', value });
    },
    [],
  );

  const pasteColor = useCallback(
    (color: AnyValidColor) => () => {
      const hsl = CssColorsFactories.makeCurrentColorTo(color, 'HSL');
      const coordinate = CssColorsUtils.hslToCoordinates(
        hsl,
        computed.center,
        computed.radius,
      );

      dispatch({
        type: 'onPickersChange',
        value: {
          pickers: wheel.makePickers(
            state.numberOfPickers,
            state.distanceBetweenEachPicker,
            computed,
            coordinate,
          ),
          darkness: CssColorsUtils.round(hsl.lightness / 100, 1),
        },
      });
    },
    [computed, wheel, state.numberOfPickers, state.distanceBetweenEachPicker],
  );

  useEffect(
    function updatePickers() {
      dispatch({
        type: 'onPickersChange',
        value: {
          pickers: wheel.makePickers(
            state.numberOfPickers,
            state.distanceBetweenEachPicker,
            computed,
          ),
        },
      });
    },
    [state.numberOfPickers, state.distanceBetweenEachPicker, computed],
  );

  useEffect(
    function onSelectedThemeChange() {
      if (selectedTheme) {
        updateTheme(selectedTheme);
      }
    },
    [selectedTheme],
  );

  useEffect(
    function onClipboardChange() {
      const color = CssColorsFactories.makeColorFromString(clipboard);

      if (color.type === 'INVALID') {
        return;
      }

      if (wheel.isColorPresent(color, state.themes)) {
        return;
      }

      if (pasteColorPrevious.current === color.raw) {
        return;
      }

      pasteColorPrevious.current = color.raw;

      info('I found a color on your clipboard, Do you want to paste it ?', {
        permanent: true,
        action: pasteColor(color),
        actionName: 'Paste it!',
      });
    },
    [clipboard, info, state.themes, pasteColor],
  );

  return {
    settingsSection,
    colorsSection,
    wheelSection,
    wheelContainer,
    state,
    computed,
    onModeChange,
    onSettingsClick,
    onPickerNumberChange,
    onSpaceBetweenEachPickerChange,
    onDarknessChange,
    onEmitWheelOutput,
    onChangeWheelOutputAccent,
    onChangeWheelOutputApplyOn,
    onChangeWheelOutputColorKind,
    onChangeWheelOutputColor,
    onSelectedPickerChange,
    onPickersMove,
    onSelectWheelOutput,
    onVisibleWheelColorChange,
    goTo,
  };
};
