import type { HSL, HSLA } from '@/types';

export interface HSLInputProps<
  HasAlpha extends boolean,
  T = HasAlpha extends true ? HSLA : HSL,
> {
  value?: T;
  hasAlpha: HasAlpha;
  onChange?: (value: T) => void;
  text: string;
  highlight: string;
}
