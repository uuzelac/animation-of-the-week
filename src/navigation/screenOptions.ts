import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import * as screenTitles from './screenTitles';

export const home: NativeStackNavigationOptions = { headerShown: false };

export const notificationToast: NativeStackNavigationOptions = {
  title: screenTitles.NOTIFICATION_TOAST,
};

export const batteryCharging: NativeStackNavigationOptions = {
  title: screenTitles.BATTERY_CHARGING,
};

export const loadingAnimation: NativeStackNavigationOptions = {
  title: screenTitles.LOADING_ANIMATION,
};
