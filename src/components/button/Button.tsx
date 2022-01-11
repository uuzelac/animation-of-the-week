import React from 'react';
import { Text, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
  onPress: () => void;
  label: string;
  customStyle?: ViewStyle | undefined;
}

const Button = ({ onPress, label, customStyle = {} }: Props): JSX.Element => {
  return (
    <RectButton style={[styles.button, customStyle]} onPress={onPress}>
      <Text>{label}</Text>
    </RectButton>
  );
};

export default Button;
