import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  NativeModules,
} from 'react-native';
import {colors, styles} from './App.styles';

const App = (): React.JSX.Element => {
  const {SampleModule} = NativeModules;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
  };
  const textStyle = isDarkMode ? styles.textDark : styles.textLight;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={textStyle}>React Native App</Text>
        <Button
          title="Open bridge"
          onPress={() => {
            SampleModule.openMethod('Test value', () => {});
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
