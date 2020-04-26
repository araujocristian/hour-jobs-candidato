import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <Text style={styles.text}>
        Conectando as melhores empresas aos melhores profissionais.
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
        style={styles.createButton}
      >
        <Text style={styles.createButtonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ja tem uma conta?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={styles.footerLink}
        >
          <Text style={styles.entre}>Entre</Text>
        </TouchableOpacity>
      </View>
      <StatusBar animated={true} barStyle="light-content"></StatusBar>
    </View>
  );
}
