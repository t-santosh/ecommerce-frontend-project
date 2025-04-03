import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import global from '../../constants/global';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/userSlice';
import CartIcon from '../userComponents/CartIcon';

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== '/cart') {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className='container-fluid top-bar d-flex justify-content-between align-items-center p-2'>
      <Link className='brand-name fw-fold fs-5 p-2' to={'/'}>
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
        <li className='navbar-nav nav-item'>
          <Link to={'/cart'}>
            <CartIcon />
          </Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li className='navbar-nav nav-item'>
              <Link className='me-3' to={'/register'}>
                Register
              </Link>
            </li>
            <li className='navbar-nav nav-item'>
              <Link className='me-3' to={'/login'}>
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className='navbar-nav nav-item dropdown'>
              <Link
                className='nav-link'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <img
                  src='/images/sample_profile_pic.jpeg'
                  alt='Profile'
                  className='rounded-circle profile-img'
                  width='35'
                  height='35'
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
      </div>
    </div>
  );
};

export default TopBar;
