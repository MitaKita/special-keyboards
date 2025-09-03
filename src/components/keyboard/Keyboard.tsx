import { KeyboardButton } from "../keyboard-button/KeyboardButton";
import { TextArea } from "../text-area/TextArea";

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export const Keyboard = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      {keys.map((row, rowIdx) => (
        <div key={rowIdx} className="flex gap-2">
          {row.map((key) => (
            <KeyboardButton key={key} keyId={key} />
          ))}
        </div>
      ))}
      <div className="flex gap-2">
        <KeyboardButton keyId="SPACE" />
      </div>
      <div className="pt-4 w-1/2">
        <TextArea />
      </div>
    </div>
  );
};