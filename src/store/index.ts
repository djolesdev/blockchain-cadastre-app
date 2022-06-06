import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import realEstateReducer from "./real-estate-slice";
import formReducer from "./form-slice";
import workerReducer from './worker-slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    realEstate: realEstateReducer,
    form: formReducer,
    worker: workerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
