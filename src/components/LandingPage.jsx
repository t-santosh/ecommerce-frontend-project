import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './sharedComponents/Footer';
import Header from './sharedComponents/Header';
// import global from '../constants/global';
import HeroSection from './sharedComponents/HeroSection';
import ProductList from './userComponents/ProductList';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className='container-fluid'>
        <ProductList />
        <div className='row mt-5 mb-5'>
          <div className='col d-flex justify-content-center'>
            <Link className='btn btn-primary' to={'/login'}>
              Shop Now
            </Link>
          </div>
          <form action='/submit' method='POST'></form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
