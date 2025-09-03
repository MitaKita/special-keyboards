'use client'

import type { RootState } from "@/store";
import { useSelector } from "react-redux";

export const TextArea = () => {
  const typedText = useSelector((state: RootState) => state.typedText.text);

  return (
    <textarea
      value={typedText}
      className="border-2 border-gray-300 p-2 rounded-md w-full h-32"
      placeholder="Type your text here..."
    />
  );
};
