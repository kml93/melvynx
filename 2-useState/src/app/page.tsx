"use client";
import Button from "@/components/Button";
import FormInputFile from "@/components/FormInputFile";
import FormInputRange from "@/components/FormInputRange";
import ImageGenerator from "@/components/ImageGenerator";
import { renderPNG } from "@/utils/render-png";
import { useState } from "react";

export type ImageUploadedProps = {
  src: string;
  width: number;
  height: number;
  name: string;
} | null;

export type SettingsProps = {
  padding: number;
  shadow: number;
  radius: number;
};

const Page = () => {
  const [imageUploaded, setImageUploaded] = useState<ImageUploadedProps>(null);
  const [settings, setSettings] = useState<SettingsProps>({
    padding: 16,
    shadow: 10,
    radius: 16,
  });
  console.log("imageUploaded:", imageUploaded);

  return (
    <main className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-center gap-8">
      <div className="card w-full bg-neutral text-neutral-content shadow-xl">
        <div className="card-body gap-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <form className="card gap-4">
            <FormInputFile
              labelName="file"
              setImageUploaded={setImageUploaded}
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
        <ImageGenerator imageUploaded={imageUploaded} settings={settings} />
        <div className="flex items-center gap-2">
          <Button
            title="Download"
            isActive={!!imageUploaded}
            onClick={async () => {
              const { blob } = await renderPNG?.({
                image: imageUploaded,
                settings,
              });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = imageUploaded?.name ?? "image.png";
              a.click();
            }}
          ></Button>
          <Button
            title="Copy"
            isActive={!!imageUploaded}
            onClick={() => {}}
          ></Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
