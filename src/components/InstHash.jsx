import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import ComponentHeader from './ComponentHeader';
import { instText } from '../info/TextInfo';
import IgPost from './IgPost';
import Carousel from './Carousel';
import ButtonCustom from './ButtonCustom';
import { BsInstagram } from 'react-icons/bs';
import { instData } from '../info/ImgInfo';

//INSTAGRAM CAROUSEL COMPONENT

const InstHash = () => {
  // SLIDER SETTINGS
  const slidesPerView = useBreakpointValue({
    base: '1',
    sm: '1.5',
    md: '2.4',
    lg: '3',
  });
  const spaceBetween = '20';
  const swiperStyles = {
    width: useBreakpointValue({
      base: '290px',
      sm: '440px',
      md: '730px',
      lg: '926px',
    }),
  };

  return (
    <>
      <Box
        background='linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
        maxW='1280px'
        mx='auto'
        mt={{ base: '36px', sm: '36px', md: '72px' }}
      >
        {/* HEADER  */}

        <Container
          centerContent
          textAlign='center'
          pb={{ base: '21px', sm: '21px', md: '42px' }}
        >
          <ComponentHeader {...instText} />
        </Container>

        {/* CAROUSEL  */}

        <Box px={{ base: '10px', sm: '20px', lg: 'auto' }}>
          <Carousel
            slides={instData.map((data, index) => (
              <IgPost key={index} {...data} />
            ))}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            swiperStyles={swiperStyles}
          />
        </Box>

        {/* INSTAGRAM BUTTON  */}

        <Flex
          justifyContent='center'
          pb={{ base: '36px', sm: '36px', md: '72px' }}
          pt={{ base: '21px', sm: '21px', md: '42px' }}
        >
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='black'
            btnText='Explore on Instagram'
            rightIcon={<BsInstagram size='22px' />}
            variant='solid'
            padX='32px'
            padY='21px'
            btnHeight='60px'
            btnSize='l'
            as='a'
            href='https://www.instagram.com/explore/tags/bestrecipes/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          />
        </Flex>
      </Box>
    </>
  );
};

export default InstHash;
