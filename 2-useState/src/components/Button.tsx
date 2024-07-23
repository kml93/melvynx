type ButtonProps = {
  title: string;
  isActive: boolean;
  onClick?: () => void;
};

export const Button = ({ title, isActive, onClick }: ButtonProps) => {
  return (
    <button className="btn btn-primary" disabled={!isActive} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
