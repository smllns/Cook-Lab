import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import contact from '../media/cotact.png';
import AuthInputs from './AuthInputs';
import ButtonCustom from './ButtonCustom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../index';
import ComponentContainer from './ComponentContainer';

const ContactUs = () => {
  // HANDLING DIFFERENT INPUT STATES AND STORING DATA + INPUT VALIDATION LOGIC ON CONTACT US PAGE

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [touched, setTouched] = useState(false);
  const toast = useToast();

  const [errors, setErrors] = useState({
    emaillInput: '',
    nameInput: '',
    surnameInput: '',
    subjectInput: '',
  });

  const handleInputError = (inputId, errorMessage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [inputId]: errorMessage }));
  };

  const handleFocusChange = (focused) => {
    setIsFocused(focused);
  };
  const handleTextareaFocusChange = () => {
    setIsTextareaFocused(!isTextareaFocused);
    setInputError(false);
  };
  const handleTextareaBlur = () => {
    setIsTextareaFocused(!isTextareaFocused);
    if (message.trim() === '') {
      setInputError(false);
    }
  };
  const handleEmailChange = (value) => {
    setTouched(true);

    setEmail(value);
    setIsAnyFieldEmpty(
      value.trim() === '' ||
        name === '' ||
        surname === '' ||
        subject === '' ||
        message === ''
    );
  };

  const handleNameChange = (value) => {
    setTouched(true);
    setName(value);
    setIsAnyFieldEmpty(
      email === '' ||
        value.trim() === '' ||
        surname === '' ||
        subject === '' ||
        message === ''
    );
  };

  const handleSurnameChange = (value) => {
    setTouched(true);
    setSurname(value);
    setIsAnyFieldEmpty(
      email === '' ||
        name === '' ||
        value.trim() === '' ||
        subject === '' ||
        message === ''
    );
  };

  const handleSubjectChange = (value) => {
    setTouched(true);
    setSubject(value);
    setIsAnyFieldEmpty(
      email === '' ||
        name === '' ||
        surname === '' ||
        value.trim() === '' ||
        message === ''
    );
  };

  const handleMessageChange = (event) => {
    setTouched(true);
    setMessage(event.target.value);
    setIsAnyFieldEmpty(
      email === '' ||
        name === '' ||
        surname === '' ||
        subject === '' ||
        event.target.value.trim() === ''
    );
    if (event.target.value.length < 5) {
      setInputError(true);
    }
    if (event.target.value.length > 5) {
      setInputError(false);
    }
    if (event.target.value.length === '') {
      setInputError(false);
    }
  };

  const handleSubmit = () => {
    if (!touched || isAnyFieldEmpty) {
      toast({
        title: 'Please fill all the fields!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (
      errors.emaillInput ||
      errors.nameInput ||
      errors.surnameInput ||
      errors.subjectInput ||
      inputError
    ) {
      toast({
        title: 'Please enter a valid email, surname, name and message!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      const contactDocRef = doc(db, 'contact', Date.now().toString());
      setDoc(contactDocRef, {
        name: name,
        surname: surname,
        email: email,
        message: message,
      });
      toast({
        title: `Thank you, we got your message!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ComponentContainer
      pt='0px'
      mb='0px'
      mx={{
        base: '25px',
        sm: '25px',
        md: '50px',
        lg: '50px',
        xl: '50px',
        '2xl': 'auto',
      }}
    >
      {/* HEADER  */}

      <Box textAlign='center' pb={{ base: '22px', sm: '42px', md: '72px' }}>
        <Heading
          size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: '3xl' }}
          pb='32px'
        >
          Contact us
        </Heading>
      </Box>
      <Flex justifyContent={{ base: 'center', lg: 'space-between' }}>
        <Box
          overflow='hidden'
          pr='40px'
          display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}
        >
          <Image
            src={contact}
            alt='Contact us pic'
            width={{ xl: '400px', '2xl': '400px' }}
            height={{ xl: '472px', '2xl': '472px' }}
            minH='340px'
            minW='288px'
          />
        </Box>

        {/* INPUTS  */}

        <Box>
          <Box>
            <Flex flexDir={{ base: 'column', md: 'row' }}>
              <Box
                pr={{ base: 'none', md: '40px' }}
                pb={{ base: '40px', md: 'none' }}
              >
                <Text
                  fontWeight='500'
                  fontSize='12px'
                  pb='12px'
                  textTransform='uppercase'
                  color='#00000099'
                >
                  Name
                </Text>
                <AuthInputs
                  id='nameInput'
                  type='text'
                  placeholder='Enter your name...'
                  width={{
                    base: '350px',
                    sm: '380px',
                    md: '300px',
                    lg: '300px',
                    xl: '360px',
                  }}
                  onFocusChange={handleFocusChange}
                  setError={handleInputError}
                  onChange={handleNameChange}
                />
              </Box>
              <Box pb={{ base: '40px', md: 'none' }}>
                <Text
                  fontWeight='500'
                  fontSize='12px'
                  pb='12px'
                  textTransform='uppercase'
                  color='#00000099'
                >
                  surname
                </Text>
                <AuthInputs
                  id='surnameInput'
                  type='text'
                  placeholder='Enter your surname...'
                  width={{
                    base: '350px',
                    sm: '380px',
                    md: '300px',
                    lg: '300px',
                    xl: '360px',
                  }}
                  onFocusChange={handleFocusChange}
                  setError={handleInputError}
                  onChange={handleSurnameChange}
                />
              </Box>
            </Flex>
            <Flex flexDir={{ base: 'column', md: 'row' }}>
              <Box
                pr={{ base: 'none', md: '40px' }}
                pb={{ base: '40px', md: 'none' }}
              >
                <Text
                  fontWeight='500'
                  fontSize='12px'
                  pb='12px'
                  textTransform='uppercase'
                  color='#00000099'
                >
                  email
                </Text>
                <AuthInputs
                  id='emaillInput'
                  type='email'
                  placeholder='Your email address...'
                  width={{
                    base: '350px',
                    sm: '380px',
                    md: '300px',
                    lg: '300px',
                    xl: '360px',
                  }}
                  onFocusChange={handleFocusChange}
                  setError={handleInputError}
                  onChange={handleEmailChange}
                />
              </Box>
              <Box pb={{ base: '40px', md: 'none' }}>
                <Text
                  fontWeight='500'
                  fontSize='12px'
                  pb='12px'
                  textTransform='uppercase'
                  color='#00000099'
                >
                  subject
                </Text>
                <AuthInputs
                  id='subjectInput'
                  type='text'
                  placeholder='Enter subject...'
                  width={{
                    base: '350px',
                    sm: '380px',
                    md: '300px',
                    lg: '300px',
                    xl: '360px',
                  }}
                  onFocusChange={handleFocusChange}
                  setError={handleInputError}
                  onChange={handleSubjectChange}
                />
              </Box>
            </Flex>
          </Box>
          <Box>
            <Text
              fontWeight='500'
              fontSize='12px'
              pb='12px'
              textTransform='uppercase'
              color='#00000099'
            >
              message
            </Text>

            <Textarea
              id='messageInput'
              type='text'
              placeholder='Enter your message...'
              _hover={{ boxShadow: '0px 4px 20px 0px #00000040' }}
              _focus={{ bg: 'white' }}
              border='1px'
              borderRadius='8px'
              borderColor='#D0D5DD'
              focusBorderColor='#D6BBFB'
              errorBorderColor='#FDA29B'
              onChange={handleMessageChange}
              onFocus={handleTextareaFocusChange}
              onBlur={handleTextareaBlur}
              isInvalid={inputError}
            />
          </Box>
        </Box>
      </Flex>

      {/* SUBMIT BUTTON  */}

      <Box
        textAlign='center'
        pt={{ base: '26px', md: '48px' }}
        onClick={handleSubmit}
      >
        <ButtonCustom
          colorScheme='teal'
          color='white'
          bgColor='black'
          btnText='Submit'
          variant='solid'
          padX='64px'
          padY='20px'
          btnHeight='64px'
          btnSize='l'
          zIndex='1'
          disabled={
            !isTextareaFocused &&
            !isFocused &&
            (errors.emaillInput ||
              errors.nameInput ||
              errors.surnameInput ||
              errors.subjectInput ||
              (isAnyFieldEmpty &&
                !isFocused &&
                !isTextareaFocused &&
                touched) ||
              inputError)
          }
        />
      </Box>
    </ComponentContainer>
  );
};

export default ContactUs;
