import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },

    // increaseQuantity: (state, action) => {
    //   const productId = action.payload;
    //   const product = state.cartItems.find((item) => item.id === productId);
    //   if (product) product.quantity += 1;
    // },

    // decreaseQuantity: (state, action) => {
    //   const productId = action.payload;
    //   const product = state.cartItems.find((item) => item.id === productId);
    //   if (product && product.quantity > 1) product.quantity -= 1;
    // },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
