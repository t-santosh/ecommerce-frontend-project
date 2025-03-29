import React from 'react';
import Footer from '../sharedComponents/Footer';
import Header from '../sharedComponents/Header';
import HeroSection from '../sharedComponents/HeroSection';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard';
import ProductList from './ProductList';

const HomePage = () => {
  const user = useSelector((state) => state.user.user);
  const isAdmin = user?.isAdmin;

  if (isAdmin) {
    return <Dashboard />;
  }
  return (
    <div>
      <Header />
      <HeroSection />
      <div className='container-fluid'>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
