import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ROUTES from './routeNames';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.NOTIFICATION_TOAST]: undefined;
  [ROUTES.BATTERY_CHARGING]: undefined;
};

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, typeof ROUTES.HOME>;

export type NotificationNavProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.NOTIFICATION_TOAST
>;

export type BatteryChargingNavProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.BATTERY_CHARGING
>;
