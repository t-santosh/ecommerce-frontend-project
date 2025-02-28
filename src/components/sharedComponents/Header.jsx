import React from 'react';
import global from '../../constants/global';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand ms-5 me-5' href='#'>
            {global.brandName}
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='#'>
                  Features
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Products</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>About Us</Link>
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
            <div className='navbar-nav me-4'>
              <li className='nav-item me-1'>
                <Link className='nav-link' to={'/register'}>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/login'}>
                  Login
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
