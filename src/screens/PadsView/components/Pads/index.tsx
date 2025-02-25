import React from 'react';
import { StyledPad, StyledPadText } from './styles';

interface PadProps {
    textValue: string;
    onPress: () => void;
    wasPressed?: boolean;
}


export const Pad = ({textValue, onPress, wasPressed}: PadProps) => {
    return (
        <StyledPad onPress={onPress} wasPressed={!!wasPressed}>
            <StyledPadText>{textValue}</StyledPadText>
        </StyledPad>
    );
};
