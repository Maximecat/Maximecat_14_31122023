import { createSlice } from "@reduxjs/toolkit";
import { saveAction } from "../actions/user.action";

const initialState = {
    users: [],
    done: false,
};

const userSlice = createSlice({
    initialState,
    name: "userState",
    reducers: {
        modalHandle(state, action) {
            state.done = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(saveAction.fulfilled, (state, action) => {
            console.log("fulfilled");
            state.users = [...state.users, action.payload];
            state.done = true;
        });
    },
});

export const { modalHandle } = userSlice.actions;
export default userSlice.reducer;