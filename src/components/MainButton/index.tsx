import React from 'react';
import { StyledText, StyledTouchable } from './styles';

interface MainButtonProps {
    onPress: () => void;
    title: string;
}

export const MainButton = ({ onPress, title }: MainButtonProps) => {
    return (
        <StyledTouchable onPress={onPress}>
            <StyledText>{title}</StyledText>
        </StyledTouchable>
    );
};
