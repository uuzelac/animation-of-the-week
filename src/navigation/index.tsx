import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { HOME, NOTIFICATION } from './routes';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={NOTIFICATION} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
