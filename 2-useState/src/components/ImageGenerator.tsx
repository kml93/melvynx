import { ImageUploadedProps, SettingsProps } from "@/app/page";

type ImageGeneratorProps = {
  imageUploaded: ImageUploadedProps;
  settings: SettingsProps;
};

export const ImageGenerator = ({
  imageUploaded,
  settings,
}: ImageGeneratorProps) => {
  return (
    <div style={{ display: "flex", padding: `${settings.padding}px` }}>
      {imageUploaded ? (
        <img
          src={imageUploaded.src}
          alt="Image downloaded"
          style={{
            display: "flex",
            boxShadow: `0 0 ${settings.shadow}px rgba(0, 0, 0, ${settings.shadow / 100})`,
            borderRadius: `${settings.radius}px`,
          }}
        />
      ) : (
        <p className="p-4 text-center">Upload an image first.</p>
      )}
    </div>
  );
};

export default ImageGenerator;
