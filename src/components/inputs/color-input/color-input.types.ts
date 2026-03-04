import type {
  ColorValue,
  HEX,
  HSL,
  HSLA,
  RGB,
  RGBA,
  ValidColors,
} from '@/types';

export interface ColorInputProps<T extends ValidColors> {
  type: T;
  onChange: (value: ColorValue<T>) => void;
  value?: ColorValue<T>;
  color: string;
  highlight: string;
  text: string;
}

export interface UseColorInput<T extends ValidColors> {
  value: ColorValue<T> | undefined;
  onHexInputChange: (value: HEX) => void;
  onRgbInputChange: (value: RGB | RGBA) => void;
  onHslInputChange: (value: HSLA | HSL) => void;
}
