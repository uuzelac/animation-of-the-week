import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ROUTES from './routeNames';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.NOTIFICATION_TOAST]: undefined;
  [ROUTES.BATTERY_CHARGING]: undefined;
  [ROUTES.LOADING_ANIMATION]: undefined;
};

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, typeof ROUTES.HOME>;
