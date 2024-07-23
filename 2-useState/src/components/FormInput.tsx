export type FormInputProps = {
  labelName: string;
  children?: React.ReactNode;
};

export const FormInput = ({ labelName, children }: FormInputProps) => {
  return (
    <label className="form-control w-full space-y-2">
      <span className="font-light capitalize">{labelName}</span>
      {children}
    </label>
  );
};

export default FormInput;
