import { SpecialKeyboard } from "@/components/keyboard/SpecialKeybard";
import { TextArea } from "@/components/text-area/TextArea";

const DynamicKeyboard = () => {
  return (
    <div className="p-4 height-full flex flex-col items-center">
      <SpecialKeyboard />
      <div className="pt-4 w-1/2">
        <TextArea />
      </div>
    </div>
  );
};

export default DynamicKeyboard;