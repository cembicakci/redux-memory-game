import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        items: data
        //sort(() => Math.random() - 0.5)
    },
    reducers: {
        
    }
})

export default cardsSlice.reducer