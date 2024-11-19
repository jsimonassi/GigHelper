import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { ConfigScreen } from '../screens/Config';
import { RootStackParamList } from '../types/routes';


const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Config: ConfigScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);

