import { ThemeColor, ThemeColorAccents } from '@/theme';
import { PartialRequired, Position, RGBA, ValidColors } from '@/types';
import { RefObject } from 'react';

export interface Picker extends Position {
  id: string;
  color?: RGBA;
}

export type PickerWithColor = PartialRequired<Picker, 'color'>;
export interface WheelComputedSize {
  dpr: number;
  radius: number;
  pickerRadius: number;
  center: Position;
  totalSize: number;
}

export interface WheelProps {
  onChange: (output: WheelOutput[]) => void;
  onPickersMove: (pickers: Picker[]) => void;
  onSelectedPickerChange: (index: number, id?: string) => void;
  distanceBetweenEachPicker: number;
  selectedPicker: string | undefined;
  selectedIndex: number;
  computed: WheelComputedSize;
  pickers: Picker[];
  darkness: number;
  atRow?: string;
  freeMove?: boolean;
}

export interface WheelOutput {
  id: string;
  main: ThemeColor;
  '100': ThemeColor;
  '200': ThemeColor;
  '300': ThemeColor;
  '400': ThemeColor;
  '600': ThemeColor;
  '700': ThemeColor;
  '800': ThemeColor;
  '900': ThemeColor;
  kind: ValidColors;
  applyTo: ThemeColorAccents;
  activeAccent: WheelOutputAccents;
}

export type WheelOutputAccents = keyof Omit<
  WheelOutput,
  'id' | 'activeAccent' | 'applyTo' | 'kind'
>;

export interface DrawInput {
  props: WheelProps;
  canvas: HTMLCanvasElement;
  cache: OffscreenCanvas;
  render2d: CanvasRenderingContext2D;
  webGL: WebGL2RenderingContext;
}

export type DrawWheelContext = {
  canvas: HTMLCanvasElement;
  cache: OffscreenCanvas;
  props: WheelProps;
  render2d: CanvasRenderingContext2D;
  webGL: WebGL2RenderingContext;
  vao?: WebGLVertexArrayObject;
  vertex?: WebGLShader;
  wheel?: WebGLProgram;
  pickers?: WebGLProgram;
  texture?: WebGLTexture;
  framebuffer?: WebGLFramebuffer;
  colors?: PickerWithColor[];
};

export type DrawWheelContextAfterCompile = PartialRequired<
  DrawWheelContext,
  'vertex' | 'wheel' | 'pickers' | 'vao'
>;

export type DrawWheelContextAfterTexture = PartialRequired<
  DrawWheelContext,
  'vertex' | 'wheel' | 'pickers' | 'framebuffer' | 'texture'
>;

export type DrawWheelAfterFillColors = PartialRequired<
  DrawWheelContextAfterTexture,
  'colors'
>;

export type PrepareCanvasInput =
  | RefObject<HTMLCanvasElement | null>
  | OffscreenCanvas
  | HTMLCanvasElement;

export type Shape = {
  type: GLenum;
  first: number;
  count: number;
  vertices: Float32Array;
};
