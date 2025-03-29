import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const hanldeAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
      <div className='card product-card'>
        <img
          src={'/images/makeup_kit.jpg'}
          className='card-img-top product-img'
          alt={product.name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-description'>{product.description}</p>
          <p className='card-price'>A${product.price}</p>
        </div>
        <button className='btn btn-primary' onClick={hanldeAddToCart}>
          Add to Cart
        </button>
      </div>
  );
};

export default ProductCard;
