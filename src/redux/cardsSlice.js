import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        items: data
    },
    reducers: {}
})

export default cardsSlice.reducer