import styled from 'styled-components/native';

export const StyledInfosContainer = styled.View`
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    display: flex;
`;

export const StyledTimbreSelectionTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
`;

export const StyledPathText = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-weight: 200;
`;

export const StyledTimbreSelectorContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 16px;
    max-height: 200px;
`;
