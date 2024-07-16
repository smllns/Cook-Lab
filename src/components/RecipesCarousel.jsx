import React from 'react';
import Slide from './Slide';
import { Box } from '@chakra-ui/react';
import Carousel from './Carousel';
import useRecipes from '../hooks/useRecipes';
import RecipeSkeleton from './RecipeSkeleton';

// SLIDER COMPONENT WITH DIFFERENT RECIPES

const RecipesCarousel = () => {
  const { recipes, loading, error } = useRecipes(
    process.env.REACT_APP_API_KEY5,
    8
  );

  // COMPLETING API REQUEST ABOUT RECIPE INFORMATION
  const slides = recipes.map((recipe, index) => (
    <Slide key={index} info={recipe} />
  ));

  // SLIDER SETTINGS
  const slidesPerView = 'auto';
  const spaceBetween = '200';
  const coverflowEffect = {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  };
  return (
    <Box mb={{ base: '36px', sm: '36px', md: '72px' }} mt='40px'>
      {loading || error ? (
        <Box
          maxW='1280px'
          mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
        >
          <RecipeSkeleton
            width='100%'
            height={{ base: '250px', md: '350px', lg: '500px' }}
            mb='0px'
            size='xl'
          />
        </Box>
      ) : (
        <Carousel
          slides={slides}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          coverflowEffect={coverflowEffect}
        />
      )}
    </Box>
  );
};

export default RecipesCarousel;
