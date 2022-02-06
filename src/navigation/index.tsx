import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import NotificationToast from '../projects/notificationToast';
import BatteryCharging from '../projects/batteryCharging';
import { HOME, NOTIFICATION_TOAST, BATTERY_CHARGING } from './routeNames';
import { RootStackParamList } from './types';
import * as screenOptions from './screenOptions';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = (): JSX.Element => {
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
          <Stack.Screen
            name={BATTERY_CHARGING}
            component={BatteryCharging}
            options={screenOptions.batteryCharging}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
