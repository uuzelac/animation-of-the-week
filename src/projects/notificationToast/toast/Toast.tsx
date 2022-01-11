import React from 'react';
import { Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import styles from './styles';
import { ToastType } from './common';

interface Props {
  showToast: boolean;
  message?: string;
  type?: ToastType;
}

const Toast = ({ showToast, message, type }: Props): JSX.Element => {
  const positionY = useSharedValue(type === ToastType.Top ? -100 : 100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(positionY.value) }],
    };
  });

  if (showToast) {
    if (type === ToastType.Top) {
      positionY.value = 0;
    }
    if (type === ToastType.Bottom) {
      positionY.value = -16;
    }
  }

  if (!showToast) {
    if (type === ToastType.Top) {
      positionY.value = -100;
    }
    if (type === ToastType.Bottom) {
      positionY.value = 100;
    }
  }

  return (
    <Animated.View
      style={[
        type === ToastType.Top ? styles.topToastStyle : styles.bottomToastStyle,
        animatedStyle,
      ]}
    >
      <Text>{message}</Text>
    </Animated.View>
  );
};

export default Toast;
