import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { socialMediaLinks } from '../info/TextInfo';

// REUSABLE COMPONENT WITH SOCIAL MEDIA LINKS

const SocialLinks = ({ headingText, isFixed, isMdScreen }) => {
  return (
    <Box flex='20%'>
      <Flex
        id='fixedFlex'
        direction={{ base: 'row', sm: 'row', md: 'column' }}
        gap='48px'
        alignItems='center'
        pt={{ base: '', sm: '', md: '50px' }}
        position={isMdScreen ? (isFixed ? 'fixed' : 'relative') : 'relative'}
        top={isMdScreen && isFixed ? '0' : 'auto'}
        right={isMdScreen && isFixed ? '60px' : 'auto'}
      >
        <Text fontSize='14px' fontWeight='600'>
          {headingText}
        </Text>

        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <link.icon size='22' />
          </a>
        ))}
      </Flex>
    </Box>
  );
};

export default SocialLinks;
