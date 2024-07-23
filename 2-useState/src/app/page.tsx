"use client";
import Button from "@/components/Button";
import FormInputFile from "@/components/FormInputFile";
import FormInputRange from "@/components/FormInputRange";
import ImageGenerator from "@/components/ImageGenerator";
import { renderPNG } from "@/utils/render-png";
import { useState } from "react";

export type ImageDownloadedProps =
  | {
      src: string;
      width: number;
      height: number;
      downloaded: true;
    }
  | {
      downloaded: false;
    };

export type SettingsProps = {
  padding: number;
  shadow: number;
  radius: number;
};

const Page = () => {
  const [imageDownloaded, setImageDownloaded] = useState<ImageDownloadedProps>({
    downloaded: false,
  });
  const [settings, setSettings] = useState<SettingsProps>({
    padding: 16,
    shadow: 10,
    radius: 16,
  });

  console.log("imageDownloaded:", imageDownloaded);

  return (
    <main className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-center gap-8">
      <div className="card w-full bg-neutral text-neutral-content shadow-xl">
        <div className="card-body gap-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <form className="card gap-4">
            <FormInputFile
              labelName="file"
              setImageDownloaded={setImageDownloaded}
            />
            <FormInputRange
              labelName="padding"
              onSettings={settings}
              onSetSettings={setSettings}
            />
            <FormInputRange
              labelName="shadow"
              onSettings={settings}
              onSetSettings={setSettings}
            />
            <FormInputRange
              labelName="radius"
              onSettings={settings}
              onSetSettings={setSettings}
            />
          </form>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center gap-4">
        <ImageGenerator imageDownloaded={imageDownloaded} settings={settings} />
        <div className="flex items-center gap-2">
          <Button
            title="Download"
            isActive={imageDownloaded.downloaded}
            onClick={async () => {
              const { blob } = await renderPNG({
                image: imageDownloaded,
                settings,
              });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = "image.png";
              a.click();
            }}
          ></Button>
          <Button
            title="Copy"
            isActive={imageDownloaded.downloaded}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
