import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../components/userComponents/LoginPage';
import RegisterPage from '../components/userComponents/RegisterPage';
import HomePage from '../components/userComponents/HomePage';
import LandingPage from '../components/LandingPage';

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;
