import type { FormInputProps } from "./FormInput";
import FormInput from "./FormInput";

type FormInputFileProps = FormInputProps & {
  imageDownloaded: string;
  setImageDownloaded: (value: string) => void;
};

export const FormInputFile = ({
  labelName,
  imageDownloaded,
  setImageDownloaded,
}: FormInputFileProps) => {
  return (
    <FormInput labelName={labelName}>
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered file-input-primary file-input-sm w-full"
        value={imageDownloaded}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            console.log("Taille de l'image:", file.size);
            console.log("Source de l'image:", URL.createObjectURL(file));
            const img = new Image();
            img.onload = () => {
              console.log("Largeur de l'image:", img.width);
              console.log("Hauteur de l'image:", img.height);
            };
            img.src = URL.createObjectURL(file);
          }

          setImageDownloaded(e.target.value);
        }}
      />
    </FormInput>
  );
};

export default FormInputFile;
