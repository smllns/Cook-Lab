import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import About from './pages/About';
import useScrollToTop from './hooks/useScrollToTop';
import { Box } from '@chakra-ui/react';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

// MAIN ENTRY POINT OF THE APP
// SETS UP ROUTING FOR ALL PAGES

function App() {
  useScrollToTop();
  return (
    <>
      <Box minW='380px'>
        <Routes>
          <Route path='/recipes' element={<Recipes />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path='/chefGuide' element={<BlogPost />}></Route>
          <Route path='/category/:heading' element={<Category />}></Route>
          <Route path='/recipe/:recipeId' element={<Recipe />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
