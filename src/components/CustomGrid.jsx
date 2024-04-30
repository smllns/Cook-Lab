import { Grid } from '@chakra-ui/react';
import React from 'react';
import RecipeCard from './RecipeCard';
import CustomGridSkeleton from './CustomGridSkeleton';

// REUSABLE GRID WITH LOTS OF SETTINGS

const CustomGrid = ({
  gapLg = '2.5rem',
  pXLg = '2.5rem',
  columns = {
    base: 'repeat(2, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
  rows = { base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' },
  recipeCardCounts,
  items,
  isLoading,
  isError,
}) => {
  return (
    <Grid
      gap={{ base: '1rem', sm: '1.5rem', md: '2rem', lg: gapLg }}
      px={{ base: '0.1rem', sm: '1.5rem', md: '2.5rem', lg: pXLg }}
      templateColumns={columns}
      templateRows={rows}
    >
      {isLoading || isError
        ? Array.from({ length: recipeCardCounts }).map((_, index) => (
            <CustomGridSkeleton index={index} />
          ))
        : items
            .slice(0, recipeCardCounts)
            .map((recipe, index) => (
              <RecipeCard
                cardHeaderP='16px'
                cardImageHeight={{ sm: '150px', md: '200px', lg: '250px' }}
                key={index}
                imageSrc={recipe.image}
                title={recipe.title}
                readyInMinutes={recipe.readyInMinutes}
                cuisines={recipe.cuisines[0]}
                recipeID={recipe.id}
              />
            ))}
    </Grid>
  );
};

export default CustomGrid;
