import React from 'react';
import Footer from '../sharedComponents/Footer';
import Header from '../sharedComponents/Header';
import HeroSection from '../sharedComponents/HeroSection';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard';
import ProductCard from '../sharedComponents/ProductCard';

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
      <div className='container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
