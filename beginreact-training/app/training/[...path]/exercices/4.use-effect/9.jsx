'use client';

import { useEffect, useState } from 'react';

const useEventListener = ({
  eventName,
  handler,
  element = window,
  enabled = true,
}) => {
  useEffect(() => {
    if (!enabled) return;

    const onClick = () => handler();

    console.log('Add EventListener');
    element.addEventListener(eventName, onClick);

    return () => {
      console.log('Remove EventListener');
      element.removeEventListener(eventName, onClick);
    };
  }, [element, enabled, eventName, handler]);
};

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  const [count, setCount] = useState(0);

  useEventListener({
    eventName: 'click',
    handler: () => {
      console.log('Click window');
      setCount((curr) => curr + 1);
    },
    enabled: isCountingClick,
  });

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-8">
      <div className="form-control">
        <label className="label cursor-pointer space-x-2">
          <span className="label-text">Is Counting Click</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isCountingClick}
            onChange={(e) => setIsCountingClick(e.target.checked)}
          />
        </label>
      </div>
      <h2 className="text-2xl font-bold">Click count: {count}</h2>
    </div>
  );
}
