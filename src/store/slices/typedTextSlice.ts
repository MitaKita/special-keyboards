import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypedTextState {
  text: string;
}

const initialState: TypedTextState = {
  text: "",
};

const typedTextSlice = createSlice({
  name: "typedText",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<string>) => {
      // Only add if payload is a single character
      if (action.payload.length === 1) {
        state.text += action.payload;
        console.log(state.text);
      }
    },
    resetText: (state) => {
      state.text = "";
    },
  },
});

export const { addCharacter, resetText } = typedTextSlice.actions;
export const typedTextReducer = typedTextSlice.reducer;
