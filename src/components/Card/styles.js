import { StyleSheet } from 'react-native';
import { general, colors, metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 10.22,
    shadowRadius: 2.22,

    elevation: 1,
  },

  title: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.gray,
    fontFamily: 'roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: colors.gray,
    fontFamily: 'roboto-regular',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 3,
  },
  footerText: {
    color: colors.black,
    fontFamily: 'roboto-regular',
    fontSize: 16,
    fontWeight: '700',
  },
});
