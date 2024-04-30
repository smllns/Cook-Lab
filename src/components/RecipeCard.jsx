import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  GridItem,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { BsClockFill } from 'react-icons/bs';
import { PiForkKnifeFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import foodPic from '../media/foodPic.png';

// REUSABLE RECIPE GRID ITEM

const RecipeCard = ({
  cardHeaderP = '0px',
  cardBackground = 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)',
  cardHoverBackground = 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 50%)',
  cardImageWidth = '368px',
  cardImageHeight,
  textFontSize = { base: '12px', sm: '14px' },
  footerGap = { base: '5px', sm: '5px', md: '24px' },
  justifyFooter = '',
  imageSrc = foodPic,
  title = 'Something Tasty',
  readyInMinutes = 'A Couple',
  cuisines = 'Various',
  recipeID = '666',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipeID}`);
  };

  return (
    <GridItem
      w={{ md: '100%', lg: '100%' }}
      h={{ md: '100%', lg: '100%' }}
      maxW='400px'
      maxH='435px'
    >
      <Tooltip
        label={title}
        placement='bottom'
        background='linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #eafde7 100%)'
        color='black'
        borderRadius='10px'
      >
        <Card
          background={cardBackground}
          borderRadius='30px'
          shadow='none'
          cursor='pointer'
          _hover={{
            boxShadow: '0px 4px 20px 0px #00000040',
            background: cardHoverBackground,
          }}
          _focus={{ border: '1px solid #000000' }}
          _active={{ border: '1px solid #000000' }}
          transition='box-shadow 0.3s, height 0.3s, border 0.3s'
          onClick={handleClick}
        >
          <CardHeader padding={cardHeaderP}>
            <Image
              src={imageSrc}
              alt='recipe picture'
              borderRadius='20px'
              width={cardImageWidth}
              height={cardImageHeight}
              objectFit='cover'
              overflow='hidden'
            />
          </CardHeader>
          <CardBody px='24px' pt='10px' pb='0'>
            <Text
              fontSize={{
                base: '14px',
                sm: '16px',
                md: '18px',
                lg: '20px',
                xl: '24px',
              }}
              fontWeight='600'
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
              }}
              maxHeight={{ base: '1.3rem', md: '1.5rem', lg: '2rem' }}
            >
              {title}
            </Text>
          </CardBody>
          <CardFooter
            pb={{ base: '10px', sm: '15px', md: '32px' }}
            pt={{ base: '10px', sm: '10px', md: '15px' }}
            px='24px'
          >
            <Flex
              gap={footerGap}
              justifyContent={justifyFooter}
              alignItems='flex-start'
              w='100%'
              flexDir={{ base: 'column', sm: 'column', md: 'row' }}
            >
              <Box display='flex'>
                <BsClockFill size='18px' />
                <Text
                  fontSize={textFontSize}
                  fontWeight='500'
                  ml='8px'
                  color='#00000099'
                >
                  {readyInMinutes} Min
                </Text>
              </Box>

              <Box display='flex'>
                <PiForkKnifeFill size='18px' />
                <Text
                  fontSize={textFontSize}
                  fontWeight='500'
                  ml='8px'
                  color='#00000099'
                >
                  {cuisines}
                </Text>
              </Box>
            </Flex>
          </CardFooter>
        </Card>
      </Tooltip>
    </GridItem>
  );
};

export default RecipeCard;
