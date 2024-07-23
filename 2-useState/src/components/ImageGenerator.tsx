import { ImageDownloadedProps, SettingsProps } from "@/app/page";

type ImageGeneratorProps = {
  imageDownloaded: ImageDownloadedProps;
  settings: SettingsProps;
};

export const ImageGenerator = ({
  imageDownloaded,
  settings,
}: ImageGeneratorProps) => {
  console.log("imageDownloaded.downloaded:", imageDownloaded.downloaded);

  return (
    <div style={{ display: "flex", padding: `${settings.padding}px` }}>
      {imageDownloaded.downloaded ? (
        <img
          src={imageDownloaded.src}
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
