import 'react-native-gesture-handler';

import React from 'react';
import RootNavigation from './src/navigation';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
