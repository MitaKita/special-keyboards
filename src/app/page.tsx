import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-cyan-800 pt-20">This is a work in progress</h1>
      <p className="mt-3 text-lg w-1/2">
        I sometimes struggle to find the special characters I need on my keyboard.
        That's why I decided to build a simple web app that lets me easily access special characters
        and display them on the screen, so I can easily copy and paste them whenever I need.
      </p>
    </div>
  );
}
