import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
// import { apiKeyOne } from '../info/SecretData';
import useRecipes from '../hooks/useRecipes';
import CustomGrid from './CustomGrid';
import ComponentContainer from './ComponentContainer';

// CATEGORY GRID COMPONENT

const CategoryRecipesGrid = ({ category }) => {
  const recipeCardCount = useBreakpointValue({ base: 4, md: 6, lg: 9 });

  // API LINK SETTINGS

  const getCategoryQuery = (category) => {
    let query = '';
    if (category === 'Vegan') {
      query = `&include-tags=vegan`;
      return query;
    }
    if (category === 'Breakfast') {
      query = `&include-tags=breakfast`;
      return query;
    }
    if (category === 'Main') {
      query = `&include-tags=main course`;
      return query;
    }
    if (category === 'Dessert') {
      query = `&include-tags=dessert`;
      return query;
    }
    if (category === 'Snack') {
      query = `&include-tags=snack`;
      return query;
    }
    if (category === 'Drink') {
      query = `&include-tags=drink`;
      return query;
    }
  };

  const { recipes, loading, error } = useRecipes(
    process.env.REACT_APP_API_KEY1,
    9,
    getCategoryQuery(category)
  );

  return (
    <ComponentContainer mt='0px' mb='0px'>
      <CustomGrid
        isLoading={loading}
        isError={error}
        recipeCardCounts={recipeCardCount}
        items={recipes}
      />
    </ComponentContainer>
  );
};

export default CategoryRecipesGrid;
