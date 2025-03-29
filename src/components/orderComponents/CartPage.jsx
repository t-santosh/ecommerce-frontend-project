import React from 'react';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <h1 className='row'>🛒 Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className='row'>
            {cartItems.map((item) => (
              <div key={item.id} className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-description'>A${item.price}</p>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
