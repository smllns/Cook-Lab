import { Avatar, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsChat, BsSend, BsHeart, BsBookmark } from 'react-icons/bs';

// REUSABLE INSTAGRAM POST COMPONENT

const IgPost = ({
  imgSrc,
  profileName,
  place,
  foodPic,
  username,
  postDate,
  foodDescription,
}) => {
  return (
    <Flex
      minW='290px'
      maxW='290px'
      h='445px'
      bgColor='white'
      flexDirection='column'
      borderRadius='20px'
    >
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        px='10px'
      >
        <Flex alignItems='center' mr='16px' height='42px'>
          <Avatar
            width='24.75px'
            height='24.75px'
            name={profileName}
            src={imgSrc}
            mr='16px'
          />
          <Flex
            alignItems='flex-start'
            flexDir='column'
            justifyContent='space-between'
          >
            <Heading as='h5' fontSize='10px'>
              {profileName}
            </Heading>
            <Text fontSize='8.5px' color='#00000099'>
              {place}
            </Text>
          </Flex>
        </Flex>
        <HiOutlineDotsHorizontal />
      </Flex>
      <Image
        src={foodPic}
        alt='ig picture'
        width='290px'
        height='290px'
        objectFit='cover'
      />
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        p='10px'
      >
        <Flex gap='14px'>
          <BsHeart size='18px' />
          <BsChat size='18px' />
          <BsSend size='18px' />
        </Flex>
        <BsBookmark size='18px' />
      </Flex>
      <Text fontSize='10px' fontWeight='400' px='10px' pb='10px'>
        <Text as='span' pr='1px' fontWeight='600'>
          {username}
        </Text>
        {foodDescription}
      </Text>
      <Text
        px='10px'
        fontSize='9px'
        fontWeight='400'
        color='#00000066'
        pb='10px'
      >
        {postDate}
      </Text>
    </Flex>
  );
};

export default IgPost;
