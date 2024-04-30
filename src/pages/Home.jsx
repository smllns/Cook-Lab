import React from 'react';
import Header from '../components/Header';
import RecipesCarousel from '../components/RecipesCarousel';
import { Divider } from '@chakra-ui/react';
import Categories from '../components/Categories';
import RecipesGrid from '../components/RecipesGrid';
import ArticleAd from '../components/ArticleAd';
import InstHash from '../components/InstHash';
import RecipesPopularGrid from '../components/RecipesPopularGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// HOME PAGE

const Home = () => {
  return (
    <>
      <Header />
      <Divider />
      <RecipesCarousel />
      <Categories />
      <RecipesGrid showHeader={true} />
      <ArticleAd />
      <InstHash />
      <RecipesPopularGrid />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
