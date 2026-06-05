import { CssColorsFactories } from '@/factories';
import {
  ExportedDarkAndLightTheme,
  ExportedTheme,
  ThemeColor,
} from './theme.types';
import { AnyValidColor } from '@/types';

const makeThemeFromBackground = (
  background: AnyValidColor,
  text: AnyValidColor,
  theme: ThemeColor,
): ExportedTheme => {
  return {
    common: {
      background: background.raw,
      text: text.raw,
      black: theme.darkScreen.raw,
      white: theme.lightScreen.raw,
    },
    text: {
      primary: {
        color: text.raw,
        disabled: CssColorsFactories.changeOpacity(text, 0.38).raw,
      },
      secondary: {
        color: theme.text.raw,
        disabled: CssColorsFactories.changeOpacity(theme.text, 0.38).raw,
      },
    },
    grey: {
      dark: {
        color: theme.darkGrey.raw,
        disabled: CssColorsFactories.changeOpacity(theme.darkGrey, 0.38).raw,
      },
      light: {
        color: theme.lightGrey.raw,
        disabled: CssColorsFactories.changeOpacity(theme.lightGrey, 0.38).raw,
      },
    },
    disabled: theme.disabled.raw,
    shadow: theme.shadow.raw,
    color: theme.color.raw,
    accent: theme.highlight.raw,
    success: theme.success.raw,
    info: theme.info.raw,
    warning: theme.warning.raw,
    error: theme.error.raw,
  };
};

export const exportTheme = (theme: ThemeColor): ExportedDarkAndLightTheme => {
  return {
    dark: makeThemeFromBackground(
      theme.darkScreen,
      theme.darkScreenText,
      theme,
    ),
    light: makeThemeFromBackground(
      theme.lightScreen,
      theme.lightScreenText,
      theme,
    ),
  };
};
