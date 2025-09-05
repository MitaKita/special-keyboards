import { languages } from "@/constants/language";
import { Selector } from "./Selector";

export const LanguageSelector = () => {
  return (
    <Selector name="Language" categories={languages} />
  );
};
