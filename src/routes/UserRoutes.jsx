import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../components/userComponents/LoginPage';
import RegisterPage from '../components/userComponents/RegisterPage';
import HomePage from '../components/userComponents/HomePage';

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={RegisterPage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;
