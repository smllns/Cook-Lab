import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ArticleHeader = ({ aboutUsHeaderText, avatarSrc, imageSrc }) => {
  return (
    <>
      <Box textAlign='center' pb={{ base: '21px', sm: '21px', md: '42px' }}>
        <Heading
          size={{ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: '3xl' }}
          pb='32px'
        >
          {aboutUsHeaderText.heading}
        </Heading>
        <Flex alignItems='center' justifyContent='center'>
          <Flex alignItems='center' pr='60px' borderRight='1px solid #0000001A'>
            <Avatar
              w='40px'
              h='40px'
              name='ChatGPT'
              src={avatarSrc}
              mr='16px'
            />
            <Heading
              as='h5'
              fontSize={{ base: '16px', sm: '16px', md: '16px', lg: '16px' }}
            >
              {aboutUsHeaderText.name}
            </Heading>
          </Flex>
          <Text fontSize='14px' color='#00000099' pl='25px'>
            {aboutUsHeaderText.date}
          </Text>
        </Flex>
        <Text fontSize='16px' color='#00000099' pt='32px'>
          {aboutUsHeaderText.text}
        </Text>
      </Box>
      <Box borderRadius='30px' overflow='hidden'>
        <Image src={imageSrc} alt='Article Picture' />
      </Box>
    </>
  );
};

export default ArticleHeader;
