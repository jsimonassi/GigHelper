import React from 'react';
import { StyledBackground, StyledButtonGroup, StyledMidiCommandText } from './styles';
import { GigHelperCoreService } from '../../services/GigHelperCoreService';
import { Pad } from './components/Pads';

export const PadsView = () => {
    const [lastSelectedPosition, setLastSelectedPosition] = React.useState<number | null>(null);
    const [lastMidiCommand, setLastMidiCommand] = React.useState<string>('');

    // Lista de CCs válidos evitando 71 e 74
    const validCCValues = Array.from({ length: 70 }, (_, i) => i + 20).filter(cc => cc !== 71 && cc !== 74);

    const sendMidiTest = (ccValue: number) => {
        GigHelperCoreService.sendControlCommand(0, ccValue, 64);
        setLastSelectedPosition(ccValue);
        setLastMidiCommand(`0, ${ccValue}, 127`);
    };

    return (
        <StyledBackground>
            {Array.from({ length: Math.ceil(validCCValues.length / 3) }).map((_, rowIndex) => (
                <StyledButtonGroup key={rowIndex}>
                    {validCCValues.slice(rowIndex * 3, rowIndex * 3 + 3).map((ccValue) => (
                        <Pad key={ccValue} textValue={`${ccValue}`} onPress={() => sendMidiTest(ccValue)} wasPressed={lastSelectedPosition === ccValue} />
                    ))}
                </StyledButtonGroup>
            ))}
            <StyledMidiCommandText>{lastMidiCommand}</StyledMidiCommandText>
        </StyledBackground>
    );
};
