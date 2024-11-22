import Pdf from 'react-native-pdf';
import styled from 'styled-components/native';

export const StyledBackground = styled.View`
    background-color: ${({ theme }) => theme.palette.backgroundColor};
    align-items: center;
    display: flex; 
    flex: 1;
`;

export const StyledTitle = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-size: 32px;
    
`;

export const PdfContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledPdfViwer = styled(Pdf)`
    flex: 1;
    background-color: white;
    width: 100%;
    height: 100%;
`;

export const StyledButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 90%;
`;

export const StyledMidiMessage = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-size: 12px;
    font-weight: 100;
    margin-bottom: 16px;
`;

export const StyledHeaderControls = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
`;

export const StyledMusicNameContainer = styled.View`
    align-items: center;
`;

export const StyledMusicNameText = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-size: 12px;
`;

export const StyledMusicIndexText = styled.Text`
    ${({ theme }) => theme.typography.text1};
    font-size: 18px;
`;
