import styled from 'styled-components/native';

export const StyledTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
    width: 100%;
    text-align: center;
    margin: 16px 0;
`;
