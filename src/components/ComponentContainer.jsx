import { Box } from '@chakra-ui/react';
import React from 'react';

// BOX CONTAINER FOR MOST PAGES

const ComponentContainer = ({
  children,
  maxW = '1280px',
  mx = 'auto',
  pt = { base: '36px', sm: '36px', md: '72px' },
  pb = { base: '21px', sm: '21px', md: '42px' },
  mt = { base: '36px', sm: '36px', md: '72px' },
  mb = { base: '21px', sm: '21px', md: '42px' },
}) => {
  return (
    <Box maxW={maxW} mx={mx} pt={pt} pb={pb} mt={mt} mb={mb}>
      {children}
    </Box>
  );
};

export default ComponentContainer;
