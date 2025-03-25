import React from 'react';

const HeroSection = () => {
  return (
    <section
      className='hero-section text-center'
      style={{ backgroundColor: 'teal', color: 'white' }}>
      <h1>
        Welcome to <b style={{ color: 'orange' }}>{global.brandName}</b>{' '}
        shopping store
      </h1>
    </section>
  );
};

export default HeroSection;
