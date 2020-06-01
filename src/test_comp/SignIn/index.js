import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import { Form } from '@unform/mobile';
import SafeAreaView from 'react-native-safe-area-view';
import * as Yup from 'yup';
import Input from '../../components/Form/Input';
import InputMask from '../../components/Form/InpurMask';
import Button from '../../components/Button';

import schema from './schema';

const SignIn = () => {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try {
      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

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
    <>
      <StatusBar animated barStyle="light-content" />
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputMask type="custom" label="E-mail" name="email" />
          <Input type="password" label="Senha" name="password" />

          <Button label="Entrar" onPress={() => formRef.current.submitForm()} />
        </Form>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
