import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../api/productApi';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators
export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;

// Fetch products function
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading()); // Set loading to true
  try {
    const products = await fetchAllProducts();
    dispatch(setProducts(products.products)); // Store in Redux
  } catch (error) {
    dispatch(setError(error.message)); // Store error
  }
};
