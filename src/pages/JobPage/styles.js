import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default StyleSheet.create({
  ...general,
  scroll: {
    backgroundColor: 'transparent',
  },
  title: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.gray,
    fontFamily: 'roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
  description: {
    color: colors.gray,
    fontFamily: 'roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
  },
  footerText: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  text: {
    color: colors.gray,
    fontFamily: 'roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
  },
});
