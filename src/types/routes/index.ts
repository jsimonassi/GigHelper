import { ParamListBase } from '@react-navigation/native';
import { UserGig } from '../app/UserGig';

export interface RootStackParamList extends ParamListBase{
    Home: undefined;
    Config: undefined;
    UserGigs: undefined;
    ShowMusics: { currentGig: UserGig };
    PlayMusic: { currentGig: UserGig, musicIndex: number };
}
