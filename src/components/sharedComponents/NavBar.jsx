import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const isAdmin = user?.isAdmin;

  if (isAdmin) {
    return (
      <nav className='container-fluid d-flex navbar navbar-expand-sm'>
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
                <ul className='dropdown-menu navbar-dropdown-menu border rounded shadow'>
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
          </ul>
        </div>
      </nav>
    );
  }
  return (
    <nav className='navbar navbar-expand-sm'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={'/home'}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'#'}>
                Categories
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'#'}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={'/about'}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
