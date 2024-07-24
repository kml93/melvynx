"use client";

import { ImageUploadedProps } from "@/app/page";
import type { FormInputProps } from "./FormInput";
import FormInput from "./FormInput";

type FormInputFileProps = FormInputProps & {
  setImageUploaded: (value: ImageUploadedProps) => void;
};

export const FormInputFile = ({
  labelName,
  setImageUploaded,
}: FormInputFileProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0]) {
      // const file = e.target.files[0];
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   const dataURL = e.target?.result as string;
      //   const img = new Image();
      //   img.onload = () => {
      //     return setImageUploaded({
      //       src: img.src,
      //       width: Number(img.width),
      //       height: Number(img.height),
      //       name: file.name,
      //     });
      //   };
      //   img.src = dataURL;
      // };
      // reader.readAsDataURL(file);

      const file = e.target.files[0];
      const img = new Image();
      const objectURL = URL.createObjectURL(file);
      img.onload = () => {
        return setImageUploaded({
          src: img.src as string,
          width: img.width,
          height: img.height,
          name: file.name,
        });
      };
      img.src = objectURL;
    } else {
      return setImageUploaded(null);
    }
  };

  return (
    <FormInput labelName={labelName}>
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered file-input-primary file-input-sm w-full"
        onChange={(e) => handleFileChange(e)}
      />
    </FormInput>
  );
};

export default FormInputFile;
