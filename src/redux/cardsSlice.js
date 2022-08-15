import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        items: data,
        // sort(() => Math.random() - 0.5),
    },
    reducers: {
        activeToggle: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id)
            item.status = !item.status;
        }

    }
})


export const { activeToggle } = cardsSlice.actions
export default cardsSlice.reducer