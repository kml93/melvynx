import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-md text-sm font-medium',
  {
    variants: {
      size: {
        default: 'px-1.5 py-0.5',
        lg: 'px-2 py-1',
      },
      color: {
        red: 'bg-red-500/10 text-red-700',
        green: 'bg-green-500/10 text-green-700',
        purple: 'bg-purple-500/10 text-purple-700',
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'red',
    },
  }
);

const Badge = ({ size, color, children }) => {
  return <span className={badgeVariants({ size, color })}>{children}</span>;
};

export default function App() {
  return (
    <div className="grid grid-cols-4 items-center gap-2 bg-white p-8 text-black">
      <p className="code">Size / color</p>
      <p className="code">Green</p>
      <p className="code">Red</p>
      <p className="code">Purple</p>
      <p className="code">lg</p>
      <Badge size="lg" color="green">
        New
      </Badge>
      <Badge size="lg" color="red">
        New
      </Badge>
      <Badge size="lg" color="purple">
        New
      </Badge>
      <p className="code">default</p>
      <Badge size="default" color="green">
        New
      </Badge>
      <Badge size="default" color="red">
        New
      </Badge>
      <Badge size="default" color="purple">
        New
      </Badge>
    </div>
  );
}
