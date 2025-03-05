import React from 'react';
import global from '../../constants/global';
import '../../assets/styles/footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='landing-footer'>
        <p>&copy; 2025 {global.brandName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
