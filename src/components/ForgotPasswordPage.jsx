import { Box, Container, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import ComponentHeader from './ComponentHeader';
import { forgotText } from '../info/TextInfo';
import ButtonCustom from './ButtonCustom';
import { Link, useNavigate } from 'react-router-dom';
import AuthInputs from './AuthInputs';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import AuthPagesContainer from './AuthPagesContainer';

const ForgotPasswordPage = () => {
  // HANDLING DIFFERENT INPUT STATES AND STORING DATA

  const [errors, setErrors] = useState({
    emailInput: '',
  });
  const [email, setEmail] = useState('');
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
    setIsAnyFieldEmpty(value === '');
  };

  const handleFocusChange = (focused) => {
    setIsFocused(focused);
    setIsSubmitDisabled(isAnyFieldEmpty && !focused);
  };

  const handleButtonClick = () => {
    if (errors.emailInput || isSubmitDisabled || isAnyFieldEmpty) {
      toast({
        title: 'Please enter a valid email!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email);
      toast({
        title: 'Please check your email!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    }
  };

  return (
    <AuthPagesContainer>
      <Container centerContent>
        <ComponentHeader {...forgotText} />
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
        </Box>
        <Box onClick={handleButtonClick}>
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='#00896E'
            btnSize='l'
            btnText='Send'
            variant='solid'
            btnHeight='45px'
            padX='160px'
            disabled={(!isFocused && errors.emailInput) || isSubmitDisabled}
          />
        </Box>
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
            Sign In
          </Text>
        </Box>
      </Container>
    </AuthPagesContainer>
  );
};

export default ForgotPasswordPage;
