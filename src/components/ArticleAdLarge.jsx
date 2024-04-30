import React from 'react';
import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ComponentHeader from './ComponentHeader';
import ButtonCustom from './ButtonCustom';
import chefPic from '../media/portrait-happy-male-chef-dressed-uniform 1.png';
import { chefText } from '../info/TextInfo';

/* LARGE SCREENS ARTICLE AD RENDER COMPONENT */

const ArticleAdLarge = ({ renderImages }) => (
  <Flex
    display={{ base: 'none', md: 'none', lg: 'flex' }}
    justifyContent='space-between'
    alignItems='center'
    px={{ base: '0.3rem', sm: '1.5rem', md: '2.5rem', lg: '2.5rem' }}
    position='relative'
  >
    <Flex flexDir='column' alignItems='flex-start' py='20px'>
      <Container mx='0' pb='70px' px='0'>
        <ComponentHeader {...chefText} />
      </Container>
      <ButtonCustom
        colorScheme='teal'
        color='white'
        bgColor='black'
        btnText='Learn More'
        variant='solid'
        padX='53px'
        padY='21px'
        as={Link}
        to='/chefGuide'
      />
    </Flex>
    <Box
      width={{
        base: '10%',
        sm: '30%',
        md: '50%',
        lg: '650px',
      }}
      maxW='50%'
      height='600px'
      background='linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
      borderRadius='30px'
      zIndex='-2'
    ></Box>
    <Image
      src={chefPic}
      alt='chef picture'
      position='absolute'
      w='660px'
      height='600px'
      top='0px'
      right={{ base: '10px', md: '' }}
      objectFit='cover'
      zIndex='-1'
    />
    {renderImages()}
  </Flex>
);

export default ArticleAdLarge;
