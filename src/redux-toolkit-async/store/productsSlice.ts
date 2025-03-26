import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// تعریف نوع محصول
export type Product = {
  id: number;
  title: string;
  price: number;
};

// وضعیت اولیه
interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// تعریف `Thunk` برای گرفتن داده‌ها از API
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("مشکل در دریافت داده‌ها");
    return res.json();
  }
);

// ایجاد `Slice`
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "خطایی رخ داد";
      });
  },
});

export default productsSlice.reducer;
