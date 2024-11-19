/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import NativeGigHelperCore from './specs/NativeGigHelperCore';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle} />
        <Button title="00" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 0)} />
        <Button title="01" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 1)} />
        <Button title="02" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 2)} />
        <Button title="03" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 3)} />
        <Button title="04" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 4)} />
        <Button title="05" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 5)} />
        <Button title="06" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 127)} />
    </SafeAreaView>
  );
}


export default App;
