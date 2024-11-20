import React from 'react';
import { StyledBackground, StyledButtonGroup, StyledTitle } from './styles';
import { MainButton } from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/routes';
import { useLoadData } from './hooks/useLoadData';

export const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    useLoadData();

    return (
        <StyledBackground>
            <StyledTitle>GigHelper 🎵</StyledTitle>
            <StyledButtonGroup>
                <MainButton onPress={() => navigation.navigate('UserGigs')} title="Minhas Gigs" />
                <MainButton onPress={() => navigation.navigate('Config')} title="Configuração de timbres" />
            </StyledButtonGroup>
        </StyledBackground>
    );
};
