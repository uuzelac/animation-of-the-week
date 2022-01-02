import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import NotificationToast from '../projects/notificationToast';
import { HOME, NOTIFICATION_TOAST } from './routes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={NOTIFICATION_TOAST} component={NotificationToast} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
