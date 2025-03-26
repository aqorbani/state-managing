"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const RProvider = () => {
  return (
    <>
      {/* for using of redux toolkit */}
      <Provider store={store}>
        {/* for using of redux toolkit */}
        <ProductList />
        <Cart />
      </Provider>
    </>
  );
};

export default RProvider;
