import { configureStore } from '@reduxjs/toolkit'
import ProductsSLices from "./slices"
export default configureStore({
  reducer: {products:ProductsSLices}
})