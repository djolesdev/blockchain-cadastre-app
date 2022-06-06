import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RealEstate } from "../blockchain/models/RealEstate";

const initialState: RealEstate = {
    id: 0,
    municipalityNum: 0,
    squareFootage: 0,
    addres: ''
}

const realEstateSlice = createSlice({
    name: 'realEstate',
    initialState: initialState,
    reducers: {
        setRealEstate(state, action: PayloadAction<RealEstate>) {
            state.id = action.payload.id
            state.municipalityNum = action.payload.municipalityNum
            state.squareFootage = action.payload.squareFootage
            state.addres = action.payload.addres
        }
    }
})

export const { setRealEstate } = realEstateSlice.actions
export default realEstateSlice.reducer