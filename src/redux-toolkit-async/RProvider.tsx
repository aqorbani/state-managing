"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";

const RProvider = () => {
  return (
    <>
      {/* for using of redux toolkit */}
      <Provider store={store}>
        <ProductList />
      </Provider>
    </>
  );
};

export default RProvider;
