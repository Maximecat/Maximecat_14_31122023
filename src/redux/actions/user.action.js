import { createAction, createAsyncThunk } from "@reduxjs/toolkit"


const saveAction = createAsyncThunk(
    'user/save',
    async (user, thunkApi) => {
        return user
    }
)

const handleModal = createAction(
    'modal/handle',
    (open) => {
        return {
            payload: open
        }
    }
)

export { saveAction, handleModal }