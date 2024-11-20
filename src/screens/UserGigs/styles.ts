import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    display: flex; 
    flex: 1;
    padding: 0 16px;
`;

export const StyledInfoScroll = styled.ScrollView`
    margin-top: 16px;
`;

export const StyledButtonContainer = styled.View`
    margin: 16px;
`;
