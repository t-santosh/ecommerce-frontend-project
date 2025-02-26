import React from 'react';
import '../../assets/styles/registerPage.css';

const RegisterPage = () => {
  return (
    <div>
      <div className='container-fluid bg-light'>
        <div className='card custom-card shadow-lg'>
          <div className='card-body'>
            <h2 className='card-title text-center'>Sign up</h2>

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
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='example@example.com'
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                />
              </div>
              <br />
              <button type='submit' className='btn btn-primary w-100'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
