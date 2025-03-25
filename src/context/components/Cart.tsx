"use client";

import { use } from "react";
import { CartContext } from "@/context/CartContext";

export default function Cart() {
  const cartContext = use(CartContext);

  if (!cartContext) throw new Error("Cart must be inside a CartProvider!");

  const { cart, removeFromCart } = cartContext;

  return (
    <div className="p-5 border rounded">
      <h2 className="text-xl font-bold">🛒 سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b p-2">
            <span>{item.name} ({item.quantity}x)</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              ❌ حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}
