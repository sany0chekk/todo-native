import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import LoginPage from './src/screen/Auth/Login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;