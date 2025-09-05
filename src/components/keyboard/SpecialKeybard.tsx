'use client';
import { useParams } from "next/navigation";
import { InputKeyButton } from "../keyboard-button/InputKeyButton";
import { getLanguageKeys, Greek_param } from "@/constants/language";
import { ShiftKeyButton } from "../keyboard-button/ShiftKeyButton";

const hasShift = (type: string) => {
  return type === Greek_param;
}

export const SpecialKeyboard = () => {
  const params = useParams();
  const keys = getLanguageKeys(params.type as string);
  const getKey = (key: string, index: number) => `${key}${index}`;
  console.log(keys[0]);

  return (<>
    <h2 className="text-2xl font-bold text-cyan-800 text-center pb-4 pt-20">{params.type} Characters</h2>
    <div className="flex flex-col gap-2 items-center">
      {hasShift(params.type as string) && <ShiftKeyButton />}
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
