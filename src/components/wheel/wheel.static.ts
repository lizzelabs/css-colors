import { WheelOutputAccents } from './wheel.types';

export const LIGHTNESS_MAP: Record<
  Exclude<WheelOutputAccents, 'main'>,
  number
> = {
  100: 0.9,
  200: 0.8,
  300: 0.7,
  400: 0.6,
  600: 0.42,
  700: 0.34,
  800: 0.26,
  900: 0.18,
};

export const SATURATION_MAP: Record<
  Exclude<WheelOutputAccents, 'main'>,
  number
> = {
  100: 0.6,
  200: 0.75,
  300: 0.9,
  400: 0.95,
  600: 1.05,
  700: 1.07,
  800: 1.08,
  900: 1.1,
};
