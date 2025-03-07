import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../components/userComponents/LoginPage';
import RegisterPage from '../components/userComponents/RegisterPage';
import HomePage from '../components/userComponents/HomePage';
import LandingPage from '../components/LandingPage';
import ProfilePage from '../components/userComponents/ProfilePage';
import ProductCreatePage from '../components/productComponents/ProductCreatePage';
import ViewProducts from '../components/productComponents/ViewProducts';
import AboutPage from '../components/AboutPage';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All user-related routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* All product-realted routes */}
        <Route path='/create-product' element={<ProductCreatePage />} />
        <Route path='/view-products' element={<ViewProducts />} />

        {/* About Page route */}
        <Route path='/about' element={<AboutPage />} />

        {/* Dashboard Page route */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
