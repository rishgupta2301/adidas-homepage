import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],  // Array to hold cart items
  totalQuantity: 0,  // Total number of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      state.totalQuantity++;
      
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      state.totalQuantity--;
      
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
