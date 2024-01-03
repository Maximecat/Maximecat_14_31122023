import { createAsyncThunk } from "@reduxjs/toolkit"


const saveAction = createAsyncThunk(
    'user/save',
)

export { saveAction }