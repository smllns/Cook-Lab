import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstHash from '../components/InstHash';
import RecipesPopularGrid from '../components/RecipesPopularGrid';
import Newsletter from '../components/Newsletter';
import CategoryHeader from '../components/CategoryHeader';
import { useParams } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import CategoryRecipesGrid from '../components/CategoryRecipesGrid';

// SINGLE CATEGORY US PAGE

const Category = () => {
  const { heading } = useParams();

  return (
    <>
      <Header />
      <Divider />
      <CategoryHeader heading={heading} />
      <CategoryRecipesGrid category={heading} />
      <InstHash />
      <RecipesPopularGrid />
      <Newsletter />
      <Footer />
    </>
  );
};

export default React.memo(Category);
