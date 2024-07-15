import clsx from 'clsx';

const COLORS = {
  red: 'badge-color-red',
  green: 'badge-color-green',
  purple: 'badge-color-purple',
};

const SIZES = {
  default: 'badge-size-default',
  lg: 'badge-size-large',
};

const Badge = ({ size, variant, children }) => {
  const sizeStyle = SIZES[size] || SIZES.default;
  const colorStyle = COLORS[variant] || COLORS.red;

  return (
    <span className={clsx('badge-base', sizeStyle, colorStyle)}>
      {children}
    </span>
  );
};

export default function App() {
  return (
    <div className="grid grid-cols-4 flex-col gap-2 bg-white p-8 text-black">
      <p className="code">Size / color</p>
      <p className="code">Green</p>
      <p className="code">Red</p>
      <p className="code">Purple</p>
      <p className="code">lg</p>
      <Badge size="lg" variant="green">
        New
      </Badge>
      <Badge size="lg" variant="red">
        New
      </Badge>
      <Badge size="lg" variant="purple">
        New
      </Badge>
      <p className="code">default</p>
      <Badge size="default" variant="green">
        New
      </Badge>
      <Badge size="default" variant="red">
        New
      </Badge>
      <Badge size="default" variant="purple">
        New
      </Badge>
    </div>
  );
}
