import React from "react";
import { generateKeyboardSVG } from "@/utils/svgKeyboardGenerator";
import { getFirstNCharacters } from "@/utils/characterHelper";
import { SvgComponent } from "./SvgComponent";
import { greekCharacters } from "@/constants/greekCharacters";

export const GreekKeyboardSVG: React.FC = () => {
  const chars = getFirstNCharacters(greekCharacters, 18);
  const svgMarkup = generateKeyboardSVG(chars, { columns: 6, keySize: 40, padding: 12 });

  return (
    <SvgComponent svgMarkup={svgMarkup} />
  );
};