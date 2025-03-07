import React from 'react';
import global from '../../constants/global';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeHeader = () => {
  const navigate = useNavigate(); // Get navigation function
  const user = useSelector((state) => state.user.user);
  const isAdmin = user?.isAdmin;

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
              {/* Render the Dashboard link only for admins */}
              {isAdmin && (
                <li className='nav-item'>
                  <Link className='nav-link' to={'/dashboard'}>
                    Dashboard
                  </Link>
                </li>
              )}
              <li className='nav-item'>
                <Link className='nav-link' to={'/home'}>
                  Home
                </Link>
              </li>
              {isAdmin && (
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
              )}
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
            <li className='navbar-nav nav-item me-1'>
              <Link className='nav-link' to={'/cart'}>
                Cart
              </Link>
            </li>
            <li className='navbar-nav nav-item dropdown'>
              <Link
                className='nav-link'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <img
                  src='/images/arush.jpeg'
                  alt='Profile'
                  className='rounded-circle'
                  width='30'
                  height='30'
                />
              </Link>
              <ul
                className='dropdown-menu border rounded shadow'
                style={{ right: '0', left: 'auto' }}>
                <li>
                  <Link className='dropdown-item' to={'/profile'}>
                    Profile
                  </Link>
                </li>
                <li
                  className='dropdown-item'
                  role='button'
                  onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeHeader;
