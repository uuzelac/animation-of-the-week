import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import styles from './styles';

export interface BatteryBarProps {
  customStyle: StyleProp<ViewStyle>;
  animatedStyle: AnimatedStyleProp<ViewStyle>;
}

const BatteryBar = ({ customStyle, animatedStyle }: BatteryBarProps): JSX.Element => (
  <Animated.View style={[styles.baseStyle, customStyle, animatedStyle]} />
);

export default BatteryBar;
