import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    justify-content: space-evenly;
    align-items: center;
    display: flex; 
    flex: 1;
`;

export const StyledTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-size: 32px;
    
`;

export const StyledButtonGroup = styled.View`
    gap: 16px;
`;
