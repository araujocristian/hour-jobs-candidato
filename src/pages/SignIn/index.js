import React, { useRef } from 'react';
import {
  StatusBar,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Yup from 'yup';
import SafeAreaView from 'react-native-safe-area-view';
import { Form } from '@unform/mobile';
import { Input } from '../../components/Form';
import Button from '../../components/Button';
import schema from './schema';
import styles from './styles';
import { useAuth } from '../../contexts/auth';

const SignIn = ({ navigation }) => {
  const formRef = useRef(null);
  const { signIn } = useAuth();

  const handleSubmit = async (data, { reset }) => {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      await signIn(data);
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
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          centerContent
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logo} />

          <View style={styles.textWraper}>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.subTitle}>Use seus dados para continuar!</Text>
          </View>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <View style={{ marginTop: 50, height: '100%' }}>
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
              <View style={styles.buttonContainer}>
                <Button
                  label="Entrar"
                  onPress={() => formRef.current.submitForm()}
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

export default SignIn;
