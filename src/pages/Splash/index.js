import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';

import { SafeAreaViewWrapper, Image, PrincipalText } from './styles';
import Button from '../../components/Button';

function Splash(props) {
  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaViewWrapper>
        <Image />
        <PrincipalText>
          Conectando as melhores empresas aos melhores profissionais.
        </PrincipalText>
        {/*
        <Button
          label="Cadastre-se"
          onPress={() => props.navigation.navigate('Register')}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.footerLink}
          >
            <Text style={styles.footerLinkText}>Entre aqui!</Text>
          </TouchableOpacity>
        </View> */}
      </SafeAreaViewWrapper>
    </>
  );
}

export default Splash;
