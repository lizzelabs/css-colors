import type { SvgIconProps } from './types';

export const Copy = (_: SvgIconProps) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    aria-label='Copy icon'
  >
    <rect
      x='8'
      y='7'
      width='10'
      height='12'
      rx='3'
      stroke='currentColor'
      strokeWidth={1.8}
    />
    <rect
      x='5'
      y='4'
      width='10'
      height='12'
      rx='3'
      stroke='currentColor'
      strokeWidth={1.8}
      opacity='0.6'
    />
  </svg>
);
