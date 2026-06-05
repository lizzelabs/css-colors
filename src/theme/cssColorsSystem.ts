import { HARMONY_SYSTEM, mergeSystems } from '@lizzelabs/react-harmony';
import { Theme } from './theme.types';

export const CSS_COLORS = mergeSystems<Theme>(
  HARMONY_SYSTEM,
  {
    applyOn: (props) => props.kind === 'scrollable',
    style: ({ theme }) => ({
      '--primary': theme.getCurrentPallete().color.raw,
      '--highlight': theme.getCurrentPallete().highlight.raw,
    }),
    order: 0,
  },
  {
    applyOn: 'all',
    style: {
      transition: 'all 0.3s linear',
    },
    order: 0,
  },
  {
    applyOn: (props) => props.kind === 'contents',
    order: 0,
    style: {
      display: 'contents',
      background: 'transparent',
      position: 'relative',
    },
  },
  {
    applyOn: (props) => props.kind === 'input',
    order: 0,
    style: {
      flex: '1 0 auto',
      width: '100%',
      height: '100%',
      display: 'flex',
      fontSize: '1rem',
      boxShadow: 'none',
      outline: 'none',
      border: '1px solid transparent',
      padding: '10px 0',
      paddingLeft: '10px',
      borderRadius: '5px',
      appearance: 'none',
      '&::-webkit-outer-spin-button': {
        margin: 0,
        appearance: 'none',
      },
      '&::-webkit-inner-spin-button': {
        margin: 0,
        appearance: 'none',
      },
    },
  },
);
