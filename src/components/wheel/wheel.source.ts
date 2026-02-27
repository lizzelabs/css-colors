import { CssColorsUtils } from '@/utils';
import { WheelUtils } from './wheel.utils';

const draw = CssColorsUtils.flow(
  WheelUtils.prepare,
  WheelUtils.clear,
  WheelUtils.compile,
  WheelUtils.prepareTexture,
  WheelUtils.fillColors,
  WheelUtils.draw,
  WheelUtils.bind,
);

export const WheelSource = {
  draw,
};
