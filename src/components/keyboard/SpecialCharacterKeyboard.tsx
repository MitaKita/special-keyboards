import { InputKeyButton } from "../keyboard-button/InputKeyButton";
import { TextArea } from "../text-area/TextArea";
import { getSpecialLanguageKeys } from "@/constants/language";

interface KeyboardProps {
  keys?: string[][];
}

export const SpecialCharacterKeyboard = ({ keys = getSpecialLanguageKeys() }: KeyboardProps) => {
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
    </div>
  );
};