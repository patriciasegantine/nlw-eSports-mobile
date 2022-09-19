import {ImageBackground, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {sliderStyles} from './slider.styles';
import {LinearGradient} from 'expo-linear-gradient';
import {THEME} from '../../theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number
  };
  bannerUrl: string
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export const GameCard = ({data, ...rest}: Props) => {
  return (
    <TouchableOpacity style={sliderStyles.container} {...rest}>

      <ImageBackground source={{uri: data.bannerUrl}} style={sliderStyles.cover}>

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={sliderStyles.footer}
        >
          <Text style={sliderStyles.name}>
            {data.title}
          </Text>
          <Text style={sliderStyles.ads}>
            {data._count.ads} ads
          </Text>

        </LinearGradient>
      </ImageBackground>

    </TouchableOpacity>
  )

}