import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RecipesGridSmall from '../components/RecipesGridSmall';
import RecipePage from '../components/RecipePage';

// RECIPE DETAILS PAGE


const Recipe = () => {
  return (
    <>
      <Header />
      <RecipePage />
      <Newsletter />
      <RecipesGridSmall />
      <Footer />
    </>
  );
};

export default Recipe;
