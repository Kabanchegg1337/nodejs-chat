import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "",
        token: "",
        role: "",
    },
    reducers: {
        setUser: (state, action) => {
            return {name: action.payload.name, token: action.payload.token, role: action.payload.role}
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer