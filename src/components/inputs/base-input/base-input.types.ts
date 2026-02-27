import { IconButtonProps } from '@/components/icon-button';
import { ReactElement } from 'react';

export type BaseInputValue<T extends 'text' | 'number'> = T extends 'text'
  ? string | undefined
  : number | undefined;

export interface BaseInputProps<T extends 'text' | 'number'> extends Record<
  string,
  unknown
> {
  type: T;
  flex?: string | number;
  label?: string;
  text?: string;
  color?: string;
  highlight?: string;
  value?: string | number;
  onChange?: (value: BaseInputValue<T>) => void;
  size?: number;
  min?: number;
  max?: number;
  minWidth?: number;
  margin?: string;
  disabled?: boolean;
  disableLeftRadius?: boolean;
  disableRightRadius?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  labelAlign?: 'left' | 'right' | 'center';
  children?: ReactElement<IconButtonProps>;
}
