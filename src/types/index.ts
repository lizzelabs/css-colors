export type Colors = 'HEX' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'INVALID';

export type InferProp<T, K extends keyof T> = T[K];

export interface Size {
  width: number;
  height: number;
}

export interface Luminance {
  red: number;
  green: number;
  blue: number;
  total: number;
}

export type AlphaColor = {
  readonly alpha: number;
};

export type RGBColor = {
  readonly red: number;
  readonly green: number;
  readonly blue: number;
};

export type HSLColor = {
  readonly hue: number;
  readonly saturation: number;
  readonly lightness: number;
};

export type Color<T extends Colors> = {
  readonly type: T;
  readonly raw: string;
};

export interface InvalidColor extends Color<'INVALID'> {
  readonly raw: never;
}

export type ValidColors = Exclude<Colors, 'INVALID'>;
export type HEX = Color<'HEX'>;
export type RGB = Color<'RGB'> & RGBColor;
export type RGBA = Color<'RGBA'> & RGBColor & AlphaColor;
export type HSL = Color<'HSL'> & HSLColor;
export type HSLA = Color<'HSLA'> & HSLColor & AlphaColor;
export type AnyColor = HEX | RGB | RGBA | HSL | HSLA | InvalidColor;
export type AnyValidColor = HEX | RGB | RGBA | HSL | HSLA;
export type ColorValue<T extends Colors> = T extends 'HEX'
  ? HEX
  : T extends 'RGB'
    ? RGB
    : T extends 'RGBA'
      ? RGBA
      : T extends 'HSL'
        ? HSL
        : T extends 'HSLA'
          ? HSLA
          : InvalidColor;

export type State = Record<string, any>;
export type ReducerData<S extends State, P> = { prevState: S; props: P };
export type ArgReducer<S extends State, P = unknown> = (
  data: ReducerData<S, P>,
  value: any,
) => S;
export type Reducer<S extends State, Props = unknown> = Record<
  string,
  ArgReducer<S, Props>
>;
export type ArgOf<F, S extends State, P> = F extends (
  data: ReducerData<S, P>,
  value: infer Arg,
) => S
  ? Arg
  : never;
export type Action<
  Props,
  S extends State,
  R extends Reducer<S, Props>,
  K extends keyof R = keyof R,
> = {
  [P in K]: {
    type: P;
    value: ArgOf<R[P], S, Props>;
  };
}[K];

export type Position = {
  x: number;
  y: number;
};

export type PartialRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
