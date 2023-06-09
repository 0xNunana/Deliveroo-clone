import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {

            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("Item is not in the basket")
            }

            state.items = newBasket;
        }

    }
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items
export const selectBasketItemsId = (state, id) => state.basket.items.filter((item) => item.id == id) //shows selected items based on id
export const basketTotal = (state) => state.basket.items.reduce((total, item) => total = total + item.price, 0)
export default basketSlice.reducer