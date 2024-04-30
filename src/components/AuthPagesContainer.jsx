import { Box } from '@chakra-ui/react';
import React from 'react';

// BOX CONTAINER FOR AUTHENTICATION PAGES

const AuthPagesContainer = ({ children }) => {
  return (
    <Box
      maxW='1280px'
      mx='auto'
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='80vh'
    >
      {children}
    </Box>
  );
};

export default AuthPagesContainer;
