import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../api/userApi';
import capitalizeFirstLetter from '../../utils/capitalizeLetters';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/registerPage.css';

const RegisterPage = () => {
  // Initialize the state formData with empty values, and set the values when received from handleChange
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  // Handle the changes in the input and update the formData state accordingly
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hanlde submit to submit the filled out form to the backend through API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim values to remove leading & trailing spaces
    const trimmedData = {
      first_name: capitalizeFirstLetter(formData.first_name.trim()),
      last_name: capitalizeFirstLetter(formData.last_name.trim()),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
    // Check if any field is empty
    if (
      !trimmedData.first_name ||
      !trimmedData.last_name ||
      !trimmedData.email ||
      !trimmedData.password
    ) {
      toast.error('All fields are required!');
      return;
    }

    try {
      const data = await registerUser(trimmedData); // Call the register funtion
      if (data && data.message) {
        // Check if message exists in the response
        toast.success(data.message); // Show success message from backend
      } else {
        toast.success('Registration successful!');
      }
    } catch (error) {
      // console.log('Error message from registerPage: ', error.message);
      // return;
      if (error.message === 'User is already registered') {
        toast.error('This email is already registered!');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand ms-5' to={'/'}>
            E-Commerce
          </Link>
          <Link className='nav-link me-5' to={'/login'}>
            Login
          </Link>
        </div>
      </nav>
      <div className='custom-container container-fluid bg-light'>
        <div className='card custom-card shadow-lg'>
          <div className='card-body'>
            <h3 className='card-title text-center'>Register</h3>
            <br />
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='first-name' className='form-label'>
                  First name
                </label>
                <input
                  required
                  type='text'
                  className='form-control'
                  id='first_name'
                  name='first_name'
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder='Enter your first name'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='Last-name' className='form-label'>
                  Last name
                </label>
                <input
                  required
                  type='text'
                  className='form-control'
                  id='last_name'
                  name='last_name'
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder='Enter your last name'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                  required
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='example@example.com'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                  required
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password'
                />
              </div>
              {/* <div className='mb-3'>
                <label className='form-label'>Confirm password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                />
              </div> */}
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
