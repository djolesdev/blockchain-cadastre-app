import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { User } from "../blockchain/models/User";

const initialState: User = {
    id: 0,
    name: '',
    surname: '',
    JMBG: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User> ) {
            state.id = action.payload.id
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.JMBG = action.payload.JMBG
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer