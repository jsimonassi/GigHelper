import React from 'react';
import { StyledCardBackground, StyledCardTitle, StyledDescription, StyledDownImageIcon, StyledEditImageIcon, StyledLeftSizeView, StyledRightSizeView, StyledUpImageIcon } from './styles';
import { TouchableHighlight } from 'react-native';

interface AvailableGigCardProps {
    text: string;
    description?: string;
    onPress: () => void;
    onLongPress?: () => void;
    selected?: boolean;
    onEdit?: () => void;
    moveToUp?: () => void;
    moveToDown?: () => void;
}

export const MainCard = ({ text, description, selected, onPress, onLongPress, onEdit, moveToUp, moveToDown }: AvailableGigCardProps) => {

    return (
        <StyledCardBackground isSelected={!!selected} onPress={onPress} onLongPress={onLongPress}>
            <StyledLeftSizeView>
                <StyledCardTitle>{text}</StyledCardTitle>
                {description && <StyledDescription>{description}</StyledDescription>}
            </StyledLeftSizeView>
            <StyledRightSizeView>
                {moveToUp && <TouchableHighlight onPress={moveToUp}>
                    <StyledUpImageIcon />
                </TouchableHighlight>}
                {moveToDown && <TouchableHighlight onPress={moveToDown}>
                    <StyledDownImageIcon />
                </TouchableHighlight>}
                {onEdit && <TouchableHighlight onPress={onEdit}>
                    <StyledEditImageIcon />
                </TouchableHighlight>}
            </StyledRightSizeView>
        </StyledCardBackground>
    );
};
