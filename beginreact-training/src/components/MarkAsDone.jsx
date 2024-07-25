'use client';

import { CheckCircle, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { useLocalStorageState } from '../utils/useLocalStorage';

export const MarkAsDone = (props) => {
  const [state, setState] = useLocalStorageState('lesson-progress', {});

  const isDone = state[props.value];

  const handleClickToggle = () => {
    const newState = { ...state, [props.value]: !isDone };
    setState(newState);
  };

  if (isDone) {
    return (
      <p
        className="text-sm text-neutral-content"
        onClick={() => handleClickToggle()}
      >
        Done 🎉
      </p>
    );
  }

  return (
    <button
      className={cn('btn btn-sm', {
        'btn-secondary': isDone,
        'btn-success': !isDone,
      })}
      onClick={() => handleClickToggle()}
    >
      {isDone ? <X size={16} /> : <CheckCircle size={16} />}
    </button>
  );
};
