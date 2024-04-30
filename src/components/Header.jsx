import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup, Flex, Image } from '@chakra-ui/react';
import logo from '../media/logo.svg';
import burger from '../media/burger.svg';
import burgerClose from '../media/burgerClose.svg';
import ButtonCustom from './ButtonCustom';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import NavigationMenu from './NavigationMenu';
import ComponentContainer from './ComponentContainer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleLoginClick = () => {
    navigate(`/login`);
  };
  const handleSignUpClick = () => {
    navigate(`/signUp`);
  };

  const renderAuthButtons = () => {
    if (user) {
      return (
        <Box onClick={handleLogout}>
          <ButtonCustom
            colorScheme='gray'
            color='black'
            bgColor='#E7FAFE'
            btnText='Logout'
            variant='solid'
            padX='25px'
            padY='20px'
            btnSize='l'
            btnHeight='59px'
          />
        </Box>
      );
    } else {
      return (
        <>
          <Box onClick={handleLoginClick}>
            <ButtonCustom
              colorScheme='gray'
              color='black'
              bgColor='#E7FAFE'
              btnText='Login'
              variant='solid'
              padX='25px'
              padY='20px'
              btnSize='l'
              btnHeight='59px'
            />
          </Box>
          <Box onClick={handleSignUpClick}>
            <ButtonCustom
              colorScheme='gray'
              color='black'
              bgColor='transparent'
              btnText='Sign Up'
              variant='outline'
              borderColor='black'
              borderSize='2px'
              padX='16px'
              padY='20px'
              btnSize='l'
              btnHeight='59px'
            />
          </Box>
        </>
      );
    }
  };

  return (
    <ComponentContainer maxW='1480px' pt='0px' mt='0px' pb='0px' mb='0px'>
      <Flex
        minWidth='full'
        alignItems='center'
        justifyContent='space-between'
        px={{ base: '30px', sm: '30px', md: '30px', lg: '75px' }}
        py='40px'
        position='relative'
      >
        {/* LOGO */}

        <Box pr='16px' zIndex='10' as={Link} to='/'>
          <Image
            src={logo}
            alt='logo'
            minW='131.79px'
            height='21.09px'
            cursor='pointer'
          />
        </Box>

        {/* NAVIGATION */}

        <NavigationMenu
          gapSize={{ base: '10px', md: '10px', lg: '60px' }}
          displayed={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
          size={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'l' }}
        />

        <ButtonGroup
          spacing='16px'
          pl='16px'
          display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
        >
          {renderAuthButtons()}
        </ButtonGroup>

        {/* BURGER MENU */}

        <Image
          display={{ base: 'block', sm: 'block', md: 'none', lg: 'none' }}
          alt='Menu'
          src={!isOpen ? burger : burgerClose}
          onClick={toggleMenu}
          width={!isOpen ? '29px' : ''}
          height={!isOpen ? '23px' : ''}
          zIndex='10'
          cursor='pointer'
          transition='transform 0.3s ease-in-out'
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
        />

        {/* OVERLAY */}

        <Box
          display={{ base: isOpen ? 'block' : 'none' }}
          position='fixed'
          top='0'
          left='0'
          right='0'
          bottom='0'
          bg='#CAF6FFE5'
          backdropFilter='blur(8px)'
          webkitbackdropfilter='blur(8px)'
          zIndex={isOpen ? '3' : '-1'}
          opacity={isOpen ? '1' : '0'}
          transition='opacity 0.3s ease-in-out'
          onClick={toggleMenu}
        />

        {/* MOBILE MENU */}

        <Flex
          onClick={toggleMenu}
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          display={{
            base: isOpen ? 'flex' : 'none',
            sm: isOpen ? 'flex' : 'none',
            md: 'none',
            lg: 'none',
          }}
          position='absolute'
          top='100%'
          left='0'
          right='0'
          h='80vh'
          zIndex='3'
          gap='34px'
        >
          <Flex />

          {/* MOBILE NAVIGATION */}

          <NavigationMenu
            gapSize='34px'
            itemsAligned=''
            size=''
            direction='column'
            minWidth=''
            fz='20px'
          />

          <ButtonGroup spacing='16px' pl='16px' display='flex'>
            {renderAuthButtons()}
          </ButtonGroup>
        </Flex>
      </Flex>
    </ComponentContainer>
  );
};

export default Header;
