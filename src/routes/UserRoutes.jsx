import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import LoginPage from '../components/userComponents/LoginPage';
import RegisterPage from '../components/userComponents/RegisterPage';

const UserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/login' Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoutes;
