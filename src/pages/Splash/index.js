import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import LogoText from '../../../assets/img/logo_text.png';

import styles from './styles';
import Button from '../../components/Button';

function Splash({ navigation }) {
  return (
    <>
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.alignVerticalCenter, { flex: 0.7 }]}>
          <View style={{ flex: 1 }}>
            <View style={{ height: 66 }} />
            <Image
              style={{ aspectRatio: 2 / 1.27 }}
              resizeMode="contain"
              source={LogoText}
            />
          </View>
          <Text style={[styles.text, { flex: 1 }]}>
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
