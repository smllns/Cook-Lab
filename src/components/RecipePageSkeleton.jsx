import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import RecipeSkeleton from './RecipeSkeleton';
import CustomSkeleton from './CustomSkeleton';
import ComponentContainer from './ComponentContainer';

// SKELETON COMPONENT FOR RECIPE PAGE

const RecipePageSkeleton = () => {
  const firstBox = (
    <Box mb='20px'>
      <CustomSkeleton height='20px' mb='10px' w='200px' />
      <CustomSkeleton height='20px' w='100px' />
    </Box>
  );
  const secondBox = (
    <Box mb='20px'>
      <CustomSkeleton height='20px' w='200px' />
    </Box>
  );
  return (
    <ComponentContainer
      mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
      mt='0px'
      mb='0px'
    >
      <CustomSkeleton height='40px' mb='20px' w='60%' />

      <Flex gap='20px'>
        <RecipeSkeleton
          width='70%'
          height={{ base: '200px', md: '400px', lg: '600px' }}
        />
        <RecipeSkeleton
          width='30%'
          height={{ base: '200px', md: '400px', lg: '600px' }}
        />
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} mb='40px'>
        <Box flex='1' mr={{ base: '', md: '40px' }}>
          {firstBox}
          {firstBox}
        </Box>
        <Box flex='1' minW='250px'>
          {firstBox}
        </Box>
      </Flex>

      <Box mb='40px'>
        <CustomSkeleton height='20px' w='70%' />
        <CustomSkeleton height='20px' w='60%' mt='10px' />
        <CustomSkeleton height='20px' w='80%' mt='10px' />
        <CustomSkeleton height='20px' w='70%' mt='10px' />
        <CustomSkeleton height='20px' w='60%' mt='10px' />
        <CustomSkeleton height='20px' w='80%' mt='10px' />
      </Box>

      <Flex direction={{ base: 'column', md: 'row' }} mb='40px'>
        <Box flex='1' mr={{ base: '', md: '160px' }}>
          {secondBox}
          {secondBox}
        </Box>
        <Box flex='1' flexBasis='20%'>
          <Box mb='20px'>
            <CustomSkeleton height='20px' w='70%' />
            <CustomSkeleton height='20px' w='80%' mt='10px' />
          </Box>
        </Box>
      </Flex>
    </ComponentContainer>
  );
};

export default RecipePageSkeleton;
