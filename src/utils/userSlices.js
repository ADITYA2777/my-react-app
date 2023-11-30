
import { createSlice } from "@reduxjs/toolkit";

const userSelices = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action;
        },
        userRemover: (state, action) => {
            return null;
        },
    },
})

export const { addUser, userRemover } = userSelices.actions;

export default userSelices.reducer;