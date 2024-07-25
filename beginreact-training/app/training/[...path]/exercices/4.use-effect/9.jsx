'use client';

import { useEffect, useRef, useState } from 'react';

const useEventListener = ({
  eventName,
  handler,
  element = window,
  enabled = true,
}) => {
  const refHandler = useRef(handler);

  useEffect(() => {
    refHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!enabled) return;

    const onClick = (event) => refHandler.current(event);

    element.addEventListener(eventName, onClick);

    return () => element.removeEventListener(eventName, onClick);
  }, [element, enabled, eventName, refHandler]);
};

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  const [count, setCount] = useState(0);

  useEventListener({
    eventName: 'click',
    handler: () => setCount((curr) => curr + 1),
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
