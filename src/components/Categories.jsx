import { Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import CategoryCard from './CategoryCard';
import { cardsData } from '../info/ImgInfo';
import ButtonCustom from './ButtonCustom';
import { Link } from 'react-router-dom';
import ComponentContainer from './ComponentContainer';

const Categories = ({ showButton = 'true' }) => {
  return (
    <ComponentContainer mt='0px' mb='0px'>
      {/* HEADER  */}

      <Flex
        mb={{ base: '21px', sm: '21px', md: '42px' }}
        mx={{ base: '30px', sm: '80px', lg: '80px' }}
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading as='h1' size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' }}>
          Categories
        </Heading>

        {showButton && (
          <ButtonCustom
            colorScheme='gray'
            color='black'
            bgColor='#E7FAFE'
            btnText='View More Recipes'
            variant='solid'
            padX='25px'
            padY='20px'
            as={Link}
            to='/recipes'
          />
        )}
      </Flex>

      {/* CATEGORIES GRID  */}

      <Grid
        gap={{ base: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }}
        px={{ base: '0.1rem', sm: '1.5rem', md: '2.5rem', lg: '2.5rem' }}
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        templateRows={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(1, 1fr)',
        }}
      >
        {cardsData.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </Grid>
    </ComponentContainer>
  );
};

export default Categories;
