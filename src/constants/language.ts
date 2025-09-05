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

export const languages = [
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
    default:
      return [[]];
  }
};

export const getSpecialLanguageKeys = () => {
  const charsSet = new Set(specialLatinCharacters);
  let chars = Array.from(charsSet);
  const keys = [];
  while (chars.length) {
    if (chars.length >= 20) {
      keys.push(chars.slice(0, 20));
      chars = chars.slice(20);
    } else {
      keys.push(chars);
      chars = [];
    }
  }
  return keys;
};
