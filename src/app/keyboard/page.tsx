import { Keyboard } from "@/components/keyboard/Keyboard";

const KeyboardPage = () => {
  return (
    <div className="p-4 height-full">
      <h2 className="text-2xl font-bold text-cyan-800 text-center pb-4 pt-20">Keyboard Component</h2>
      <Keyboard />
    </div>
  );
}

export default KeyboardPage;