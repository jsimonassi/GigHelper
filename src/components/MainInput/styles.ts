import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    display: flex;
    width: 100%;
    gap: 4px;
`;

export const StyledTitle = styled.Text`
    ${({ theme }) => theme.typography.text2};
    color: ${({ theme }) => theme.palette.primaryColor};
`;

export const StyledInput = styled.TextInput`
    ${({ theme }) => theme.typography.text1};
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    border: 1px solid ${({ theme }) => theme.palette.primaryColor};
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0px 0px 0;
    width: 100%;
`;

export const StyledError = styled.Text`
    ${({ theme }) => theme.typography.text3};
    color: ${({ theme }) => theme.palette.tertiaryColor};
`;
