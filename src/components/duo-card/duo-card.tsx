import {Text, TouchableOpacity, View} from 'react-native';
import {duoCardStyles} from './duo-card.styles';
import {DuoInfo} from '../duo-info/duo-info';
import {THEME} from '../../theme';
import {GameController} from 'phosphor-react-native';

export interface DuoCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}

export const DuoCard = ({data, onConnect}: Props) => {

  return (
    <View style={duoCardStyles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />
      <DuoInfo
        label="tempo de Jogo"
        value={`${data.yearsPlaying} years`}
      />
      <DuoInfo
        label="Disponibiliade"
        value={`${data.weekDays.length} days \u2022 ${data.hourStart}h - ${data.hourEnd}h`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? 'Yes' : 'No'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={duoCardStyles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={duoCardStyles.buttonTitle}>
          Conectar
        </Text>

      </TouchableOpacity>

    </View>
  )
}