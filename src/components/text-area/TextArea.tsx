'use client'

import type { RootState } from "@/store"
import { addCharacter, addText, removeCharacter } from "@/store/slices/typedTextSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { ResetButton } from "../keyboard-button/ResetButton"

export const TextArea = () => {
  const typedText = useSelector((state: RootState) => state.typedText.text);
  const dispatch = useDispatch()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Allow browser/OS shortcuts (Ctrl+S, Ctrl+C, Ctrl+Z, etc.)
    if (event.ctrlKey || event.metaKey || event.altKey) {
      console.log('Shortcut detected, allowing default behavior.')
      return
    }
    // Prevent default behavior to avoid double input
    event.preventDefault();
    if (event.key.length === 1) {
      dispatch(addCharacter(event.key))
    } else if (event.key.toLocaleLowerCase() === 'backspace') {
      dispatch(removeCharacter())
    }
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault(); // Stop the browser's native paste
    const pastedText = event.clipboardData.getData('text')
    
    // Dispatch a new action to your store to append the entire string
    // (You'll need to create this action in your typedTextSlice)
    dispatch(addText(pastedText))
  };

  return <div className="relative w-full">
    <textarea
      onChange={() => {}}
      onKeyDown={handleKeyDown}
      onPaste={(e) => handlePaste(e)}
      value={typedText}
      className="border-2 border-gray-300 p-2 rounded-md w-full h-32 pr-5"
      placeholder="Type your text here..."
    />
    { /** Reset text area button */}
    {typedText && <ResetButton />}
  </div>
};
