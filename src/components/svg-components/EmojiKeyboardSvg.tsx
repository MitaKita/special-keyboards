import React from "react";
import { generateKeyboardSVG } from "@/utils/svgKeyboardGenerator";
import { getFirstNCharacters } from "@/utils/characterHelper";
import { faceEmojis } from "@/constants/emojiCharacters";
import { SvgComponent } from "./SvgComponent";

export const EmojiKeyboardSVG: React.FC = () => {
  const chars = getFirstNCharacters(faceEmojis, 18);
  const svgMarkup = generateKeyboardSVG(chars, { columns: 6, keySize: 40, padding: 12 });

  return (
    <SvgComponent svgMarkup={svgMarkup} />
  );
};