import React from 'react';
import { Navigation } from './routes';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './constants/themes/DarkTheme';

function App(): React.JSX.Element {

  return (
    <ThemeProvider theme={DarkTheme}>
      <Navigation />
      <Toast />
    </ThemeProvider>
  );
}


export default App;
//<Button title="06" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 127)} />
