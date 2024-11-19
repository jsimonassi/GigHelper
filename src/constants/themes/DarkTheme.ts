import { DefaultTheme } from 'styled-components';

export const DarkTheme: DefaultTheme = {
    palette: {
        primaryColor: '#50a0ff',
        primaryColorDark: '#14283c',
        secondaryColor: '#3c3c3c',
        tertiaryColor: '#ff5050',
        tertiaryColorDark: '#3c1414',
        backgroundColor: '#141414',
    },
    typography: {
        text1: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#ffffff',
        },
        text2: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            color: '#3c3c3c',
        },
        text3: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            color: '#3c3c3c',
        },
    },
};
