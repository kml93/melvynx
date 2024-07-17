'use client';

import clsx from 'clsx';

const buttonList = [
  { children: 'Eat me', id: 'eat-me', variant: 'primary' },
  { children: 'Love me', id: 'love-me', variant: 'error' },
  { children: 'Drink me', id: 'drink-me', variant: 'success' },
  { children: 'Leave me', id: 'leave-me', variant: 'warning' },
];

const Button = ({ children, variant, id }) => {
  const buttonClass = clsx('btn ring-offset-2 ring-offset-base-100', {
    'btn-primary': variant === 'primary',
    'btn-error': variant === 'error',
    'btn-success': variant === 'success',
    'btn-warning': variant === 'warning',
  });

  return (
    <button className={buttonClass} id={id}>
      {children}
    </button>
  );
};

export default function App() {
  const handleClick = (event) => {
    event.target === event.currentTarget
      ? console.log(`You clicked on container.`)
      : console.log(`You clicked on ${event.target.id}.`);
  };

  return (
    <div onClick={(e) => handleClick(e)} className="flex flex-wrap gap-4 p-4">
      {buttonList.map(({ id, variant, children }) => (
        <Button key={id} variant={variant} id={id}>
          {children}
        </Button>
      ))}
    </div>
  );
}
