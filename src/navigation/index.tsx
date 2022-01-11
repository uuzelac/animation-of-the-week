import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import NotificationToast from '../projects/notificationToast';
import { HOME, NOTIFICATION_TOAST } from './routeNames';
import { RootStackParamList } from './types';
import * as screenOptions from './screenOptions';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME}>
          <Stack.Screen name={HOME} component={Home} options={screenOptions.home} />
          <Stack.Screen
            name={NOTIFICATION_TOAST}
            component={NotificationToast}
            options={screenOptions.notificationToast}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
