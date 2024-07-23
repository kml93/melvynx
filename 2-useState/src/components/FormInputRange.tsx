import type { SettingsProps } from "@/app/page";
import type { FormInputProps } from "./FormInput";
import FormInput from "./FormInput";

type FormInputRangeProps = FormInputProps & {
  onSettings: SettingsProps;
  onSetSettings: (value: SettingsProps) => void;
};

export const FormInputRange = ({
  labelName,
  onSettings,
  onSetSettings,
}: FormInputRangeProps) => {
  return (
    <FormInput labelName={labelName}>
      <input
        type="range"
        min={0}
        max="100"
        value={onSettings[labelName as keyof SettingsProps]}
        className="range range-primary range-sm"
        onChange={(e) =>
          onSetSettings({
            ...onSettings,
            [labelName]: Number(e.target.value),
          })
        }
      />
    </FormInput>
  );
};

export default FormInputRange;
