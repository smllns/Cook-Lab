import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

// REUSABLE HEADER COMPONENT WITH LOST OF SETTINGS

const ComponentHeader = ({
  heading,
  headingSize,
  text,
  fontSize,
  marB,
  maxW,
  maxWi,
  minW,
  mr,
  zIndex,
}) => {
  return (
    <>
      <Heading
        as='h1'
        size={headingSize}
        mb={marB ? marB : '24px'}
        maxW={maxWi ? maxWi : ''}
        minW={minW ? minW : ''}
        mr={mr ? mr : ''}
        zIndex={zIndex}
      >
        {heading}
      </Heading>

      <Text fontSize={fontSize} color='#00000099' maxW={maxW ? maxW : ''}>
        {text}
      </Text>
    </>
  );
};

export default ComponentHeader;
