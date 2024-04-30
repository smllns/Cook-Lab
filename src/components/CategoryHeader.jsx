import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonCustom from './ButtonCustom';
import { Link } from 'react-router-dom';
import { headingTexts } from '../info/TextInfo';
import ComponentContainer from './ComponentContainer';

// HEADER COMPONENT FOR DIFFERENT RECIPES CATEGORIES

const CategoryHeader = ({ heading }) => {
  const categoryText =
    headingTexts[heading] || 'Explore recipes in this category!';

  return (
    <ComponentContainer mb={{ base: '-25px', md: '-40px' }} pt='0px' pb='0px'>
      <Box
        position={{ base: '', md: 'absolute' }}
        px={{ base: '20px', md: '' }}
        pb={{ base: '24px', md: '' }}
        left={{ md: '30px', lg: '40px', xl: '100px', '2xl': '180px' }}
      >
        <ButtonCustom
          colorScheme='gray'
          color='black'
          bgColor='#E7FAFE'
          btnText='Back to all recipes'
          variant='solid'
          padX='25px'
          padY='20px'
          as={Link}
          to='/recipes'
        />
      </Box>
      <Container centerContent textAlign='center' position='relative'>
        <Heading
          as='h1'
          size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' }}
          mb='24px'
        >{`${heading} Recipes`}</Heading>
        <Text
          fontSize={{ base: '14px', sm: '14px', md: '14px', lg: '16px' }}
          color='#00000099'
        >
          {categoryText}
        </Text>
      </Container>
    </ComponentContainer>
  );
};

export default CategoryHeader;
