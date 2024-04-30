import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import articlePic2 from '../media/article2.png';

const ArticleParagraph = ({
  heading,
  text,
  hasImage = false,
  padT = '',
  padTPic = '',
  padB = '50px',
}) => {
  return (
    <Flex direction='column' pb={padB} pt={padT}>
      <Heading pb='25px' fontSize='24px'>
        {heading}
      </Heading>
      {hasImage && (
        <Box borderRadius='30px' overflow='hidden'>
          <Image src={articlePic2} alt='Article Picture' />
        </Box>
      )}
      <Text fontSize='16px' color='#00000099' pt={padTPic}>
        {text}
      </Text>
    </Flex>
  );
};

export default ArticleParagraph;
