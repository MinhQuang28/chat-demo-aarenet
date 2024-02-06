
import React from 'react';
import { SafeAreaView } from 'react-native';

import AppStack from './src/navigations/StackNavigator';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
 
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notificati
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </SafeAreaView>
  );
};
