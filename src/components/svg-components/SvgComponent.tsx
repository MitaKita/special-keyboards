import React from "react";

interface SvgComponentProps {
  svgMarkup: string
}
export const SvgComponent: React.FC<SvgComponentProps> = ({ svgMarkup }: SvgComponentProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
      style={{ width: "100%", maxHeight: 220, overflowX: "auto", overflowY: "auto", display: "flex", justifyContent: "center" }}
      aria-label="Math Keyboard SVG"
    />
  );
};