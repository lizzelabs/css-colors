import type { AnyColor, HSL, HSLA, RGB, RGBA } from '@/types';
import { makeInvalidColor } from './makeInvalidColor';

export const makeColorFromString = (color?: string): AnyColor => {
  if (!color) {
    return makeInvalidColor();
  }

  if (color.length <= 3) {
    return makeInvalidColor();
  }

  const separators = [',', ' '];
  const colorAsLowerCase = color.toLowerCase();
  const isHex = /^#?([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(
    color,
  );

  const isRgb =
    colorAsLowerCase.includes('rgb') ||
    colorAsLowerCase.includes('rgba') ||
    separators
      .flatMap((separator) => colorAsLowerCase.split(separator))
      .some((value) => value.includes('%') === false) === false;

  const isHsl =
    colorAsLowerCase.includes('hsl') ||
    separators
      .flatMap((separator) => colorAsLowerCase.split(separator))
      .some((value) => value.includes('%'));

  if (isHex === false && isRgb === false && isHsl === false) {
    return makeInvalidColor();
  }

  const safeValue = colorAsLowerCase
    .replace('#', '')
    .replace('rgba', '')
    .replace('rgb', '')
    .replace('hsl', '')
    .replace('hsla', '')
    .replace('(', '')
    .replace(')', '');

  if (isHex) {
    return {
      type: 'HEX',
      raw: `#${safeValue.toUpperCase()}`,
    };
  }

  const splitResult = separators
    .map((separator) => safeValue.split(separator))
    .filter((values) => values.length > 1)[0]
    .map((value) => +value.replace(/[^0-9.]+/g, ''));

  if (isRgb) {
    const [r, g, b, a] = splitResult;
    const hasAlpha = a !== undefined;
    const red = r || 0;
    const green = g || 0;
    const blue = b || 0;
    const alpha = a || 1;

    return {
      type: hasAlpha ? 'RGBA' : 'RGB',
      red,
      green,
      blue,
      ...(hasAlpha
        ? { alpha, raw: `rgba(${red}, ${green}, ${blue}, ${alpha})` }
        : { raw: `rgb(${red}, ${green}, ${blue})` }),
    } as RGBA | RGB;
  } else {
    const [h, s, l, a] = splitResult;
    const hasAlpha = a !== undefined;
    const hue = h || 0;
    const saturation = s || 0;
    const lightness = l || 0;
    const alpha = a || 1;

    return {
      type: hasAlpha ? 'HSLA' : 'HSL',
      hue,
      saturation,
      lightness,
      ...(hasAlpha
        ? {
            alpha,
            raw: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
          }
        : { raw: `hsl(${hue}, ${saturation}%,  ${lightness}%)` }),
    } as HSL | HSLA;
  }
};
