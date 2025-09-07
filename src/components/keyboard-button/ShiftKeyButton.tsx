'use client';
import { RootState } from "@/store";
import { shift } from "@/store/slices/typedTextSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const ShiftKeyButton = () => {
  const dispatch = useDispatch();
  const isUpperCase = useSelector((state: RootState) => state.typedText.isUpperCase);

  useEffect(() => {
    // Reset to lowercase when component mounts
    dispatch(shift(false));
  }, [dispatch]);
  const handleShift = () => {
    dispatch(shift(!isUpperCase));
  };

  return (
    <button onClick={handleShift}>
      {isUpperCase ? "Uppercase" : "Lowercase"}
    </button>
  );
};
