'use client'
import { addCharacter } from '@/store/slices/typedTextSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

export const KeyboardButton = ({ keyId }: { keyId: string }) => {
  const dispatch = useDispatch()
  const char = keyId === 'SPACE' ? ' ' : keyId
  const widthClass = keyId === 'SPACE' ? ['w-48'] : ['w-12']
  const buttonClasses = [
    'h-12', 'border-solid', 'border-1', 'border-gray-400', 'w-12', 'h-12', 'bg-gray-200', 'rounded-md', 'text-lg',
    'font-semibold', 'shadow-md', 'hover:bg-gray-300', 'active:bg-gray-400', 'transition']
  const classes = [...buttonClasses, ...widthClass]

  const handleClick = () => {
    dispatch(addCharacter(char))
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
