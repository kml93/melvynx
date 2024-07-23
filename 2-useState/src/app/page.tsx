"use client";
import { Button } from "@/components/Button";
import FormInputFile from "@/components/FormInputFile";
import FormInputRange from "@/components/FormInputRange";
import { useState } from "react";

export type SettingsProps = {
  padding: number;
  shadow: number;
  radius: number;
};

const Page = () => {
  const [imageDownloaded, setImageDownloaded] = useState("");
  const [settings, setSettings] = useState<SettingsProps>({
    padding: 16,
    shadow: 10,
    radius: 16,
  });

  return (
    <main className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-center gap-8">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body gap-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <form className="card gap-4">
            <FormInputFile
              labelName="file"
              imageDownloaded={imageDownloaded}
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
        <div className="h-fit w-full rounded-box border border-neutral">
          <p className="p-4 text-center">Upload an image first.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button title="Download" isActive={!!imageDownloaded}></Button>
          <Button title="Copy" isActive={!!imageDownloaded}></Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
