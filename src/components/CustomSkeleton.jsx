import { Skeleton } from '@chakra-ui/react';
import React from 'react';

// REUSABLE SKELETON WITH LOTS OF SETTINGS

const CustomSkeleton = ({ height, mb, mt, w }) => {
  return (
    <Skeleton
      height={height}
      mb={mb}
      mt={mt}
      w={w}
      borderRadius='30px'
      startColor='blue.100'
      endColor='green.200'
    />
  );
};

export default CustomSkeleton;
