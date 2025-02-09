import React from 'react';
import { BaseModal } from '../../../../components/BaseModal';
import { MainInput } from '../../../../components/MainInput';
import { StyledInfosContainer, StyledPathText, StyledTimbreSelectionTitle, StyledTimbreSelectorContainer } from './styles';
import { MainButton } from '../../../../components/MainButton';
import { useEditMusicForm } from './hooks/useEditMusicForm';
import { MusicConfig } from '../../../../types/app/MusicConfig';
import { useUserConfigStore } from '../../../../stores/useUserConfigStore';
import { MainCard } from '../../../../components/MainCard';
import { FlatList } from 'react-native';

interface EditMusicModalProps {
    visible: boolean;
    onClose: () => void;
    currentMusicConfig: MusicConfig | null;
    onSave: (newMusic: MusicConfig) => void;
}

export const EditMusicModal = ({ visible, onClose, onSave, currentMusicConfig }: EditMusicModalProps) => {

console.log('EditMusicModal', currentMusicConfig);

    const { editedMusic, handleNameChange, handleChordFile, addTimbre, removeTimbre, hasTimbre, error } = useEditMusicForm(currentMusicConfig);
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
                    value={editedMusic.name}
                    placeholder="Evidências"
                    onChangeText={handleNameChange}
                    errorText={error}
                    disabled
                />
                {
                    editedMusic.pdfChordsPath ?
                        <StyledPathText>{ 'Cifra: ...' + editedMusic.pdfChordsPath.slice(-20)}</StyledPathText> :
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
                    onPress={() => onSave(editedMusic)} />
            </StyledInfosContainer>
        </BaseModal>
    );
};
