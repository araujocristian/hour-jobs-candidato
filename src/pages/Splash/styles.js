import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default StyleSheet.create({
  ...general,
  logo: {
    width: 50,
    height: 50,
    backgroundColor: colors.gray,
  },
  text: {
    color: '#121212',
    fontSize: 36,
    fontFamily: 'roboto-regular',
  },
  createButton: {
    width: 310,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
  },
  createButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  footerText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: 'roboto-regular',
  },
  footerLink: {
    marginLeft: 5,
  },
  footerLinkText: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'roboto-regular',
  },
});
