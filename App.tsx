import {StatusBar} from 'react-native';
import {Background} from './src/components/background/background';
import {Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts} from '@expo-google-fonts/inter'
import {Loading} from './src/components/loading/loading';
import {Routes} from "./src/routes";

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
        Inter_600SemiBold,
        Inter_900Black
    })

    return (
        <Background>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            {fontsLoaded ? <Routes/> : <Loading/>}

        </Background>
    );
}
