import type { SvgIconProps } from '@/icons/types';
import { Theme } from '@/theme';
import { PieceProperties } from '@lizzelabs/react-harmony';
import type { MouseEventHandler, ReactElement, ReactNode } from 'react';

export interface IconButtonProps {
  size?: number;
  highlight?: string;
  color?: string;
  text?: string;
  noPadding?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  round?: boolean;
  name?: string;
  children: ReactElement<SvgIconProps>;
}

export type IconButtonComponent = (
  props: IconButtonProps & PieceProperties<Theme, 'button'>,
) => ReactNode;
