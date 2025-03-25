import React from 'react';
import { useState } from 'react';
import { loginUser } from '../../api/userApi';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../sharedComponents/Footer';
import { Link, useNavigate } from 'react-router-dom';
import global from '../../constants/global';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  // Initialize the state formData with empty values, and set the values when received from handleChange
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // <-- Initialize useNavigate

  // Handle the changes in the input and update the formData state accordingly
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hanlde submit to submit the filled out form to the backend through API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Trim values to remove leading & trailing spaces
    const trimmedData = {
      email: formData.email.trim(),
      password: formData.password.trim(),
    };
    // Check if any field is empty
    if (!trimmedData.email || !trimmedData.password) {
      toast.error('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const data = await loginUser(trimmedData); // Call the register funtion
      if (data && data.token) {
        // Store token in localStorage or cookies
        localStorage.setItem('token', data.token);

        // Store user data in Redux store
        dispatch(setUser(data.user));

        // Check if message exists in the response
        // Show the success message fetched from API
        toast.success(data.message);
        navigate('/home');
      } else {
        toast.error('Login failed! Please try again!');
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || 'An error occured. Please try again.'
        );
      } else {
        toast.error('Internal Server Error');
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />
      <nav className='navbar navbar-login navbar-expand-lg'>
        <div className='container-fluid'>
          <Link className='navbar-brand ms-5' to={'/'}>
            {global.brandName}
          </Link>
          <Link className='nav-link me-5' to={'/register'}>
            Register
          </Link>
        </div>
      </nav>
      <div className='custom-container container'>
        <div className='card custom-card shadow-lg'>
          <div className='card-body'>
            <h3 className='card-title text-center'>Login</h3>
            <br />
            <form onSubmit={handleSubmit}>
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
              <br />
              <button
                type='submit'
                className='btn btn-primary w-100'
                disabled={loading}>
                {loading ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm'
                      role='status'
                      aria-hidden='true'></span>
                    Logging in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
