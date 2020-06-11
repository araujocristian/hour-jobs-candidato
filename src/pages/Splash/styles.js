import { StyleSheet } from 'react-native';
import { general, colors, metrics } from '../../styles';

export default StyleSheet.create({
  ...general,
  logo: {
    width:'100%',
    height: undefined,
    aspectRatio: 90/25,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primary,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 36,
    justifyContent: 'flex-end',
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
    marginBottom: metrics.doubleBaseMargin,
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
