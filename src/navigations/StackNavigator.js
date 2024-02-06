import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Details, Login, Call } from 'screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Call" component={Call} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack; 