import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    display: flex; 
    flex: 1;
`;

export const StyledMidiCommandText = styled.Text`
    ${({ theme }) => theme.typography.text1};
    color: aliceblue;
    font-size: 24px;
    text-align: center;
`;

export const StyledButtonGroup = styled.View`
    flex-direction: row;
    gap: 16px;
    padding: 6px;
`;
