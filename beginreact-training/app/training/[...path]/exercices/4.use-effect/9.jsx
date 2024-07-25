'use client';

import { useEffect, useState } from 'react';

export default function App() {
  const [isCountingClick, setIsCountingClick] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => isCountingClick && setCount((curr) => curr + 1);
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isCountingClick]);

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
