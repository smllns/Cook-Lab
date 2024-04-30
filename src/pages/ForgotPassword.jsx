import { Divider } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import ForgotPasswordPage from '../components/ForgotPasswordPage';

// PASSWORD RECOVERY PAGE

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <Divider />
      <ForgotPasswordPage />
    </>
  );
};

export default ForgotPassword;
