import { HARMONY_SYSTEM, mergeSystems } from '@lizzelabs/react-harmony';
import { Theme } from './theme.types';

export const CSS_COLORS = mergeSystems(
  HARMONY_SYSTEM,
  {
    applyOn: (props) => props.kind === 'scrollable',
    style: (theme: Theme) => ({
      '--color': theme.color.raw,
      '--highlight': theme.highlight.raw,
    }),
  },
  {
    applyOn: 'all',
    style: {
      transition: 'all 0.3s linear',
    },
  },
);
