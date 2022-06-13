import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
  Extrapolate,
} from 'react-native-reanimated';
import styles from './styles';
import { Position } from '../LoadingAnimation';

interface Props {
  progress: Animated.SharedValue<number>;
  positions: Position[];
}

interface SpringOptions {
  damping: number;
  stiffness: number;
}

const returnPosition = (progress = 0): number => {
  'worklet';

  if (progress >= 0 && progress < 0.25) {
    return 0;
  }
  if (progress >= 0.25 && progress < 0.5) {
    return 1;
  }
  if (progress >= 0.5 && progress < 0.75) {
    return 2;
  }
  if (progress >= 0.75 && progress <= 1) {
    return 3;
  }
  return progress;
};

const springOptions: SpringOptions = {
  damping: 8,
  stiffness: 150,
};

const Circle = ({ progress, positions }: Props): JSX.Element => {
  const animatedStyle = useAnimatedStyle(() => {
    const position = returnPosition(progress.value);
    const inputRangeX = positions[position].progressRange;
    const outputRangeX = positions[position].transX;
    const inputRangeY = positions[position].progressRange;
    const outputRangeY = positions[position].transY;
    const {
      style: { top, bottom, start, end },
    } = positions[position];
    const transX = interpolate(progress.value, inputRangeX, outputRangeX, Extrapolate.CLAMP);
    const transY = interpolate(progress.value, inputRangeY, outputRangeY, Extrapolate.CLAMP);

    return {
      top: withSpring(top, springOptions),
      bottom: withSpring(bottom, springOptions),
      start: withSpring(start, springOptions),
      end: withSpring(end, springOptions),
      transform: [
        {
          translateX: withSpring(transX, springOptions),
        },
        {
          translateY: withSpring(transY, springOptions),
        },
      ],
    };
  });
  return <Animated.View style={[styles.base, animatedStyle]} />;
};

export default Circle;
