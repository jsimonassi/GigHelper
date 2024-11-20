import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    display: flex; 
    flex: 1;
    padding: 0 16px;
`;

export const StyledButtonContainer = styled.View`
    margin: 16px;
`;

export const StyledSectionTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
    margin-top: 16px;
    margin-bottom: 8px;
`;

export const StyledInputContainer = styled.View`
    margin: 8px 0;
`;
