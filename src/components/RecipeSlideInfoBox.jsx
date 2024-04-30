import React from 'react';
import { Box, Text } from '@chakra-ui/react';

// REUSABLE RECIPE INFORMATION COMPONENT FOR RECIPE SLIDE

const RecipeSlideInfoBox = ({ icon, text, minW = '' }) => {
  return (
    <Box
      borderRadius='20px'
      bg='#0000000D'
      px='16px'
      py='8px'
      maxW='max-content'
      minW={minW}
      h='40px'
      display='flex'
      alignContent='center'
    >
      {icon}
      <Text fontSize='14px' fontWeight='600' ml='8px' color='#00000099'>
        {text}
      </Text>
    </Box>
  );
};

export default RecipeSlideInfoBox;
