import type { RGB, RGBA } from '@/types';

export interface RGBInputProps<T extends boolean> {
  value?: T extends true ? RGBA : RGB;
  onChange?: (value: T extends true ? RGBA : RGB) => void;
  hasAlpha: T;
  highlight: string;
  text: string;
}
