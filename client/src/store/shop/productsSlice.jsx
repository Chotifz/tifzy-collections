import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action?.payload?.data;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(fetchDetailedProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDetailedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action?.payload?.data;
      })
      .addCase(fetchDetailedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});

export const fetchFilteredProducts = createAsyncThunk(
  "/products/fetchAllProduct",
  async ({ filterParams, sortParams }) => {
    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });

    const result = await axios.get(
      `http://localhost:5000/api/shop/products?${query}`
    );
    return result?.data;
  }
);

export const fetchDetailedProducts = createAsyncThunk(
  "/products/fetchDetailedProduct",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/shop/products/${id}`
    );
    return result?.data;
  }
);

export default shoppingProductSlice.reducer;
