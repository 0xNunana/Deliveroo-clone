import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slices/basketSlice'
export const store = configureStore({
    reducer: {
        basket: basketReducer
    },
})