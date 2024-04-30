import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import logo from '../media/logo.svg';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import ComponentContainer from './ComponentContainer';

const Footer = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ComponentContainer maxW='1480px' mt='0px' pb='0px' mb='0px'>
      <Divider display={{ base: 'block', sm: 'block', md: 'none' }} mb='30px' />

      <Flex
        minWidth='full'
        alignItems={{ base: 'flex-start', sm: 'flex-start', md: 'center' }}
        justifyContent='space-between'
        px={{ base: '30px', sm: '30px', md: '30px', lg: '75px' }}
        pb={{ sm: '0', md: '48px' }}
        direction={{ base: 'column', sm: 'column', md: 'row' }}
      >
        {/* LOGO */}

        <Flex
          direction='column'
          gap='20px'
          pb={{ base: '30px', sm: '30px', md: '0' }}
        >
          <Box pr='16px' zIndex='10' as={Link} to='/' onClick={handleHomeClick}>
            <Image
              src={logo}
              alt='logo'
              minW='131.79px'
              height='21.09px'
              cursor='pointer'
            />
          </Box>
          <Text
            fontWeight='400'
            fontSize={{ sm: '16px', md: '14px', lg: '16px' }}
            color='#00000099'
          >
            Crafting culinary experiences with love and innovation.
          </Text>
        </Flex>

        {/* NAVIGATION */}

        <NavigationMenu
          direction={{ base: 'column', sm: 'column', md: 'row' }}
          itemsAligned={{ base: 'flex-start', sm: 'flex-start', md: 'center' }}
          gapSize={{ base: '20px', md: '30px', lg: '60px' }}
          onClick={handleHomeClick}
        />
      </Flex>
      <Divider display={{ base: 'none', sm: 'none', md: 'block' }} />
      <Text
        fontWeight='400'
        fontSize='18px'
        color='#00000099'
        textAlign='center'
        py={{ base: '30px', md: '48px' }}
      >
        © 2024 Created by{' '}
        <a
          href='https://www.linkedin.com/in/smllns/'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            color: '#FF69B4',
            textDecoration: 'none',
            fontWeight: '400',
            transition: 'font-weight 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.fontWeight = '700')}
          onMouseLeave={(e) => (e.target.style.fontWeight = '400')}
        >
          smllns
        </a>
      </Text>
    </ComponentContainer>
  );
};

export default Footer;
