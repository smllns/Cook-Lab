import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

// NUTRITION INFORMATION FOR RECIPE PAGE COMPONENT

const NutritionInformation = ({ label, value }) => {
  return (
    <Flex
      justifyContent='space-between'
      borderBottom='1px solid #0000001A'
      pb='16px'
    >
      <Text fontWeight='500' fontSize='18px' color='#00000099'>
        {label}
      </Text>
      <Text fontWeight='500' fontSize='18px'>
        {value}
      </Text>
    </Flex>
  );
};

export default NutritionInformation;
