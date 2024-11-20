import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { ConfigScreen } from '../screens/Config';
import { RootStackParamList } from '../types/routes';
import { UserGigsScreen } from '../screens/UserGigs';
import { ShowMusicsScreen } from '../screens/ShowMusics';
import { PlayMusicScreen } from '../screens/PlayMusic';


const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Config: ConfigScreen,
    UserGigs: UserGigsScreen,
    ShowMusics: ShowMusicsScreen,
    PlayMusic: PlayMusicScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);

