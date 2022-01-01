import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  lineColor?: string;
  lineHeight?: number;
  margineStart?: number;
  margineEnd?: number;
  margineTop?: number;
  margineBottom?: number;
}

const HorizontalLine: React.FC<Props> = (): JSX.Element => {
  return <View style={styles.lineStyle} />;
};

export default HorizontalLine;
