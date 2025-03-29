import React, { useEffect } from 'react';
import ProductCard from '../sharedComponents/ProductCard';
import { fetchProducts } from '../../store/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='row justify-content-start mt-5'>
      {products.map((product) => (
        <div key={product.id} className='col-md-2'>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
