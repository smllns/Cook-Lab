import React from 'react';
import Header from '../components/Header';
import { Divider } from '@chakra-ui/react';
import SignUpPage from '../components/SignUpPage';

// SIGN UP PAGE

const SignUp = () => {
  return (
    <>
      <Header />
      <Divider />
      <SignUpPage />
    </>
  );
};

export default SignUp;
