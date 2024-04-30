import React from 'react';
import aboutus from '../media/aboutus.png';
import smllns from '../media/smllns.jpg';
import useScrollHandler from '../hooks/useScrollHandler';
import { aboutUsHeaderText, aboutUsText } from '../info/TextInfo';
import ArticleHeader from './ArticleHeader';
import ArticleCustom from './ArticleCustom';
import ComponentContainer from './ComponentContainer';

const AboutUs = () => {
  const [isFixed, isMdScreen] = useScrollHandler('about-me-flex');

  return (
    <ComponentContainer
      mx={{ base: '25px', sm: '25px', md: '50px', lg: '50px', xl: 'auto' }}
      pt='0px'
      pb='0px'
    >
      {/* HEADING AND ARTICLE IMAGE */}

      <ArticleHeader
        aboutUsHeaderText={aboutUsHeaderText}
        avatarSrc={smllns}
        imageSrc={aboutus}
      />

      {/* ARTICLE */}

      <ArticleCustom
        articleId='about-me-flex'
        articleText={aboutUsText}
        isBig={false}
        headingText='MY SOCIALS:'
        isFixed={isFixed}
        isMdScreen={isMdScreen}
      />
    </ComponentContainer>
  );
};

export default AboutUs;
