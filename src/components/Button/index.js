import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.button]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
