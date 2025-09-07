'use client'
import { BACKSPACE_KEY, basicButtonClasses, SPACE_KEY } from '@/constants/keys';
import { addCharacter, removeCharacter } from '@/store/slices/typedTextSlice';
import { useDispatch } from 'react-redux';

const isSpaceKey = (keyId: string) => keyId.toLocaleLowerCase() === SPACE_KEY.toLocaleLowerCase()

const getWidth = (keyId: string) => {
  if (keyId.length > 1 && !isSpaceKey(keyId)) {
    return ['w-20'];
  }
  return isSpaceKey(keyId) ? ['w-48'] : ['w-12'];
}

export const InputKeyButton = ({ keyId }: { keyId: string }) => {
  const dispatch = useDispatch()
  const char = isSpaceKey(keyId) ? ' ' : keyId
  const widthClass = getWidth(keyId)
  const classes = [...basicButtonClasses, ...widthClass]

  const handleClick = () => {
    if (keyId === BACKSPACE_KEY) {
      dispatch(removeCharacter())
    } else {
      dispatch(addCharacter(char))
    }
  }

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
