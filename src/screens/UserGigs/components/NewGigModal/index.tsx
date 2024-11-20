import React, { useEffect, useState } from 'react';
import { UserGig } from '../../../../types/app/UserGig';
import { BaseModal } from '../../../../components/BaseModal';
import { MainInput } from '../../../../components/MainInput';
import { StyledInfosContainer } from './styles';
import { MainButton } from '../../../../components/MainButton';
import uuid from 'react-native-uuid';

interface NewGigModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (userGig: UserGig) => void;
}

export const NewGigModal = ({ visible, onClose, onSave }: NewGigModalProps) => {

    const [gigName, setGigName] = useState('');

    useEffect(() => {
        setGigName('');
    }, [visible]);

    return (
        <BaseModal
            visible={visible}
            onClose={onClose}
        >
            <StyledInfosContainer>
                <MainInput
                    title="Nome da Gig"
                    keyboardType="default"
                    value={gigName}
                    placeholder="Barzinho do Zé"
                    onChangeText={setGigName}
                />
                <MainButton
                    title="Salvar"
                    onPress={() => {
                        onSave({
                            id: uuid.v4(),
                            name: gigName,
                            setList: [],
                        });
                    }} />
            </StyledInfosContainer>
        </BaseModal>
    );
};
