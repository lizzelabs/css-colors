import { CSSProperties, ReactNode, RefObject } from 'react';

export interface SectionProperties {
  ref?: RefObject<HTMLElement>;
  children: ReactNode | ReactNode[];
  contentRows?: CSSProperties['gridTemplateRows'];
  contentColumns?: CSSProperties['gridTemplateColumns'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}
