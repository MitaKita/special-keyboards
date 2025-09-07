'use client';
import { useParams } from "next/navigation";
import { getLanguageByType, getTitleByType } from "@/constants/language";
import { OnScreenKeyButton } from "../keyboard-button/OnScreenKeyButton";

interface OnScreenKeyboardProps {
  type?: string
}

export const OnScreenKeyboard = ({ type }: OnScreenKeyboardProps) => {
  const params = useParams();
  const keyboardType = type ? type : params.type as string;
  const keys = getLanguageByType(keyboardType);
  const getKey = (key: string, index: number) => `${key}${index}`;

  return (<>
    <h2 className="text-2xl font-bold text-cyan-800 text-center pb-4 pt-20">{getTitleByType(keyboardType)}</h2>
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-row gap-2 items-center w-full flex-wrap justify-center">
        {keys.map((char, rowIdx) => (
          <OnScreenKeyButton key={getKey(char, rowIdx)} keyId={char} />
        ))}
      </div>
    </div>
  </>
  );
};
