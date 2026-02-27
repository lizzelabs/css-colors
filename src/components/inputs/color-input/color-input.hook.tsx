import { JSX, useCallback, useEffect, useMemo } from 'react';
import { CssColorsFactories } from '@/factories';
import type {
  ValidColors,
  ColorValue,
  HEX,
  RGB,
  RGBA,
  HSL,
  HSLA,
} from '@/types';
import { ColorInputProps, UseColorInput } from './color-input.types';
import { HexInput } from '../hex-input';
import { RgbInput } from '../rgb-input';
import { HslInput } from '../hsl-input';

export const useColorInput = <T extends ValidColors>({
  value,
  type,
  onChange,
  highlight,
  text,
}: ColorInputProps<T>): UseColorInput<T> => {
  useEffect(
    function onTypeChange() {
      if (value?.type !== type) {
        onChange(
          CssColorsFactories.makeCurrentColorTo(value as ColorValue<T>, type),
        );
      }
    },
    [type, onChange, value],
  );

  const onHexInputChange = useCallback(
    (value: HEX) => {
      onChange(value as ColorValue<T>);
    },
    [onChange],
  );

  const onRgbInputChange = useCallback(
    (value: RGB | RGBA) => {
      onChange(value as ColorValue<T>);
    },
    [onChange],
  );

  const onHslInputChange = useCallback(
    (value: HSL | HSLA) => {
      onChange(value as ColorValue<T>);
    },
    [onChange],
  );

  const input = useMemo(() => {
    const InputMap = {
      HEX: (
        <HexInput
          key='hex'
          hex={value as HEX}
          onChange={onHexInputChange}
          text={text}
          highlight={highlight}
        ></HexInput>
      ),
      RGB: (
        <RgbInput
          key='rgb'
          value={value as RGB}
          onChange={onRgbInputChange}
          hasAlpha={false}
          text={text}
          highlight={highlight}
        ></RgbInput>
      ),
      RGBA: (
        <RgbInput
          key='rgba'
          value={value as RGBA}
          onChange={onRgbInputChange}
          hasAlpha={true}
          text={text}
          highlight={highlight}
        ></RgbInput>
      ),
      HSL: (
        <HslInput
          key='hsl'
          value={value as HSL}
          onChange={onHslInputChange}
          hasAlpha={false}
          text={text}
          highlight={highlight}
        ></HslInput>
      ),
      HSLA: (
        <HslInput
          key='hsl'
          value={value as HSLA}
          onChange={onHslInputChange}
          hasAlpha={true}
          text={text}
          highlight={highlight}
        ></HslInput>
      ),
    };

    return InputMap[type] as JSX.Element;
  }, [
    value,
    text,
    highlight,
    onHexInputChange,
    onRgbInputChange,
    onHslInputChange,
  ]);

  return {
    input,
    value: value,
    onHexInputChange,
    onRgbInputChange,
    onHslInputChange,
  };
};
