"use client";

import { use } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartButton() {
  const cartContext = use(CartContext);

  if (!cartContext)
    throw new Error("CartButton must be inside a CartProvider!");

  const { cart, total } = cartContext;

  return (
    <button className="fixed top-5 right-5 p-3 bg-blue-500 text-white rounded">
      🛒 سبد خرید ({cart.length}) - {total.toLocaleString()} تومان
    </button>
  );
}
