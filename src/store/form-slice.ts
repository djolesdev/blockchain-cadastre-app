import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { step: 1 , transactionCount: 0 };

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    nextStep(state, action: PayloadAction<number>) {
      state.step += action.payload;
    },
    addTransaction(state, action: PayloadAction<number>){
      state.transactionCount += action.payload
    }
  },
});

export const { nextStep, addTransaction } = formSlice.actions;
export default formSlice.reducer;
