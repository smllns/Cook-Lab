import { Box, Container, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ComponentHeader from './ComponentHeader';
import { signUpText } from '../info/TextInfo';
import AuthInputs from './AuthInputs';
import ButtonCustom from './ButtonCustom';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../index';
import AuthPagesContainer from './AuthPagesContainer';

const SignUpPage = () => {
  // HANDLING DIFFERENT INPUT STATES AND STORING DATA
  const [errors, setErrors] = useState({
    emailInput: '',
    passwordInput: '',
    repeatPasswordInput: '',
    nameInput: '',
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const toast = useToast();
  const navigate = useNavigate();

  const handleInputError = (inputId, errorMessage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [inputId]: errorMessage }));
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsAnyFieldEmpty(
      value === '' || password === '' || repeatPassword === '' || name === ''
    );
  };
  const handleNameChange = (value) => {
    setName(value);
    setIsAnyFieldEmpty(
      email === '' || password === '' || repeatPassword === '' || value === ''
    );
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError('');
    setIsAnyFieldEmpty(
      email === '' || value === '' || repeatPassword === '' || name === ''
    );
  };
  const handleRepeatPasswordChange = (value) => {
    setPasswordError('');
    setRepeatPassword(value);
    setIsAnyFieldEmpty(
      email === '' || password === '' || value === '' || name === ''
    );
  };

  const handleFocusChange = (focused) => {
    setIsFocused(focused);
    setIsSubmitDisabled(isAnyFieldEmpty && !focused);
  };

  const handleButtonClick = () => {
    if (password !== repeatPassword) {
      setPasswordError('Passwords do not match!');
      toast({
        title: 'Passwords do not match!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    if (
      errors.emailInput ||
      errors.passwordInput ||
      errors.repeatPasswordInput ||
      errors.nameInput ||
      isSubmitDisabled ||
      isAnyFieldEmpty
    ) {
      toast({
        title: 'Please enter a valid email, password and name!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const users = doc(db, 'users', userCredential.user.uid);

      setDoc(users, { name: name, email: email, password: password });
      toast({
        title: `${name}, welcome to CookLab!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
      toast({
        title: 'Something went wrong... Please try again!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <AuthPagesContainer>
      <Container centerContent>
        <ComponentHeader {...signUpText} />
        <Box textAlign='left' pb='24px'>
          <Text fontWeight='500' fontSize='14px' pt='32px' pb='6px'>
            Email
          </Text>
          <Box textAlign='center'>
            <AuthInputs
              id='emailInput'
              type='email'
              placeholder='Enter your email'
              setError={handleInputError}
              onChange={handleEmailChange}
              onFocusChange={handleFocusChange}
            />
          </Box>
          <Text fontWeight='500' fontSize='14px' pt='20px' pb='6px'>
            Name
          </Text>
          <Box textAlign='center'>
            <AuthInputs
              id='nameInput'
              type='text'
              placeholder='Enter your name'
              onFocusChange={handleFocusChange}
              setError={handleInputError}
              onChange={handleNameChange}
            />
          </Box>
          <Text fontWeight='500' fontSize='14px' pt='20px' pb='6px'>
            Password
          </Text>
          <Box textAlign='center'>
            <AuthInputs
              id='passwordInput'
              type='password'
              placeholder='Enter your password'
              setError={handleInputError}
              onChange={handlePasswordChange}
              onFocusChange={handleFocusChange}
              error={passwordError}
            />
          </Box>

          <Text fontWeight='500' fontSize='14px' pt='20px' pb='6px'>
            Repeat Password
          </Text>
          <Box textAlign='center'>
            <AuthInputs
              id='repeatPasswordInput'
              type='password'
              placeholder='Enter your password'
              setError={handleInputError}
              onChange={handleRepeatPasswordChange}
              onFocusChange={handleFocusChange}
              error={passwordError}
            />
          </Box>
        </Box>
        <Box onClick={handleButtonClick}>
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='#00896E'
            btnSize='l'
            btnText='Sign up'
            variant='solid'
            btnHeight='45px'
            padX='153px'
            disabled={
              (!isFocused &&
                (errors.emailInput ||
                  errors.passwordInput ||
                  errors.repeatPasswordInput ||
                  errors.nameInput)) ||
              isSubmitDisabled
            }
          />
        </Box>
        <Text
          pt='24px'
          fontWeight='600'
          fontSize='14px'
          color='#00896E'
          cursor='pointer'
          as={Link}
          to='/forgotPassword'
        >
          Forgot password
        </Text>
        <Box display='flex' pt='24px' justifyContent='center'>
          <Text fontWeight='400' fontSize='14px' pr='4px'>
            Have an account?
          </Text>
          <Text
            fontWeight='600'
            fontSize='14px'
            color='#00896E'
            cursor='pointer'
            as={Link}
            to='/login'
          >
            Sign in
          </Text>
        </Box>
      </Container>
    </AuthPagesContainer>
  );
};

export default SignUpPage;
