import { EmojiKeyboardSVG } from "@/components/svg-components/EmojiKeyboardSvg";
import { MathKeyboardSVG } from "@/components/svg-components/MathKeyboardSvg";
import { Faces_param, Maths_param } from "@/constants/language";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-cyan-800 pt-20">This is a work in progress</h1>
      <h2 className="text-1xl font-bold text-cyan-800">
        And... it will probably always be a work in progress. 😊
      </h2>
      <p className="mt-3 text-lg w-1/2">
        I sometimes struggle to find the special characters I need on my keyboard.
        That's what inspired me. The idea was to create an online keyboard that contains
        only these characters I'm looking for. I decided to build a simple web app,
        while playing around with Next.js. And as I developed it, it grew and grew...
        So now it contains several different keyboards with special characters for various languages
        and purposes.
      </p>
      <p className="mt-3 text-lg w-1/2">
        Check out the keyboards:
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
        <a href={`/keyboard/${Maths_param}`} className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <MathKeyboardSVG />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Math Keyboard</h2>
        </a>
        <a href="/keyboard/greek" className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <Image src="/greek_keyboard.png" alt="Greek Keyboard" width={300} height={150} className="mx-auto" />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Greek Keyboard</h2>
        </a>
        <a href={`/keyboard/${Faces_param}`} className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          {/* <Image src="/emoji_keyboard.png" alt="Emoji Keyboard" width={300} height={150} className="mx-auto" /> */}
          <EmojiKeyboardSVG />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Emoji Keyboard</h2>
        </a>
      </div>
      <p className="mt-3 text-lg w-1/2">
        This project is open source and available on <a href="https://github.com/MitaKita/special-keyboards" className="text-cyan-800 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> .
      </p>
    </div>
  );
}
