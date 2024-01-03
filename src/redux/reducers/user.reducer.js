import { createSlice } from "@reduxjs/toolkit";
import { saveAction } from "../actions/user.action";

const initialState = {
    users: [],
    done: false
};



const userSlice = createSlice({
    initialState,
    name: "userState",
    reducers: {
        'modal/handle': (state, action) => {
            state.done = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(saveAction.fulfilled, (state, action) => {
                console.log("fulfilled");
                state.users = [...state.users, action.payload]
                state.done = true
            })
    }
})

export default userSlice.reducer;