import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  text: {
    color: '#121212',
    fontSize: 36,
    // fontFamily: "roboto-regular",
  },
  createButton: {
    width: 310,
    height: 70,
    backgroundColor: 'rgba(74,144,226,1)',
    borderRadius: 100,
    justifyContent: 'center',
  },
  createButtonText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: "roboto-700",
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  footerText: {
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    // fontFamily: "roboto-regular",
  },
  footerLink: {
    marginLeft: 5,
  },
  footerLinkText: {
    color: 'rgba(74,144,226,1)',
    fontSize: 20,
    // fontFamily: "roboto-regular",
  },
});
