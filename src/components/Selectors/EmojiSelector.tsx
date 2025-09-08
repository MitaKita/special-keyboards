'use client';
import { emojiCategories } from "@/constants/language";
import { Selector } from "./Selector";

export const EmojiSelector = () => {
  return (
    <Selector name="Emoji Category" categories={emojiCategories} />
  );
};
