import { shift } from "@/store/slices/typedTextSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ShiftToggleButton = () => {
  const dispatch = useDispatch();
  const showShift = useSelector((state: any) => state.showShift);

  const handleShift = () => {
    dispatch(shift(!showShift));
  };

  return (
    <button onClick={handleShift}>
      {showShift ? "Show Shift" : "Hide Shift"}
    </button>
  );
};
