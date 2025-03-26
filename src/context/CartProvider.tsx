"use client";

import { useState } from "react";
import { CartContext, CartItem } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    type === "increase" ? item.quantity + 1 : item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0) // اگر تعداد ۰ شد، حذفش کن
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
