import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const duoCardStyles = StyleSheet.create({

  container: {
    width: 220,
    // height: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: THEME.COLORS.TEXT,
    backgroundColor: THEME.COLORS.PRIMARY,
    width: '100%',
    height: 36,
    borderRadius: 6,

  },

  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginLeft: 8,

  }
})
