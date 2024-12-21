import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  addressList: [],
};

export const addNewAddress = createAsyncThunk(
  "address/addNewAddress",
  async (formData) => {
    const response = await axios.post(
      `http://localhost:5001/api/shop/address/add`,
      formData
    );
    return response?.data;
  }
);

export const fetchAllAddress = createAsyncThunk(
  "address/fetchAllAddress",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5001/api/shop/address/get/${userId}`
    );
    return response?.data;
  }
);
export const editAddress = createAsyncThunk(
  "address/editAddress",
  async ({ userId, addressId, formData }) => {
    const response = await axios.put(
      `http://localhost:5001/api/shop/address/update/${userId}/${addressId}`,
      formData
    );
    return response?.data;
  }
);
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
      `http://localhost:5001/api/shop/address/delete/${userId}/${addressId}`
    );
    return response?.data;
  }
);

export const addressSLice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => (state.isLoading = true))
      .addCase(addNewAddress.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.addressList = actions?.payload.data;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      })
      .addCase(fetchAllAddress.pending, (state) => (state.isLoading = true))
      .addCase(fetchAllAddress.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.addressList = actions?.payload.data;
      })
      .addCase(fetchAllAddress.rejected, (state) => {
        state.isLoading = false;
        state.addressList = [];
      });
  },
});

export default addressSLice.reducer;
