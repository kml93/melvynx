import { cn } from "@/lib/utils";

export type ButtonGroupProps = {
  className?: string;
  children: React.ReactNode;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, children } = props;
  return (
    <div className={cn("flex items-center gap-4", className)}>{children}</div>
  );
};

export default ButtonGroup;
