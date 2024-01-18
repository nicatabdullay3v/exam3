import { configureStore } from '@reduxjs/toolkit'
import ProductsSLices from "./slices"
import basketSlice from './basketSlice'
export default configureStore({
  reducer: {
    products: ProductsSLices,
    basket: basketSlice
  }
})