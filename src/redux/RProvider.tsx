"use client";
import React from "react";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { store } from "./store/store";

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
