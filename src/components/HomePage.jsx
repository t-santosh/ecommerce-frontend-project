import React from 'react';
import '../assets/styles/homePage.css';

const HomePage = () => {
  return (
    <div>
      <a className='sign-in'>Sign In</a>
      <div className='title'>
        <h1 id='brand-name'>
          <a href='#'>E-Commerce</a>
        </h1>
        <p>One shopping stop</p>
      </div>
      <div className='container-fluid'>
        <div className='card'>
          <h3 className='text-center mb-4'>Sign up</h3>
          <form>
            <div className='mb-3'>
              <label htmlFor='first-name' className='form-label'>
                First name
              </label>
              <input
                type='text'
                className='form-control'
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
                className='form-control'
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
                className='form-control'
                id='email'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Enter your password'
              />
            </div>
            <button type='submit' className='btn btn-primary w-100 mt-4'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
