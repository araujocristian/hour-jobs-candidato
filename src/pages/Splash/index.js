import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import styles from "./styles";
import Button from "../../components/Button";

function Splash(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={styles.logo}></View>
      <Text style={styles.text}>
        Conectando as melhores empresas aos melhores profissionais.
      </Text>

      <Button
        label="Cadastre-se"
        onPress={() => props.navigation.navigate("Register")}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.footerLink}
        >
          <Text style={styles.footerLinkText}>Entre aqui!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Splash;
