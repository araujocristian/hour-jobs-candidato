import React, { useState, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';

import Input from '../Input';

const InputMask = ({ type, ...rest }) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  );
};

InputMask.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InputMask;
