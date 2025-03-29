import { configureStore } from '@reduxjs/toolkit';
import useReducer from './userSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
