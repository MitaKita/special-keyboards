import { ResetButton } from "@/components/keyboard-button/ResetButton";
import { OnScreenKeyboard } from "@/components/keyboard/OnScreenKeyboard";
import { SpecialKeyboard } from "@/components/keyboard/SpecialKeybard";
import { TextArea } from "@/components/text-area/TextArea";

const DynamicKeyboard = () => {
  return (
    <div className="p-4 height-full flex flex-col items-center">
      <OnScreenKeyboard />
      <div className="pt-4 w-1/2">
        <TextArea />
      </div>
      <ResetButton />
    </div>
  );
};

export default DynamicKeyboard;