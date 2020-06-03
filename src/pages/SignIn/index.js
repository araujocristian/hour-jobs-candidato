import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/Form';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import schema from './schema';
import styles from './styles';

const SignIn = ({ navigation }) => {
  const formRef = useRef(null);
  const { signIn } = useAuth();

  const handleSubmit = async (data, { reset }) => {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      const userData = {
        email: data.email,
        senha: data.password,
      };

      await signIn(userData);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <StatusBar animated backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavBar
          leftIcon="md-arrow-back"
          leftOnPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          centerContent
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.logo, styles.section]} />

          <View style={[styles.textWraper, styles.section]}>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.subTitle}>Use seus dados para continuar!</Text>
          </View>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <View style={[styles.section, styles.formContent]}>
              <Input
                type="email"
                label="E-mail"
                name="email"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
              />
              <Input
                type="password"
                label="Senha"
                name="password"
                secureTextEntry
              />
              <View style={[styles.buttonContainer, styles.section]}>
                <Button
                  label="Entrar"
                  onPress={() => formRef.current.submitForm()}
                  style={styles.section}
                />
              </View>
              <TouchableOpacity style={styles.footer} onPress={() => {}}>
                <Text style={styles.footerText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default SignIn;
