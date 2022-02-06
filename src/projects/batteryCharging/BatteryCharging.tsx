/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo } from 'react';
import { View } from 'react-native';
import { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import BatteryBar from './batteryBar';
import styles from './styles';

const BAR_ANIMATION_DURATION = 500;

const BatteryCharging = (): JSX.Element => {
  const firstBarOpacity = useSharedValue(0);
  const secondBarOpacity = useSharedValue(0);
  const thirdBarOpacity = useSharedValue(0);
  const fourthBarOpacity = useSharedValue(0);

  useEffect(() => {
    const animateValues = (): void => {
      firstBarOpacity.value = withTiming(1, {
        duration: BAR_ANIMATION_DURATION,
      });
      secondBarOpacity.value = withDelay(
        BAR_ANIMATION_DURATION,
        withTiming(1, {
          duration: BAR_ANIMATION_DURATION,
        })
      );
      thirdBarOpacity.value = withDelay(
        BAR_ANIMATION_DURATION * 2,
        withTiming(1, {
          duration: BAR_ANIMATION_DURATION,
        })
      );
      fourthBarOpacity.value = withDelay(
        BAR_ANIMATION_DURATION * 3,
        withTiming(1, {
          duration: BAR_ANIMATION_DURATION,
        })
      );
    };
    animateValues();
    const interval = setInterval(() => {
      firstBarOpacity.value = 0;
      secondBarOpacity.value = 0;
      thirdBarOpacity.value = 0;
      fourthBarOpacity.value = 0;
      animateValues();
    }, BAR_ANIMATION_DURATION * 4);
    return () => clearInterval(interval);
  }, []);

  const animatedStyleFirstBar = useAnimatedStyle(() => ({
    opacity: firstBarOpacity.value,
  }));

  const animatedStyleSecondBar = useAnimatedStyle(() => ({
    opacity: secondBarOpacity.value,
  }));

  const animatedStyleThirdBar = useAnimatedStyle(() => ({
    opacity: thirdBarOpacity.value,
  }));

  const animatedStyleFourthBar = useAnimatedStyle(() => ({
    opacity: fourthBarOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.batteryContainer}>
        <View style={styles.batteryMainContainerStyle}>
          <View style={styles.batteryMainStyle}>
            <BatteryBar
              customStyle={styles.firstBatteryBarStyle}
              animatedStyle={animatedStyleFirstBar}
            />
            <BatteryBar
              customStyle={styles.middleBatteryBarStyle}
              animatedStyle={animatedStyleSecondBar}
            />
            <BatteryBar
              customStyle={styles.middleBatteryBarStyle}
              animatedStyle={animatedStyleThirdBar}
            />
            <BatteryBar
              customStyle={styles.lastBatteryBarStyle}
              animatedStyle={animatedStyleFourthBar}
            />
          </View>
        </View>
        <View style={styles.batteryPeakStyle} />
      </View>
    </View>
  );
};

export default memo(BatteryCharging);
