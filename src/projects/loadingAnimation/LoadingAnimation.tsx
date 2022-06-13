import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSharedValue, withTiming, withRepeat, Easing } from 'react-native-reanimated';
import Circle from './circle/Circle';
import styles from './styles';

interface Style {
  end: number;
  top: number;
  start: number;
  bottom: number;
}

export interface Position {
  progressRange: number[];
  transX: number[];
  transY: number[];
  style: Style;
}

interface Data {
  id: number;
  positions: Position[];
}

const data: Data[] = [
  {
    id: 1,
    positions: [
      {
        progressRange: [1 / 6, 1 / 4],
        transX: [0, 0],
        transY: [0, 100],
        style: {
          end: 100,
          top: 0,
          start: 0,
          bottom: 100,
        },
      },
      {
        progressRange: [5 / 12, 1 / 2],
        transX: [0, 100],
        transY: [0, 0],
        style: {
          end: 100,
          top: 100,
          start: 0,
          bottom: 0,
        },
      },
      {
        progressRange: [2 / 3, 3 / 4],
        transX: [0, 0],
        transY: [0, -100],
        style: {
          end: 0,
          top: 100,
          start: 100,
          bottom: 0,
        },
      },
      {
        progressRange: [11 / 12, 1],
        transX: [0, -100],
        transY: [0, 0],
        style: {
          end: 0,
          top: 0,
          start: 100,
          bottom: 100,
        },
      },
    ],
  },
  {
    id: 2,
    positions: [
      {
        progressRange: [1 / 12, 1 / 6],
        transX: [0, 100],
        transY: [0, 0],
        style: {
          end: 100,
          top: 100,
          start: 0,
          bottom: 0,
        },
      },
      {
        progressRange: [1 / 3, 5 / 12],
        transX: [0, 0],
        transY: [0, -100],
        style: {
          end: 0,
          top: 100,
          start: 100,
          bottom: 0,
        },
      },
      {
        progressRange: [7 / 12, 2 / 3],
        transX: [0, -100],
        transY: [0, 0],
        style: {
          end: 0,
          top: 0,
          start: 100,
          bottom: 100,
        },
      },
      {
        progressRange: [5 / 6, 11 / 12],
        transX: [0, 0],
        transY: [0, 100],
        style: {
          end: 100,
          top: 0,
          start: 0,
          bottom: 100,
        },
      },
    ],
  },
  {
    id: 3,
    positions: [
      {
        progressRange: [0, 1 / 12],
        transX: [0, 0],
        transY: [0, -100],
        style: {
          end: 0,
          top: 100,
          start: 100,
          bottom: 0,
        },
      },
      {
        progressRange: [1 / 4, 1 / 3],
        transX: [0, -100],
        transY: [0, 0],
        style: {
          end: 0,
          top: 0,
          start: 100,
          bottom: 100,
        },
      },
      {
        progressRange: [1 / 2, 7 / 12],
        transX: [0, 0],
        transY: [0, 100],
        style: {
          end: 100,
          top: 0,
          start: 0,
          bottom: 100,
        },
      },
      {
        progressRange: [3 / 4, 5 / 6],
        transX: [0, 100],
        transY: [0, 0],
        style: {
          end: 100,
          top: 100,
          start: 0,
          bottom: 0,
        },
      },
    ],
  },
];

const LoadingAnimation = (): JSX.Element => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 5000, easing: Easing.linear }),
      -1,
      false
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {data.map((circle) => {
            return <Circle progress={progress} positions={circle.positions} key={circle.id} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default LoadingAnimation;
