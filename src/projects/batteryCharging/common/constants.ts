import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const BATTERY_WIDTH = width / 2;
export const BATTERY_HEIGHT = BATTERY_WIDTH / 2;
export const BATTERY_PEAK_HEIGHT = BATTERY_WIDTH / 4;
