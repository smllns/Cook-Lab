import { Box, Container, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ComponentHeader from './ComponentHeader';
import { loginText } from '../info/TextInfo';
import AuthInputs from './AuthInputs';
import ButtonCustom from './ButtonCustom';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../index';
import AuthPagesContainer from './AuthPagesContainer';

const LoginPage = () => {
  // HANDLING DIFFERENT INPUT STATES AND STORING DATA

  const [errors, setErrors] = useState({
    emailInput: '',
    passwordInput: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleInputError = (inputId, errorMessage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [inputId]: errorMessage }));
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsAnyFieldEmpty(value === '' || password === '');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setIsAnyFieldEmpty(email === '' || value === '');
  };

  const handleFocusChange = (focused) => {
    setIsFocused(focused);
    setIsSubmitDisabled(isAnyFieldEmpty && !focused);
  };

  const handleButtonClick = () => {
    if (
      errors.emailInput ||
      errors.passwordInput ||
      isSubmitDisabled ||
      isAnyFieldEmpty
    ) {
      toast({
        title: 'Please enter a valid email and password!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const userName = userData.name;

        toast({
          title: `Welcome back ${userName}!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.log('User document does not exist');
      }
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
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
        <ComponentHeader {...loginText} />
        <Box textAlign='left'>
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
            />
          </Box>
          <Box py='24px' textAlign='end'>
            <Text
              fontWeight='600'
              fontSize='14px'
              color='#00896E'
              cursor='pointer'
              as={Link}
              to='/forgotPassword'
            >
              Forgot password
            </Text>
          </Box>
        </Box>

        <Box onClick={handleButtonClick}>
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='#00896E'
            btnSize='l'
            btnText='Sign in'
            variant='solid'
            btnHeight='45px'
            padX='153px'
            disabled={
              (!isFocused && (errors.emailInput || errors.passwordInput)) ||
              isSubmitDisabled
            }
          />
        </Box>

        <Box display='flex' pt='24px' justifyContent='center'>
          <Text fontWeight='400' fontSize='14px' pr='4px'>
            Don’t have an account?
          </Text>
          <Text
            fontWeight='600'
            fontSize='14px'
            color='#00896E'
            cursor='pointer'
            as={Link}
            to='/signUp'
          >
            Sign up
          </Text>
        </Box>
      </Container>
    </AuthPagesContainer>
  );
};

export default LoginPage;
