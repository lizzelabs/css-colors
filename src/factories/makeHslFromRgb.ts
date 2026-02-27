import type { HSL, RGB } from '@/types';
import { CssColorsUtils } from '@/utils';

const calculeHueFrom = (
  max: number,
  difference: number,
  red: number,
  green: number,
  blue: number,
): number => {
  let hue = 0;

  if (difference !== 0) {
    switch (max) {
      case red:
        hue = (((green - blue) / difference) % 6) * 60;
        break;
      case green:
        hue = ((blue - red) / difference + 2) * 60;
        break;
      case blue:
        hue = ((red - green) / difference + 4) * 60;
        break;
    }
  }

  return hue < 0 ? Math.round((hue += 360)) : Math.round(hue);
};

const normalizeRgb = ({ red, green, blue }: Omit<RGB, 'raw'> | RGB): RGB => {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  return {
    type: 'RGB',
    red: r,
    green: g,
    blue: b,
    raw: `rgb(${r}, ${g}, ${b})`,
  };
};

export const makeHslFromRgb = (color: RGB): HSL => {
  const { red, green, blue } = normalizeRgb(color);
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const difference = max - min;
  const hue = calculeHueFrom(max, difference, red, green, blue);
  const lightness = CssColorsUtils.round(((max + min) / 2) * 100, 2);
  const saturation =
    difference === 0
      ? 0
      : CssColorsUtils.round(
          (difference / (1 - Math.abs(2 * (lightness / 100) - 1))) * 100,
          2,
        );
  const raw = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return {
    type: 'HSL',
    hue,
    saturation,
    lightness,
    raw,
  };
};
