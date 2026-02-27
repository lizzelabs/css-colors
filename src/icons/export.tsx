import type { SvgIconProps } from './types';

export const Export = (_: SvgIconProps) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    aria-label='Export icon'
  >
    <path
      d='M12 3v10'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
    />
    <path
      d='M8.5 6.5L12 3l3.5 3.5'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect
      x='5'
      y='13'
      width='14'
      height='8'
      rx='2.5'
      stroke='currentColor'
      strokeWidth={1.8}
    />
  </svg>
);
