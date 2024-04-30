import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SocialLinks from './SocialLinks';
import ArticleParagraph from './ArticleParagraph';

const ArticleCustom = ({
  articleId,
  articleText,
  isBig,
  headingText,
  isFixed,
  isMdScreen,
}) => {
  return (
    <Flex
      gap='50px'
      direction={{ base: 'column', sm: 'column', md: 'row' }}
      id={articleId}
    >
      {/* LEFT ARTICLE SIDE  */}

      <Box flex={{ base: '', md: '80%' }}>
        <ArticleParagraph
          padT='50px'
          heading={articleText.headingOne}
          text={articleText.textOne}
        />
        <ArticleParagraph
          heading={articleText.headingTwo}
          text={articleText.textTwo}
        />
        <ArticleParagraph
          heading={articleText.headingThree}
          text={articleText.textThree}
          padTPic='25px'
          hasImage='true'
        />
        {isBig && (
          <>
            <ArticleParagraph
              heading={articleText.headingFour}
              text={articleText.textFour}
            />
            <Box
              bg='linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%)'
              borderTop='1px solid #0000001A'
              borderBottom='1px solid #0000001A'
            >
              <Text
                fontSize={{ base: '27px', sm: '30px', md: '36px' }}
                fontStyle='italic'
                lineHeight='64px'
                py='48px'
                px={{ base: '21px', sm: '21px', md: '42px' }}
              >
                {articleText.citation}
              </Text>
            </Box>
            <ArticleParagraph
              padT='50px'
              padB=''
              heading={articleText.headingFive}
              text={articleText.textFive}
            />
          </>
        )}
      </Box>

      {/* RIGHT ARTICLE SIDE  */}

      <SocialLinks
        headingText={headingText}
        isFixed={isFixed}
        isMdScreen={isMdScreen}
      />
    </Flex>
  );
};

export default ArticleCustom;
