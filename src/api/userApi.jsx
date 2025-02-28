import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

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
// export const loginUser = async (userData) => {
//     try {
//       const response = await api.post('/login', userData);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || 'Login failed');
//     }
//   };
