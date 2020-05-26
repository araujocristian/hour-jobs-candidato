import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const theme = {
  colors: {
    background: '#e6e6e6',
    black: '#121212',
    gray: '#7b7b7b',
    white: '#fff',
    primary: '#4a90e2',
  },
  fonts: ['Roboto', 'sans-serif'],
  metrics: {
    smallMargin: 5,
    baseMargin: 10,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    navBarHeight: Platform.OS === 'ios' ? 64 : 54,
    statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
    baseRadius: 3,
  },
};

export default theme;
