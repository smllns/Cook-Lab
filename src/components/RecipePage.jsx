import React from 'react';
import { useParams } from 'react-router-dom';
import { apiKeyThree, apiKeyFour } from '../info/SecretData';
import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { BsClockFill } from 'react-icons/bs';
import { PiForkKnifeFill } from 'react-icons/pi';
import copy from 'copy-to-clipboard';
import RecipePageSkeleton from './RecipePageSkeleton';
import useFavorite from '../hooks/useFavorite';
import useRecipeDetails from '../hooks/useRecipeDetails';
import useScrollHandler from '../hooks/useScrollHandler';
import useNutritionDetails from '../hooks/useNutritionDetails';
import ComponentContainer from './ComponentContainer';
import RecipeButtons from './RecipeButtons';
import TasteInformation from './TasteInformation';
import NutritionInformation from './NutritionInformation';

// RECIPE PAGE COMPONENT WITH DETAILED RECIPE INFORMATION

const RecipePage = () => {
  const toast = useToast();

  // GETTING RECIPE ID FROM CURRENT PAGE URL
  const { recipeId } = useParams();

  // ADDING/DELETING RECIPES FROM FAVORITES
  const { isFavorite, handleToggleFavorites } = useFavorite(recipeId);

  // COMPLETING API REQUESTS ABOUT RECIPE INFORMATION
  const { recipe, loading, error } = useRecipeDetails(recipeId, apiKeyThree);
  const { nutrition, loadingN, errorN } = useNutritionDetails(
    recipeId,
    apiKeyFour
  );

  const [isFixed, isMdScreen] = useScrollHandler('recipe-flex');

  //RENDERING SKELETON IF SOMETHING'S WRONG WITH RECIPES INFORMATION
  if (loading || loadingN || error || errorN || !recipe || !nutrition) {
    return <RecipePageSkeleton />;
  }

  const cholesterolNutrient = nutrition.nutrients.find(
    (nutrient) => nutrient.name === 'Cholesterol'
  );
  const carbohydrateNutrient = nutrition.nutrients.find(
    (nutrient) => nutrient.name === 'Carbohydrates'
  );

  const handlePrintClick = () => {
    window.print();
  };

  const handleShareClick = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ url });
      } else {
        copy(url);
        toast({
          title: `URL copied to clipboard!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {}
  };

  const handleMouseEnter = (e) => {
    e.target.style.fontWeight = '700';
  };

  const handleMouseLeave = (e) => {
    e.target.style.fontWeight = '400';
  };

  // FORMATTING RECIPE SUMMARY
  const removeLikedSentence = (summary) => {
    const likedIndex = summary.lastIndexOf(
      'Users who liked this recipe also liked'
    );
    const similarIndex = summary.lastIndexOf('Similar recipes');
    const anotherSimilarIndex = summary.lastIndexOf('If you like this recipe');
    const indexToRemove = Math.max(
      likedIndex,
      similarIndex,
      anotherSimilarIndex
    );

    if (indexToRemove !== -1) {
      return summary.substring(0, indexToRemove).trim();
    }

    return summary;
  };

  const cleanedSummary = removeLikedSentence(recipe.summary);
  const uniqueIngredientNames = new Set();

  const nutritionInfo = [
    { label: 'Calories', value: `${nutrition.calories} kcal` },
    { label: 'Total Fat', value: `${nutrition.fat.slice(0, -1)} g` },
    { label: 'Protein', value: `${nutrition.protein.slice(0, -1)} g` },
    { label: 'Carbohydrate', value: `${carbohydrateNutrient.amount} g` },
    { label: 'Cholesterol', value: `${cholesterolNutrient.amount} mg` },
  ];

  return (
    <ComponentContainer
      mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
      mt='0px'
      mb='0px'
    >
      {/* HEADER AND HEADER BUTTONS  */}

      <Flex
        justifyContent='space-between'
        pb={{ base: '30px', md: '40px', lg: '65px' }}
      >
        <Flex flexDir='column'>
          <Heading as='h1' size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl' }}>
            {recipe.title}
          </Heading>

          <Flex maxW='269px' pt='47px'>
            <Flex
              alignItems='center'
              pr='32px'
              borderRight='1px solid #0000001A'
            >
              <BsClockFill size='18px' />
              <Flex flexDir='column' ml='16px'>
                <Text
                  textTransform='uppercase'
                  fontWeight='500'
                  fontSize='12px'
                  pb='8px'
                >
                  cook time
                </Text>
                <Text fontSize='14px' fontWeight='500' color='#00000099'>
                  {recipe.readyInMinutes} Min
                </Text>
              </Flex>
            </Flex>

            <Box
              px='16px'
              py='8px'
              maxW='max-content'
              h='40px'
              display='flex'
              alignContent='center'
            >
              <PiForkKnifeFill size='18px' />
              <Text fontSize='14px' fontWeight='500' ml='8px' color='#00000099'>
                {recipe.cuisines[0] || 'Various'}
              </Text>
            </Box>
          </Flex>
        </Flex>

        {/* HEADER BUTTONS  */}

        <Flex
          flexDir='column'
          alignItems='flex-end'
          justifyContent='flex-end'
          display={{ base: 'none', lg: 'flex' }}
        >
          <Flex flexDir='row'>
            <RecipeButtons
              isFavorite={isFavorite}
              handleToggleFavorites={handleToggleFavorites}
              handlePrintClick={handlePrintClick}
              handleShareClick={handleShareClick}
              h='80px'
              w='80px'
            />
          </Flex>
        </Flex>
      </Flex>

      {/* NUTRITION INFORMATION  */}

      <Flex
        justifyContent='space-between'
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Image
          src={recipe.image}
          alt='recipe picture'
          borderRadius='30px'
          width={{ lg: '840px' }}
          height={{ lg: '600px' }}
          objectFit='cover'
          overflow='hidden'
          mr={{ base: 'none', md: '40px' }}
          mb={{ base: '40px', md: '0px' }}
        />
        <Box
          background='#E7FAFE'
          borderRadius='30px'
          minW='250px'
          w={{ base: '100%', md: '30%' }}
        >
          <Flex flexDir='column' p='32px'>
            <Text fontWeight='600' fontSize='24px' pb='24px'>
              Nutrition Information
            </Text>

            {nutritionInfo.map((item, index) => (
              <NutritionInformation
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </Flex>
        </Box>
      </Flex>

      {/* RECIPE SUMMARY  */}

      <Box
        pt='35px'
        pb={{ base: '40px', md: '70px', lg: '100px' }}
        dangerouslySetInnerHTML={{
          __html: `<div style="font-size: 16px; font-weight: 400; color: #00000099;">
                      ${cleanedSummary.replace(
                        /<a/g,
                        `<a style="color: #FF69B4; text-decoration: none; font-weight: 400; transition: font-weight 0.3s;" 
                      onMouseEnter="(${handleMouseEnter.toString()})(event)" 
                      onMouseLeave="(${handleMouseLeave.toString()})(event)"`
                      )}
                  </div>`,
        }}
      />

      {/* COOKING INSTRUCTIONS AND TASTE INFORMATION  */}

      <Flex
        gap={{ base: '0px', md: '50px' }}
        direction={{ base: 'column', sm: 'column', md: 'row' }}
        id='recipe-flex'
      >
        <Box flex={{ base: '', md: '80%' }} mr={{ base: '', md: '160px' }}>
          {/* RENDERING INGREDIENTS INFORMATION  */}

          <Flex direction='column'>
            <Heading size='xl' pb='17px'>
              Ingredients
            </Heading>
            <UnorderedList>
              {nutrition.ingredients.map((ingredient, index) => {
                if (!uniqueIngredientNames.has(ingredient.name)) {
                  uniqueIngredientNames.add(ingredient.name);
                  return (
                    <ListItem key={index} fontSize='18px' fontWeight='400'>
                      {`${ingredient.name}, ${ingredient.amount} ${ingredient.unit} `}
                    </ListItem>
                  );
                }
                return null;
              })}
            </UnorderedList>
          </Flex>

          {/* RENDERING COOKING INSTRUCTIONS  */}

          <Flex direction='column'>
            <Heading
              size='xl'
              pb='32px'
              pt={{ base: '40px', md: '70px', lg: '80px' }}
            >
              Directions
            </Heading>

            <OrderedList>
              {recipe.analyzedInstructions.map((instructions, index) => {
                return (
                  <React.Fragment key={index}>
                    {instructions.steps.map((step, stepIndex) => {
                      return (
                        <ListItem
                          key={stepIndex}
                          fontSize='24px'
                          fontWeight='600'
                          pb='40px'
                        >
                          {`${step.step}`}

                          {/* RENDERING INGREDIENTS FOR EACH STEP  */}

                          {step.ingredients.length > 0 && (
                            <>
                              <Text
                                fontWeight='400'
                                fontSize='18px'
                                pt='30px'
                                pb='20px'
                              >
                                Ingredients needed:
                              </Text>
                              <UnorderedList>
                                {step.ingredients.map(
                                  (ingredient, ingredientIndex) => (
                                    <ListItem
                                      key={ingredientIndex}
                                      fontWeight='400'
                                      fontSize='18px'
                                    >
                                      {ingredient.name}
                                    </ListItem>
                                  )
                                )}
                              </UnorderedList>
                            </>
                          )}
                        </ListItem>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </OrderedList>
          </Flex>
        </Box>

        {/* TASTE INFORMATION  */}

        <Box flex='20%' height='max-content'>
          <TasteInformation
            recipe={recipe}
            isMdScreen={isMdScreen}
            isFixed={isFixed}
          />
        </Box>
      </Flex>

      {/* FAVORITE,PRINT AND SHARE BUTTONS ON SMALLER SCREENS  */}

      <Flex flexDir='row' display={{ base: 'flex', lg: 'none' }} pt='50px'>
        <RecipeButtons
          isFavorite={isFavorite}
          handleToggleFavorites={handleToggleFavorites}
          handlePrintClick={handlePrintClick}
          handleShareClick={handleShareClick}
          h='44px'
          w='44px'
        />
      </Flex>
    </ComponentContainer>
  );
};

export default RecipePage;
