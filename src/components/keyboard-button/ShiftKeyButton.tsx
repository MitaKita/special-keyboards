import { RootState } from "@/store";
import { shift } from "@/store/slices/typedTextSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ShiftKeyButton = () => {
  const dispatch = useDispatch();
  const isUpperCase = useSelector((state: RootState) => state.typedText.isUpperCase);

  const handleShift = () => {
    dispatch(shift(!isUpperCase));
  };

  return (
    <button onClick={handleShift}>
      {isUpperCase ? "Lowercase" : "Uppercase"}
    </button>
  );
};
