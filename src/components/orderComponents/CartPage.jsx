import React from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/Footer';

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <h1 className='row'>🛒 Your cart is Empty!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
