import React from 'react';
import { Modal } from 'react-native';
import { StyledModalBackground, StyledModalContent, StyledModalTitle } from './styles';

interface BaseModalProps {
    title?: string;
    children?: React.ReactNode;
    visible: boolean;
    onClose: () => void;
}

export const BaseModal = ({ title, children, visible, onClose }: BaseModalProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <StyledModalBackground>
                <StyledModalContent>
                    {title && <StyledModalTitle>{title}</StyledModalTitle>}
                    {children}
                </StyledModalContent>
            </StyledModalBackground>
        </Modal>
    );
};
