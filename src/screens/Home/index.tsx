import React from 'react';
import { StyledBackground, StyledButtonGroup, StyledTitle } from './styles';
import { MainButton } from '../../components/MainButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/routes';

export const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <StyledBackground>
            <StyledTitle>GigHelper 🎵</StyledTitle>
            <StyledButtonGroup>
                <MainButton onPress={() => null} title="Bloco 1" />
                <MainButton onPress={() => null} title="Bloco 2" />
                <MainButton onPress={() => null} title="Bloco 3" />
                <MainButton onPress={() => navigation.navigate('Config')} title="Configuração de timbres" />
            </StyledButtonGroup>
        </StyledBackground>
    );
};
