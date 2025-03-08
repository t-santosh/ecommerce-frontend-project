import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import global from '../../constants/global';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/userSlice';

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <div className='top-bar d-flex justify-content-between align-items-center p-2'>
      <Link className='brand-name fw-fold fs-5 p-2' to={'#'}>
        {global.brandName}
      </Link>
      <div className='d-flex flex-grow-1 mx-5' role='search'>
        <input
          type='search'
          placeholder='Search products...'
          className='form-control'
          aria-label='Search'
        />
        <button className='btn btn-outline-success ms-2'>Search</button>
      </div>
      <div className='d-flex me-3'>
        {!isAuthenticated ? (
          <>
            <Link className='me-3' to={'/register'}>
              Register
            </Link>
            <Link className='me-3' to={'/login'}>
              Login
            </Link>
          </>
        ) : (
          <>
            <li className='navbar-nav nav-item'>
              <Link className='nav-link cart me-4' to={'/cart'}>
                🛒 Cart
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
          </>
        )}
        ;
      </div>
    </div>
  );
};

export default TopBar;
