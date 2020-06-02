import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './styles';
import Button from '../../components/Button';

function Splash({ navigation }) {
  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.logo} />
        <Text style={styles.text}>
          Conectando as melhores empresas aos melhores profissionais.
        </Text>

        <Button
          label="Cadastre-se"
          onPress={() => navigation.navigate('Register')}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={styles.footerLink}
          >
            <Text style={styles.footerLinkText}>Entre aqui!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Splash;
