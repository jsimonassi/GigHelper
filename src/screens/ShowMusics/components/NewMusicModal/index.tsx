import React from 'react';
import { BaseModal } from '../../../../components/BaseModal';
import { MainInput } from '../../../../components/MainInput';
import { StyledInfosContainer, StyledPathText, StyledTimbreSelectionTitle, StyledTimbreSelectorContainer } from './styles';
import { MainButton } from '../../../../components/MainButton';
import { useNewMusicForm } from './hooks/useNewMusicForm';
import { MusicConfig } from '../../../../types/app/MusicConfig';
import { useUserConfigStore } from '../../../../stores/useUserConfigStore';
import { MainCard } from '../../../../components/MainCard';
import { FlatList } from 'react-native';

interface NewGigModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (newMusic: MusicConfig) => void;
}

export const NewMusicModal = ({ visible, onClose, onSave }: NewGigModalProps) => {

    const { newMusic, handleNameChange, handleChordFile, addTimbre, removeTimbre, hasTimbre, error } = useNewMusicForm();
    const { timbreSet } = useUserConfigStore();

    return (
        <BaseModal
            visible={visible}
            onClose={onClose}
        >
            <StyledInfosContainer>
                <MainInput
                    title="Nome da música"
                    keyboardType="default"
                    value={newMusic.name}
                    placeholder="Evidências"
                    onChangeText={handleNameChange}
                    errorText={error}
                />
                {
                    newMusic.pdfChordsPath ?
                        <StyledPathText>{ 'Cifra: ...' + newMusic.pdfChordsPath.slice(-20)}</StyledPathText> :
                        <MainButton
                            title="Selecionar cifra"
                            onPress={handleChordFile} />
                }
                <StyledTimbreSelectionTitle>Escolha os timbres:</StyledTimbreSelectionTitle>
                <StyledTimbreSelectorContainer>
                    <FlatList
                        data={timbreSet}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <MainCard
                                text={item.name}
                                onPress={() => {
                                    if(hasTimbre(item)) {
                                        removeTimbre(item);
                                        return;
                                    }

                                    addTimbre(item);
                                }}
                                selected={hasTimbre(item)}
                            />
                        )}
                    />
                </StyledTimbreSelectorContainer>
                <MainButton
                    title="Salvar"
                    onPress={() => onSave(newMusic)} />
            </StyledInfosContainer>
        </BaseModal>
    );
};
