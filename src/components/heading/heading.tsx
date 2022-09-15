import {Text, View, ViewProps} from 'react-native';
import {headingStyles} from './heading.styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export const Heading = ({title, subtitle, ...rest}: Props) => {
  return(
    <View style={headingStyles.container}>
      <Text style={headingStyles.title}>
        {title}
      </Text>

      <Text style={headingStyles.subtitle}>
        {subtitle}
      </Text>

    </View>)

}