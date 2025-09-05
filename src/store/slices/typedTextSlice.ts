import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GraphemeSplitter from "grapheme-splitter";
import { store } from "..";

const splitter = new GraphemeSplitter();

interface TypedTextState {
  text: string;
  isUpperCase?: boolean;
  showShift?: boolean;
}

const initialState: TypedTextState = {
  text: "",
  isUpperCase: false,
  showShift: false,
};

const typedTextSlice = createSlice({
  name: "typedText",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<string>) => {
      if (splitter.countGraphemes(action.payload) === 1) {
        // Allow adding the character (including emojis)
        const currChar = action.payload;
        if (state.isUpperCase) {
          state.text += currChar.toUpperCase();
          return;
        }
        state.text += action.payload;
      }
    },
    addEmoji: (state, action: PayloadAction<string>) => {
      state.text += action.payload;
    },
    removeCharacter: (state) => {
      state.text = state.text.slice(0, -1);
    },
    resetText: (state) => {
      state.text = "";
    },
    shift: (state, action: PayloadAction<boolean>) => {
      // If true, set to uppercase; if false, set to lowercase
      state.text = action.payload
        ? state.text.toUpperCase()
        : state.text.toLowerCase();
      state.isUpperCase = action.payload;
    },
  },
});

export const { addCharacter, removeCharacter, resetText, shift } =
  typedTextSlice.actions;
export const typedTextReducer = typedTextSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;
