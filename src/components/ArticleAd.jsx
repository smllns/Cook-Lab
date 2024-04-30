import { Box, useBreakpointValue } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { imagesData } from '../info/ImgInfo';
import ArticleAdLarge from './ArticleAdLarge';
import ArticleAdSmall from './ArticleAdSmall';

const ArticleAd = () => {
  // USING FRAMER MOTION TO CREATE PARALLAX EFFECT

  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const currentSize = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  });

  // RENDERING FOOD EMOJIS AS A PART OF PARALLAX EFFECT

  const renderImages = () => {
    return imagesData.map((image, index) => (
      <motion.img
        key={index}
        src={image.src}
        alt={image.alt}
        style={{
          position: 'absolute',
          width: image.dimensions[currentSize].width,
          height: image.dimensions[currentSize].height,
          objectFit: 'cover',
          zIndex: '-1',
          y,
          top: image.dimensions[currentSize].top,
          right: image.dimensions[currentSize].right,
        }}
      />
    ));
  };

  return (
    <Box
      ref={ref}
      maxW='1280px'
      mx='auto'
      h={{ lg: '600px' }}
      mt={{ base: '36px', sm: '36px', md: '72px' }}
      mb={{ base: '21px', sm: '21px', md: '42px' }}
    >
      {/* LARGE SCREENS  */}

      <ArticleAdLarge renderImages={renderImages} />

      {/* SMALL SCREENS  */}

      <ArticleAdSmall renderImages={renderImages} />
    </Box>
  );
};

export default ArticleAd;
