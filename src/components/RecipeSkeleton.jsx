import { Skeleton, Spinner } from '@chakra-ui/react';
import React from 'react';

// REUSABLE SKELETON WITH SPINNER COMPONENT

const RecipeSkeleton = ({
  width,
  height,
  mb = '40px',
  size = { base: 'md', lg: 'xl' },
}) => {
  return (
    <Skeleton
      height={height}
      mb={mb}
      borderRadius='30px'
      startColor='blue.100'
      endColor='green.200'
      w={width}
      position='relative'
    >
      <Spinner
        size={size}
        speed='0.7s'
        color='green'
        thickness='4px'
        visibility='visible'
        position='absolute'
        top='50%'
        left='48%'
      />
    </Skeleton>
  );
};

export default RecipeSkeleton;
