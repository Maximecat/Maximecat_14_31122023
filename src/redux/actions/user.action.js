import { createAsyncThunk } from "@reduxjs/toolkit";

const saveAction = createAsyncThunk("user/save", async (user, thunkApi) => {
    return user;
});
export { saveAction };