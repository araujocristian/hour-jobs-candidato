import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';

function Login({ navigation }) {
  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavBar
          leftIcon="md-arrow-back"
          leftOnPress={() => {
            navigation.goBack();
          }}
        />

        <View style={styles.logo} />

        <View style={styles.textWraper}>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.subTitle}>Use seus dados para continuar!</Text>
        </View>

        <LoginForm navigation={navigation} />

        <TouchableOpacity style={styles.footer} onPress={() => {}}>
          <Text style={styles.footerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
export default Login;
