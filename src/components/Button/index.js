import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
