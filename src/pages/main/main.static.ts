import type { SelectValue } from '@/components/select';
import { Mode } from './main.types';

export const Modes = [
  {
    display: 'Monochromatic',
    value: {
      type: 'monochromatic',
      pickers: 1,
      freeMove: false,
      distanceBetweenEachOne: 10,
    },
    id: 'monochromatic',
  },
  {
    display: 'Complementary',
    value: {
      type: 'complementary',
      pickers: 2,
      freeMove: false,
      distanceBetweenEachOne: 180,
    },
    id: 'complementary',
  },
  {
    display: 'Analogous',
    value: {
      type: 'analogous',
      pickers: 5,
      freeMove: false,
      distanceBetweenEachOne: 30,
    },
    id: 'analogous',
  },
  {
    display: 'Triad',
    value: {
      type: 'triad',
      pickers: 3,
      freeMove: false,
      distanceBetweenEachOne: 120,
    },
    id: 'triad',
  },
  {
    display: 'Tetradic',
    value: {
      type: 'tetradic',
      pickers: 4,
      freeMove: false,
      distanceBetweenEachOne: 60,
    },
    id: 'tetradic',
  },
  {
    display: 'Square',
    value: {
      type: 'square',
      pickers: 4,
      freeMove: false,
      distanceBetweenEachOne: 90,
    },
    id: 'square',
  },
  {
    display: 'Pentadic',
    value: {
      type: 'pentadic',
      pickers: 5,
      freeMove: false,
      distanceBetweenEachOne: 72,
    },
    id: 'pentadic',
  },
  {
    display: 'Hexadic',
    value: {
      type: 'hexadic',
      pickers: 6,
      freeMove: false,
      distanceBetweenEachOne: 60,
    },
    id: 'hexadic',
  },
  {
    display: 'Fullspectrum',
    value: {
      type: 'fullspectrum',
      pickers: 12,
      freeMove: false,
      distanceBetweenEachOne: 30,
    },
    id: 'fullspectrum',
  },
  {
    display: 'Custom',
    value: {
      type: 'custom',
      pickers: 1,
      freeMove: true,
      distanceBetweenEachOne: 10,
    },
    id: 'custom',
  },
] satisfies SelectValue<Mode>[];
