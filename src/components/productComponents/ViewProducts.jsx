import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../api/productApi';
import Footer from '../sharedComponents/Footer';
import Header from '../sharedComponents/Header';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchAllProducts();
        console.log(products.products);
        if (Array.isArray(products.products)) {
          setProducts(products.products);
        } else {
          console.error('Unexpected API response', products.products);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products: ', error);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Header />
      <div className='container'>
        <h2>Product List</h2>
        <table className='table table-bordered table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                </tr>
              ))
            ) : (
              <tr className='text-center' colSpan='4'>
                <td>No Products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ViewProducts;
