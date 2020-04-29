import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { cpf } from 'cpf-cnpj-validator';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Button from '../Button';

import styles from './styles';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitName = this.onSubmitName.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitCPF = this.onSubmitCPF.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onSubmitBirthDate = this.onSubmitBirthDate.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.nameRef = this.updateRef.bind(this, 'name');
    this.emailRef = this.updateRef.bind(this, 'email');
    this.CPFRef = this.updateRef.bind(this, 'cpf');
    this.passwordRef = this.updateRef.bind(this, 'password');
    this.cellPhoneRef = this.updateRef.bind(this, 'cellPhone');
    this.birthDateRef = this.updateRef.bind(this, 'birthDate');
    this.houseRef = this.updateRef.bind(this, 'house');

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      secureTextEntry: true,
      name: '',
      cpf: '',
      birthDate: '',
      cellPhone: '',
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
    ['name', 'cpf', 'cellPhone', 'birthDate', 'email', 'password']
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

  onSubmitName() {
    this.email.focus();
  }

  onSubmitEmail() {
    this.cpf.focus();
  }

  onSubmitCPF() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.cellPhone.focus();
  }

  onSubmitCellPhone() {
    this.birthDate.focus();
  }

  onSubmitBirthDate() {
    this.birthDate.blur();
  }

  handleValidate() {
    let errors = {};
    let haveError = false;

    ['name', 'email', 'cpf', 'password', 'cellPhone', 'birthDate'].forEach(
      (name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Parece que você esqueceu esse campo.';
          haveError = true;
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Senha muito curta.';
            haveError = true;
          }

          if ('cpf' === name && value.length < 11) {
            errors[name] = 'CPF inválido.';
            haveError = true;
          } else if ('cpf' === name && !cpf.isValid(value)) {
            errors[name] = 'CPF inválido.';
            haveError = true;
          }
        }
      }
    );

    this.setState({ errors });
    return !haveError;
  }

  onSubmit() {
    if (this.handleValidate()) this.props.navigation.navigate('Home');
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

  formatCPF = (text) => {
    return text.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  };

  formatCellPhone = (text) => {
    return text
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2');
  };

  formatBirthDate = (text) => {
    return text.replace(/^(\d{2})(\d{2})(\d{4})/g, '$1/$2/$3');
    // .replace(/(\d{5})(\d{4})$/, '$1-$2');
  };

  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    let { name, cpf, cellPhone, birthDate } = data;

    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <TextField
            ref={this.nameRef}
            value={name}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitName}
            returnKeyType="next"
            label="Nome completo"
            error={errors.name}
          />

          <TextField
            ref={this.emailRef}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEmail}
            returnKeyType="next"
            label="Email"
            error={errors.email}
          />

          <TextField
            ref={this.CPFRef}
            value={cpf}
            keyboardType="phone-pad"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitCPF}
            formatText={this.formatCPF}
            returnKeyType="next"
            label="CPF"
            maxLength={14}
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
            returnKeyType="next"
            label="Senha"
            error={errors.password}
            renderRightAccessory={this.renderPasswordAccessory}
          />

          <TextField
            ref={this.cellPhoneRef}
            value={cellPhone}
            keyboardType="phone-pad"
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitCellPhone}
            returnKeyType="next"
            label="Celular"
            maxLength={15}
            formatText={this.formatCellPhone}
            error={errors.cellPhone}
          />

          <TextField
            ref={this.birthDateRef}
            value={birthDate}
            keyboardType="phone-pad"
            onFocus={this.onFocus}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitBirthDate}
            returnKeyType="next"
            blurOnSubmit={true}
            label="Data de nascimento"
            formatText={this.formatBirthDate}
            maxLength={10}
            error={errors.birthDate}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button label="Cadastar" onPress={this.onSubmit} />
        </View>
      </SafeAreaView>
    );
  }
}

export default RegisterForm;
