import {ColorValue, Text, View} from 'react-native';
import {duoInfoStyles} from './duo-info.styles';
import {THEME} from '../../theme';

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export const DuoInfo = ({label, value, colorValue = THEME.COLORS.TEXT}: Props) => {
  return (
    <View style={duoInfoStyles.container}>
      <Text
        style={duoInfoStyles.label}
        numberOfLines={1}
      >
        {label}
      </Text>

      <Text
        style={[duoInfoStyles.value, {color: colorValue}]}
        numberOfLines={1}

      >
        {value}
      </Text>


    </View>

  )
}