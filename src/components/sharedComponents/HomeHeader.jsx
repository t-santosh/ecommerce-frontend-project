import React from 'react';
import global from '../../constants/global';
import { Link, useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  const navigate = useNavigate(); // Get navigation function

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/login'); // Redirect to login page
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand ms-5 me-5' to={'/home'}>
            {global.brandName}
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/dashboard'}>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/home'}>
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Products
                </Link>
                <ul className='dropdown-menu border rounded shadow'>
                  <li>
                    <Link className='dropdown-item' to={'/create-product'}>
                      Insert Product
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to={'/view-products'}>
                      View Products
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/about'}>
                  About Us
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success me-5' type='submit'>
                Search
              </button>
            </form>
            <div className='navbar-nav dropdown'>
              <Link to='/profile'>
                <img
                  src='/images/arush.jpeg'
                  alt='Profile'
                  className='rounded-circle'
                  width='30'
                  height='30'
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>
            <div className='navbar-nav me-4'>
              <li className='nav-item'>
                <button
                  className='nav-link btn btn-link'
                  onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeHeader;
