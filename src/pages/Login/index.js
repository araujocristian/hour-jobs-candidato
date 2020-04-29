import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import styles from './styles';
import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';

function Login({ navigation }) {
  return (
    <>
      <StatusBar animated={true} barStyle="light-content" />
      <NavBar
        leftIcon="md-arrow-back"
        leftOnPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.container}>
        <View style={styles.logo}></View>

        <View style={styles.textWraper}>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.subTitle}>Use seus dados para continuar!</Text>
        </View>

        <LoginForm navigation={navigation} />

        <TouchableOpacity style={styles.footer} onPress={() => {}}>
          <Text style={styles.footerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Login;
