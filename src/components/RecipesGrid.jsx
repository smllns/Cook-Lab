import React from 'react';
import ComponentHeader from './ComponentHeader';
import { Container, useBreakpointValue } from '@chakra-ui/react';
import { recipeText } from '../info/TextInfo';
// import { apiKeySix } from '../info/SecretData';
import useRecipes from '../hooks/useRecipes';
import CustomGrid from './CustomGrid';
import ComponentContainer from './ComponentContainer';

const RecipesGrid = () => {
  const apiKeySix = process.env.API_KEY_SIX;
  const recipeCardCount = useBreakpointValue({ base: 4, md: 6, lg: 9 });

  // COMPLETING API REQUEST ABOUT RECIPE INFORMATION
  const { recipes, loading, error } = useRecipes(apiKeySix, 9);

  return (
    <ComponentContainer mt='0px' mb='0px'>
      <Container
        centerContent
        textAlign='center'
        pb={{ base: '21px', sm: '21px', md: '42px' }}
      >
        <ComponentHeader {...recipeText} />
      </Container>
      <CustomGrid
        isLoading={loading}
        isError={error}
        recipeCardCounts={recipeCardCount}
        items={recipes}
      />
    </ComponentContainer>
  );
};

export default RecipesGrid;
