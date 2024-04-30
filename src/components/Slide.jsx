import React from 'react';
import badgePic from '../media/Badge.png';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsClockFill } from 'react-icons/bs';
import { PiForkKnifeFill } from 'react-icons/pi';
import { HiPlay } from 'react-icons/hi';

import ButtonCustom from './ButtonCustom';
import { useNavigate } from 'react-router-dom';
import RecipeSlideInfoBox from './RecipeSlideInfoBox';

const Slide = ({ info }) => {
  const badgePosition = useBreakpointValue({
    base: { top: '25px', right: '15px' },
    sm: { top: '33px', right: '50px' },
    md: { top: '33px', right: '310px' },
    lg: { top: '33px', right: '420px' },
    xl: { top: '33px', right: '550px' },
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${info.id}`);
  };

  const infoData = [
    {
      icon: <BsClockFill size='18px' />,
      text: `${info.readyInMinutes} Min`,
      minW: '110px',
    },
    {
      icon: <PiForkKnifeFill size='18px' />,
      text: info.cuisines[0] || 'Various',
    },
  ];

  return (
    <Flex
      maxW='1280px'
      maxH='620px'
      alignItems='center'
      justifyContent='space-between'
      bg='#E7FAFE'
      borderRadius='45px'
      mx={{ base: '11px', sm: '11px', md: '11px', lg: '11px', xl: 'auto' }}
      overflow='hidden'
      position='relative'
    >
      {/* LEFT PART */}

      <Flex
        flexDir='column'
        alignItems='center'
        justifyContent='space-between'
        p='50px'
      >
        <Box minW='full' mb={{ base: '16px', sm: '16px', md: '32px' }}>
          <Box
            borderRadius='20px'
            bg='#FFFFFF'
            px='20px'
            pt='13px'
            pb='15px'
            maxW='max-content'
            maxH='45px'
          >
            <Text fontSize='14px' fontWeight='600' mb='32px'>
              🔥 Hot Recipes
            </Text>
          </Box>
        </Box>

        <Box maxW='540px' mb={{ base: '13px', sm: '13px', md: '30px' }}>
          <Heading
            as='h1'
            size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: '3xl' }}
            mb={'24px'}
          >
            {info.title}
          </Heading>
        </Box>
        <Flex
          gap='16px'
          alignItems='flex-start'
          minW='full'
          pb={{ base: '22px', sm: '22px', md: '50px', lg: '100px' }}
        >
          {infoData.map((info, index) => (
            <RecipeSlideInfoBox
              key={index}
              icon={info.icon}
              text={info.text}
              minW={info.minW}
            />
          ))}
        </Flex>

        <Flex
          justifyContent='space-between'
          w='full'
          alignItems={{ base: 'flex-start', sm: 'flex-start', md: 'center' }}
          flexDir={{ base: 'column', sm: 'column', md: 'row' }}
        >
          <Flex
            alignItems='flex-start'
            flexDir='column'
            justifyContent='space-between'
            mb={{ base: '24px', sm: '24px', md: '0' }}
          >
            <Text fontSize='14px' color='#00000099'>
              source
            </Text>
            <Heading
              as='h5'
              fontSize={{ base: '16px', sm: '16px', md: '14px', lg: '16px' }}
            >
              {info.sourceName || `Author's recipe`}
            </Heading>
          </Flex>

          <Box onClick={handleClick}>
            <ButtonCustom
              colorScheme='teal'
              color='white'
              bgColor='black'
              btnText='View Recipe'
              variant='solid'
              rightIcon={<HiPlay size='24px' />}
              padX='36px'
              padY='18px'
            />
          </Box>
        </Flex>
      </Flex>

      {/* RIGHT PART */}

      <Image
        src={badgePic}
        alt='badge'
        position='absolute'
        w={{ base: '84px', sm: '130px', md: '150px' }}
        {...badgePosition}
        zIndex='1'
      />

      <Image
        maxW='50%'
        src={info.image}
        alt='recipe pic'
        boxSize={{ base: '0px', sm: '560px', md: '575px', lg: '620px' }}
        objectFit='cover'
      />
    </Flex>
  );
};

export default Slide;
