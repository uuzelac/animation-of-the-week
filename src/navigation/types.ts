import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ROUTES from './routeNames';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.NOTIFICATION_TOAST]: undefined;
};

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, typeof ROUTES.HOME>;
export type NotificationNavProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.NOTIFICATION_TOAST
>;
