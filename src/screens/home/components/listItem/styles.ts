import { StyleSheet } from 'react-native';
import { greyDark } from '../../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: 12,
    paddingEnd: 12,
    paddingTop: 24,
    paddingBottom: 24,
  },
  iconStyle: {
    marginStart: 8,
  },
  textStyle: {
    color: greyDark,
    fontFamily: 'OpenSans',
    fontSize: 18,
    marginStart: 16,
  },
});

export default styles;
