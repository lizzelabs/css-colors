import { ValidColors } from '@/types';
import { SelectValue } from '../select';
import { WheelOutputAccents } from '../wheel';
import { ThemeColorAccents } from '@/theme';

export const KindColor: SelectValue<ValidColors>[] = [
  {
    id: 'hex',
    display: 'HEX',
    value: 'HEX',
  },
  {
    id: 'hsl',
    display: 'HSL',
    value: 'HSL',
  },
  {
    id: 'hsla',
    display: 'HSLA',
    value: 'HSLA',
  },
  {
    id: 'rgb',
    display: 'RGB',
    value: 'RGB',
  },
  {
    id: 'rgba',
    display: 'RGBA',
    value: 'RGBA',
  },
];

export const ColorAccents: SelectValue<WheelOutputAccents>[] = [
  {
    id: 'main',
    display: 'Main',
    value: 'main',
  },
  {
    id: '100',
    display: '100',
    value: '100',
  },
  {
    id: '200',
    display: '200',
    value: '200',
  },
  {
    id: '300',
    display: '300',
    value: '300',
  },
  {
    id: '400',
    display: '400',
    value: '400',
  },
  {
    id: '600',
    display: '600',
    value: '600',
  },
  {
    id: '700',
    display: '700',
    value: '700',
  },
  {
    id: '800',
    display: '800',
    value: '800',
  },
  {
    id: '900',
    display: '900',
    value: '900',
  },
];

export const ApplyTo: SelectValue<ThemeColorAccents>[] = [
  {
    id: 'color',
    display: 'Color',
    value: 'color',
  },
  {
    id: 'highlight',
    display: 'Highlight',
    value: 'highlight',
  },
  {
    id: 'text',
    display: 'Text',
    value: 'text',
  },
  {
    id: 'shadow',
    display: 'Shadow',
    value: 'shadow',
  },
];
