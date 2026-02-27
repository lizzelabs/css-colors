import type {
  AnyValidColor,
  ColorValue,
  HEX,
  HSL,
  HSLA,
  RGB,
  RGBA,
  ValidColors,
} from '@/types';
import { CssColorsUtils } from '@/utils';

export const makeCssColorString = (
  color: AnyValidColor,
  replace: Partial<AnyValidColor>,
): string => {
  const replacedBy = CssColorsUtils.assign(
    {},
    color,
    CssColorsUtils.omitBy(
      replace,
      (value) => CssColorsUtils.isNil(value) || CssColorsUtils.isNaN(value),
    ),
  ) as AnyValidColor;

  return (
    {
      HSL: (current: HSL) =>
        `hsl(${current.hue}, ${current.saturation}%, ${current.lightness}%)`,
      HSLA: (current: HSLA) =>
        `hsla(${current.hue}, ${current.saturation}%, ${current.lightness}%, ${current.alpha})`,
      RGB: (current: RGB) =>
        `rgb(${current.red}, ${current.green}, ${current.blue})`,
      RGBA: (current: RGBA) =>
        `rgba(${current.red}, ${current.green}, ${current.blue}, ${current.alpha})`,
      HEX: (current: HEX) => current.raw,
    } satisfies { [key in ValidColors]: (current: ColorValue<key>) => string }
  )[color.type](replacedBy as any);
};
