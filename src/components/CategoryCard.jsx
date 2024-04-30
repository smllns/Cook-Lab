import React from 'react';
import {
  GridItem,
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// CATEGORIES GRID ITEM COMPONENT

const CategoryCard = ({ background, textShadow, emoji, heading }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${heading}`);
  };

  return (
    <GridItem w={{ md: '100%', lg: '100%' }} minW='115px'>
      <Card
        background={background}
        alignItems='center'
        borderRadius='30px'
        shadow='none'
        cursor='pointer'
        _hover={{
          boxShadow: '0px 4px 20px 0px #00000040',
          background: background.replace('100%', '50%'),
        }}
        _focus={{ border: '1px solid #000000' }}
        _active={{ border: '1px solid #000000' }}
        transition='box-shadow 0.3s, height 0.3s, border 0.3s'
        onClick={handleClick}
      >
        <CardBody>
          <Text
            fontSize={{
              base: '40px',
              sm: '60px',
              md: '100px',
              lg: '60px',
              xl: '100px',
            }}
            textShadow={textShadow}
          >
            {emoji}
          </Text>
        </CardBody>
        <CardFooter>
          <Heading size={{ sm: 'sm', md: 'md', lg: 'md' }}>{heading}</Heading>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default CategoryCard;
