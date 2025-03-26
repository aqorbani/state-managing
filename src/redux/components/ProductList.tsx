"use client";

import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/cartReducer";

const products = [
  { id: 1, name: "لپ‌تاپ", price: 25000000 },
  { id: 2, name: "گوشی موبایل", price: 12000000 },
  { id: 3, name: "هدفون", price: 2000000 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {products.map((product) => (
        <div key={product.id} className="border p-3 rounded">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">
            {product.price.toLocaleString()} تومان
          </p>
          <button
            onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
            className="mt-2 bg-green-500 text-white p-2 rounded"
          >
            🛒 افزودن به سبد
          </button>
        </div>
      ))}
    </div>
  );
}
