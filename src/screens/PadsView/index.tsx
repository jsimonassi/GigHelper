import React from 'react';
import { StyledBackground, StyledButtonGroup, StyledMidiCommandText } from './styles';
import { GigHelperCoreService } from '../../services/GigHelperCoreService';
import { Pad } from './components/Pads';

export const PadsView = () => {

    const [lastSelectedPosition, setLastSelectedPosition] = React.useState<number | null>(null);
    const [lastMidiCommand, setLastMidiCommand] = React.useState<string>('');

    const sendMidiTest = (channel: number) => {
        GigHelperCoreService.sendControlCommand(0, channel, 127);
        setLastSelectedPosition(channel);
        setLastMidiCommand(`0, ${channel}, 127`);
    };

    return (
        <StyledBackground>
            {
                Array.from({ length: 7 }).map((_, rowIndex) => (
                    <StyledButtonGroup key={rowIndex}>
                        {
                            Array.from({ length: 3 }).map((__, colIndex) => {
                                const position = rowIndex * 3 + colIndex + 1;
                                return (
                                    <Pad key={position} textValue={`${position}`} onPress={() => sendMidiTest(position)} wasPressed={lastSelectedPosition === position} />
                                );
                            })
                        }
                    </StyledButtonGroup>
                ))
            }
            <StyledMidiCommandText>{lastMidiCommand}</StyledMidiCommandText>
        </StyledBackground>
    );
};
