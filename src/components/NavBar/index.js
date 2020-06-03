import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function NavBar({ leftIcon, leftOnPress, rightIcon, rightOnPress }) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity onPress={leftOnPress}>
          <Ionicons name={leftIcon} size={40} color="#4A90E2" />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={rightOnPress}>
          <Ionicons name={rightIcon} size={40} color="#4A90E2" />
        </TouchableOpacity>
      )}
    </View>
  );
}

NavBar.propTypes = {
  leftIcon: PropTypes.string,
  leftOnPress: PropTypes.func,
  rightIcon: PropTypes.string,
  rightOnPress: PropTypes.func,
};

NavBar.defaultProps = {
  leftIcon: null,
  leftOnPress: () => {},
  rightIcon: null,
  rightOnPress: () => {},
};

export default NavBar;
