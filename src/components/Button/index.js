import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, ButtonText } from './styles';

const Button = ({ label, onPress }) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
