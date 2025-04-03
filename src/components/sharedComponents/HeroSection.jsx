import React from 'react';
import { Link } from 'react-router-dom';
import global from '../../constants/global';

const HeroSection = () => {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1 style={{ color: 'orange' }}>{global.brandName}</h1>
        <p>Your one-stop-shopping-store</p>
        <Link to={'/login'}>
          <button className='btn btn-outline-primary mt-5'>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
