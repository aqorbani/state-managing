"use client";

import { createContext } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  total: number;
};

export const CartContext = createContext<CartContextType | null>(null);
