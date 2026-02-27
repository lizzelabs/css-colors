import { flow } from './flow';
import { newId } from './newId';
import { getBetweenRange } from './getBetweenRange';
import { round } from './round';
import { Logs } from './log';
import { isNaN, isNil, omitBy, throttle, assign } from './lodash';
import { readClipboard } from './readClipboard';
import { hslToCoordinates } from './hslToCoordinates';
import { getBrowser } from './getBrowser';

export * from './types';

export const CssColorsUtils = {
  Logs,
  flow,
  newId,
  getBetweenRange,
  round,
  isNaN,
  isNil,
  omitBy,
  throttle,
  assign,
  readClipboard,
  hslToCoordinates,
  getBrowser,
};
