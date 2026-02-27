import type { ValidColors } from '@/types';
import { ColorInputProps } from './color-input.types';
import { useColorInput } from './color-input.hook';
import { withPieceAsContainer } from '@lizzelabs/react-harmony';

export const ColorInput = withPieceAsContainer(
  <T extends ValidColors>(props: ColorInputProps<T>) => {
    return useColorInput(props).input;
  },
);
