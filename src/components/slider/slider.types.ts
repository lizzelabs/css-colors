export interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  colors: string[];
  deg: number;
  color?: string;
  text?: string;
  label?: string;
  direction: 'horizontal' | 'vertical';
  onChange: (value: number) => void;
}
