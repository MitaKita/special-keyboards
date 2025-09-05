import React from "react";
import { specialMathCharacters } from "@/constants/specialMathCharacters";
import { generateKeyboardSVG } from "@/utils/svgKeyboardGenerator";
import { getFirstNCharacters } from "@/utils/characterHelper";
import { SvgComponent } from "./SvgComponent";

export const MathKeyboardSVG: React.FC = () => {
  const chars = getFirstNCharacters(specialMathCharacters, 21);
  const svgMarkup = generateKeyboardSVG(chars, { columns: 7, keySize: 40, padding: 12 });

  return (
    <SvgComponent svgMarkup={svgMarkup} />
  );
};