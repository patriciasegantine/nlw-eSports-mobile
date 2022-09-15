import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const headingStyles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
  },

  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },

  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  }
})