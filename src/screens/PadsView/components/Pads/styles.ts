import { styled } from 'styled-components/native';

export const StyledPad = styled.TouchableOpacity<StyledPadTextProps>`
    background-color: ${({ theme, wasPressed }) => wasPressed ? theme.palette.primaryColor : theme.palette.tertiaryColor};
    display: flex;
    width: 30%;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const StyledPadText = styled.Text`
    ${({ theme }) => theme.typography.text2};
    font-size: 36px;
    font-weight: bold;
`;

interface StyledPadTextProps {
    wasPressed: boolean;
}
