import React from 'react';
import { StyledCardBackground, StyledCardTitle, StyledDescription } from './styles';

interface AvailableGigCardProps {
    text: string;
    description?: string;
    onPress: () => void;
    onLongPress?: () => void;
    selected?: boolean;
}

export const MainCard = ({text, description, selected, onPress, onLongPress}: AvailableGigCardProps) => {

    return (
        <StyledCardBackground isSelected={!!selected}  onPress={onPress} onLongPress={onLongPress}>
            <StyledCardTitle>{text}</StyledCardTitle>
            { description && <StyledDescription>{description}</StyledDescription>}
        </StyledCardBackground>
    );
};
