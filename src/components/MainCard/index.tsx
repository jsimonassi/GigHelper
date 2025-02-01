import React from 'react';
import { StyledCardBackground, StyledCardTitle, StyledDescription, StyledEditImageIcon, StyledLeftSizeView, StyledRightSizeView } from './styles';
import { TouchableHighlight } from 'react-native';

interface AvailableGigCardProps {
    text: string;
    description?: string;
    onPress: () => void;
    onLongPress?: () => void;
    selected?: boolean;
    onEdit?: () => void;
}

export const MainCard = ({ text, description, selected, onPress, onLongPress, onEdit }: AvailableGigCardProps) => {

    return (
        <StyledCardBackground isSelected={!!selected} onPress={onPress} onLongPress={onLongPress}>
            <StyledLeftSizeView>
                <StyledCardTitle>{text}</StyledCardTitle>
                {description && <StyledDescription>{description}</StyledDescription>}
            </StyledLeftSizeView>
            { onEdit && <StyledRightSizeView>
                <TouchableHighlight onPress={onEdit}>
                    <StyledEditImageIcon />
                </TouchableHighlight>
            </StyledRightSizeView>}
        </StyledCardBackground>
    );
};
