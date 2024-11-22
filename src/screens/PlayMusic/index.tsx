import React from 'react';
import { PdfContainer, StyledBackground, StyledButtonGroup, StyledHeaderControls, StyledMidiMessage, StyledMusicIndexText, StyledMusicNameContainer, StyledMusicNameText, StyledPdfViwer } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/routes';
import { useMusic } from './hooks/useMusic';
import { MainButton } from '../../components/MainButton';
import { MainCard } from '../../components/MainCard';
import Toast from 'react-native-toast-message';

export const PlayMusicScreen = () => {

    const route = useRoute<RouteProp<RootStackParamList, 'PlayMusic'>>();
    const { currentGig, musicIndex } = route.params;
    const {
        currentMusicIndex,
        currentMusicInfo,
        totalSongs,
        lastMidiMessageSent,
        nextMusic,
        previousMusic,
        sendMidiMessage,
    } = useMusic(currentGig, musicIndex);

    return (
        <StyledBackground>
            <StyledHeaderControls>
                <MainButton
                    title="Anterior"
                    onPress={previousMusic}
                />
                <StyledMusicNameContainer>
                    <StyledMusicIndexText>{currentMusicIndex + 1} / {totalSongs}</StyledMusicIndexText>
                    <StyledMusicNameText>{currentMusicInfo.name}</StyledMusicNameText>
                </StyledMusicNameContainer>
                <MainButton
                    title="Próxima"
                    onPress={nextMusic}
                />
            </StyledHeaderControls>
            <PdfContainer>
                {currentMusicInfo.pdfChordsPath &&
                    <StyledPdfViwer
                        trustAllCerts={false}
                        source={{ uri: currentMusicInfo.pdfChordsPath }}
                        onError={(error) => {
                            Toast.show({
                                type: 'error',
                                position: 'bottom',
                                text1: 'Erro ao carregar PDF: ' + error,
                            });
                        }}
                    />
                }
            </PdfContainer>

            <StyledButtonGroup>
                {
                    currentMusicInfo.timbres.map((timbre, index) => (
                        <MainCard
                            key={index}
                            text={timbre.name}
                            onPress={() => sendMidiMessage(index)}
                            selected={lastMidiMessageSent.timbreIndex === index}
                        />
                    ))
                }
            </StyledButtonGroup>
            <StyledMidiMessage>
                {
                    JSON.stringify(
                        currentMusicInfo.timbres[
                            lastMidiMessageSent.timbreIndex
                        ]?.midiValue
                    )}
                | {lastMidiMessageSent.sentTime}
            </StyledMidiMessage>
        </StyledBackground>
    );
};
