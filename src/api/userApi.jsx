import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adding a request interceptor to attach the JWT token
api.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

    // If token exists, attach it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error (optional)
    return Promise.reject(error);
  }
);

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Registration failed');
  }
};

// Login API call
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await api.get('/profile');
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || 'Failed to fetch user profile'
    );
  }
};
