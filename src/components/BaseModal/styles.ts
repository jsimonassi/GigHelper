import styled from 'styled-components/native';

export const StyledModalBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    flex: 1;
    opacity: 0.9;
`;

export const StyledModalContent = styled.View`
    background-color: ${({ theme }) => theme.palette.secondaryColor};
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 90%;
`;


export const StyledModalTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
    margin: 16px;
    width: 90%;
    text-align: center;
`;
