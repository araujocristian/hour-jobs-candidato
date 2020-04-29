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
import RegisterForm from '../../components/RegisterForm';

function Register({ navigation }) {
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
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subTitle}>Conta pra gente quem é você!</Text>
        </View>

        <RegisterForm navigation={navigation} />

        <TouchableOpacity style={styles.footer} onPress={() => {}}>
          <Text style={styles.footerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Register;
