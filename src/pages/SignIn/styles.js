import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default StyleSheet.create({
  ...general,
  scroll: {
    backgroundColor: 'transparent',
  },
  contentContainer: {},
  buttonContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textWraper: {
    marginBottom: 10,
  },
  title: {
    // color: colors.black,
    // fontSize: 36,
    color: colors.primary,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'flex-end',
  },
  subTitle: {
    color: colors.gray,
    fontSize: 20,
  },
  loginForm: {
    height: 400,
    alignSelf: 'center',
    marginBottom: 30,
  },
  footer: {
    alignSelf: 'center',
  },
  footerText: {
    color: colors.black,
    fontSize: 20,
  },
  formContent: {
    marginTop: 40,
  },
});
