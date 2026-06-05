import { Luminance, RGBA } from '@/types';

export const makeRgbaFromLuminance = (
  luminance: Luminance,
  alpha: number,
): RGBA => {
  const red = luminance.red * 255;
  const green = luminance.green * 255;
  const blue = luminance.blue * 255;
  const raw = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return {
    type: 'RGBA',
    red,
    green,
    blue,
    alpha,
    raw,
  };
};
