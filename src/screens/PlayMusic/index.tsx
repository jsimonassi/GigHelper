import React from 'react';
import { PdfContainer, StyledBackground } from './styles';
import { MainHeader } from '../../components/MainHeader';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/routes';
import { useMusic } from './hooks/useMusic';
import Pdf from 'react-native-pdf';
import WebView from 'react-native-webview';

export const PlayMusicScreen = () => {

    const route = useRoute<RouteProp<RootStackParamList, 'PlayMusic'>>();
    const { currentGig, musicIndex } = route.params;
    const { currentMusicIndex, currentMusicInfo, totalSongs, nextMusic, previousMusic } = useMusic(currentGig, musicIndex);
    return (
        <StyledBackground>
            <MainHeader
                title={currentMusicIndex + 1 + '/' + totalSongs + ' - ' + currentMusicInfo.name}
            />
            <PdfContainer>
                {currentMusicInfo.pdfChordsPath &&
                    <WebView
                        source={{ uri: currentMusicInfo.pdfChordsPath }}
                        style={{ flex: 1 }}
                        originWhitelist={['*']}
                        allowFileAccess={true} // Enables file access
                        allowUniversalAccessFromFileURLs={true} // Enables access for local files
                    />
                }
            </PdfContainer>
        </StyledBackground>
    );
};
