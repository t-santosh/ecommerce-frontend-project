import React from 'react';
import '../../assets/styles/registerPage.css';

const RegisterPage = () => {
  return (
    <div>
      <div className='container-fluid bg-light'>
        <a
          id='signin-btn'
          class='btn btn-outline-primary btn-sm'
          href='#'
          role='button'>
          Sign In
        </a>
        <div className='title'>
          <h1 id='brand-name'>
            <a href='#'>E-Commerce</a>
          </h1>
          <div className='sub-title'>One shopping stop</div>
        </div>
        <span>Don't have an account?</span>
        <div className='card text-bg-light shadow'>
          <h3 className='text-center mb-4 mt-3'>Sign up</h3>
          <br />
          <form>
            <div className='mb-3'>
              <label htmlFor='first-name' className='form-label'>
                First name
              </label>
              <input
                type='text'
                className='form-control shadow'
                id='name'
                placeholder='Enter your first name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Last-name' className='form-label'>
                Last name
              </label>
              <input
                type='text'
                className='form-control shadow'
                id='name'
                placeholder='Enter your last name'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control shadow'
                id='email'
                placeholder='example@example.com'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control shadow'
                id='password'
                placeholder='Enter your password'
              />
            </div>
            <button
              type='submit'
              className='btn btn-outline-primary w-100 mt-4 shadow-lg'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
