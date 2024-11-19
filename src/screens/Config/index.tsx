import React from 'react';
import { StyledBackground, StyledButtonContainer, StyledInfoScroll } from './styles';
import { MainHeader } from '../../components/MainHeader';
import { MainInput } from '../../components/MainInput';
import { MainButton } from '../../components/MainButton';

export const ConfigScreen = () => {

    return (
        <StyledBackground>
            <StyledInfoScroll>
                <MainHeader title="Configuração de timbres" />
                <MainInput
                    keyboardType="number-pad"
                    title="Canal Midi (0-16)"
                    placeholder="0"
                    value="0"
                    onChangeText={() => null}
                />
            </StyledInfoScroll>
            <StyledButtonContainer>
                <MainButton
                    onPress={() => null}
                    title="Salvar"
                />
            </StyledButtonContainer>
        </StyledBackground>
    );
};
