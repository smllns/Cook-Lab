import React from 'react';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RecipesGridSmall from '../components/RecipesGridSmall';
import { Divider } from '@chakra-ui/react';
import ContactUs from '../components/ContactUs';

// CONTACT PAGE

const Contact = () => {
  return (
    <>
      <Header />
      <Divider />
      <ContactUs />
      <Newsletter />
      <RecipesGridSmall />
      <Footer />
    </>
  );
};

export default Contact;
