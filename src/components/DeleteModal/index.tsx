import React from 'react';
import { BaseModal } from '../BaseModal';
import { StyledButtonGroup, StyledInfosContainer, StyledMessageText } from './styles';
import { MainButton } from '../MainButton';

interface NewGigModalProps {
    visible: boolean;
    text: string;
    onCancel: () => void;
    onDelete: () => void;
}

export const DeleteModal = ({ visible, text, onCancel, onDelete }: NewGigModalProps) => {

    return (
        <BaseModal
            visible={visible}
            onClose={onCancel}
        >
            <StyledInfosContainer>
                <StyledMessageText>{text}</StyledMessageText>
                <StyledButtonGroup>
                    <MainButton
                        title="Cancelar"
                        onPress={() => onCancel()} />
                    <MainButton
                        title="Excluir"
                        onPress={() => onDelete()} />
                </StyledButtonGroup>
            </StyledInfosContainer>
        </BaseModal>
    );
};
