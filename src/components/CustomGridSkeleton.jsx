import { Skeleton, Spinner } from '@chakra-ui/react';
import React from 'react';

// SKELETON COMPONENT FOR GRID

const CustomGridSkeleton = ({ index }) => {
  return (
    <Skeleton
      key={index}
      height={{
        base: '200px',
        sm: '250px',
        md: '300px',
        lg: '350px',
      }}
      borderRadius='30px'
      startColor='blue.100'
      endColor='green.200'
      display='grid'
    >
      <Spinner
        size='xl'
        speed='0.7s'
        color='green'
        thickness='4px'
        visibility='visible'
        display='block'
        alignSelf='center'
        justifySelf='center'
      />
    </Skeleton>
  );
};

export default CustomGridSkeleton;
