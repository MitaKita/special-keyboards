import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypedTextState {
  text: string;
  isUpperCase?: boolean;
}

const initialState: TypedTextState = {
  text: "",
  isUpperCase: false,
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
    removeCharacter: (state) => {
      state.text = state.text.slice(0, -1);
    },
    resetText: (state) => {
      state.text = "";
    },
  },
});

export const { addCharacter, removeCharacter, resetText } =
  typedTextSlice.actions;
export const typedTextReducer = typedTextSlice.reducer;
