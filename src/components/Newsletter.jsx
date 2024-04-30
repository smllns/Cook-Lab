import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ComponentHeader from './ComponentHeader';
import { newsletterText } from '../info/TextInfo';
import { MdOutlineEmail } from 'react-icons/md';
import ButtonCustom from './ButtonCustom';
import { newsletterImagesData } from '../info/ImgInfo';
import { MdErrorOutline } from 'react-icons/md';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../index';

const Newsletter = () => {
  const currentSize = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  });

  // HANDLING DIFFERENT INPUT STATES AND STORING DATA +INPUT VALIDATION LOGIC

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);
  const toast = useToast();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    if (email.trim() === '') {
      setError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setTouched(true);
    if (!isValidEmail(event.target.value)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setTouched(true);
    if (isValidEmail(email)) {
      const emailDocRef = doc(db, 'newsletter', Date.now().toString());
      setDoc(emailDocRef, { email });

      toast({
        title: 'Thanks for submitting your email!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setEmail('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <Box
      maxW='1280px'
      bg='#E7F9FD'
      borderRadius='60px'
      mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
      position='relative'
      overflow='hidden'
      mb={{ base: '21px', sm: '21px', md: '42px' }}
      mt={{ base: '36px', sm: '36px', md: '72px' }}
    >
      {/* HEADER  */}

      <Container
        centerContent
        textAlign='center'
        pt='80px'
        pb={{ base: '21px', sm: '21px', md: '42px' }}
      >
        <ComponentHeader {...newsletterText} />
      </Container>

      {/* INPUT AND BUTTON  */}

      <Flex
        alignItems='center'
        justifyContent='center'
        gap='10px'
        pb='100px'
        px='auto'
        direction={{ base: 'column', sm: 'column', md: 'row' }}
      >
        <InputGroup
          width={{ base: '285px', sm: '330px', md: '350px', lg: '360px' }}
          alignItems='center'
          zIndex='2'
        >
          <InputLeftElement pointerEvents='none' height='45px'>
            <MdOutlineEmail color='gray.300' />
          </InputLeftElement>
          <Input
            id='emailInput'
            focusBorderColor='#D6BBFB'
            _hover={{ boxShadow: '0px 4px 20px 0px #00000040' }}
            _focus={{ bg: 'white' }}
            variant='filled'
            bg='white'
            type='email'
            placeholder='Enter your email'
            borderRadius='30px'
            height='45px'
            value={email}
            onChange={handleEmailChange}
            isInvalid={touched && !isValidEmail(email) && error}
            errorBorderColor='#FDA29B'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {!focused && error && (
            <InputRightElement
              pointerEvents='none'
              height='45px'
              top='49%'
              transform='translateY(-50%)'
            >
              <MdErrorOutline color='#F04438' size='16px' />
            </InputRightElement>
          )}
        </InputGroup>
        <Box onClick={handleSubmit}>
          <ButtonCustom
            colorScheme='teal'
            color='white'
            bgColor='black'
            btnText='Subscribe'
            variant='solid'
            padX='54px'
            padY='16px'
            btnHeight='45px'
            btnSize='l'
            zIndex='2'
            disabled={!focused && touched && !isValidEmail(email) && error}
          />
        </Box>
      </Flex>

      {/* RENDERING BACKGROUND IMAGES  */}

      {newsletterImagesData.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            position: 'absolute',
            width: image.dimensions[currentSize].width,
            height: image.dimensions[currentSize].height,
            top: image.dimensions[currentSize].top,
            left: image.dimensions[currentSize].left,
            right: image.dimensions[currentSize].right,
            transform: `rotate(${image.dimensions[currentSize].rotate})`,
            objectFit: 'cover',
          }}
        />
      ))}
    </Box>
  );
};

export default Newsletter;
