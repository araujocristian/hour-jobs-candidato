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
    color: '#7B7B7B',
    fontSize: 20,
  },
  loginForm: {
    height: 400,
    alignSelf: 'center',
    marginBottom: 30,

    backgroundColor: 'red',
  },
  footer: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
  footerText: {
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
  },
});
