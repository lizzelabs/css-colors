import { ReactNode } from 'react';
import type { SvgIconProps } from './types';

export const Close = (_: SvgIconProps): ReactNode => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      width='1em'
      height='1em'
      stroke='currentColor'
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M6 6 L18 18 M18 6 L6 18' />
    </svg>
  );
};
