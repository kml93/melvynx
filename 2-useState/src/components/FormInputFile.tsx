import { ImageDownloadedProps } from "@/app/page";
import type { FormInputProps } from "./FormInput";
import FormInput from "./FormInput";

type FormInputFileProps = FormInputProps & {
  setImageDownloaded: (value: ImageDownloadedProps) => void;
};

export const FormInputFile = ({
  labelName,
  // imageDownloaded,
  setImageDownloaded,
}: FormInputFileProps) => {
  return (
    <FormInput labelName={labelName}>
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered file-input-primary file-input-sm w-full"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            const file = e.target.files[0];
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
              const image = {
                src: img.src,
                width: img.width,
                height: img.height,
                downloaded: true,
              };
              setImageDownloaded(image);
            };
          } else {
            return setImageDownloaded({
              downloaded: false,
            });
          }
        }}
      />
    </FormInput>
  );
};

export default FormInputFile;
