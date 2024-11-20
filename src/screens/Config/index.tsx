import React from 'react';
import { StyledBackground, StyledButtonContainer, StyledInputContainer, StyledSectionTitle } from './styles';
import { MainHeader } from '../../components/MainHeader';
import { MainInput } from '../../components/MainInput';
import { MainButton } from '../../components/MainButton';
import { FlatList } from 'react-native';
import { useConfig } from './hooks/useConfig';
import Toast from 'react-native-toast-message';

export const ConfigScreen = () => {

    const { transientTimbreSet, handleTimbreChange, saveUpdates } = useConfig();

    return (
        <StyledBackground>
            <MainHeader title="Configuração de timbres" />
            <StyledSectionTitle>Pads/Knobs Disponíveis: </StyledSectionTitle>
            <FlatList
                data={transientTimbreSet}
                renderItem={({ item, index }) => (
                    <StyledInputContainer>
                        <MainInput
                            title={index + ' - ' + item.name}
                            value={item.name || ''}
                            onChangeText={(newTimbreName) => {
                                handleTimbreChange(index, { ...item, name: newTimbreName});
                            }}
                        />
                    </StyledInputContainer>
                )}
                keyExtractor={(_, index) => index.toString()}
            />
            <StyledButtonContainer>
                <MainButton
                    onPress={() => {
                        saveUpdates()
                            .then(() => {
                                Toast.show({
                                    type: 'success',
                                    text1: 'Timbres salvos com sucesso!',
                                });
                            }).catch(() => {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Erro ao salvar timbres',
                                });
                            });
                    }}
                    title="Salvar"
                />
            </StyledButtonContainer>
        </StyledBackground>
    );
};
