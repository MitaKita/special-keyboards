import {
  czechSlovakLowerSpecialCharacters,
  czechSlovakSpecialCharacters,
  czechSlovakUpperSpecialCharacters,
  frenchLowerSpecialCharacters,
  frenchSpecialCharacters,
  frenchUpperSpecialCharacters,
  germanLowerSpecialCharacters,
  germanSpecialCharacters,
  germanUpperSpecialCharacters,
  hungarianLowerSpecialCharacters,
  hungarianSpecialCharacters,
  hungarianUpperSpecialCharacters,
  italianLowerSpecialCharacters,
  italianSpecialCharacters,
  italianUpperSpecialCharacters,
  nordicLowerSpecialCharacters,
  nordicSpecialCharacters,
  nordicUpperSpecialCharacters,
  polishLowerSpecialCharacters,
  polishSpecialCharacters,
  polishUpperSpecialCharacters,
  portugueseLowerSpecialCharacters,
  portugueseSpecialCharacters,
  portugueseUpperSpecialCharacters,
  spanishLowerSpecialCharacters,
  spanishSpecialCharacters,
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

export const getTitleByType = (type: string) => {
  if (type === Greek_param) {
    return "Greek Letters";
  }
  return `${type} Special Characters`;
};

export const getLanguageByType = (type: string): string[] => {
  switch (type) {
    case Nordic_param:
      return nordicSpecialCharacters;
    case German_param:
      return germanSpecialCharacters;
    case French_param:
      return frenchSpecialCharacters;
    case Italian_param:
      return italianSpecialCharacters;
    case Spanish_param:
      return spanishSpecialCharacters;
    case Portuguese_param:
      return portugueseSpecialCharacters;
    case Polish_param:
      return polishSpecialCharacters;
    case Czech_param:
      return czechSlovakSpecialCharacters;
    case Hungarian_param:
      return hungarianSpecialCharacters;
    case Turkish_param:
      return turkishLowerSpecialCharacters;
    case Maths_param:
      return specialMathCharacters;
    case Hearts_param:
      return heartEmojis;
    case Faces_param:
      return faceEmojis;
    case Nature_param:
      return natureEmojis;
    case Animals_param:
      return animalEmojis;
    case Food_param:
      return foodEmojis;
    case Activities_param:
      return activityEmojis;
    case Greek_param:
      return greekCharacters;
    default:
      return [];
  }
};

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
