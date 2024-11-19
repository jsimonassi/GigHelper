import styled from 'styled-components/native';


export const StyledTouchable = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.palette.primaryColor};
    padding: 10px 20px;
    border-radius: 5px;
`;

export const StyledText = styled.Text`
    width: 100%;
    text-align: center;
`;
