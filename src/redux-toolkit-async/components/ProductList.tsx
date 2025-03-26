"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { AppDispatch, RootState } from "../store/store";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>⏳ در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-5 p-5 mt-48">
      {products.map((product) => (
        <div key={product.id} className="border p-3 rounded">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">
            {product.price.toLocaleString()} تومان
          </p>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">
            🛒 افزودن به سبد
          </button>
        </div>
      ))}
    </div>
  );
}
