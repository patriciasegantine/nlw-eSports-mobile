import {FlatList, Image} from 'react-native';
import {homeStyles} from './home.styles';
import {useNavigation} from '@react-navigation/native'

import logoImg from '../../assets/logo-nlw-esports.png'
import {Heading} from '../../components/heading/heading';
import {GameCard, GameCardProps} from '../../components/slider/slider';
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Background} from '../../components/background/background';

export const Home = () => {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  const handleOpenGames = ({id, title, bannerUrl}: GameCardProps) => {
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch('http://192.168.0.18:3003/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={homeStyles.container}>
        <Image
          source={logoImg}
          style={homeStyles.logo}
        />
        <Heading
          title={'Find your duo!'}
          subtitle={'Choose the game that you wish...'}
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGames(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={homeStyles.contentList}
        />


      </SafeAreaView>
    </Background>
  )

}