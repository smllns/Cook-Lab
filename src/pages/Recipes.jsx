import React from 'react';
import Header from '../components/Header';
import FavoritesRecipes from '../components/FavoritesRecipes';
import Categories from '../components/Categories';
import RecipesGrid from '../components/RecipesGrid';
import InstHash from '../components/InstHash';
import RecipesPopularGrid from '../components/RecipesPopularGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Divider } from '@chakra-ui/react';

// ALL RECIPES PAGE

const Recipes = () => {
  return (
    <>
      <Header />
      <Divider />
      <FavoritesRecipes />
      <Categories showButton='' />
      <RecipesGrid showHeader={true} />
      <InstHash />
      <RecipesPopularGrid />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Recipes;
