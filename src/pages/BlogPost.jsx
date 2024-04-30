import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RecipesGridSmall from '../components/RecipesGridSmall';
import ChefGuide from '../components/ChefGuide';
import { Divider } from '@chakra-ui/react';

// CHEF GUIDE US PAGE  


const BlogPost = () => {
  return (
    <>
      <Header />
      <Divider />
      <ChefGuide />
      <Newsletter />
      <RecipesGridSmall />
      <Footer />
    </>
  );
};

export default BlogPost;
