import { Box, Container, Grid, useBreakpointValue } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import ComponentHeader from './ComponentHeader';
import { favoritesText } from '../info/TextInfo';
import useLoggedIn from '../hooks/useLoggedIn';
import useFavoriteRecipesIds from '../hooks/useFavoriteRecipesIds';
import RecipeCard from './RecipeCard';
import useRecipesByIds from '../hooks/useRecipesByIds';
import ButtonCustom from './ButtonCustom';
import CustomGridSkeleton from './CustomGridSkeleton';
import ComponentContainer from './ComponentContainer';

// FAVORITE RECIPES GRID COMPONENT

const FavoritesRecipes = () => {
  const recipeCardCount = useBreakpointValue({ base: 4, md: 6, lg: 6 }); // Determine number of RecipeCard components to render based on screen size
  const isLoggedIn = useLoggedIn();
  const { favoriteRecipeIds, loadingNum } = useFavoriteRecipesIds();
  const { recipes, loading, error } = useRecipesByIds(
    favoriteRecipeIds,
    process.env.REACT_APP_API_KEY2
  );
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const visibleRecipes = useMemo(
    () => (showAllRecipes ? recipes : recipes.slice(0, 6)),
    [recipes, showAllRecipes]
  );

  // PREVENTING COMPONENT RERENDERING

  const memoizedRecipeIds = useMemo(
    () => favoriteRecipeIds,
    [favoriteRecipeIds]
  );
  const memoizedRecipes = useMemo(() => recipes, [recipes]);

  // RETURNING EMPTY FRAGMENT IF THE USER IS NOT LOGGED IN

  if (!isLoggedIn) {
    return <></>;
  }
  const handleToggleRecipes = () => {
    setShowAllRecipes((prev) => !prev);
  };

  return (
    <ComponentContainer
      pt='40px'
      pb={{ base: '36px', sm: '36px', md: '72px' }}
      mt='0px'
      mb='0px'
    >
      {/* HEADER  */}

      <Container
        centerContent
        textAlign='center'
        pb={{ base: '21px', sm: '21px', md: '42px' }}
      >
        <ComponentHeader {...favoritesText} />
      </Container>

      {/* GRID  */}

      <Grid
        gap={{ base: '1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }}
        px={{ base: '0.1rem', sm: '1.5rem', md: '2.5rem', lg: '2.5rem' }}
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        templateRows={{
          base:
            visibleRecipes.length <= 2 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
          md:
            visibleRecipes.length <= 2
              ? 'repeat(1, 1fr)'
              : visibleRecipes.length <= 4
              ? 'repeat(2, 1fr)'
              : 'repeat(3, 1fr)',
          lg: visibleRecipes.length <= 3 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
        }}
      >
        {loading || error || loadingNum
          ? Array.from({ length: recipeCardCount }).map((_, index) => (
              <CustomGridSkeleton index={index} />
            ))
          : visibleRecipes.map((recipe, index) => (
              <RecipeCard
                cardHeaderP='16px'
                cardImageHeight={{ sm: '150px', md: '200px', lg: '250px' }}
                key={index}
                imageSrc={recipe.image}
                title={recipe.title}
                readyInMinutes={recipe.readyInMinutes}
                cuisines={recipe.cuisines[0]}
                recipeID={recipe.id}
                cardBackground='linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(220, 82, 72, 0.1) 100%)'
                cardHoverBackground='linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(220, 82, 72, 0.1) 50%)'
              />
            ))}
      </Grid>
      {recipes.length > 6 && (
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          pt='30px'
          onClick={handleToggleRecipes}
        >
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='black'
            btnText={showAllRecipes ? 'Show Less' : 'Show More'}
            variant='solid'
            padX='54px'
            padY='16px'
            btnHeight='45px'
            btnSize='l'
            zIndex='2'
          />
        </Box>
      )}
    </ComponentContainer>
  );
};

export default FavoritesRecipes;
