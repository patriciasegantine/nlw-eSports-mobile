import {TouchableOpacity, ImageBackground, TouchableOpacityProps, ImageSourcePropType, Text} from 'react-native';
import {sliderStyles} from './slider.styles';
import {LinearGradient} from 'expo-linear-gradient';
import {THEME} from '../../theme';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps{
  data: GameCardProps
}

export const Slider = ({data, ...rest}:Props ) => {
  return(
    <TouchableOpacity style={sliderStyles.container} {...rest}>
      <ImageBackground source={data.cover} style={sliderStyles.cover}>

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={sliderStyles.footer}
        >
          <Text style={sliderStyles.name}>
            {data.name}
          </Text>
          <Text style={sliderStyles.ads}>
            {data.ads} ads
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>)

}