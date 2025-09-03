import { configureStore } from "@reduxjs/toolkit";
import { typedTextReducer } from "./slices/typedTextSlice";

export const store = configureStore({
  reducer: {
    typedText: typedTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
