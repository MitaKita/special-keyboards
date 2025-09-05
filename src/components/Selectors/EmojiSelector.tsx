'use client';
import { emojiCategories } from "@/constants/language";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Selector } from "./Selector";

export const EmojiSelector = () => {
  return (
    <Selector name="Emoji Category" categories={emojiCategories} />
  );
};
