import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './navigation';

const App = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Router />
    </GestureHandlerRootView>
  );
};

export default App;
