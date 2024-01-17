import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
export const getdata = createAsyncThunk('data', async () => {
    const response = await axios.get("http://localhost:3001/products")
    return response.data
  })
export const productsSlices = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getdata.fulfilled, (state, action) => {
    state.products = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const {  } = productsSlices.actions

export default productsSlices.reducer