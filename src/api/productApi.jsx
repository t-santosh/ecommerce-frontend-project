import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_PRODUCTS, // Backend base URL
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

// Create a product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.status);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to create a product'
    );
  }
};

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to load products');
  }
};
