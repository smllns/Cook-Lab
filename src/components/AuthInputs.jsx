import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';

const AuthInputs = ({
  id,
  type,
  placeholder,
  setError,
  onChange,
  onFocusChange,
  error,
  width = '360px',
}) => {
  // HANDLING DIFFERENT INPUT STATES AND STORING DATA + INPUT VALIDATION LOGIC

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    onFocusChange(true);
  };

  const handleBlur = () => {
    setFocused(false);
    onFocusChange(false);
    if (inputValue.trim() === '') {
      setError(id, '');
      setInputError('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
    setTouched(true);
    const working = isValidInput(type, inputValue);

    if (!working) {
      setError(id, `Please enter a valid  ${type}.`);
      setInputError(`Invalid ${type} format`);
    } else {
      setError(id, '');
      setInputError('');
    }
  };

  const isValidInput = (type, inputValue) => {
    if (type === 'email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(inputValue)) {
        setInputError('Invalid email format');
        setError(id, 'Invalid email format');
        return false;
      }
      if (inputValue.trim() === '') {
        setError(id, '');
        setInputError('');
        return true;
      } else {
        return true;
      }
    }
    if (type === 'password') {
      if (inputValue.length < 5) {
        setInputError('Password must be at least 5 characters long');
        setError(id, 'Password must be at least 5 characters long');
        return false;
      }
      if (inputValue.trim() === '') {
        setError(id, '');
        setInputError('');
        return true;
      } else {
        return true;
      }
    }
    if (type === 'text') {
      if (inputValue.length < 1) {
        setInputError('Name must be at least 1 character long');
        setError(id, 'Name must be at least 1 character long');
        return false;
      }
      if (inputValue.trim() === '') {
        setError(id, '');
        setInputError('');
        return true;
      } else {
        return true;
      }
    }
  };

  return (
    <InputGroup>
      <Input
        id={id}
        width={width}
        height='44px'
        borderRadius='8px'
        type={type}
        placeholder={placeholder}
        focusBorderColor='#D6BBFB'
        errorBorderColor='#FDA29B'
        _hover={{ boxShadow: '0px 4px 20px 0px #00000040' }}
        _focus={{ bg: 'white' }}
        variant='filled'
        bg='white'
        border='1px'
        borderColor='#D0D5DD'
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        isInvalid={touched && (inputError || error)}
        onFocus={handleFocus}
      />
      {!focused && (inputError || error) && (
        <InputRightElement
          pointerEvents='none'
          height='45px'
          top='49%'
          transform='translateY(-50%)'
        >
          <MdErrorOutline color='#F04438' size='16px' />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default AuthInputs;
