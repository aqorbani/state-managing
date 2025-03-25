"use client";

import { use } from "react";
import { CartContext } from "@/context/CartContext";

const products = [
  { id: 1, name: "لپ‌تاپ", price: 25000000 },
  { id: 2, name: "گوشی موبایل", price: 12000000 },
  { id: 3, name: "هدفون", price: 2000000 },
];

export default function ProductList() {
  const cartContext = use(CartContext);

  if (!cartContext) throw new Error("ProductList must be inside a CartProvider!");

  const { addToCart } = cartContext;

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {products.map((product) => (
        <div key={product.id} className="border p-3 rounded">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.price.toLocaleString()} تومان</p>
          <button
            onClick={() => addToCart(product as any)}
            className="mt-2 bg-green-500 text-white p-2 rounded"
          >
            🛒 افزودن به سبد
          </button>
        </div>
      ))}
    </div>
  );
}
