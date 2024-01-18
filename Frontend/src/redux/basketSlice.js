import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: JSON.parse(localStorage.getItem("basket")) || []
    },
    reducers: {
        addToBasket: (state, action) => {
            state.basket = [...action.payload.basket, action.payload.obj]
            localStorage.setItem("basket", JSON.stringify([...action.payload.basket, action.payload.obj]))
        },
        increasecount: (state, action) => {
            state.basket[action.payload].count++
            localStorage.setItem("basket", JSON.stringify(state.basket))
        },
        increaseCountInBasket: (state, action) => {
            state.basket[action.payload].count++
            localStorage.setItem("basket", JSON.stringify(state.basket))

        },
        decrease: (state, action) => {
            if (state.basket[action.payload.index].count <= 1) {
                state.basket = state.basket.filter((x) => x._id != action.payload._id)
            }
            else {
                state.basket[action.payload.index].count--

            }
            localStorage.setItem("basket", JSON.stringify(state.basket))

        }
    },


})

// Action creators are generated for each case reducer function
export const { addToBasket, increasecount, increaseCountInBasket, decrease } = basketSlice.actions

export default basketSlice.reducer