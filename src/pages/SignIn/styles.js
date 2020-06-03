import { StyleSheet } from 'react-native';
import { general, colors } from '../../styles';

export default StyleSheet.create({
  ...general,
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'stretch',
  //   paddingHorizontal: 25,
  // },
  scroll: {
    backgroundColor: 'transparent',
  },
  contentContainer: {},
  buttonContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: colors.gray,
    alignSelf: 'center',
    marginBottom: 30,
  },
  textWraper: {
    marginBottom: 30,
  },
  title: {
    color: colors.black,
    fontSize: 36,
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
