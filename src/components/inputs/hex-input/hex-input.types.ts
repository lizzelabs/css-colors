import type { HEX } from '@/types';

export interface HexInputProps extends Record<string, unknown> {
  hex?: HEX;
  onChange?: (hex: HEX) => void;
  text: string;
  highlight: string;
}
