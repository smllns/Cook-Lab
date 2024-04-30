import React from 'react';
import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ComponentHeader from './ComponentHeader';
import ButtonCustom from './ButtonCustom';
import chefPic from '../media/portrait-happy-male-chef-dressed-uniform 1.png';
import { chefText } from '../info/TextInfo';

/* SMALL SCREENS ARTICLE AD RENDER COMPONENT */

const ArticleAdSmall = ({ renderImages }) => (
  <Flex
    display={{ md: 'flex', lg: 'none' }}
    justifyContent='space-between'
    direction='column'
    px={{ base: '38px', sm: '38px', md: '2.5rem', lg: '2.5rem' }}
    position='relative'
  >
    <Box
      width='100%'
      height='300px'
      background='linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
      zIndex='-2'
      position='relative'
      borderRadius='30px'
    ></Box>
    <Flex flexDir='column' alignItems='flex-start' pt='20px' px='0'>
      <Container mx='0' pb={{ base: '15px', sm: '30px', md: '30px' }} px='0'>
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
        btnSize='l'
        btnHeight='59px'
        as={Link}
        to='/chefGuide'
      />
    </Flex>
    <Image
      src={chefPic}
      alt='chef picture'
      position='absolute'
      w='360px'
      height='300px'
      top='0px'
      right={{ base: '0px', sm: '10px', md: '70px' }}
      objectFit='cover'
      zIndex='-1'
    />
    {renderImages()}
  </Flex>
);

export default ArticleAdSmall;
