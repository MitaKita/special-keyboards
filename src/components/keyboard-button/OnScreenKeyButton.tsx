'use client'
import { BACKSPACE_KEY, basicButtonClasses } from '@/constants/keys';
import { addCharacter, removeCharacter } from '@/store/slices/typedTextSlice';
import { useDispatch } from 'react-redux';

export const OnScreenKeyButton = ({ keyId }: { keyId: string }) => {
  const dispatch = useDispatch();
  const classes = [...basicButtonClasses, 'w-20', 'h-12'];
  const handleClick = () => {
    if (keyId === BACKSPACE_KEY) {
      dispatch(removeCharacter());
    } else {
      dispatch(addCharacter(keyId));
    }
  };

  return (
    <button
      className={classes.join(' ')}
      type="button"
      onClick={handleClick}
    >
      {keyId}
    </button>
  );
};
