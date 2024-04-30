import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { LuPrinter } from 'react-icons/lu';
import { FaHeart } from 'react-icons/fa6';
import { FiShare } from 'react-icons/fi';

// REUSABLE FAVORITE,PRINT AND SHARE BUTTONS FOR RECIPE PAGE

const FavoriteButton = ({ isFavorite, handleToggleFavorites, h, w }) => (
  <Flex flexDir='column' pr='32px' alignItems='center' gap='16px'>
    <Box
      _hover={{ backgroundColor: 'gray.200', cursor: 'pointer' }}
      transition='background-color 0.3s'
      display='flex'
      background='#E7FAFE'
      w={w}
      h={h}
      borderRadius='50%'
      alignItems='center'
      justifyContent='center'
      onClick={(event) => handleToggleFavorites(event)}
    >
      {isFavorite ? (
        <FaHeart
          size={24}
          color='#e75477'
          style={{ transition: 'color 0.3s' }}
        />
      ) : (
        <FaHeart
          size={20}
          color='#000000'
          style={{ transition: 'color 0.3s' }}
        />
      )}
    </Box>
    <Text
      textTransform='uppercase'
      fontWeight='500'
      fontSize='12px'
      _hover={{ cursor: 'pointer' }}
      onClick={(event) => handleToggleFavorites(event)}
    >
      favorite
    </Text>
  </Flex>
);

const PrintButton = ({ handlePrintClick, w, h }) => (
  <Flex flexDir='column' pr='32px' alignItems='center' gap='16px'>
    <Box
      _hover={{ backgroundColor: 'gray.200', cursor: 'pointer' }}
      transition='background-color 0.3s'
      display='flex'
      background='#E7FAFE'
      w={w}
      h={h}
      borderRadius='50%'
      alignItems='center'
      justifyContent='center'
      onClick={handlePrintClick}
    >
      <LuPrinter size='24px' />
    </Box>
    <Text
      textTransform='uppercase'
      fontWeight='500'
      fontSize='12px'
      _hover={{ cursor: 'pointer' }}
      onClick={handlePrintClick}
    >
      print
    </Text>
  </Flex>
);

const ShareButton = ({ handleShareClick, h, w }) => (
  <Flex flexDir='column' alignItems='center' gap='16px'>
    <Box
      _hover={{ backgroundColor: 'gray.200', cursor: 'pointer' }}
      transition='background-color 0.3s'
      display='flex'
      background='#E7FAFE'
      w={w}
      h={h}
      borderRadius='50%'
      alignItems='center'
      justifyContent='center'
      onClick={handleShareClick}
    >
      <FiShare size='24px' />
    </Box>
    <Text
      textTransform='uppercase'
      fontWeight='500'
      fontSize='12px'
      _hover={{ cursor: 'pointer' }}
      onClick={handleShareClick}
    >
      share
    </Text>
  </Flex>
);

const RecipeButtons = ({
  isFavorite,
  handleToggleFavorites,
  handlePrintClick,
  handleShareClick,
  h,
  w,
}) => (
  <>
    <FavoriteButton
      isFavorite={isFavorite}
      handleToggleFavorites={handleToggleFavorites}
      h={h}
      w={w}
    />
    <PrintButton handlePrintClick={handlePrintClick} h={h} w={w} />
    <ShareButton handleShareClick={handleShareClick} h={h} w={w} />
  </>
);

export default RecipeButtons;
