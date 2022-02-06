import { StyleSheet } from 'react-native';
import * as colors from './common/colors';
import { BATTERY_WIDTH, BATTERY_HEIGHT, BATTERY_PEAK_HEIGHT } from './common/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryContainer: {
    flexDirection: 'row',
    height: BATTERY_HEIGHT,
    width: BATTERY_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryMainContainerStyle: {
    flex: 10,
    borderWidth: 8,
    borderRadius: 10,
    borderColor: colors.GRAY,
  },
  batteryMainStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  batteryPeakStyle: {
    flex: 1,
    backgroundColor: colors.GRAY,
    height: BATTERY_PEAK_HEIGHT,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
  },
  firstBatteryBarStyle: {
    marginStart: 8,
    marginTop: 8,
    marginBottom: 8,
    marginEnd: 4,
  },
  middleBatteryBarStyle: {
    marginStart: 4,
    marginTop: 8,
    marginBottom: 8,
    marginEnd: 4,
  },
  lastBatteryBarStyle: {
    marginStart: 4,
    marginTop: 8,
    marginBottom: 8,
    marginEnd: 8,
  },
});

export default styles;
