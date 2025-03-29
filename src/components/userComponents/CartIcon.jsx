import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Assuming you want the cart to be a clickable link

const CartIcon = () => {
  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='cart-icon-container'>
      <Link to='/cart'>
        🛒
        {totalItems > 0 && (
          <span className='cart-item-count top-0 end-1'>{totalItems}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
