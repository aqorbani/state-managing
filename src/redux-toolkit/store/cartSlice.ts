import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  cart: CartItem[];
  total: number;
};

const initialState: CartState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; type: "increase" | "decrease" }>
    ) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        if (action.payload.type === "increase") {
          item.quantity += 1;
        } else {
          item.quantity -= 1;
          if (item.quantity === 0) {
            state.cart = state.cart.filter((i) => i.id !== item.id);
          }
        }
      }
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
