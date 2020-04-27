import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NavBar({
  leftIcon,
  leftOnPress,
  rightIcon,
  rightOnPress,
}) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity onPress={leftOnPress}>
          <Ionicons name={leftIcon} size={50} color="#4A90E2" />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={rightOnPress}>
          <Ionicons name={rightIcon} size={50} color="#4A90E2" />
        </TouchableOpacity>
      )}
    </View>
  );
}
