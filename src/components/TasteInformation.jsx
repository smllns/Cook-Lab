import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

// TASTE INFORMATION FOR RECIPE PAGE COMPONENT

const TasteInformation = ({ recipe, isMdScreen, isFixed }) => {
  const tasteProperties = [
    { label: 'Bitterness', value: recipe.taste.bitterness },
    { label: 'Sweetness', value: recipe.taste.sweetness },
    { label: 'Saltiness', value: recipe.taste.saltiness },
    { label: 'Savoriness', value: recipe.taste.savoriness },
    { label: 'Spiciness', value: recipe.taste.spiciness },
  ];
  return (
    <Flex
      id='fixedFlex'
      direction='column'
      gap='48px'
      alignItems='center'
      p='32px'
      mt={{ base: '', md: '50px' }}
      position={isMdScreen ? (isFixed ? 'fixed' : 'relative') : 'relative'}
      top={isMdScreen && isFixed ? '0' : 'auto'}
      right={isMdScreen && isFixed ? '60px' : 'auto'}
      background='#E7FAFE'
      borderRadius='30px'
    >
      <Text fontWeight='600' fontSize='24px' pb='24px'>
        Taste Information
      </Text>

      {tasteProperties.map((property, index) => (
        <Flex
          key={index}
          justifyContent='space-between'
          borderBottom='1px solid #0000001A'
          pb='16px'
          w='100%'
        >
          <Text fontWeight='500' fontSize='18px' color='#00000099' pr='10px'>
            {property.label}
          </Text>
          <Text fontWeight='500' fontSize='18px'>
            {property.value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default TasteInformation;
