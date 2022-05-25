import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const {addMessage} = messagesSlice.actions
export default messagesSlice.reducer