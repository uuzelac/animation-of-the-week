import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commonToastStyle: {
    height: 72,
    borderRadius: 8,
    margin: 8,
    padding: 16,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 100,
  },
  topToastStyle: {
    backgroundColor: '#FCFCFC',
    top: 0,
  },
  bottomToastStyle: {
    backgroundColor: '#FFCCCB',
    bottom: 0,
  },
});

export default styles;
