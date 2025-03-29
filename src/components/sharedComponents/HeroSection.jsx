import React from 'react';
import global from '../../constants/global';

const HeroSection = () => {
  return (
    <div>
      <section
        className='hero-section text-center'
        style={{ backgroundColor: 'teal', color: 'white' }}>
        <h1>
          Welcome to <b style={{ color: 'orange' }}>{global.brandName}</b> store
        </h1>
      </section>
    </div>
  );
};

export default HeroSection;
