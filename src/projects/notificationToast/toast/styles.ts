import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topToastStyle: {
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
    backgroundColor: '#FCFCFC',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 100,
  },
  bottomToastStyle: {
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
    backgroundColor: '#FFCCCB',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 100,
  },
});

export default styles;
