import { createSlice } from "@reduxjs/toolkit";
import { saveAction } from "../actions/user.action";

const initialState = {
    firstname: "",
    lastname: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
};

const userSlice = createSlice({
    initialState,
    name: "userState",
    extraReducers(builder) {
        builder
            .addCase(saveAction.pending, (state) => {
                console.log("pending");
            })
            .addCase(saveAction.fulfilled, (state, action) => {
                console.log("fulfilled");
            })
            .addCase(saveAction.rejected, (state, action) => {
                console.log("rejected");
            })
    }
})

export default userSlice.reducer;