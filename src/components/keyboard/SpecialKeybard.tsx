'use client';
import { useParams } from "next/navigation";
import { InputKeyButton } from "../keyboard-button/InputKeyButton";
import { getLanguageKeys } from "@/constants/language";

export const SpecialKeyboard = () => {
  const params = useParams();
  const keys = getLanguageKeys(params.language as string);
  const getKey = (key: string, index: number) => `${key}${index}`;

  return (<>
    <h2 className="text-2xl font-bold text-cyan-800 text-center pb-4 pt-20">{params.language} Characters</h2>
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-2 items-center">
        {keys.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-2">
            {row.map((key, index) => (
              <InputKeyButton key={getKey(key, index)} keyId={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
