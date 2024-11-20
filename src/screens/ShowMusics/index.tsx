import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/routes';
import { StyledBackground, StyledButtonContainer, StyledInfoScroll } from './styles';
import { MainHeader } from '../../components/MainHeader';
import { MainButton } from '../../components/MainButton';
import { MainCard } from '../../components/MainCard';
import { NewMusicModal } from './components/NewMusicModal';
import { useUserGigsStore } from '../../stores/useUserGigsStore';
import { MusicConfig } from '../../types/app/MusicConfig';
import { DeleteModal } from '../../components/DeleteModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const ShowMusicsScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'ShowMusics'>>();
    const { currentGig } = route.params;
    const [transientGig, setTransientGig] = useState(currentGig);
    const { updateGig } = useUserGigsStore();
    const [newMusicModalVisible, setNewMusicModalVisible] = useState(false);
    const [deleteInProgressMusic, setDeleteInProgressMusic] = useState<MusicConfig | null>(null);

    return (
        <StyledBackground>
            <StyledInfoScroll>
                <MainHeader title={transientGig.name} />
                {transientGig.setList.map((music, index) => (
                    <MainCard
                        text={music.name}
                        onPress={() => navigation.navigate('PlayMusic', { currentGig: transientGig, musicIndex: index })}
                        onLongPress={() => setDeleteInProgressMusic(music)}
                        key={index}
                    />
                ))}
            </StyledInfoScroll>
            <StyledButtonContainer>
                <MainButton
                    onPress={() => setNewMusicModalVisible(true)}
                    title="Nova música"
                />
            </StyledButtonContainer>
            <NewMusicModal
                visible={newMusicModalVisible}
                onClose={() => setNewMusicModalVisible(false)}
                onSave={(newMusic: MusicConfig) => {
                    const updatedGig = {
                        ...transientGig,
                        setList: [...transientGig.setList, newMusic],
                    };
                    updateGig( currentGig.id, updatedGig);
                    setTransientGig(updatedGig);
                    setNewMusicModalVisible(false);
                }}
            />
            <DeleteModal
                visible={deleteInProgressMusic !== null}
                onCancel={() => setDeleteInProgressMusic(null)}
                onDelete={
                    () => {
                        const updatedGig = {
                            ...transientGig,
                            setList: transientGig.setList.filter(music => music !== deleteInProgressMusic),
                        };
                        updateGig( currentGig.id, updatedGig);
                        setTransientGig(updatedGig);
                        setDeleteInProgressMusic(null);
                    }
                }
                text="Deseja realmente excluir a música?"
            />
        </StyledBackground>
    );

};
