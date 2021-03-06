import { StyleSheet } from 'react-native';
import { blue } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerLogo: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  textLogo: {
    color: blue,
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 32,
  },
});

export default styles;
