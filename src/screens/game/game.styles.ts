import {StyleSheet} from 'react-native';
import {THEME} from '../../theme';

export const gameStyles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
  },

  right: {
    width: 20,
    height: 20,
  },

  logo: {
    width: 80,
    height: 40,
  },

  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },

  containerList: {
    width: '100%',
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },

  contentEmptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }

})