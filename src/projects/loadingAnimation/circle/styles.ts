import { StyleSheet } from 'react-native';
import { blue } from '../../../theme/colors';

const styles = StyleSheet.create({
  base: {
    width: 80,
    height: 80,
    backgroundColor: blue,
    position: 'absolute',
    borderRadius: 80 / 2,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

export default styles;
