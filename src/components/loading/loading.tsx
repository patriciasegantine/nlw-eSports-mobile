import {View, ActivityIndicator} from 'react-native';
import {loadingStyles} from './loading.styles';
import {THEME} from '../../theme';

export const Loading = () => {
  return(
    <View style={loadingStyles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY}/>
    </View>)

}