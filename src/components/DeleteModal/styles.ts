import styled from 'styled-components/native';

export const StyledInfosContainer = styled.View`
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    display: flex;
`;

export const StyledMessageText = styled.Text`
    ${({ theme }) => theme.typography.text1};
`;

export const StyledButtonGroup = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

