import React, { Component } from 'react';
import { ScrollView, View, SafeAreaView, Platform } from 'react-native';
import { cpf } from 'cpf-cnpj-validator';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Button from '../Button';

import styles from './styles';

let defaults = {
  cpf: '',
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitCPF = this.onSubmitCPF.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.CPFRef = this.updateRef.bind(this, 'cpf');
    this.passwordRef = this.updateRef.bind(this, 'password');

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      secureTextEntry: true,
      ...defaults,
    };
  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }

  onChangeText(text) {
    ['cpf', 'password']
      .map((name) => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text });
        }
      });
  }

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry,
    }));
  }

  onSubmitCPF() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onSubmit() {
    let errors = {};

    ['cpf', 'password'].forEach((name) => {
      let value = this[name].value();

      if (!value) {
        errors[name] = 'Parece que você esqueceu esse campo.';
      } else {
        if ('password' === name && value.length < 6) {
          errors[name] = 'Senha muito curta.';
        }

        if ('cpf' === name && value.length < 11) {
          errors[name] = 'CPF inválido.';
        } else if ('cpf' === name && !cpf.isValid(value)) {
          errors[name] = 'CPF inválido.';
        }
      }
    });

    this.setState({ errors });

    this.props.navigation.navigate('Home');
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  renderPasswordAccessory() {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry ? 'visibility' : 'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting={true}
      />
    );
  }

  render() {
    let { errors = {}, secureTextEntry } = this.state;

    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <TextField
              ref={this.CPFRef}
              value={defaults.cpf}
              keyboardType="phone-pad"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitCPF}
              returnKeyType="next"
              label="CPF"
              maxLength={11}
              characterRestriction={11}
              error={errors.cpf}
            />

            <TextField
              ref={this.passwordRef}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPassword}
              returnKeyType="done"
              label="Senha"
              error={errors.password}
              renderRightAccessory={this.renderPasswordAccessory}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button label="Entrar" onPress={this.onSubmit} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LoginForm;
