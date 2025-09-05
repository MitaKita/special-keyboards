// src/utils/svgMathKeyboardGenerator.ts
// Utility to generate SVG markup for a keyboard from an array of characters

export function generateKeyboardSVG(
  characters: string[],
  options?: { columns?: number; keySize?: number; padding?: number }
) {
  const columns = options?.columns ?? 7;
  const keySize = options?.keySize ?? 40;
  const padding = options?.padding ?? 12;
  const rows = Math.ceil(characters.length / columns);
  const width = columns * keySize + padding * 2;
  const height = rows * keySize + padding * 2;

  let keys = "";
  characters.forEach((char, i) => {
    const col = i % columns;
    const row = Math.floor(i / columns);
    const x = padding + col * keySize;
    const y = padding + row * keySize;
    keys += `\n  <rect x="${x}" y="${y}" width="${keySize - 6}" height="${
      keySize - 6
    }" rx="${columns}" fill="#fff" stroke="#bbb"/>`;
    keys += `\n  <text x="${x + (keySize - 6) / 2}" y="${
      y + (keySize - 6) / 2 + columns
    }" font-size="20" text-anchor="middle" fill="#333">${char}</text>`;
  });

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">\n  <rect x="0" y="0" width="${width}" height="${height}" rx="15" fill="#f3f4f6" stroke="#bbb" stroke-width="2"/>${keys}\n</svg>`;
}
