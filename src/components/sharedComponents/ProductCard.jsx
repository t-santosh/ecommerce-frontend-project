import React from 'react';

const ProductCard = () => {
  const products = [
    {
      id: 1,
      title: '24 set make-up kit',
      price: '9.99',
      image: '/images/makeup_kit.jpg',
    },
    {
      id: 2,
      title: 'Handbag',
      price: '25.99',
      image: '/images/pink_bag.jpg',
    },
    {
      id: 3,
      title: 'Pink high heel',
      price: '75.99',
      image: '/images/pink_high_heels.jpeg',
    },
    {
      id: 4,
      title: 'Whale print t-shirt',
      price: '19.99',
      image: '/images/t-shirt.jpeg',
    },
  ];

  return (
    <div className='row mt-5'>
      {products.map((product) => (
        <div key={product.id} className='col-md-3'>
          {/* 4 products per row on large screens */}
          <div className='card product-card'>
            <img
              src={product.image} // Dynamically set image path
              className='card-img-top product-img'
              alt={product.title} // Add alt text for accessibility
            />
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <p className='card-text'>A${product.price}</p>
              <button className='btn btn-primary'>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
