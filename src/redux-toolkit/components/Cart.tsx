"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state: RootState) => state.cart);

  return (
    <div className="p-5 border rounded">
      <h2 className="text-xl font-bold">🛒 سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b p-2"
          >
            <span>
              {item.name} ({item.quantity}x)
            </span>
            <div className="flex gap-2">
              {item.quantity > 1 ? (
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                  }
                  className="bg-red-400 text-white px-2 rounded"
                >
                  ➖
                </button>
              ) : (
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-600 text-white px-2 rounded"
                >
                  ❌
                </button>
              )}
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, type: "increase" }))
                }
                className="bg-green-400 text-white px-2 rounded"
              >
                ➕
              </button>
            </div>
          </div>
        ))
      )}
      <h3 className="text-lg font-bold mt-4">
        مجموع: {total.toLocaleString()} تومان
      </h3>
    </div>
  );
}
