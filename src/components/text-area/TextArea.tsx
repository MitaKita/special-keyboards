'use client'

import type { RootState } from "@/store";
import { addCharacter, removeCharacter } from "@/store/slices/typedTextSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const TextArea = () => {
  const typedText = useSelector((state: RootState) => state.typedText.text);
  const dispatch = useDispatch()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Prevent default behavior to avoid double input
    console.log(event.key);
    event.preventDefault();
    if (event.key.length === 1) {
      dispatch(addCharacter(event.key));
    } else if (event.key.toLocaleLowerCase() === 'backspace') {
      dispatch(removeCharacter());
    }
  }

  return (
    <textarea
      onChange={() => {}}
      onKeyDown={handleKeyDown}
      value={typedText}
      className="border-2 border-gray-300 p-2 rounded-md w-full h-32"
      placeholder="Type your text here..."
    />
  );
};
