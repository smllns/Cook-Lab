import { Flex } from '@chakra-ui/react';
import React from 'react';
import ComponentHeader from './ComponentHeader';
import { recipesSmallText } from '../info/TextInfo';

// import { apiKeySeven } from '../info/SecretData';
import useRecipes from '../hooks/useRecipes';
import CustomGrid from './CustomGrid';
import ComponentContainer from './ComponentContainer';

const RecipesGridSmall = () => {
  const apiKeySeven = process.env.API_KEY_SEVEN;
  const recipeCardCount = 4;

  // COMPLETING API REQUEST ABOUT RECIPE INFORMATION
  const { recipes, loading, error } = useRecipes(apiKeySeven, 8);

  return (
    <ComponentContainer pt='0px' pb='0px'>
      <Flex
        textAlign={{ base: 'center', sm: 'center', md: 'start' }}
        pb={{ base: '21px', sm: '21px', md: '42px', lg: '60px' }}
        justifyContent='space-between'
        alignItems='center'
        px={{ base: '24px', md: '40px' }}
        flexDir='column'
      >
        <ComponentHeader {...recipesSmallText} />
      </Flex>
      <CustomGrid
        gapLg='auto'
        pXLg='1rem'
        columns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        rows={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(1, 1fr)',
        }}
        isLoading={loading}
        isError={error}
        recipeCardCounts={recipeCardCount}
        items={recipes}
      />
    </ComponentContainer>
  );
};

export default RecipesGridSmall;
