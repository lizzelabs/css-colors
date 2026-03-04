import { useCallback, useEffect } from 'react';
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

export const useColorInput = <T extends ValidColors>({
  value,
  type,
  onChange,
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

  return {
    value: value,
    onHexInputChange,
    onRgbInputChange,
    onHslInputChange,
  };
};
