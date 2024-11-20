import styled from 'styled-components/native';

export const StyledCardBackground = styled.TouchableOpacity<StyledCardBackgroundProps>`
    background-color: ${({ theme, isSelected }) => isSelected ? theme.palette.tertiaryColor : theme.palette.secondaryColor};
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
`;

export const StyledCardTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
`;

export const StyledDescription = styled.Text`
    ${({ theme }) => theme.typography.text2};
    margin-top: 8px;
    color: ${({ theme }) => theme.palette.primaryColor};
`;

interface StyledCardBackgroundProps {
    isSelected: boolean;
}
