import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { Form } from '@unform/mobile';
import SafeAreaView from 'react-native-safe-area-view';
import Input from '../../components/Form/Input';
import InputMask from '../../components/Form/InpurMask';
import Button from '../../components/Button';

// import { Container } from './styles';

const Login = () => {
  const formRef = useRef(null);

  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="first_name" />
          <InputMask type="cpf" name="cpf" keyboardType="numeric" />

          <Button label="Entrar" onPress={() => formRef.current.submitForm()} />
        </Form>
      </SafeAreaView>
    </>
  );
};

export default Login;
