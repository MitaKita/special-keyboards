import { ENGLISH_KEYBOARD_KEYS } from "@/constants/keys";
import { InputKeyButton } from "../keyboard-button/InputKeyButton";
import { TextArea } from "../text-area/TextArea";
import React from "react";

interface KeyboardProps {
  keys?: string[][];
}

export const Keyboard = ({ keys = ENGLISH_KEYBOARD_KEYS }: KeyboardProps) => {
  const getKey = (key: string, index: number) => `${key}${index}`
  return (
    <div className="flex flex-col gap-2 items-center">
      {keys.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-2">
          {row.map((key, index) => (
            <InputKeyButton key={getKey(key, index)} keyId={key} />
          ))}
        </div>
      ))}
      <div className="pt-4 w-1/2">
        <TextArea />
      </div>
    </div>
  );
};