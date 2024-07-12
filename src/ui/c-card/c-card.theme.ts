import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#232323',
    borderColor: '#bf4a21',
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#efefef',
  },
});
