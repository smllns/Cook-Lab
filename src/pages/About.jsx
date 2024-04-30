import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RecipesGridSmall from '../components/RecipesGridSmall';
import { Divider } from '@chakra-ui/react';
import AboutUs from '../components/AboutUs';

// ABOUT US PAGE

const About = () => {
  return (
    <>
      <Header />
      <Divider />
      <AboutUs />
      <Newsletter />
      <RecipesGridSmall />
      <Footer />
    </>
  );
};

export default About;
