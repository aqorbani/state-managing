"use client";

import { use } from "react";
import { CartContext } from "@/context/CartContext";

export default function Cart() {
  const cartContext = use(CartContext);

  if (!cartContext) throw new Error("Cart must be inside a CartProvider!");

  const { cart, updateQuantity, removeFromCart } = cartContext;

  return (
    <div className="p-5 border rounded">
      <h2 className="text-xl font-bold">🛒 سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b p-2">
            <span>
              {item.name} ({item.quantity}x)
            </span>
            <div className="flex gap-2">
              {/* دکمه کاهش تعداد */}
              {item.quantity > 1 ? (
                <button
                  onClick={() => updateQuantity(item.id, "decrease")}
                  className="bg-red-400 text-white px-2 rounded"
                >
                  ➖
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-2 rounded"
                >
                  ❌
                </button>
              )}

              {/* تعداد */}
              <span className="px-2">{item.quantity}</span>

              {/* دکمه افزایش تعداد */}
              <button
                onClick={() => updateQuantity(item.id, "increase")}
                className="bg-green-400 text-white px-2 rounded"
              >
                ➕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
