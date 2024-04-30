import React from 'react';
import articlePic from '../media/article.png';
import chat from '../media/chat.webp';
import useScrollHandler from '../hooks/useScrollHandler';
import { chefGuideHeaderText, chefGuideText } from '../info/TextInfo';
import ArticleHeader from './ArticleHeader';
import ArticleCustom from './ArticleCustom';
import ComponentContainer from './ComponentContainer';

const ChefGuide = () => {
  const [isFixed, isMdScreen] = useScrollHandler('chef-guide-flex');

  return (
    <ComponentContainer
      pt='0px'
      pb='0px'
      mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
    >
      {/* HEADING AND ARTICLE IMAGE */}

      <ArticleHeader
        aboutUsHeaderText={chefGuideHeaderText}
        avatarSrc={chat}
        imageSrc={articlePic}
      />

      {/* ARTICLE */}

      <ArticleCustom
        articleId='chef-guide-flex'
        articleText={chefGuideText}
        isBig={true}
        headingText='FIND ME ON:'
        isFixed={isFixed}
        isMdScreen={isMdScreen}
      />
    </ComponentContainer>
  );
};

export default ChefGuide;
