import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import ComponentHeader from './ComponentHeader';
import { recipesPopularText } from '../info/TextInfo';

import { apiKeyEight } from '../info/SecretData';
import useRecipes from '../hooks/useRecipes';
import CustomGrid from './CustomGrid';
import ComponentContainer from './ComponentContainer';

const RecipesPopularGrid = () => {
  const recipeCardCount = useBreakpointValue({ base: 4, md: 6, lg: 8 });

  // COMPLETING API REQUEST ABOUT RECIPE INFORMATION
  const { recipes, loading, error } = useRecipes(
    apiKeyEight,
    9,
    '&sort=popularity'
  );

  return (
    <ComponentContainer pt='0px' pb='0px'>
      <Flex
        textAlign={{ base: 'center', sm: 'center', md: 'start' }}
        pb={{ base: '21px', sm: '21px', md: '42px', lg: '60px' }}
        justifyContent='space-between'
        alignItems='center'
        px={{ base: '24px', md: '40px' }}
        flexDir={{ base: 'column', sm: 'column', md: 'row' }}
      >
        <ComponentHeader {...recipesPopularText} />
      </Flex>
      <CustomGrid
        gapLg='auto'
        pXLg='1rem'
        columns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        isLoading={loading}
        isError={error}
        recipeCardCounts={recipeCardCount}
        items={recipes}
      />
    </ComponentContainer>
  );
};

export default RecipesPopularGrid;
