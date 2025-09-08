import { EmojiKeyboardSVG } from "@/components/svg-components/EmojiKeyboardSvg";
import { GreekKeyboardSVG } from "@/components/svg-components/GreekKeyboadSvg";
import { MathKeyboardSVG } from "@/components/svg-components/MathKeyboardSvg";
import { Faces_param, Greek_param, Maths_param } from "@/constants/language";

export default function Home() {
  const pClasses = 'mt-3 text-lg w-full md:w-2/3';
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-cyan-800 pt-20">This is a work in progress</h1>
      <p className={pClasses}>
        I sometimes struggle to find the special characters I need on my keyboard.
        That&apos;s what inspired me. The idea was to create an online keyboard that contains
        only these characters I&apos;m looking for. I decided to build a simple web app,
        while playing around with Next.js. And as I developed, it grew and grew...
        So now it contains several different keyboards with special characters for various languages
        and purposes.
      </p>
      <p className={pClasses}>
        Check out some of the keyboards:
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
        <a href={`/keyboard/${Maths_param}`} className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <MathKeyboardSVG />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Math Keyboard</h2>
        </a>
        <a href={`/keyboard/${Greek_param}`} className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <GreekKeyboardSVG />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Greek Keyboard</h2>
        </a>
        <a href={`/keyboard/${Faces_param}`} className="border border-cyan-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
          <EmojiKeyboardSVG />
          <h2 className="text-2xl font-semibold text-cyan-800 mt-4 text-center">Emoji Keyboard</h2>
        </a>
      </div>
      <p className={pClasses}>
        This project is open source and available on <a href="https://github.com/MitaKita/special-keyboards" className="text-cyan-800 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> .
      </p>
    </div>
  );
}
