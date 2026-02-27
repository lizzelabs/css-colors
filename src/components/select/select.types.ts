export interface SelectValue<T> {
  display: string;
  value: T;
  id: string | number;
}

export interface SelectProps<T> {
  label?: string;
  options: SelectValue<T>[];
  value?: SelectValue<T>;
  onChange: <T>(value: SelectValue<T>) => void;
  highlight?: string;
  text?: string;
  color?: string;
  directionals?: boolean;
  uppercase?: boolean;
}
