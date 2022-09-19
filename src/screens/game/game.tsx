import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Background} from '../../components/background/background';
import {GameParams} from '../../@types/navigation';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {gameStyles} from './game.styles';
import {THEME} from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import {Entypo} from '@expo/vector-icons';
import {Heading} from '../../components/heading/heading';
import {DuoCard, DuoCardProps} from '../../components/duo-card/duo-card';

export const Game = () => {

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const route = useRoute()
  const navigation = useNavigation();
  const game = route.params as GameParams;

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  useEffect(() => {
    fetch(`http://192.168.0.18:3003/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={gameStyles.container}>
        <View style={gameStyles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={gameStyles.logo}
          />

          <View style={gameStyles.right}/>

        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={gameStyles.cover}
          resizeMode={'cover'}
        />

        <Heading
          title={game.title}
          subtitle={'Conecte-se e comece a jogar!'}
        />

        <FlatList
          horizontal
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard
              data={item}
              onConnect={() => {}}
            />
          )}
          style={gameStyles.containerList}
          contentContainerStyle={
            [
              duos.length > 0
                ? gameStyles.contentList
                : gameStyles.contentEmptyList
            ]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={gameStyles.emptyListText}>
              Ops! It do not have game yet!
            </Text>

          )}

        />


      </SafeAreaView>
    </Background>
  )

}