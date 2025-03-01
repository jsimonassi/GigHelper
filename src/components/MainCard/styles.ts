import styled from 'styled-components/native';
import { assets } from '../../assets';

export const StyledCardBackground = styled.TouchableOpacity<StyledCardBackgroundProps>`
    background-color: ${({ theme, isSelected }) => isSelected ? theme.palette.tertiaryColor : theme.palette.secondaryColor};
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
    flex-direction: row;
    flex: 1;
`;

export const StyledCardTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
`;

export const StyledDescription = styled.Text`
    ${({ theme }) => theme.typography.text2};
    margin-top: 8px;
    color: ${({ theme }) => theme.palette.primaryColor};
`;

export const StyledLeftSizeView = styled.View`
    flex: 1;
`;

export const StyledRightSizeView = styled.View`
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    gap: 16px;
`;

export const StyledEditImageIcon = styled.Image.attrs({
    source: assets.images.editIcon,
})`
    width: 20px;
    height: 20px;
`;

export const StyledUpImageIcon = styled.Image.attrs({
    source: assets.images.up,
})`
    width: 20px;
    height: 20px;
`;

export const StyledDownImageIcon = styled.Image.attrs({
    source: assets.images.down,
})`
    width: 20px;
    height: 20px;
`;


interface StyledCardBackgroundProps {
    isSelected: boolean;
}
