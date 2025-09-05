import { get } from "http";
import {
  czechSlovakLowerSpecialCharacters,
  czechSlovakUpperSpecialCharacters,
  frenchLowerSpecialCharacters,
  frenchUpperSpecialCharacters,
  germanLowerSpecialCharacters,
  germanUpperSpecialCharacters,
  hungarianLowerSpecialCharacters,
  hungarianUpperSpecialCharacters,
  italianLowerSpecialCharacters,
  italianUpperSpecialCharacters,
  nordicLowerSpecialCharacters,
  nordicUpperSpecialCharacters,
  polishLowerSpecialCharacters,
  polishUpperSpecialCharacters,
  portugueseLowerSpecialCharacters,
  portugueseUpperSpecialCharacters,
  spanishLowerSpecialCharacters,
  spanishUpperSpecialCharacters,
  specialLatinCharacters,
  turkishLowerSpecialCharacters,
  turkishUpperSpecialCharacters,
} from "./specialLatinCharacters";
import { specialMathCharacters } from "./specialMathCharacters";
import {
  activityEmojis,
  animalEmojis,
  faceEmojis,
  foodEmojis,
  heartEmojis,
  natureEmojis,
} from "./emojiCharacters";
import { greekCharacters } from "./greekCharacters";

export const Nordic_param = "Nordic";
export const German_param = "German";
export const French_param = "French";
export const Italian_param = "Italian";
export const Spanish_param = "Spanish";
export const Portuguese_param = "Portuguese";
export const Polish_param = "Polish";
export const Czech_param = "Czech";
export const Hungarian_param = "Hungarian";
export const Turkish_param = "Turkish";

export const Maths_param = "Maths";

export const Hearts_param = "Hearts";
export const Faces_param = "Faces";
export const Nature_param = "Nature";
export const Animals_param = "Animals";
export const Food_param = "Food";
export const Activities_param = "Activities";

export const Greek_param = "Greek";

export interface NameParamMapper {
  name: string;
  param: string;
}

export const languages: NameParamMapper[] = [
  { name: "Nordic", param: Nordic_param },
  { name: "German", param: German_param },
  { name: "French", param: French_param },
  { name: "Italian", param: Italian_param },
  { name: "Spanish", param: Spanish_param },
  { name: "Portuguese", param: Portuguese_param },
  { name: "Polish", param: Polish_param },
  { name: "Czech", param: Czech_param },
  { name: "Hungarian", param: Hungarian_param },
  { name: "Turkish", param: Turkish_param },
  { name: "Greek", param: Greek_param },
];

export const emojiCategories: NameParamMapper[] = [
  { name: "Hearts", param: Hearts_param },
  { name: "Faces", param: Faces_param },
  { name: "Nature", param: Nature_param },
  { name: "Animals", param: Animals_param },
  { name: "Food", param: Food_param },
  { name: "Activities", param: Activities_param },
];

export const getLanguageKeys = (param: string) => {
  switch (param) {
    case Nordic_param:
      return [nordicLowerSpecialCharacters, nordicUpperSpecialCharacters];
    case German_param:
      return [germanLowerSpecialCharacters, germanUpperSpecialCharacters];
    case French_param:
      return [frenchLowerSpecialCharacters, frenchUpperSpecialCharacters];
    case Italian_param:
      return [italianLowerSpecialCharacters, italianUpperSpecialCharacters];
    case Spanish_param:
      return [spanishLowerSpecialCharacters, spanishUpperSpecialCharacters];
    case Portuguese_param:
      return [
        portugueseLowerSpecialCharacters,
        portugueseUpperSpecialCharacters,
      ];
    case Polish_param:
      return [polishLowerSpecialCharacters, polishUpperSpecialCharacters];
    case Czech_param:
      return [
        czechSlovakLowerSpecialCharacters,
        czechSlovakUpperSpecialCharacters,
      ];
    case Hungarian_param:
      return [hungarianLowerSpecialCharacters, hungarianUpperSpecialCharacters];
    case Turkish_param:
      return [turkishLowerSpecialCharacters, turkishUpperSpecialCharacters];
    case Maths_param:
      return getMathsKeys();
    case Hearts_param:
      return getHeartEmojis();
    case Faces_param:
      return getFaceEmojis();
    case Nature_param:
      return getNatureEmojis();
    case Animals_param:
      return getAnimalEmojis();
    case Food_param:
      return getFoodEmojis();
    case Activities_param:
      return getActivityEmojis();
    case Greek_param:
      // Greek characters are handled separately
      return getGreekKeys();
    default:
      return [[]];
  }
};

export const splitKeysIntoRows = (charIds: string[], rowSize: number) => {
  const charsSet = new Set(charIds);
  let chars = Array.from(charsSet);
  const keys = [];
  while (chars.length) {
    if (chars.length >= rowSize) {
      keys.push(chars.slice(0, rowSize));
      chars = chars.slice(rowSize);
    } else {
      keys.push(chars);
      chars = [];
    }
  }
  return keys;
};

export const getSpecialLanguageKeys = () => {
  return splitKeysIntoRows(specialLatinCharacters, 20);
};

export const getMathsKeys = () => {
  return splitKeysIntoRows(specialMathCharacters, 20);
};

export const getGreekKeys = () => {
  return splitKeysIntoRows(greekCharacters, 20);
};

export const getEmojiKeys = (categories: string[]) => {
  return splitKeysIntoRows(categories, 10);
};

export const getHeartEmojis = () => {
  return getEmojiKeys(heartEmojis);
};

export const getFaceEmojis = () => {
  return getEmojiKeys(faceEmojis);
};

export const getNatureEmojis = () => {
  return getEmojiKeys(natureEmojis);
};

export const getAnimalEmojis = () => {
  return getEmojiKeys(animalEmojis);
};

export const getFoodEmojis = () => {
  return getEmojiKeys(foodEmojis);
};

export const getActivityEmojis = () => {
  return getEmojiKeys(activityEmojis);
};
