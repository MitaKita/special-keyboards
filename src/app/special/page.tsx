import { SpecialCharacterKeyboard } from "@/components/keyboard/SpecialCharacterKeyboard";
import { TextArea } from "@/components/text-area/TextArea";

const DynamicKeyboard = () => {
  return <div>
    <h2 className="text-2xl font-bold text-cyan-800 text-center pb-4 pt-20">All Special Characters</h2>
    <SpecialCharacterKeyboard />
    <div className="flex justify-center pt-4">
      <div className="w-2/3">
        <TextArea />
      </div>
    </div>
  </div>;
};

export default DynamicKeyboard;