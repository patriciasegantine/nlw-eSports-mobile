import {Image, View, FlatList} from 'react-native';
import {homeStyles} from './home.styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import {Heading} from '../../components/heading/heading';
import {Slider} from '../../components/slider/slider';
import {GAMES} from '../../utils/games';

export const Home = () => {
  return(
  <View style={homeStyles.container}>
    <Image
      source={logoImg}
      style={homeStyles.logo}
    />
    <Heading
      title={'Find your duo!'}
      subtitle={'Choose the game that you wish...'}
    />

    <FlatList
      data={GAMES}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Slider data={item}/>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={homeStyles.contentList}
    />



  </View>)

}