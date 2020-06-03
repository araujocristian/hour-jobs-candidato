import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(230, 230, 230,1)',
    alignSelf: 'center',
    marginBottom: 30,
  },
  textWraper: {
    marginBottom: 30,
  },
  title: {
    color: '#121212',
    fontSize: 36,
  },
  subTitle: {
    color: 'rgba(123,123,123,1)',
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
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
  },
});
