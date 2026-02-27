import { Theme } from './theme.types';

export const THEME_SIZES: Partial<Theme> = Object.freeze({
  zIndex: {
    tooltip: 10,
    selectItems: 50,
  },
  transitions: {
    default: 'all 0.2s linear',
  },
  padding: {
    small: 5,
    big: 12,
    medium: 8,
  },
  textSize: {
    small: 0.5,
    medium: 0.9,
    big: 1.2,
  },
  media: {
    smallDevices: '(max-height: 701px)',
    otherDevices: '(min-height: 702px)',
  },
});

export const CURRENT_THEME: Theme = Object.freeze({
  color: {
    type: 'HSLA',
    hue: 0,
    saturation: 0,
    lightness: 100,
    alpha: 1,
    raw: `hsla(0, 0%, 100%, 1)`,
  },
  highlight: {
    type: 'HSLA',
    hue: 0,
    saturation: 0,
    lightness: 90.2,
    alpha: 1,
    raw: `hsla(0, 0%, 90.2%, 1)`,
  },
  text: {
    type: 'HSLA',
    hue: 0,
    saturation: 0,
    lightness: 20,
    alpha: 1,
    raw: `hsla(0, 0%, 20%, 1)`,
  },
  shadow: {
    type: 'HSLA',
    hue: 0,
    saturation: 0,
    lightness: 0.78,
    alpha: 0.4,
    raw: `hsla(0, 0%, 0.78%, 0.4)`,
  },
  ...THEME_SIZES,
} as Theme);
