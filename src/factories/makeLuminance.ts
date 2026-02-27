import type { AnyValidColor, Luminance } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';

export const makeLuminance = (color: AnyValidColor): Luminance => {
  const rgba = makeCurrentColorTo(color, 'RGBA');
  const toLin = (value: number) => {
    const by255 = value / 255;
    return by255 <= 0.03928
      ? by255 / 12.92
      : Math.pow((by255 + 0.055) / 1.055, 2.4);
  };

  const r = toLin(rgba.red) * 0.2126;
  const g = toLin(rgba.green) * 0.7152;
  const b = toLin(rgba.blue) * 0.0722;

  return {
    red: r,
    green: g,
    blue: b,
    total: r + g + b,
  };
};
