import { ThemeColorAccents } from '@/theme';
import { WheelOutput, WheelOutputAccents } from '../wheel';
import { AnyValidColor, ValidColors } from '@/types';

export interface ColorProps {
  theme: WheelOutput;
  selected?: boolean;
  onSelect: (theme: WheelOutput) => void;
  onChangeAccent: (theme: WheelOutput, accent: WheelOutputAccents) => void;
  onChangeApplyOn: (theme: WheelOutput, applyOn: ThemeColorAccents) => void;
  onChangeColorKind: (theme: WheelOutput, kind: ValidColors) => void;
  onColorChange: (theme: WheelOutput, color: AnyValidColor) => void;
  onVisible: () => void;
}
