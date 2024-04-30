import React from 'react';
import Header from '../components/Header';
import { Divider } from '@chakra-ui/react';
import LoginPage from '../components/LoginPage';

// LOGIN PAGE

const Login = () => {
  return (
    <>
      <Header />
      <Divider />
      <LoginPage />
    </>
  );
};

export default Login;
