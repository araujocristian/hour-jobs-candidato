import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './styles';
import Button from '../../components/Button';

function Splash({ navigation }) {
  return (
    <>
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.alignVerticalCenter, { flex: 0.6 }]}>
          <View style={{ height: 66 }} />
          <View style={[styles.logo, styles.section]} />
          <Text style={[styles.text, styles.section]}>
            Conectando as melhores empresas aos melhores profissionais.
          </Text>
        </View>

        <View style={[styles.alignVerticalCenter, { flex: 0.4 }]}>
          <Button
            label="Cadastre-se"
            onPress={() => navigation.navigate('Register')}
          />

          <View style={[styles.loginText, styles.section]}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
              style={styles.footerLink}
            >
              <Text style={styles.footerLinkText}>Entre aqui!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

Splash.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Splash;
