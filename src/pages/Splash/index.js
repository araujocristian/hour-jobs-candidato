import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './styles';
import Button from '../../components/Button';

function Splash({ navigation }) {
  return (
    <>
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.alignVerticalCenter, { flex: 0.7 }]}>
          <View style={{ flex: 2 }}>
            <View style={{ height: 66 }} />
            <Image style={[styles.logo, styles.section]}
            source={require('../../../assets/img/HJ2.png')} />
          </View>
          <Text style={[styles.text, { flex: 2 }]}>
            Conexões imediatas entre empresas e trabalhadores
          </Text>
        </View>

        <View style={[styles.alignVerticalCenter, { flex: 0.3 }]}>
          <Button
            label="Login"
            onPress={() => navigation.navigate('SignIn')}
            style={styles.section}
          />

          <View style={[styles.loginText]}>
            <Text style={styles.footerText}>Não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.footerLink}
            >
              <Text style={styles.footerLinkText}>Cadastre-se!</Text>
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
