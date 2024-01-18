import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
export const getdata = createAsyncThunk('data', async () => {
    const response = await axios.get("http://localhost:3001/products")
    return response.data
  })
export const productsSlices = createSlice({
  name: 'products',
  initialState: {
    products: [],
    back:[]
  },
  reducers: {
    handeleSort:(state,action)=>{
      state.products = state.back
      state.products =state.products.filter((x)=> x.category == action.payload)

    }
  },
  extraReducers: builder => {
    builder.addCase(getdata.fulfilled, (state, action) => {
    state.products = action.payload
    state.back = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const {handeleSort  } = productsSlices.actions

export default productsSlices.reducer