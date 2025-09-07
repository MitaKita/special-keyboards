'use client';
import { basicButtonClasses } from "@/constants/keys";
import { resetText } from "@/store/slices/typedTextSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

export const ResetButton = () => {
  const dispatch = useDispatch();
  const classes = [...basicButtonClasses, 'w-60', 'h-12'];

  const handleClick = () => {
    dispatch(resetText());
  };
  return (
    <button className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 z-20" aria-label="Reset text" onClick={handleClick}>
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};
