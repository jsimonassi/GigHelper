import React, { useState } from 'react';
import { StyledBackground, StyledButtonContainer, StyledInfoScroll } from './styles';
import { MainHeader } from '../../components/MainHeader';
import { MainButton } from '../../components/MainButton';
import { MainCard } from '../../components/MainCard';
import { NewGigModal } from './components/NewGigModal';
import { useGigs } from './hooks/useGigs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/routes';
import { DeleteModal } from '../../components/DeleteModal';
import { UserGig } from '../../types/app/UserGig';

export const UserGigsScreen = () => {

    const [newGigModalVisible, setNewGigModalVisible] = useState(false);
    const [deleteGigInProgress, setDeleteInProgressGig] = useState<UserGig | null>(null);
    const { userGigs, addUserGig, removeUserGig } = useGigs();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <StyledBackground>
            <StyledInfoScroll>
                <MainHeader title="Minhas Gigs" />
                {userGigs.map((userGig, index) => (
                    <MainCard
                        text={userGig.name}
                        description={userGig.setList.length + ' músicas'}
                        onPress={() => navigation.navigate('ShowMusics', { currentGig: userGig })}
                        onLongPress={() => setDeleteInProgressGig(userGig)}
                        key={index}
                    />
                ))}
            </StyledInfoScroll>
            <StyledButtonContainer>
                <MainButton
                    onPress={() => setNewGigModalVisible(true)}
                    title="Nova Gig"
                />
            </StyledButtonContainer>
            <NewGigModal
                visible={newGigModalVisible}
                onClose={() => setNewGigModalVisible(false)}
                onSave={(newGig) => {
                    addUserGig(newGig);
                    setNewGigModalVisible(false);
                }}
            />
            <DeleteModal
                visible={deleteGigInProgress !== null}
                onCancel={() => setDeleteInProgressGig(null)}
                onDelete={
                    () => {
                        const gigToDelete = deleteGigInProgress;
                        if(gigToDelete){
                            removeUserGig(gigToDelete.id);
                        }
                        setDeleteInProgressGig(null);
                    }
                }
                text="Deseja realmente excluir esta GIG?"
            />
        </StyledBackground>
    );
};
