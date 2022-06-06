import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { User } from "../blockchain/models/User";

const initialState: any = []

const workerSlice = createSlice({
    name: 'worker',
    initialState: initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            
        }
    }
})

export const { setEmail } = workerSlice.actions

export default workerSlice.reducer