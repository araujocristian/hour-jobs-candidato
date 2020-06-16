import { StyleSheet } from 'react-native';
import { general, colors, metrics } from '../../styles';

export default StyleSheet.create({
  ...general,
  title: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 7,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'grey',
    marginTop: 13,
  },
  label: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 10,
  },
});
